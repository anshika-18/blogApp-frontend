import React,{useEffect,useState} from "react"
import "./css/blogs.css"
import Card from "react-bootstrap/Card"
import axios from 'axios'
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
//import Col from "react-bootstrap/Col"
import relativeTime from "dayjs/plugin/relativeTime"
import dayjs from 'dayjs'
import Row from "react-bootstrap/Row"
import CardColumns from "react-bootstrap/CardColumns"
function Blogs(){
    const[blogs,setBlogs]=useState([]);
    useEffect(()=>{
        const dataFetch=async()=>{
            try{
                const headers={
                    "Access-Control-Allow-Origin":"*"
                }
                const res=await axios.get("https://blogapp-anshika.herokuapp.com/api/blogs",headers)
            console.log(res.data);
            if(res.data)
            {
                setBlogs(res.data)
            }
            }
            catch(error){
                console.log(error)
            }
            
        }
        dataFetch();
    },[])
    dayjs.extend(relativeTime);

    return(
        <> 
        <Container>
        <Row >

        {blogs ? (
            <div className="mapping">  
                {blogs.map((blog) => (
                    <>
                    <Card className="text-center Card">
                        <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            <Card.Title>{blog.title}</Card.Title>
                            <Card.Text>
                                <b>{blog.author}</b><br></br>
                                {blog.desc}
                            </Card.Text>
                            <Button variant="primary">Explore more</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">Last updated {dayjs(`${blog.updatedAt}`).fromNow()}</Card.Footer>
                    </Card>
                    
                    </>
                ))

                }
            </div>
        ) : (
            <></>
        )
        }
        </Row>
    </Container>    
    </>
        
    )
}
export default Blogs;