import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../service/auth';

const LoginPage = () => {
  const navigator = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showAlert, setShowAlert] = useState(false);

  const onLogin = async (e: FormEvent) => {
    e.preventDefault();
    const res = await login({ Email: email, Password: password });
    console.log(res);
    localStorage.setItem('Authorization', res.data.token);
    setShowAlert(true);
    navigator('/typeList');
  };
  return (
    <>
      <div className="flex justify-center my-auto bg-white p-4">
        <div className=" rounded-lg p-6 max-w-sm w-full">
          <div className="text-center mb-6">
            <p className="text-gray-600">Please enter your email and password to login.</p>
          </div>
          <form onSubmit={onLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex justify-center">
              <button type="submit" className="bg-black text-white py-2 px-4 rounded-full w-full hover:bg-gray-800">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      {showAlert && (<div className="alert alert-success flex fixed w-10/12 top-5 left-1/2 transform -translate-x-1/2 transition-opacity duration-1000 opacity-100 animate-fade-out">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Login Success!</span>
        </div>
      )}
    </>
  );
};

export default LoginPage;
