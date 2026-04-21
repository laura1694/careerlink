import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";
import { MdLogout } from "react-icons/md";
import Update from "./update"; // ✅ make sure path matches

export default async function Profile() {
  const session = await auth();

  if (!session) {
    redirect("/signin");
  }

  return (
    <main className="bg-gray-100 min-h-screen py-10">

      <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">

        {/* Cover */}
        <div className="h-40 bg-gradient-to-r from-blue-600 to-blue-400"></div>

        <div className="px-6 pb-8">

          {/* Profile */}
          <div className="flex flex-col items-center -mt-16">
            <img
              src={session?.user?.image}
              alt={session?.user?.name}
              className="w-32 h-32 rounded-full border-4 border-white shadow-md"
            />

            <h1 className="text-2xl font-semibold mt-4 text-gray-800">
              {session?.user?.name}
            </h1>

            <p className="text-gray-500">
              {session?.user?.email}
            </p>

            {/* Sign out */}
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
              className="mt-4"
            >
              <button
                type="submit"
                className="flex items-center gap-2 bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600 transition"
              >
                <MdLogout /> Sign Out
              </button>
            </form>
          </div>

          <hr className="my-8" />

          {/* ✅ Working Update Component */}
          <Update session={session} />

        </div>
      </section>
    </main>
  );
}