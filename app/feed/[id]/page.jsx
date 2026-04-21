import { db } from "@/config/firebase.config";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import React from "react";

const getSinglePost = async (id) => {
  if (!id) return null;

  try {
    const docRef = doc(db, "jobs", id); // CareerLink collection
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id, ...docSnap.data() };
    } else {
      console.log("No such job found!");
      return null;
    }
  } catch (error) {
    console.error("An error occurred", error);
    return null;
  }
};

const Page = async ({ params }) => {
  const sortedParams = await params;
  const singleDoc = await getSinglePost(sortedParams.id);

  if (!singleDoc) {
    return (
      <div className="text-center mt-10 text-xl font-semibold">
        Job Not Found
      </div>
    );
  }

  return (
    <main className="min-h-dvh p-4 flex flex-col gap-7 items-center max-w-2xl mx-auto shadow-sm my-10 rounded-lg border border-gray-200">

      <h1 className="text-3xl text-center font-bold">
        {singleDoc.title}
      </h1>

      <p className="text-sm text-gray-700">
        Posted by {singleDoc.author}
      </p>

      <img
        src={singleDoc.authorImg}
        alt={singleDoc.author}
        className="w-20 h-20 rounded-full object-cover"
      />

      <p>
        <span className="font-semibold">Company:</span>{" "}
        {singleDoc.company}
      </p>

      <p>
        <span className="font-semibold">Location:</span>{" "}
        {singleDoc.location}
      </p>

      <p>
        <span className="font-semibold">Job Type:</span>{" "}
        {singleDoc.jobType}
      </p>

      <p className="font-thin text-lg text-center">
        {singleDoc.description}
      </p>

      <div>
        <p className="text-xs text-gray-700">
          Requirements:
        </p>
        <p className="italic font-thin text-base">
          {singleDoc.requirements}
        </p>
      </div>

      {singleDoc.applyLink && (
        <Link
          href={singleDoc.applyLink}
          target="_blank"
          className="bg-blue-600 text-white px-5 py-2 rounded-md"
        >
          Apply Now
        </Link>
      )}

      <p className="ml-auto text-xs text-gray-700">
        Posted on {singleDoc.timestamp}
      </p>
    </main>
  );
};

export default Page;