import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
} from 'firebase/auth';
import { FormEvent, useState } from 'react';
import firebaseApp from '../../utils/firebase';

const RegisterPage = () => {
  // const navigator = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const onRegister = async (e: FormEvent) => {
    e.preventDefault();
    const auth = getAuth(firebaseApp);
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await sendEmailVerification(user);
  };

  return (
    <div className="p-6 my-auto">
      <div className="text-center mb-6">
        <p className="text-gray-600">
          Please enter your details to create an account.
        </p>
      </div>
      <form onSubmit={onRegister}>
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
        <div className="mb-4">
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
        <div className="mb-6">
          <label
            className="block text-gray-700 mb-2"
            htmlFor="confirm-password"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
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
