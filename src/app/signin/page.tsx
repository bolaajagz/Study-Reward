
// "use client";
import { signIn, signOut } from "@src/auth"
 
export default function SignIn() {
  return (
    <>
    <form
      action={async () => {
        "use server"
        await signIn("google", { redirectTo: "/" })
      }}
    >
      <button type="submit">Signin with Google</button>
    </form>

    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
    </>
  )
} 


// import { signIn } from "next-auth/react"
 
// export default function SignIn() {
//   return (
//     <button onClick={() => signIn("", { redirectTo: "/" })}>
//       Sign In
//     </button>
//   )
// }


// import { signIn } from "next-auth/react";
// import { useRouter } from "next/router";

// export default function SignIn() {
//   const router = useRouter();

//   const handleSignIn = async (event : any) => {
//     event.preventDefault();
//     const result = await signIn("google");

    
//     if (result?.ok) {
//       router.push('/');
//     } else {
//       console.log("Sign in failed");
//     }
//   };

//   return (
//     <form onSubmit={handleSignIn}>
//       <button type="submit">Sign in with Google</button>
//     </form>
//   );
// }
