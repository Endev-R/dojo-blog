import Home from './Home';
import Navbar from './navbar';

function App() {
  const title = 'Welcome to the new Ninja blog!';
  const linkSenadia = "https://honkaiimpact3.fandom.com/wiki/Senadina"; 
  let likes = 50;

  return (
    <div className="App">
    <Navbar />  
      <div className='content'>
        <Home/>
        <p>Liked {likes} times</p>
        <p>{[1, 2, 3, 4 ,5]}</p>
        <p>{Math.random()*10}</p>
        <a href={linkSenadia}>Senadia's info</a>
      </div>
    </div>
  );
}

export default App;
