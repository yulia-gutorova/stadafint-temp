import { IOneCompleted } from '../interfaces';
import '../styles/CustomerCompleted.css'

const OneCompleted = (props: IOneCompleted) => {

    //-----------------------------------------------------------------------
    const onDeleteTaskHandler = (event : React.MouseEvent) => {
        props.onDeleteTaskHandler(props.id);
    }

    //-----------------------------------------------------------------------
    const onCheckboxHandler = (event : React.ChangeEvent<HTMLInputElement>) => {
        props.onCheckboxHandler(props.id)
    }

    return(
        <>
            <tr>
                <td>
                 <input type='checkbox' className='checkbox' onChange={onCheckboxHandler}/>
                 </td> 
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

export default OneCompleted