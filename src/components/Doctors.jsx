import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import AddModal from "./AddModal";
const Doctors = ({ doctors,setAppointments,appointments }) => {
    const [show, setShow] = useState(false)
    const [selectedDrName, setSelectedDrName] = useState("")
    const handleClick = (drName)=>{
        setShow(true)
        setSelectedDrName(drName)
    }
  //console.log(doctors)
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3"> Our Doctors</h3>
      <Row className="justify-content-center">
        {doctors.map((doctor) => {
            const {id,name, dep, img} = doctor
          return (
            <Col key={id} xs={6} sm={4} md={3}>
              <img src={img} alt={name} title={name}
              className="img-thumbnail doctor-img" 
              onClick={()=>handleClick(name)}/>
              <h5>{name}</h5>
              <h6>{dep}</h6>
            </Col>
          );
        })}
      </Row>
      <AddModal
      show={show}
      handleClose={()=>setShow(false)}
      drName={selectedDrName} appointments ={appointments} setAppointments={setAppointments} />
    </Container>
  );
};
export default Doctors;
