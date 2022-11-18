import "./Footer.css";
import { Form, Button } from "react-bootstrap";
import { FaPaperPlane } from "react-icons/fa";


function Footer() {
  return (
    <footer>
      <Form.Control placeholder="" className="input-form" />
      <Button variant="primary" type="submit" className="input-button">
        <FaPaperPlane />
      </Button>
    </footer>
  );
}

export default Footer;
