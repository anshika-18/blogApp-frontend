import React,{useEffect,useState} from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import "./css/blogs.css"

function CreateBlog (){
    return(
        <div >
        <Modal.Dialog >
            <Modal.Header closeButton>
                <Modal.Title className="label">Create a Blog</Modal.Title>
            </Modal.Header>
            
            <Form className="form-background"> 
            <Form.Group controlId="">
                <Form.Label className="label">Title</Form.Label>
                    <Form.Control type="text" placeholder="" />
                </Form.Group>
            <Form.Group controlId="">
                <Form.Label className="label">Author</Form.Label>
                <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className="label">Description</Form.Label>
                <Form.Control as="textarea" rows={4} />
            </Form.Group>
            
            <Modal.Footer>
            <Button variant="primary">Create a Blog</Button>
            </Modal.Footer>
        </Form>
        </Modal.Dialog> 
        </div>
    )
}

export default CreateBlog;