import './App.css';
import { seaPlaners } from './data/data';
import Bala from './Components/Bala'
import { Tvenkinys } from './Components/Tvenkinys';
import { Jura } from './Components/Jura'
import { Vandenynas } from './Components/Vandenynas';
import { Pasaulis } from './Components/Pasaulis';

function App() {
  return (
    <div className="App">
        <Bala seaPlaners={seaPlaners} />
        <Tvenkinys seaPlaners={seaPlaners} />
        <Jura seaPlaners={seaPlaners} />
        <Vandenynas seaPlaners={seaPlaners} />
        <Pasaulis seaPlaners={seaPlaners} />
    </div>
  );
}

export default App;
