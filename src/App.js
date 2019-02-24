import React, { Component } from 'react';
import { Container, Row, Col, ButtonToolbar, Button } from 'react-bootstrap';

class App extends Component {
  render() {



    return (
      <div>
        <Container>
          <Row className="show-grid" >
            <Col xs={12} md={8} >
              <div style={styles.starStyles}>this is my first column</div>

              <ButtonToolbar>
                <Button variant="outline-primary">Primary</Button>
                <Button variant="outline-secondary">Secondary</Button>
                <Button variant="outline-success">Success</Button>
                <Button variant="outline-warning">Warning</Button>
                <Button variant="outline-danger">Danger</Button>
                <Button variant="outline-info">Info</Button>
                <Button variant="outline-light">Light</Button>
                <Button variant="outline-dark">Dark</Button>
              </ButtonToolbar>
            </Col>
            <Col xs={12} md={4}>
            this is my second column
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const styles = {
  starStyles: {
    color: "Orange",
    backgroundColor: "Green"
  }
}

export default App;
