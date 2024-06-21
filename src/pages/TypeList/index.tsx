import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';

const questionTypes = [{ type: 'N1' }, { type: 'N2' }, { type: 'N3' }, { type: 'N4' }];

const TypeList = () => {
  const navigator = useNavigate();
  const onClickType = () => {
    navigator('/questionList');
  };

  return (
  <>
    <div className="flex justify-center min-h-screen bg-white  p-4">
      <div className="rounded-lg p-6 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-center mb-4">Select Question Type</h1>
        <div className="grid grid-cols-2 gap-4">
          {questionTypes.map((questionType, index) => (
            <div key={index} className="shadow-lg p-4 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer text-center" onClick={onClickType}>
              {questionType.type}
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </>
  );
};

export default TypeList;
