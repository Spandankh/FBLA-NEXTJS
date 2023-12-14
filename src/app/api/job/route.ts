import { NextRequest } from "next/server"
import prisma from "@/lib/db"

export async function GET() {
    try {
        const posts = await prisma.post.findMany();
        return new Response(JSON.stringify(posts));
    } catch (error) {
        return new Response(JSON.stringify({ error: error, status: 500 }));
    }
}

export async function POST(request: NextRequest) {
    try {
        const { jobName, jobLocation, jobDescription, fullTime } = await request.json();

        const newPost = await prisma.post.create({
            data: {
                jobName,
                jobLocation,
                jobDescription,
                fullTime,
            }
        });

        return new Response(JSON.stringify(newPost));
    } catch (error) {
        return new Response(JSON.stringify({ error: error, status: 500 }));
    }
}
