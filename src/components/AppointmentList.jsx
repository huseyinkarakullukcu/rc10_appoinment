import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaTimesCircle } from "react-icons/fa";
const AppointmentList = ({ setAppointments, appointments }) => {
    const handleDoubleClick = (id)=>{
        setAppointments(
            appointments.map((item)=>{
               // console.log(item)
                return(
                    item.id === id ? {...item,consulted:!item.consulted}:item
                ) }
         ) )
        //console.log()
    }
const handleDelete=(id)=>{
    setAppointments(
        appointments.filter((item)=>item.id !== id)
    )

}

  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Appointment List
      </h3>
      <div type="button" className="d-flex flex-column align-items-center">
        {!appointments.length &&(
            <img src="./img/appointment.jpg" width="80%" alt="" />
        )}

        {appointments.map((appointment) => {
          const { id, patient, day, consulted, doctor } = appointment;
          return (
            <div  key={id} onDoubleClick={()=>handleDoubleClick(id)}
            className={consulted ? "appointments mb-3 consulted"
            :"appointments mb-3"
        }>
              <Row className="justify-content-center align-items-center g-3">
                <Col xs={12} sm={12} md={6}>
                  <h4 className="text-danger">{patient}</h4>
                  <h5>{doctor}</h5>
                </Col>
                <Col xs={10} sm={8} md={5}>
                  <h5>Date:{new Date(day).toLocaleDateString()}</h5>
                  <h6>Time:{new Date(day).toLocaleTimeString()}</h6>
                </Col>
                <Col xs={2} sm={4} md={1} className="text-end">
                  <FaTimesCircle
                    className="text-danger fs-1"
                    type="button"
                    onClick={() => handleDelete(id)}
                  />
                </Col>
              </Row>
            </div>
          );
        })}
      </div>
    </Container>
  );
};
export default AppointmentList;
