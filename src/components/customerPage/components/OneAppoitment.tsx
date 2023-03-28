import { useParams } from 'react-router-dom'
import { IOneAppointment } from '../interfaces';
import '../css/CustomerBooking.css'


const OneAppointment = (props : IOneAppointment) => {

    const onDeleteTaskHandler = (event : React.MouseEvent) => {
        props.onDeleteTaskHandler(props.id);
    }

    return(
        <>
            <tr>
                <td>{props.date.slice(0, 10)}</td>
                <td>{props.time}</td>
                <td>{props.cleanerName}</td>
                <td>{props.level}</td>
                <td>
                    <button className='delete-button' onClick={onDeleteTaskHandler}>Delete</button>
                </td> 
            </tr>

        </>
    )
}

export default OneAppointment