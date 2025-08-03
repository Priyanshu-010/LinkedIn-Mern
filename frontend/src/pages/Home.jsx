import { useState, useEffect } from 'react';
import PostCard from '../components/PostCard.jsx';
import axios from 'axios';

function Home({ user }) {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`);
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/posts`,
        { content },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
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
        <div className="mb-4">
          <textarea
            className="w-full p-2 border rounded"
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button
            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            Post
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