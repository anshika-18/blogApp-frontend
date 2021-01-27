import React,{useState} from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import axios from "axios"
import "./css/blogs.css"
import config from '../config.json'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
function CreateBlog (){

    const [blogPost,setBlog]=useState({
        title:"",
        author:"",
        desc:""
    });

    const handleChange=(e)=>{
        //console.log(e)
        setBlog({
            ...blogPost,
            [e.target.name]: e.target.value
        })
    }

    const postBlog=async()=>{
        try
        {
            const res=await axios.post(`${config.BASE}/create`,blogPost)
            console.log(res.data)
            setBlog(res.data)
            window.alert("Blog created")
            window.location.reload(false)
        }
        catch(err)
        {
            console.log(err);
        }
    }

    const onSubmit=(e)=>{
        if(blogPost.title.trim()==="")
        {
            window.alert("title field is empty. Please enter the title of your blog");
        }
        else if(blogPost.author.trim()==="")
        {
            window.alert("author field is empty. Please enter the author name");
        }
        else if(blogPost.desc.trim()==="")
        {
            window.alert("description field is empty. Please enter the description of your blog")
        }
        else
        {
            postBlog();
        }
    }

    //console.log(blogPost)
    return(
        <div >
        <Modal.Dialog >
            <Modal.Header>
                <Modal.Title className="label">Create a Blog</Modal.Title>
            </Modal.Header>
            
            <Form className="form-background"> 
            <Form.Group controlId="">
                <Form.Label className="label">Title</Form.Label>
                    <Form.Control type="text" name="title" value={blogPost.title} onChange={handleChange} placeholder="Title of blog" />
                </Form.Group>
            <Form.Group controlId="">
                <Form.Label className="label">Author</Form.Label>
                <Form.Control type="text" placeholder="author of blog" name="author" value={blogPost.author} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className="label">Description</Form.Label>
                <Form.Control as="textarea" rows={4} name="desc" value={blogPost.desc} onChange={handleChange} placeholder="write your blog......"/>
            </Form.Group>
            
            <Modal.Footer>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Click to create a blog!</Tooltip>}>
            <Button variant="primary" onClick={onSubmit}>Create </Button>
            </OverlayTrigger>
            </Modal.Footer>
        </Form>
        </Modal.Dialog> 
        </div>
    )
}

export default CreateBlog;