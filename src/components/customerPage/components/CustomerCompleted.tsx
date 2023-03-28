import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { BookingsContext } from '../CustomerPage';
import { ICustomerCompleted } from '../interfaces';
import '../css/CustomerCompleted.css';
import OneCompleted from './OneCompleted';


function CustomerCompleted (props : ICustomerCompleted) {

    let {name} = useParams();
    let data = name!;

    const {bookings} = useContext(BookingsContext);
    
    //-----------------------------------------------------------
    const onDeleteTaskHandler = (id : string) => {
        props.onDeleteTaskHandler(id);
    } 
    
    const onCheckboxHandler = (id : string) => {
        props.onCheckboxHandler(id);
    }

    const onDeleteCheckedBookings = () => {
        props.onDeleteCheckedBookings();
    }

    //-----------------------------------------------------------
    const completedBookings = bookings.filter(booking => (booking.customerName === data && booking.status === true)).map((booking) => (
        <OneCompleted
            key={booking._id}
            id={booking._id}
            customerName={booking.customerName}
            cleanerName={booking.cleanerName}
            level={booking.level}
            time={booking.time}
            date={booking.date.toString()}
            onDeleteTaskHandler={() => onDeleteTaskHandler(booking._id)}
            onCheckboxHandler= {() => onCheckboxHandler(booking._id)}/>
)) 

    return(
        <div className="customer-containers" id='customer-completed'>
            
            <div className="completed-header">
                <h2><span className="colored-word">Completed</span> appointments</h2>
            </div>
            
            <div className='completed-section'>
                {completedBookings.length === 0 && <div className='completed-message-container'>
                    <p id='completed-message'>You don't have any completed appointments now</p>
                </div>}

                <table className='table'>
                    <thead>
                        <tr>
                        <th>Check</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Type</th>
                        <th>Cleaner</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {completedBookings}
                    </tbody>
                </table>

                {completedBookings.length !== 0 && <div id="button-section">
                    <button id="booking-button" onClick={onDeleteCheckedBookings}>Delete All Checked appointments</button>
                </div>}
            </div>


        </div>
    )
}

export default CustomerCompleted;