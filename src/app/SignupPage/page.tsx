import Link from "next/link";
export default function SignUp() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>
          <form className="space-y-6">
            {/* Fullname */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input type="text" 
              className="block w-full px-3 py-2 mt-1 border rounded-lg shadow-sm sm:text-sm"
              placeholder="Your Name" />
            </div>

            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input type="text"
              className="block w-full px-3 py-2 mt-1 border rounded-lg shadow-sm sm:text-sm"
              placeholder="Your Username" />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input type="email"
              className="block w-full px-3 py-2 mt-1 border rounded-lg shadow-sm sm:text-sm"
              placeholder="your@email.com" />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input type="password" 
              className="block w-full px-3 py-2 mt-1 border rounded-lg shadow-sm sm:text-sm"
              placeholder="••••••" />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <select>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg"
              >Sign Up</button>
            </div>

            {/* Login Link */}
            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="/LoginPage"
                className="text-indigo-600 hover:text-indigo-500 font-medium"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
