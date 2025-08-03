import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import { useContext } from 'react';
// import { AuthContext } from '../context/AuthContext.jsx';
import ProfileCard from '../components/ProfileCard.jsx';
import PostCard from '../components/PostCard.jsx';

function Profile() {
  // const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/users/${id}`);
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