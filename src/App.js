import './App.scss';
import { About, Footer, Header, Photography, Skills, Testimonial, Work } from './pages';
import { Navbar } from './components';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Photography />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
