import { IOneCompletedCleaning } from "../interfaces"

const OneCompletedCleaning = (props: IOneCompletedCleaning) => {
    return (
        <>
        <tr>
            <td>{props.date.slice(0, 10)}</td> 
            <td>{props.time}</td> 
            <td>{props.customerName}</td>  
            <td>{props.level}</td>                           
        </tr>
    </>
    )
}

export default  OneCompletedCleaning