import React from "react";
import './App.css';
import { ReactDOM } from 'react';
import Header from './component/Header';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';
import Home from './component/Home';
import { Button, Container, Row, Col } from "reactstrap";
import Course from './component/Course';
import Allcourses from "./component/Allcourses";
import AddCourse from "./component/AddCourse";
import Menus from "./component/Menus";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  
  const btnHandle=()=>{
toast.success("done",{
  position: "top-bottom",
});

  }
  
  return (
    <div >
    <Router>
  
    <ToastContainer />

  {/* <Header />*/}
{/* <h1>Simple Application</h1>*/}
{/* <center><Button color='warning' outline onClick={btnHandle}>First React Button</Button></center> {/*call btn handle function */}
    
  {/* <Home />
    <Allcourses/>
  <AddCourse/>*/}

  {/*
    <hr/>
  <AddCourse/>*/}


  <Container>
  <Header/>
  <Row>
  <Col md={4}>
<Menus/>
  </Col>

  <Col md={8}>

 {/*<Home/>*/}
 <Routes>
 <Route  path="/" Component={Home} exact />
 <Route  path="/add-course" Component={AddCourse} exact />
 <Route  path="/view-courses" Component={Allcourses} exact />
 </Routes>
  </Col>

  </Row>
  </Container>
 
  </Router>
    </div>
  );
}

export default App;
