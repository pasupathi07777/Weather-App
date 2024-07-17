
import './App.css';
import Header from './components/Header';
import Context from './datas/Context';

function App() {
  return (
    <div className="App bg-[#35A0A3] flex justify-center items-center h-[100vh] w-[100vw] px-[24px] ">
      <Context>
        <Header />
      </Context>

    </div>
  );
}

export default App;
