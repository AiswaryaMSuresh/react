import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function ShowMore() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/electronics/${id}/`);
      setData(response.data);
    } catch (error) {
      console.log("There was an error", error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/electronics/delete/${id}/`);
      navigate('/');
    } catch (error) {
      console.log("There was an error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", backgroundColor: "#f0f8ff" }}>
      <Card style={{ width: '25rem', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)' }}>
        <Card.Img 
          variant="top" 
          src={`http://127.0.0.1:8000${data.img}`} 
          style={{ height: "450px", objectFit: "cover" }}
        />
        <Card.Body style={{ backgroundColor: '#f9f9f9' }}>
          <Card.Title className="text-primary">{data.name}</Card.Title>
        </Card.Body>

        <ListGroup className="list-group-flush">
          <ListGroup.Item style={{ backgroundColor: '#e0f7fa', fontWeight: 'bold' }}>{data.brand}</ListGroup.Item>
          <ListGroup.Item style={{ backgroundColor: '#e8f5e9', fontWeight: 'bold' }}>₹ {data.price}</ListGroup.Item>
        </ListGroup>

        <Card.Body className="d-flex justify-content-center" style={{ backgroundColor: '#f9f9f9' }}>
          <Button variant="danger" onClick={handleDelete} style={{ borderRadius: '25px', padding: '8px 20px' }}>
            🗑 Delete Item
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ShowMore;
