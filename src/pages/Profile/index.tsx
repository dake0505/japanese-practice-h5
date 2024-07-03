import { FaBook, FaStar, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';

const ProfilePage = () => {
  const userEmail = 'user@example.com'; // 这是示例数据，您可以从实际的用户数据源获取
  const navigator = useNavigate();

  const logout = () => {
    navigator('/login');
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen  p-4">
        <div className="bg-white rounded-lg p-6 max-w-lg w-full">
          <div className="flex justify-center mb-4">
            <FaUser className="text-4xl text-gray-600" />
          </div>
          <div className="mb-20 text-center">
            <p className="text-lg">{userEmail}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-24">
            <div
              className="p-4 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer text-center border border-gray-300"
              onClick={() => {
                navigator('/favorite');
              }}
            >
              <FaStar className="text-2xl mb-2 mx-auto" />
              Favorite
            </div>
            <div
              className="p-4 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer text-center border border-gray-300"
              onClick={() => {
                navigator('/mistake');
              }}
            >
              <FaBook className="text-2xl mb-2 mx-auto" />
              Mistakes
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-black text-white py-2 px-4 rounded-full w-full hover:bg-gray-800"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
