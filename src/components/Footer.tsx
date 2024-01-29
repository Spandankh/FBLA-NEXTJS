import Link from 'next/link'

export default function Footer() {
	return (
		<div className="max-w-screen sticky top-[100vh] bg-[#1e1e1e] text-white">
			<div className="w-full">
				<div className="mx-auto flex justify-center space-x-4 overflow-hidden py-5 text-sm md:text-lg">
					<div className="flex flex-wrap items-center space-x-4 md:flex-nowrap md:space-y-0">
						<h1>© 2024 Wario, Inc.</h1>
						<Link href="/" className="hover:underline">
							Home
						</Link>
						<Link href="/about" className="hover:underline">
							About
						</Link>
						<Link href="/career" className="hover:underline">
							Careers
						</Link>
						<Link href="/contact" className="hover:underline">
							Contacts
						</Link>
						<Link href="/dashboard" className="">
							DashBoard
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
