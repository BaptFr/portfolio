import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import styles from './App.module.scss';

function App() {

  return (
    <div className=' d-flex flex-column background' style={{ position: "relative" }}>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App;
