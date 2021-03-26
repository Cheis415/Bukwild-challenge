import Logo from './Logo';
import "../index.css"
import Contact from './Contact';
import Nav from './Nav';


function Header({ jsonData }) {
 
  return (
    
    <header className="header">
      <div className="logo-container"> 
        <Logo /> 
        <Nav jsonData={jsonData} /> 
      </div> 
      <Contact />
    </header>
  );
}

export default Header;