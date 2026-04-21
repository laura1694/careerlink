import { redirect } from "next/navigation";
import FeedClient from "./feed";
import { auth } from "@/auth";

export default async function Feed () {
  const session = await auth()
  if (!session) {
      redirect("/signin")
  }
    return (
        <main className="min-h-dvh">
            <FeedClient session={session}/>
        </main>
    )
}