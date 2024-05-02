import authOptions from './options';
import NextAuth from 'next-auth';

const handler = NextAuth(authOptions);

export const GET = handler.handlers.GET;
export const POST = handler.handlers.POST;

export const runtime = "edge";