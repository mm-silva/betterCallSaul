import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

function Resume() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <h2>Quem sou?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus vestibulum ornare. Phasellus arcu neque, posuere id diam ac, pulvinar fermentum magna. Nulla imperdiet lobortis condimentum. Fusce quam quam, aliquet id aliquet semper, tempor at nibh. Donec cursus metus mi, non rhoncus massa laoreet sit amet. Duis erat nisl, tristique eu leo at, porta venenatis diam. Nullam rhoncus est nisi. Pellentesque ut dolor dui. Vivamus vulputate elementum consequat. In sodales est eu egestas elementum. Phasellus tempus mi et augue tincidunt, ac mollis lorem consectetur. Nunc a ante nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Vestibulum in nisi at justo sollicitudin suscipit. Ut varius lectus mauris, ac vehicula velit pulvinar ultrices.
</p>
        </Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
      </Row>
    </Container>
  );
}

export default Resume;