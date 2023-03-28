import { useLocation } from "react-router-dom";
import '../css/CustomerHero.css';
import { useParams } from "react-router-dom"
import CleanerScrub from '../../../assets/CleanerScrub.png'
import { ICustomerHero } from "../interfaces";

function CustomerHero (props : ICustomerHero) {

    return(
    
    <div className="customer-hero">
            <div className="customer-main-hero">

            <h1>Welcome {props.customerName}!</h1>
            <p>Hurry and get your chance for <br/> the most incredible cleaning service <br/> you've ever experienced</p>

            {/* <img src= {CleanerScrub} alt="Hero picture"></img> */}

            </div>
    </div>)
}

export default CustomerHero;