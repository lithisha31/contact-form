import './App.css';
import Nav from './components/Navigation/Nav';
import ContactHeader from "./components/ContactHeader/ContactHeader"
import ContactList from './components/Contact/ContactList';

function App() {
  return (
      <div className='contact_form'>
        <Nav />
        <main className="main_form">
         <ContactHeader />
         <ContactList />
        </main>
       
      </div>   
  );
}

export default App;
