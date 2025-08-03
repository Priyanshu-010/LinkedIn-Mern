import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext, ThemeContext } from '../context/contexts';


function Navbar() {
  const { user, updateUser } = useContext(AuthContext);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    updateUser(null);
    navigate('/login');
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 shadow-lg dark:bg-gray-800 dark:text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white hover:text-yellow-300 transition duration-300 dark:text-gray-200 dark:hover:text-yellow-400">
          Mini LinkedIn
        </Link>
        <div className="flex items-center space-x-6">
          {user ? (
            <>
              <Link
                to={`/profile/${user._id}`}
                className="text-white hover:text-yellow-300 transition duration-300 dark:text-gray-200 dark:hover:text-yellow-400"
              >
                {user.name}
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300 dark:bg-red-600 dark:hover:bg-red-700"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white hover:text-yellow-300 transition duration-300 dark:text-gray-200 dark:hover:text-yellow-400"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-white hover:text-yellow-300 transition duration-300 dark:text-gray-200 dark:hover:text-yellow-400"
              >
                Register
              </Link>
            </>
          )}
          <button
            onClick={toggleTheme}
            className="text-white hover:text-yellow-300 transition duration-300 focus:outline-none dark:text-gray-200 dark:hover:text-yellow-400"
            aria-label="Toggle theme"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;