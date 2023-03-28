
import '../css/CleanerHero.css';

import CleanerScrub from '../../../assets/CleanerScrub.png'
import { ICleanerHero } from '../interfaces';


function CleanerHero (props : ICleanerHero) {

    return(
    
    <div className="cleaner-hero">
            <div className="cleaner-main-hero">

            <h1>Welcome {props.cleanerName}!</h1>
            <p>Take a look at your own schedule <br/> and get to know  <br/> what you need to do on what days!</p>
            
            {/* <img src= {CleanerScrub} alt="Hero picture"></img> */}

            </div>
    </div>)
}

export default CleanerHero