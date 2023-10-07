import React from 'react';
import { Container,Button } from 'reactstrap';
const Home = () => {
  return (
    <div className="text-center bg-info" font-weight-bold>
    
      <h2>Learn code with Chunnu</h2>

    <p>This is developed by Chunnu for learning purpose.It is backend is on spring boot and frontened on reactjs.</p>

    <Container className="text-center" style={{height:120}}>

    <Button color="primary" outline>Start using my application</Button>

    </Container>
   
    </div>
  )
}

export default Home;
