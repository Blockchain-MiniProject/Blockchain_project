import './App.css';
import PostExample from './components/PostExample';
import MiningButton from './components/MiningButton';
import 'bootstrap/dist/css/bootstrap.min.css';          //bootstrap 가져온것



// route

function App() {
  return (
    <div>
      <MiningButton/>
      <PostExample/>
    </div>
  );
}

export default App;
