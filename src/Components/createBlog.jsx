import React,{useEffect,useState} from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

function CreateBlog (){
    return(
        <div>
            <br></br>
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Create a Blog</Modal.Title>
            </Modal.Header>
            
            <Form>
            <Form.Group controlId="">
                <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="" />
                </Form.Group>
            <Form.Group controlId="">
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
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