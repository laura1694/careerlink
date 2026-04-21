"use client";

import { db } from "@/config/firebase.config";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiTrash } from "react-icons/ci";
import {
  MdKeyboardDoubleArrowRight,
  MdArrowOutward,
} from "react-icons/md";

export default function FeedClient({ session }) {
  const [feed, setFeed] = useState([]);

  const handleFetch = async () => {
    const info = [];

    const querySnapshot = await getDocs(collection(db, "jobs"));

    querySnapshot.forEach((docSnap) => {
      const jobData = {
        id: docSnap.id,
        ...docSnap.data(),
      };

      info.push(jobData);
    });

    setFeed(info);
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "jobs", id));
      handleFetch();
    } catch (error) {
      console.error("Error>>>>>", error);
      alert("An error occured while deleting");
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  if (feed.length == 0) {
    return (
      <div className="flex items-center justify-center h-dvh text-gray-400">
        Be the first to post a job opportunity 🚀
      </div>
    );
  }

  return (
    <main>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {feed.map((item, i) => (
          <div
            key={i}
            className="p-3 shadow-md rounded-md border border-gray-200 space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={item.authorImg}
                  alt={item.author?.slice(0, 1)}
                  className="w-8 h-8 rounded-full"
                />

                <div>
                  <p className="text-sm">{item.author}</p>
                  <p className="text-xs text-gray-500">
                    {item.companyName}
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 text-white p-2 rounded-full hover:scale-110 transition-all duration-200"
              >
                <CiTrash />
              </button>
            </div>

            <div className="space-y-2">
              <h1 className="text-center font-semibold text-xl">
                {item.jobTitle}
              </h1>

              <p className="bg-purple-300 w-fit px-3 py-1 rounded-full text-sm">
                {item.jobType}
              </p>

              <p className="text-sm text-gray-500">
                📍 {item.location}
              </p>

              <p className="text-lg font-light line-clamp-3">
                {item.jobDescription}
              </p>

              <p className="text-lg font-light text-purple-600 italic line-clamp-2">
                {item.requirements}
              </p>

              <a
                href={item.applicationLink}
                target="_blank"
                className="text-blue-600 text-xs underline flex items-center"
              >
                Apply for this job <MdArrowOutward />
              </a>
            </div>

            <div className="border rounded-md border-gray-200 p-2 flex items-center justify-between">
              <p className="text-xs text-gray-500">
                {item.timestamp}
              </p>

              <Link
                className="flex items-center text-sm text-gray-600"
                href={`/feed/${item.id}`}
              >
                Read More <MdKeyboardDoubleArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}