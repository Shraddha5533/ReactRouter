import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();
  const user = { id: 1, name: 'Shraddha Patil' };

  function gotoProfile() {
    navigate("/profile", { state: { user: user } });
  }

  return (
    <div className="home-container">
      <h1>Home Page</h1>
      <button onClick={gotoProfile}>Go to Profile</button>
      <button onClick={() => navigate('/services')}>View Services</button>
    </div>
  );
}

export default Home;
