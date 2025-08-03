import { Link } from 'react-router-dom';

function PostCard({ post }) {
  return (
    <div className="bg-white p-4 mb-4 rounded shadow">
      <Link to={`/profile/${post.author._id}`} className="font-bold">{post.author.name}</Link>
      <p className="text-gray-600 text-sm">{new Date(post.createdAt).toLocaleString()}</p>
      <p className="mt-2">{post.content}</p>
    </div>
  );
}

export default PostCard;