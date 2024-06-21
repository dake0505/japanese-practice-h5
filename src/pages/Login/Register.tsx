
const RegisterPage = () => {
  return (
    <div className="p-6 my-auto">
      <div className="text-center mb-6">
        <p className="text-gray-600">Please enter your details to create an account.</p>
      </div>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter your password"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Confirm your password"
          />
        </div>
        <div className="flex justify-center">
            <button
              type="submit"
              className="bg-black text-white py-2 px-4 rounded-full w-full hover:bg-gray-800"
            >
            Register
            </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
