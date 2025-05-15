import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex justify-between">
          <Link href="/" className="text-white font-semibold text-xl">
            Simple Blog
          </Link>
          <div>
            <Link
              href="/CreateBlog"
              className="text-gray-300 hover:text-white mx-4"
            >
              Create Post
            </Link>
            <Link href="/" className="text-gray-300 hover:text-white mx-4">
              All Posts
            </Link>
            <Link
              href="/LoginPage"
              className="text-gray-300 hover:text-white mx-4"
            >
              Login
            </Link>
            <Link
              href="/SignupPage"
              className="text-gray-300 hover:text-white mx-4"
            >
              Signup
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
