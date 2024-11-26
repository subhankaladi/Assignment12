
"use client"
import { signIn } from "next-auth/react";


export default function SignInPage (){
    return (

        <div>
            <h1 className="ml-20">Sign in</h1>
        <button onClick={() => signIn('github')}>Sign In with Github</button>
        </div>
    );
}
