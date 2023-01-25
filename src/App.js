 
import './App.css';
import Left from './LeftComponents/Left';
import Main from './MainContainer/Main';
 import Right from './RighContainer/Right';

function App() {
  return (
    <div className="App">
       <Left/>
       <Main/>
       <Right/>


       <div className='background' ></div>

    </div>
  );
}

export default App;
