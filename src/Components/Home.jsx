import React from 'react'
import Blogs from './Blogs'
import CreateBlog from './createBlog'
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
function Home(){
    return(
        <>
            <Container>
                <Row>
                <Col lg="8"><Blogs /></Col>
                <Col>
                    <CreateBlog />
                </Col>
                </Row>
            </Container>
        </>
    )
}
export default Home;