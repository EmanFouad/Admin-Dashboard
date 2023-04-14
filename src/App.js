import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import SideMenu from './components/SideMenu';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col lg={2}>
			<SideMenu />
		</Col>
        <Col lg={10}>2 of 2</Col>
      </Row>
    </Container>
  );
}

export default App;
