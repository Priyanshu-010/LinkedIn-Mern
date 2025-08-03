function ProfileCard({ user }) {
  return (
    <div className="bg-white p-4 mb-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 dark:bg-gray-800 dark:text-white">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white">{user.name}</h2>
      <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
      <p className="mt-2 text-gray-700 dark:text-gray-300">{user.bio || 'No bio available'}</p>
    </div>
  );
}

export default ProfileCard;