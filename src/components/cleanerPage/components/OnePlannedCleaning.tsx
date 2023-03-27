import '../css/CleanerAppointments.css'
import { IOnePlannedCleaning } from '../interfaces'

const OnePlannedCleaning = (props : IOnePlannedCleaning) => {

    const onCompleteTaskHandler = (event : React.MouseEvent) => {
        props.onCompleteTaskHandler(props.id)
    }

    return (
        <>
        <tr>
            <td>{props.date.slice(0, 10)}</td> 
            <td>{props.time}</td> 
            <td>{props.customerName}</td>  
            <td>{props.level}</td> 
                           
            <td>
                <button 
                className="done-button"
                onClick={onCompleteTaskHandler}><i>Done</i></button>
            </td>
        </tr>
    </>
    )
}

export default  OnePlannedCleaning