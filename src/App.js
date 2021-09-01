import './sass/main.scss';
import Header from './components/header/Header';
import Article from './components/article/Article';
import Footer from './components/footer/Footer';
import {caesar, augustus, antonius} from './utils/text';
import augustusimg from './img/Augustus.jpg';
import caesarimg from './img/caesar.jpg';
import antoniusimg from './img/Marcus_Antonius.jpg';


function App() {
  return (
    <div className="wrapper">
      
        <Header />
        <Article title='Julius Caesar' img={caesarimg} bodytext={caesar}/>
        <Article title='Augustus' img={augustusimg} bodytext={augustus}/>
        <Article title='Mark Antony' img={antoniusimg} bodytext={antonius}/>
    </div>
  );
}

export default App;
