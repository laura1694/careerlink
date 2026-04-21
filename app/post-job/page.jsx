import { auth } from "@/auth";
import PostJobClient from "./PostJobClient";
import { redirect } from "next/navigation";

export default async function postJob (){
    const session = await auth()

    if (!session) {
        redirect("/signin")
    }
    
    return (
        <main>
            <PostJobClient session={session}/>
        </main>
    )
}