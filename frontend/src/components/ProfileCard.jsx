function ProfileCard({ user }) {
  return (
    <div className="bg-white p-4 mb-4 rounded shadow">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
      <p className="mt-2">{user.bio || 'No bio available'}</p>
    </div>
  );
}

export default ProfileCard;