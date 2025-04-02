export { auth as middleware } from "@/auth";

export const config = {
  unstable_allowDynamic: [
    "/lib/mongodb.ts", // allows a single file
    "**/node_modules/function-bind/**", // use a glob to allow anything in the function-bind 3rd party module
  ],
  matcher: ["/dashboard/:path*)"],
};
