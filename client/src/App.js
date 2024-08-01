import logo from './th.jpg';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Faculty from './Components/Faculty';
import Student from './Components/Student';
import Course from './Components/Course';
import './App.css';
const user={logo: logo}
function App() {
  return (
    <div className="App">
      <Header></Header>
      <img src={user.logo}></img>
      <Faculty></Faculty>
      <Student></Student>
      <Course></Course>
      <Footer></Footer>
    </div>
  );
}

export default App;
