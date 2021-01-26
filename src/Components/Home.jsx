import React from 'react'
import Blogs from './Blogs'
import CreateBlog from './createBlog'
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

function Home(){
    return(
        <div className="home-outer">
            <Container fluid>
                <Row>
                    <Col  lg={8} ><Blogs/></Col>
                    <Col  lg={4} ><CreateBlog/></Col>
                </Row>
            </Container>
        </div>
    )
}
export default Home;