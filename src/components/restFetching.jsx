import { useEffect, useState } from "react";
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
function DRestFetching(){
    let [user,setUser]=useState([])
    const fetchData = async()=>{
        const response = await axios.get("http://127.0.0.1:8000/api/electronics/")
        setUser(response.data)
    }
    useEffect(()=>{
        fetchData()
    },[])
    return(
        <div className="row" style={{gap:'10px'}}>
            {user.map((x)=>(
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`http://127.0.0.1:8000${x.img}`} />
       
                <Card.Body>
                  <Card.Title>{x.name}</Card.Title>
                  
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>{x.brand}</ListGroup.Item>
                  <ListGroup.Item>{x.price}</ListGroup.Item>
                  
                </ListGroup>
                <Card.Body>
                 
                </Card.Body>
                </Card>
          
            ))}
        </div>
    )
}
export default DRestFetching;