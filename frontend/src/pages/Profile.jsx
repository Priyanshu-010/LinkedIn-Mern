import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard.jsx';
import PostCard from '../components/PostCard.jsx';
import axiosInstance from '../utils/axios.js';

function Profile() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axiosInstance.get(`/users/${id}`);
        setProfile(res.data);
        setPosts(res.data.posts || []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProfile();
  }, [id]);

  return (
    <div className="container mx-auto p-4">
      {profile && <ProfileCard user={profile} />}
      <div>
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Profile;