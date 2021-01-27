import React,{useEffect,useState} from "react"
import "./css/blogs.css"
import Card from "react-bootstrap/Card"
import axios from 'axios'
//import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
//import Col from "react-bootstrap/Col"
import relativeTime from "dayjs/plugin/relativeTime"
import dayjs from 'dayjs'
import Row from "react-bootstrap/Row"
import config from '../config.json'
function Blogs(props){
    const[blogs,setBlogs]=useState();
    useEffect(()=>{
        const dataFetch=async()=>{
            try{
                
                const res=await axios.get(`${config.BASE}/blogs`)
            console.log(res.data);
            if(res.data)
            {
                setBlogs(res.data.slice(0,props.count))   
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
                        <Card.Header>{blog.title}</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <b>By: {blog.author}</b><br></br>
                                {blog.desc.substring(0,250)+"..."}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">Last updated {dayjs(`${blog.updatedAt}`).fromNow()}</Card.Footer>
                    </Card>
                    </>
                ))

                }
            </div>
        ) : (
            <><div className="container loader">
                    <span>L</span>
                    <span>O</span>
                    <span>A</span>
                    <span>D</span>
                    <span>I</span>
                    <span>N</span>
                    <span>G</span>
                 </div></>
        )
        }
        </Row>
    </Container>    
    </>
        
    )
}
export default Blogs;