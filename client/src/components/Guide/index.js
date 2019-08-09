import React, { Component } from 'react';

export default class index extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Group as={Row} controlId='formPlaintextEmail'>
            <Form.Label column sm='2'>
              Email
            </Form.Label>
            <Col sm='10'>
              <Form.Control
                plaintext
                readOnly
                defaultValue='email@example.com'
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='formPlaintextPassword'>
            <Form.Label column sm='2'>
              Password
            </Form.Label>
            <Col sm='10'>
              <Form.Control type='password' placeholder='Password' />
            </Col>
          </Form.Group>
        </Form>
      </div>
    );
  }
}
