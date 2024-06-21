import WelcomePng from '../../assets/welcome.png';

const Home: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen w-full bg-white">
        <div className=" rounded-lg p-6 max-w-sm w-full">
          <div className="flex justify-center mb-6">
            <img src={WelcomePng} alt="Study App" className="w-full h-auto" />
          </div>
          <h1 className="text-2xl font-bold text-center mb-2">The only Japanese study app you'll ever need</h1>
          <p className="text-gray-600 text-center mb-4">For JLPT.</p>
          <div className="flex justify-center">
            <button className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800">Let’s start</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
