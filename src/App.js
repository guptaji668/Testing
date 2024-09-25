import logo from './logo.svg';
import './App.css';
import TodoApp from './component/TodoApp';
import { Provider } from 'react-redux';
import { Store } from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
     <TodoApp/>
     </Provider>
    </div>
  );
}

export default App;
