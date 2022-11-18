import {Navbar} from 'react-bootstrap'

function Header() {
  return (
    <Navbar bg="primary" variant="dark" className = "header-container">
        <Navbar.Brand className = "header-title-container">
            <h3 style={{marginLeft: "3%"}}>Osaka Talk</h3>
        </Navbar.Brand>
    </Navbar>
  );
}

export default Header;