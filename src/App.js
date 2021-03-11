import Home from './views/Home'
import {createContext} from 'react'
import store from './store/index'
import './App.css';

let Context=createContext();//{Provider,Consumer}
function App() {
  return (
    <Context.Provider value={store}>
        <div className="App">
            <Home></Home>
        </div>
    </Context.Provider>
  );
}

export default App;
export {
    Context
}
