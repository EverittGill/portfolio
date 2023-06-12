

// this page is for providing a contact form for the user to fill out and send to me. it will need to include a field for name, email, and message. it will also need a submit button. It will need to validate the email address and notify the user if they are submitting the form without a message.

import React from 'react';
import { MDBInput, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';

function Contact() {
  return (
    <form id='form' className='text-center' style={{ width: '100%', maxWidth: '300px' }}>
      <h2>Contact Me</h2>

      <MDBInput label='Name' v-model='name' wrapperClass='mb-4' />

      <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' />

      <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' />

      <MDBTextArea wrapperClass='mb-4' label='Message' />

      <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />

      <MDBBtn color='primary' block className='my-4'>
        Send
      </MDBBtn>
    </form>
  );
}


export default Contact;