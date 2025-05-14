"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function DashboardContent() {
  const [volunteers, setVolunteers] = useState([]);
  const [newsletter, setNewsletter] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const vRes = await fetch("/api/signup");
      const nRes = await fetch("/api/newsletter");
      const pRes = await fetch("/api/posts");

      if (vRes.ok) setVolunteers(await vRes.json());
      if (nRes.ok) setNewsletter(await nRes.json());
      if (pRes.ok) setPosts(await pRes.json());
    };

    fetchData();
  }, []);

  const downloadCSV = (data: any[], filename: string) => {
    const headers = Object.keys(data[0] || {}).join(",");
    const rows = data.map(row =>
      Object.values(row).map(value => `"${String(value).replace(/"/g, '""')}"`).join(",")
    );
    const csvContent = [headers, ...rows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Volunteers */}
      <section className="mb-10">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold">Volunteer Signups</h2>
          <button
            onClick={() => downloadCSV(volunteers, "volunteers.csv")}
            className="text-sm px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Download CSV
          </button>
        </div>
        <pre className="bg-gray-100 p-4 rounded max-h-64 overflow-auto text-sm">{JSON.stringify(volunteers, null, 2)}</pre>
      </section>

      {/* Newsletter */}
      <section className="mb-10">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold">Newsletter Signups</h2>
          <button
            onClick={() => downloadCSV(newsletter, "newsletter.csv")}
            className="text-sm px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Download CSV
          </button>
        </div>
        <pre className="bg-gray-100 p-4 rounded max-h-64 overflow-auto text-sm">{JSON.stringify(newsletter, null, 2)}</pre>
      </section>

      {/* Blog Posts */}
      <section className="mb-10">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold">Blog Posts</h2>
          <Link
            href="/news/new"
            className="text-sm px-4 py-2 bg-indigo-950 text-white rounded hover:bg-indigo-800"
          >
            New Post
          </Link>
        </div>
        <ul className="space-y-3">
          {posts.map((post: any) => (
            <li key={post.id} className="p-4 bg-white shadow rounded flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold">{post.title}</h3>
                <p className="text-sm text-gray-600">{post.slug}</p>
              </div>
              <Link
                href={`/news/${post.slug}`}
                className="text-indigo-600 hover:underline text-sm"
              >
                Edit
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
