import { useContext } from "react";
import { useParams } from "react-router-dom";
import OnePlannedCleaning from "./OnePlannedCleaning";
import '../css/CleanerAppointments.css'
import { BookingsContext } from "../CleanerPage";
import { ICleanerAppointments } from "../interfaces";


const CleanerAppointments = (props : ICleanerAppointments ) => {

    let {name} = useParams();
    let data = name!;

    const {bookings} = useContext(BookingsContext)

    //---------------------------------------------------
    const onCompleteTaskHandler = (id : string) => {
        props.onCompleteTaskHandler(id)
    }  

    //---------------------------------------------------
    const plannedCleanings = bookings.filter(booking => (booking.cleanerName === data && booking.status === false)).map((booking) => (
        <OnePlannedCleaning
            key={booking._id}
            id={booking._id}
            customerName={booking.customerName}
            cleanerName={booking.cleanerName}
            level={booking.level}
            time={booking.time}
            date={booking.date.toString()}
            onCompleteTaskHandler={() => onCompleteTaskHandler(booking._id)}></OnePlannedCleaning>
    ))

    //---------------------------------------------------
    return(
        <div className="cleaner-containers">
            
            <div className="planned-header" id="planned-header">
            <h2><span className="colored-word">Planned</span><br/> cleanings</h2>
            </div>

            <table className='table'>

                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Customer</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>

                </thead>
                <tbody>
                     {plannedCleanings}                  
                </tbody>
            </table>
            
        </div>
    )
}
export default CleanerAppointments;