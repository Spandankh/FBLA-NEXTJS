import { NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/db"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const posts = await prisma.post.findUnique({
            where: {
                id: params.id
            },
        });
        return NextResponse.json(posts);
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}