import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import { queryQuestionType } from '../../service/question';
import { QuestionType } from '../../types/question';

const TypeList = () => {
  const [typeList, setTypeList] = useState<QuestionType[]>([])
  const navigator = useNavigate();
  useEffect(() => {
    queryQuestionType().then(res => {
      console.log(res)
      setTypeList(res.data)
    })
  }, [])
  const onClickType = () => {
    navigator('/questionList');
  };

  return (
  <>
    <div className="flex justify-center min-h-screen bg-white  p-4">
      <div className="rounded-lg p-6 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-center mb-4">Select Question Type</h1>
        <div className="grid grid-cols-2 gap-4">
          {typeList.map((questionType, index) => (
            <div key={index} className="shadow-lg p-4 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer text-center" onClick={onClickType}>
              {questionType.typeName}
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
