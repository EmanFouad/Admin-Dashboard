import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import SideMenu from './components/SideMenu';
import DashboardView from './components/DashboardView';
import './App.css';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col lg={2} md={4}>
			<SideMenu />
		</Col>
        <Col lg={10} md={8}>
			<DashboardView />
		</Col>
      </Row>
    </Container>
  );
}

export default App;
