import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Booking from "src/models/Booking";
import OneCompletedCleaning from "./OneCompletedCleaning";
import '../css/CleanerCompleted.css'
import { BookingsContext } from "../CleanerPage";

function CleanerCompleted () {

    let {name} = useParams();
    let data = name!;

    const {bookings} = useContext(BookingsContext);

    const completedCleanings = bookings.filter(booking => (booking.cleanerName === data && booking.status === true)).map((booking) => (
        <OneCompletedCleaning
            key={booking._id}
            id={booking._id}
            customerName={booking.customerName}
            cleanerName={booking.cleanerName}
            level={booking.level}
            time={booking.time}
            date={booking.date.toString()}></OneCompletedCleaning>
    ))

    return(
        <div className="cleaner-containers">
            
            <div className="completed-header" id="completed-header">
                <h2><span className="colored-word">Completed</span><br /> cleanings</h2>
            </div>

            <div className='completed-section'>
                <table className='table'>
                    <thead>
                        <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Customer</th>
                        <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {completedCleanings}
                    </tbody>
                </table>

            </div>


        </div>
    )
}

export default CleanerCompleted;