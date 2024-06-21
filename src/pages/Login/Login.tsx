import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigitor = useNavigate()
  const onLogin = () => {
    navigitor("/typeList")
  }
  return (
    <div className="flex justify-center my-auto bg-white p-4">
      <div className=" rounded-lg p-6 max-w-sm w-full">
        <div className="text-center mb-6">
          <p className="text-gray-600">Please enter your email and password to login.</p>
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
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-black text-white py-2 px-4 rounded-full w-full hover:bg-gray-800"
              onClick={onLogin}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
