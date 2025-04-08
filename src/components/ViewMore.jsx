import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';

function ViewMore(){
    const {id}=useParams()
    const navigate = useNavigate()
    const [data,setData]=useState({})
    const fetchData = async()=>{
        try{
            const response = await axios.get(`http://127.0.0.1:8000/api/electronics/${id}/`)
            setData(response.data)
        }catch(error){
            console.log("There was an error",error)
        }
    }
    const handleDelete = async()=>{
        try{
            const response = await axios.delete(`http://127.0.0.1:8000/api/electronics/delete/${id}/`)
            navigate('/')
        }catch(error){
            console.log("There was an error",error)
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
    
    return(
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`http://127.0.0.1:8000${data.img}`} />
       
                <Card.Body>
                  <Card.Title>{data.name}</Card.Title>
                  
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>{data.brand}</ListGroup.Item>
                  <ListGroup.Item>{data.price}</ListGroup.Item>
                  <button onClick={handleDelete}>Delete</button>
                </ListGroup>
                <Card.Body>
                 
                </Card.Body>
                
                </Card>
        </div>
    )
}
export default ViewMore;