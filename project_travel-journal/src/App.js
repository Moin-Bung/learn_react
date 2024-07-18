import './App.css';
import Headerbar from './components/Headerbar';
import Travelbar from './components/Travelbar';
import data from './data.js';

function App() {

  const travelbars = data.map(item => {
    return <Travelbar {...item} />
  })

  return (
    <div className="App">
      <Headerbar/>
      <div className="travelsection">
        {travelbars}
      </div>
    </div>
  );
}

export default App;
