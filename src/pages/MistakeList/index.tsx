import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { queryMistakeList } from '../../service/record';
import { RecordType } from '../../types/record';

const MistakeList: React.FC = () => {
  const navigator = useNavigate();
  const [mistakeList, setMistakeList] = useState<RecordType[]>()

  useEffect(() => {
    queryMistakeList().then(res => {
      setMistakeList(res.data)
    })
  }, [])

  const handleBack = () => {
    navigator(-1);
  };

  const handleItemClick = (questionId: string) => {
    navigator(`/questionDetail?questionId=${questionId}`)
  };

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full relative">
        <div className="flex items-center p-4 bg-white w-full fixed top-0 left-0 right-0 z-10 border-b">
          <button onClick={handleBack} className="mr-2 p-2 text-gray-600 hover:text-gray-800">
            <FaArrowLeft className="text-xl" />
          </button>
          <h1 className="text-2xl font-bold text-center flex-grow">Mistake Questions</h1>
        </div>
        <div className="pt-20 min-h-screen overflow-y-auto px-4">
          <ul>
            {mistakeList?.map((item, index) => (
              <li
                key={item.id}
                onClick={() => handleItemClick(item.questionId)}
                className="p-4 mb-2 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer flex justify-between items-center"
              >
                <span>{`Question ${index+1}`}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MistakeList;
