import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProfileCard from '../components/ProfileCard.jsx';
import PostCard from '../components/PostCard.jsx';

function Profile() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/users/${id}`);
      setProfile(res.data);
      setPosts(res.data.posts || []);
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