import '../css/CleanerButtonBar.css';
import { ICleanerButtonBar } from '../interfaces';

function CleanerButtonBar (props : ICleanerButtonBar) {

    //-------------------------------------------------------------------
    const onScrollToElement = (event : React.MouseEvent<HTMLElement>) => {
        let el = event.currentTarget.dataset.element!;
        props.onScrollToElement(el)
    }

    return(<>

    <div className="button-bar">

        <h2>How can we assist you today?</h2>

        <div className="cleaner-buttons">

        <div className="btn-1" id="btn" data-element='planned-header' onClick={onScrollToElement}>
            <p>Check planned appointments</p>
            </div>

        <div className="btn-2" id="btn" data-element='completed-header' onClick={onScrollToElement}>
            <p>Check completed appointments</p>
            </div>

        </div>

    </div>
    </>)
}

export default CleanerButtonBar