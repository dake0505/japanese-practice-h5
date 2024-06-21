import { useState } from 'react';
import LoginPage from './Login';
import RegisterPage from './Register';

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="flex items-center justify-center min-h-screen bg-white py-6">
      <div className="rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex justify-around mb-6">
          <button
            className={`py-2 px-4 ${activeTab === 'login' ? 'border-b-2 border-blue-600' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button
            className={`py-2 px-4 ${activeTab === 'register' ? 'border-b-2 border-blue-600' : ''}`}
            onClick={() => setActiveTab('register')}
          >
            Register
          </button>
        </div>
        {activeTab === 'login' && <LoginPage />}
        {activeTab === 'register' && <RegisterPage />}
      </div>
    </div>
  );
};

export default AuthPage;
