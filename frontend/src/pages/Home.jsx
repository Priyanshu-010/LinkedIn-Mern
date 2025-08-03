import { useState, useEffect } from 'react';
import PostCard from '../components/PostCard.jsx';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../context/contexts.js';


function Home() {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`);
        setPosts(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPosts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/posts`,
        { content },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setPosts([res.data, ...posts]);
      setContent('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {user && (
        <div className="mb-6 bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button
            className="mt-3 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 dark:bg-blue-700 dark:hover:bg-blue-800"
            onClick={handleSubmit}
          >
            Create Post
          </button>
        </div>
      )}
      <div>
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Home;