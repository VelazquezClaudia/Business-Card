import React from "react";
import Card from 'react-bootstrap/Card';
import useFitText from "use-fit-text";

export default function Interests() {
  const { fontSize, ref} = useFitText();

  return (
    <>
      <h2 className="A">Interests</h2>
      <Card.Text ref={ref} style={{ fontSize, height: 30, width: 275}}>Baking, gardening, and dancing.</Card.Text>
      
    </>
  )
}