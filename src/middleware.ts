export { auth as middleware } from "@src/auth"

// import { auth } from "@src/auth"

// export default auth((req) => {
//     if (!req.auth && req.nextUrl.pathname !== "/signin") {
//       const newUrl = new URL("/signin", req.nextUrl.origin)
//       return Response.redirect(newUrl)
//     }
//   })