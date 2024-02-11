import React from "react";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

export default function Info() {
  return (
    <>
      <Card>
          <Image src="src\assets\me.bmp" rounded />
      </Card>
      <Card style={{ width: '317px' }}>
      <Card.Body>
        <h2>Claudia Velazquez</h2>
        <h3>Full Stack Developer</h3>
        <Card.Text>velazquezclaudia.github.io</Card.Text>
        <button className="btn1"> <i className="fa fa-solid fa-envelope"></i>Email</button>
      <button className= "link"><i className="fa fa-brands fa-linkedin"></i> LinkedIn</button>
      </Card.Body>
    </Card>
    </>
  )
}