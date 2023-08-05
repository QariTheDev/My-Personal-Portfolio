import './App.scss';
import { About, Footer, Header, Photography, Skills, Testimonial, Work } from './pages';
import { Navbar } from './components';

function App() {
  return (
    <div className='app'>
      {console.log( document.querySelector('body').getAttribute("data-theme"))}
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
