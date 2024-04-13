import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { queryQuestionById } from '../../../service/n2';
import { IOption } from '../../../types/vocabulary';

const N2Detail = () => {
  const [options, setOptions] = useState<IOption[]>();
  const [title, setTitle] = useState<string>('');
  const location = useLocation();
  useEffect(() => {
    setTitle(location.state.title);
    queryQuestionById(location.state.id).then((res) => {
      setOptions(res.data);
      console.log(res.data);
    });
  }, [location.state]);
  return (
    <>
      <h2 className="mb-4 text-base font-semibold leading-7 text-gray-900" dangerouslySetInnerHTML={{ __html: title}}></h2>
      {options?.map((item) => (
        <p
          key={item.Id}
          className="relative items-center px-4 py-2 text-sm font-semibold mb-1 text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
        >
          {item.OptionTitle}
        </p>
      ))}
      <p className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 mb-1 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        1
      </p>
    </>
  );
};

export default N2Detail;
