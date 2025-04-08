import { useEffect, useState } from "react";
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";
function DRestFetching(){
    let [user,setUser]=useState([])
    const fetchData = async()=>{
        const response = await axios.get("http://127.0.0.1:8000/api/electronics/")
        console.log(response.data)
        setUser(response.data)
    }
    useEffect(()=>{
        fetchData()
    },[])
    return(
        <>
        
        <div className="row" style={{gap:'10px'}}>
            {user.map((x)=>(
                <Card style={{ width: '18rem',
                    borderRadius: '20px',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)'
                }}
                >
                <Card.Img variant="top" src={`http://127.0.0.1:8000${x.img}`} />
       
                <Card.Body>
                  <Card.Title className="text-primary" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{x.name}</Card.Title>
                  
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item style={{ backgroundColor: '#e3f2fd', fontSize: '1.1rem' }}>{x.brand}</ListGroup.Item>
                  <ListGroup.Item style={{ backgroundColor: '#e8f5e9', fontSize: '1.1rem' }}>₹{x.price}</ListGroup.Item>
                  
                </ListGroup>
                <Card.Body>
                 
                </Card.Body>
                <Link to={`/more/${x.id}`}><button style={{
                    borderRadius: '25px', 
                    padding: '8px 20px', 
                    fontWeight: '500',
                    backgroundColor: '#F3F0DA',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                    
                }}>✨View More</button></Link>
                </Card>
          
            ))}
        </div>
        </>
    )
}
export default DRestFetching;