import { useEffect, useState } from 'react';
import { FaArrowLeft, FaRegStar, FaStar } from 'react-icons/fa';

import { useLocation, useNavigate } from 'react-router-dom';
import { queryQuestionDetail } from '../../service/question';
import { createRecord, updateFavoriteItem } from '../../service/record';
import { QuestionDetail } from '../../types/question';

const QuestionDetailPage = () => {
  const navigator = useNavigate();
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState<string>();
  const [questionDetail, setQuestionDetail] = useState<QuestionDetail>();
  const [isDone, setIsDone] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  useEffect(() => {
    const questionId = new URLSearchParams(location.search).get('questionId');
    if (!questionId) return;
    queryQuestionDetail(questionId).then((res) => {
      setQuestionDetail(res.data);
    });
  }, [location.search]);
  const handleBack = () => {
    navigator(-1);
  };
  const onSubmit = async () => {
    setIsCorrect(selectedOption === questionDetail?.answerId);
    setIsDone(true);
    await createRecord({
      AnswerId: questionDetail?.answerId,
      QuestionId: questionDetail?.questionId,
      UserAnswerId: selectedOption,
      RecordType: 'practice',
    });
  };
  const onClickNext = () => {
    console.log(questionDetail?.nextQuestionId);
    if (!questionDetail?.nextQuestionId) return;
    queryQuestionDetail(questionDetail?.nextQuestionId).then((res) => {
      setQuestionDetail(res.data);
      setIsDone(false);
      setIsCorrect(false);
    });
  };
  const onClickPre = () => {
    console.log(questionDetail?.preQuestionId);
    if (!questionDetail?.preQuestionId) return;
    queryQuestionDetail(questionDetail?.preQuestionId).then((res) => {
      setQuestionDetail(res.data);
      setIsDone(false);
      setIsCorrect(false);
    });
  };

  const handleResultStyle = (answerId: string): string => {
    const defaultStyle = 'bg-gray-100 border-gray-300 hover:bg-gray-200';
    if (isDone) {
      if (isCorrect) {
        return selectedOption === answerId
          ? 'bg-green-100 border-green-600'
          : defaultStyle;
      } else {
        return selectedOption === answerId
          ? 'bg-red-100 border-red-600'
          : answerId === questionDetail?.answerId
            ? 'bg-green-100 border-green-600'
            : defaultStyle;
      }
    } else {
      return selectedOption === answerId
        ? 'bg-blue-100 border-blue-600'
        : defaultStyle;
    }
  };

  const onClickFavorite = async () => {
    if (!questionDetail?.questionId) return;
    await updateFavoriteItem(questionDetail?.questionId);
    queryQuestionDetail(questionDetail?.questionId).then((res) => {
      setQuestionDetail(res.data);
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex items-center p-4 bg-white w-full fixed top-0 left-0 right-0 z-10 border-b">
        <button
          onClick={handleBack}
          className="mr-2 p-2 text-gray-600 hover:text-gray-800"
        >
          <FaArrowLeft className="text-xl" />
        </button>
        <h1 className="text-2xl font-bold text-center flex-grow">
          Question Detail
        </h1>
        <button className="ml-2 p-2" onClick={onClickFavorite}>
          {questionDetail?.isFavorite ? (
            <FaStar className="text-xl" />
          ) : (
            <FaRegStar className="text-xl" />
          )}
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-4">
          Question {questionDetail?.id}
        </h1>
        <p className="text-lg mb-4">{questionDetail?.questionTitle}</p>
        <form>
          <div className="grid grid-cols-1 gap-4">
            {questionDetail?.answerItems.map((option, index) => (
              <div
                key={index}
                onClick={() => {
                  if (isDone) return;
                  setSelectedOption(option.answerId);
                }}
                className={`p-4 rounded-lg cursor-pointer text-center border-2 ${handleResultStyle(option.answerId)}`}
              >
                {option.answerDesc}
              </div>
            ))}
          </div>
          {isDone ? (
            <div className="flex justify-between mt-6">
              <button
                type="button"
                className={`bg-white text-black border-2 py-2 px-4 mr-4 rounded-full w-full ${!questionDetail?.preQuestionId ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={onClickPre}
                disabled={!questionDetail?.preQuestionId}
              >
                上一题
              </button>
              <button
                type="button"
                className={`bg-black text-white py-2 px-4 ml-4 rounded-full hover:bg-gray-800 w-full ${!questionDetail?.nextQuestionId ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={onClickNext}
                disabled={!questionDetail?.nextQuestionId}
              >
                下一题
              </button>
            </div>
          ) : (
            <div className="flex justify-center mt-6">
              <button
                type="button"
                className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 w-full"
                onClick={onSubmit}
              >
                Submit
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default QuestionDetailPage;
