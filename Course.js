import React from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Footer,
    Button,
    Container,

} from "reactstrap";

const course = ({course}) => {
  return (
    
    <Card className="text-center">
    <CardBody>
    <CardSubtitle className='font-weight-bold'>{course.title}</CardSubtitle>
    <CardText>{course.description}</CardText>
    <Container className="text-center">
    <Button color='danger'>Delete</Button>
    <Button color='warning ml-3'>update</Button>
    </Container>
    </CardBody>
    </Card>
  );
};

export default course;
