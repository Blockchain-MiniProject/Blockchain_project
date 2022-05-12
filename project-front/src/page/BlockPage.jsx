import React from 'react'
import {Container , Row, Col}from 'react-bootstrap';
import BlockDetail from '../components/BlockDetail';



const BlockPage = () => {
  return (
    <div>BlockPage
        <Container>
            <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
        </Container>
    </div>
  )
}

export default BlockPage;