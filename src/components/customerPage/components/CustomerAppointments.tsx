import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BookingsContext } from '../CustomerPage';
import { ICustomerAppointments } from '../interfaces';
import '../css/CustomerAppointments.css'
import OneAppointment from './OneAppoitment';

function CustomerAppointments(props: ICustomerAppointments) {

    let { name } = useParams();
    let data = name!;

    const { bookings } = useContext(BookingsContext)

    //-----------------------------------------------------------
    const onDeleteTaskHandler = (id: string) => {
        props.onDeleteTaskHandler(id);
    }

    //-----------------------------------------------------------
    const plannedBookings = bookings.filter(booking => (booking.customerName === data && booking.status === false)).map((booking) => (
        <OneAppointment
            key={booking._id}
            id={booking._id}
            customerName={booking.customerName}
            cleanerName={booking.cleanerName}
            level={booking.level}
            time={booking.time}
            date={booking.date.toString()}
            onDeleteTaskHandler={() => onDeleteTaskHandler(booking._id)} />
    ))

    //-----------------------------------------------------------
    return (
        <div className="customer-containers" id='customer-appointments'>

            <div className="appointments-header">
                <h2><span className="colored-word">Booked</span><br /> appointments</h2>
            </div>

            <div className='appointment-section'>
                {plannedBookings.length===0 && <div className='planned-message-container'>
                    <p id='planned-message'>You don't have any planned appointments now</p>
                </div>}
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Type</th>
                            <th>Cleaner</th>
                            <th>Actions</th>
                        </tr>

                    </thead>
                    <tbody>
                        {plannedBookings}
                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default CustomerAppointments;

