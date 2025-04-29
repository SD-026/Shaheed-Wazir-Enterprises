import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-white px-4">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
          Welcome to <span className="text-blue-600">Shaheed Wazir Enterprises</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-md mx-auto">
          Your ultimate solution to manage, build, and scale your web applications easily.
        </p>
        <Link
          to="/login"
          className="inline-block mt-4 px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md shadow hover:bg-blue-700 hover:shadow-lg transition transform hover:-translate-y-0.5"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
