import Link from "next/link";
export default function Login() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-center mb-6">Log In</h1>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input type="email" 
              className="block w-full px-3 py-2 mt-1 border rounded-lg shadow-sm sm:text-sm"
              placeholder="Enter your email" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input type="password" 
              className="block w-full px-3 py-2 mt-1 border rounded-lg shadow-sm sm:text-sm"
              placeholder="Enter your password" />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 rounded-md"
            >
              Sign In
            </button>

            <p className="text-center text-sm text-gray-600">
              Dont have an account?{" "}
              <Link
                href="/SignupPage"
                className="text-indigo-600 hover:underline"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
