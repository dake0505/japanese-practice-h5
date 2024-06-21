import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const questions = [
  { id: 1, type: 'Multiple Choice' },
  { id: 2, type: 'True/False' },
  { id: 3, type: 'Short Answer' },
];

const QuestionList = () => {
  const navigator = useNavigate()

  const onClickQuestion = () => {
    navigator("/questionDetail")
  }
  const handleBack = () => {
    navigator("/typeList")
  }

  return (
    <div className="flex justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
        <div className="flex items-center p-4 bg-white w-full fixed top-0 left-0 right-0 z-10 border-b">
          <button onClick={handleBack} className="mr-2 p-2 text-gray-600 hover:text-gray-800">
            <FaArrowLeft className="text-xl" />
          </button>
          <h1 className="text-2xl font-bold text-center flex-grow">Question List</h1>
        </div>
        <ul className="pt-16  overflow-y-auto">
          {questions.map((question) => (
            <li
              key={question.id}
              className="p-4 mb-2 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer flex justify-between items-center"
              onClick={onClickQuestion}
            >
              <span>Question ID: {question.id}</span>
              <span>{question.type}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuestionList;
