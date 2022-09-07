import './App.css';
import DrawerAppBar from './components/DrawerAppBar';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <DrawerAppBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
