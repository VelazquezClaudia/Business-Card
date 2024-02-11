import React from "react";
import Card from 'react-bootstrap/Card';
import useFitText from "use-fit-text";

export default function About() {
  const { fontSize, ref} = useFitText();

  return (
    <>
      <h2 className="A">About</h2>
      <Card.Text ref={ref} style={{ fontSize, height: 61, width: 275}} className="about">Full stack developer with an interest in developing approaches and software to help solve problems and make a difference.</Card.Text>      
    </>
  )
}