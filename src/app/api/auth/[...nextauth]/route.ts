import NextAuth, { Awaitable, NextAuthOptions, RequestInternal, User } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '@/lib/db'
import CredentialsProvider from 'next-auth/providers/credentials'
import { z } from 'zod'

const loginUserSchema = z.object({
	username: z.string().regex(/^[a-z0-9_-]{3,15}$/g, 'Invalid username'),
	password: z.string().min(5, 'Password should be minimum 5 characters')
})

const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),

	providers: [
		CredentialsProvider({
			name: 'Sign in',
			credentials: {
				username: {
					label: 'Username',
					type: 'text',
					placeholder: 'username'
				},
				password: {
					label: 'Password',
					type: 'password'
				}
			},
			async authorize(credentials) {
				if (!credentials?.username || !credentials.password) {
					return null
				}
				const user = await prisma.user.findUnique({
					where: {
						username: credentials.username
					}
				})

				if (!user) return null

				if (credentials.password != user.password) return null

				return user
			}
		})
	],
	secret: process.env.SECRET,
	callbacks: {
		session: ({ session, token }) => {
			console.log('Session Callback', { session, token })
			return {
				...session,
				user: {
					...session.user,
					id: token.id
				}
			}
		},
		jwt: ({ token, user }) => {
			console.log('JWT Callback', { token, user })
			if (user) {
				const u = user as unknown as any
				return {
					...token,
					id: u.id
				}
			}
			return token
		}
	}
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
