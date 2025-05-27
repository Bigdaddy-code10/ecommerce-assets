import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Add your routes here
    "/((?!_next|static|favicon.ico).*)",
  ],
};
