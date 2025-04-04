import { useEffect, useState } from "react";
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
function DummyFetching(){
    let [user,setUser]=useState([])
    const fetchData = async()=>{
        const response = await axios.get("https://dummyjson.com/users")
        setUser(response.data.users)
    }
    useEffect(()=>{
        fetchData()
    },[])
    return(
        <div className="row" style={{gap:'10px'}}>
            {user.map((x)=>(
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{x.firstName}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{x.lastName}</Card.Subtitle>
                  <Card.Text>{x.age}</Card.Text>
                  <Card.Text>{x.gender}</Card.Text>
                  <Card.Text>{x.email}</Card.Text>
                  <Card.Text>{x.phone}</Card.Text>
                </Card.Body>
              </Card>
          
            ))}
        </div>
    )
}
export default DummyFetching;