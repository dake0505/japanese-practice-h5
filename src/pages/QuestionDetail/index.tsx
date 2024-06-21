import { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { queryQuestionDetail } from '../../service/question';
import { QuestionDetail } from '../../types/question';

const questions = [
  {
    id: 1,
    title: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid']
  },
  {
    id: 2,
    title: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Venus']
  },
  {
    id: 3,
    title: 'What is the largest ocean on Earth?',
    options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean']
  },
  // 添加更多题目数据
];

const QuestionDetailPage = () => {
  const navigator = useNavigate()
  const question = questions.find(q => q.id === 1);
  const [selectedOption, setSelectedOption] = useState<string>();
  const [questionDetail, setQuestionDetail] = useState<QuestionDetail>();

  useEffect(() => {
    queryQuestionDetail(2).then(res => {
      setQuestionDetail(res.data)
    })
  }, [])
  const handleBack = () => {
    navigator("/questionList")
  }
  const onSubmit = () => {

  }

  if (!question) {
    return <div>Question not found</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex items-center p-4 bg-white w-full fixed top-0 left-0 right-0 z-10 border-b">
          <button onClick={handleBack} className="mr-2 p-2 text-gray-600 hover:text-gray-800">
            <FaArrowLeft className="text-xl" />
          </button>
          <h1 className="text-2xl font-bold text-center flex-grow">Question Detail</h1>
        </div>
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-4">Question {questionDetail?.id}</h1>
        <p className="text-lg mb-4">{questionDetail?.questionTitle}</p>
        <form>
          <div className="grid grid-cols-1 gap-4">
            {questionDetail?.answerItems.map((option, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedOption(option.answerId)
                }}
                className={`p-4 rounded-lg cursor-pointer text-center border-2 ${
                  selectedOption === option.answerId
                    ? 'bg-blue-100 border-blue-600'
                    : 'bg-gray-100 border-gray-300 hover:bg-gray-200'
                }`}
              >
                {option.answerDesc}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="button"
              className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 w-full"
              onClick={onSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuestionDetailPage;
