import { FaList, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigator = useNavigate();
  const navigateTo = (path: string) => {
    navigator(path);
  };
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 p-4 flex justify-around">
      <button onClick={() => navigateTo('/typeList')} className="flex flex-col items-center text-gray-600 hover:text-gray-800">
        <FaList className="text-xl" />
      </button>
      <button onClick={() => navigateTo('/profile')} className="flex flex-col items-center text-gray-600 hover:text-gray-800">
        <FaUser className="text-xl" />
      </button>
    </div>
  );
};

export default Footer;
