import { ICustomerButtonBar } from '../interfaces';
import '../css/CustomerButtonBar.css';

function CustomerButtonBar (props : ICustomerButtonBar) {

    const onScrollToElement = (event : React.MouseEvent<HTMLElement>) => {
        let el = event.currentTarget.dataset.element!;
        props.onScrollToElement(el)
    }

    return(<>


    <div className="button-bar">

        <h2>How can we assist you today?</h2>

        <div className="customer-buttons">

        <div className="btn-1" id="btn" data-element='customer-booking' onClick={onScrollToElement}>
            <p>Book an appointment</p>
            </div>

        <div className="btn-2" id="btn" data-element='customer-appointments' onClick={onScrollToElement}>
            <p>Check booked appointments</p>
            </div>

        <div className="btn-3" id="btn" data-element='customer-completed' onClick={onScrollToElement}>
            <p>Check completed appointments</p>
            </div>

        </div>

    </div>
    </>)
}

export default CustomerButtonBar