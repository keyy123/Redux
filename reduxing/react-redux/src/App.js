import "./output.css"
import "./App.css"
import Cake from './components/Cake'
import store  from './redux/store.js'
import { Provider } from 'react-redux';

function App() {
  return (
   <Provider store={store}>
    <div className="bg-red-600">
      <Cake/>
    </div>
    </Provider>
  );
}


export default App;
