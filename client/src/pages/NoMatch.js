// Import React/Grid/Jumbotron 
import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

// Function to show error no book was found 
function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="text-center">404 Page Not Found</h1>
            <h1 className="text-center">
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

// Export NoMatch
export default NoMatch;
