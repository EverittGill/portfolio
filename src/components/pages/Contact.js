import React, { useState } from 'react';

const EmailSubmissionForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [requiredError, setRequiredError] = useState('');

  const validateEmail = () => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setEmailError(isValid ? '' : 'Your email address is invalid');
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleBlur = (e) => {
    if (e.target.value.trim() === '') {
      setRequiredError('This field is required');
    } else {
      setRequiredError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform additional actions here, such as submitting the form data

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
    setEmailError('');
    setRequiredError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          placeholder="Enter your name"
          onChange={handleNameChange}
          onBlur={handleBlur}
        />
        {requiredError && <p>{requiredError}</p>}
      </div>

      <div>
        <label htmlFor="email">Email Address:</label>
        <input
          type="text"
          id="email"
          value={email}
          placeholder="Your email address"
          onChange={handleEmailChange}
          onBlur={validateEmail}
        />
        {emailError && <p>{emailError}</p>}
        {requiredError && <p>{requiredError}</p>}
      </div>

      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={handleMessageChange}
          onBlur={handleBlur}
        />
        {requiredError && <p>{requiredError}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default EmailSubmissionForm;





















// this page is for providing a contact form for the user to fill out and send to me. it will need to include a field for name, email, and message. it will also need a submit button. It will need to validate the email address and notify the user if they are submitting the form without a message.
// import Form from 'react-bootstrap/Form';

// function TextControlsExample() {
//   return (
//     <>
//     <Form>
//         <Form.Group className="mb-3" controlId="exampleName.controlInput1">
//         <Form.Label>Name</Form.Label>
//         <Form.Control type="email" placeholder="name" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="name@example.com" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//         <Form.Label>Your Message to Everitt</Form.Label>
//         <Form.Control as="textarea" rows={3} />
//       </Form.Group>
//     </Form>
//     </>
//   );
// }

// export default TextControlsExample;