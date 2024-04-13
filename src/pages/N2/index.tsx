import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { queryQuestionList } from '../../service/n2';
import { IQuestion } from '../../types/vocabulary';

const N2Index = () => {
  const [questionList, setQuestionList] = useState<IQuestion[]>([]);
  const navigation = useNavigate()
  useEffect(() => {
    queryQuestionList().then((res) => {
      console.log(res);
      setQuestionList(res.data);
    });
  }, []);
  const navN2Detail = (id: number) => {
    console.log(id)
    navigation('/n2/detail')
  };
  return (
    <>
      {' '}
      <ul role="list" className="divide-y divide-gray-100">
        {questionList.map((question) => (
          <li key={question.Id} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p
                  className="text-sm font-semibold leading-6 text-gray-900"
                  dangerouslySetInnerHTML={{
                    __html: question.QuestionTitle,
                  }}
                  onClick={() => navN2Detail(question.Id)}
                ></p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default N2Index;
