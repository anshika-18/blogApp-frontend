import React from 'react'
import Blogs from './Blogs'
import CreateBlog from './createBlog'
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
function Home(){
    return(
        <>
            <Container fluid="true">
                <Row>
                    <Col xs={12} md={8} sm={12}><br></br><Blogs/></Col>
                    <Col xs={12} md={4} sm={12}>
                        <CreateBlog/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Home;