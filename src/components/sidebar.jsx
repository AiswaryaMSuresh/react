import { useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="m-3">
        ☰ Open Sidebar
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sidebar Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="list-unstyled">
            <li><a href="/" className="text-decoration-none">🏠 Home</a></li>
            <li><a href="/about" className="text-decoration-none">ℹ️ About</a></li>
            <li><a href="/services" className="text-decoration-none">💼 Services</a></li>
            <li><a href="/contact" className="text-decoration-none">📞 Contact</a></li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
