export default function Home() {
  return (
    <>
      <div className="max-w-3xl mx-auto py-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Latest Blog Posts
        </h2>

        {/* <!-- Example Blog Post --> */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-4">
          <h3 className="text-xl font-semibold">Blog Post Title 1</h3>
          <p className="text-gray-700 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <div className="flex justify-between mt-4">
            <a href="/edit/1" className="text-blue-500">
              Edit
            </a>
            <form action="/delete/1" method="POST" className="inline">
              <button type="submit" className="text-red-500">
                Delete
              </button>
            </form>
          </div>
        </div>

        {/* <!-- Repeat for more posts --> */}
      </div>
    </>
  );
}
