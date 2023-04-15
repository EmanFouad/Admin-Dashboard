import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import SideMenu from './components/SideMenu';
import DashboardView from './components/DashboardView';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col lg={2}>
			<SideMenu />
		</Col>
        <Col lg={10}>
			<DashboardView />
		</Col>
      </Row>
    </Container>
  );
}

export default App;
