import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

// This function can be marked `async` if using `await` inside
export async function middleware(req) {
    if (req.nextUrl.pathname === "/dashboard") {
        const session = await getToken({
            req,
            secret: process.env.JWT_SECRET,
            secureCookie: process.env.NODE_ENV === "production"
        })
        // Check Whether the user is authenticated then continue!
        if (!session) return NextResponse.redirect(new URL('/', req.url));
        
    }
}

// // See "Matching Paths" below to learn more
// export const config = {
//     matcher: '/about/:path*',
// }