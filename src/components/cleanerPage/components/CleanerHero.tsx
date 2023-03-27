
import '../css/CleanerHero.css';

import CleanerScrub from '../../../assets/CleanerScrub.png'
import { ICleanerHero } from '../interfaces';


function CleanerHero (props : ICleanerHero) {

    return(
    
    <div className="hero">
            <div className="main-hero">

            <h1>Welcome {props.customerName}!</h1>
            <p>Get to know all about your work <br/> to plan everything  <br/> in the best way</p>

            <img src= {CleanerScrub} alt="Hero picture"></img>

            </div>
    </div>)
}

export default CleanerHero