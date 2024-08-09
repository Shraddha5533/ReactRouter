import { useLocation } from 'react-router-dom';


function Profile() {
  const location = useLocation();
  const { user } = location.state || {};

  return (
    <div className="profile-container">
      <h1>Profile Page</h1>
      {user ? (
        <p>Welcome, {user.name} (ID: {user.id})</p>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
}

export default Profile;
