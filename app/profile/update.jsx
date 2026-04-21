"use client";

import { useState } from "react";
import { FaRegPaperPlane } from "react-icons/fa";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/config/firebase.config";

export default function Update({ session }) {
  const name = session?.user?.name;
  const uid = session?.user?.id;

  const [currentName, setCurrentName] = useState(name || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    if (!uid) {
      alert("User not found");
      return;
    }

    if (!currentName.trim()) {
      alert("Name cannot be empty");
      return;
    }

    try {
      setLoading(true);

      const docRef = doc(db, "users", uid);

      await updateDoc(docRef, {
        name: currentName,
      });

      alert("Profile updated successfully ✅");
    } catch (error) {
      console.error("Error:", error);
      alert("Oops, something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto text-center">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Update Profile
      </h2>

      <input
        value={currentName}
        onChange={(e) => setCurrentName(e.target.value)}
        type="text"
        placeholder="Enter a new name..."
        className="w-full border border-gray-300 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 mb-4"
      />

      <button
        onClick={handleUpdate}
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition disabled:opacity-50"
      >
        {loading ? "Updating..." : "Update"}
        <FaRegPaperPlane />
      </button>
    </div>
  );
}