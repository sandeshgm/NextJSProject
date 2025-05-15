import { connectDB } from "@/lib/db";
import { Post } from "@/models/Post";
import { redirect } from "next/navigation";

export default function CreateBlog() {
  const createPost = async (formData: FormData) => {
    "use server";
    await connectDB();
    const title = formData.get("title");
    const content = formData.get("content");
    const post = new Post({ title, content });
    await post.save();
    redirect("/");
  };
  return (
    <>
      <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md mt-12">
        <h2 className="text-2xl font-semibold mb-6">Create New Blog Post</h2>
        <form action={createPost} method="POST">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="border border-gray-300 p-3 w-full mb-4 rounded-md"
          />
          <textarea
            name="content"
            rows={6}
            placeholder="Write your blog content here..."
            className="border border-gray-300 p-3 w-full rounded-md"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md mt-4"
          >
            Create Post
          </button>
        </form>
        <a href="/posts" className="text-blue-500 block mt-4 text-center">
          View all posts
        </a>
      </div>
    </>
  );
}
