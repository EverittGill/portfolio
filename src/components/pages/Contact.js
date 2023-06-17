

// this page is for providing a contact form for the user to fill out and send to me. it will need to include a field for name, email, and message. it will also need a submit button. It will need to validate the email address and notify the user if they are submitting the form without a message.
import Form from 'react-bootstrap/Form';

function TextControlsExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  );
}

export default TextControlsExample;