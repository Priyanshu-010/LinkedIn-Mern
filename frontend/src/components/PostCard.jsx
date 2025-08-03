import { Link } from 'react-router-dom';

function PostCard({ post }) {
  return (
    <div className="bg-white p-4 mb-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 dark:bg-gray-800 dark:text-white">
      <Link to={`/profile/${post.author._id}`} className="font-bold text-blue-600 hover:underline dark:text-blue-400">
        {post.author.name}
      </Link>
      <p className="text-gray-600 text-sm dark:text-gray-400">{new Date(post.createdAt).toLocaleString()}</p>
      <p className="mt-2">{post.content}</p>
    </div>
  );
}

export default PostCard;