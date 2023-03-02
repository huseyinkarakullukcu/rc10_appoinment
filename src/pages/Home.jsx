import { useState } from "react"
import AppointmentList from "../components/AppointmentList"
import Doctors from "../components/Doctors"
import {doctorData} from "../helper/data"
import { appointmentData } from "../helper/data"

const Home = ()=>{
    const [appointments, setAppointments] = useState(appointmentData)

    return (
        <main className="text-center mt-2">
            <h1 className="display-5 text-danger">CLARUS HOSPITAL</h1>
            <Doctors doctors = {doctorData} appointments={appointments} setAppointments={setAppointments}/>
            <AppointmentList appointments = {appointments} setAppointments={setAppointments} />

        </main>
    )
}
export default Home