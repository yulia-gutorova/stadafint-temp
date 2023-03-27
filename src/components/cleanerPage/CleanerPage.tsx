import { useParams } from "react-router-dom";
import './css/CleanerPage.css'
import CleanerButtonBar from "./components/CleanerButtonBar";
import CleanerHero from "./components/CleanerHero";
import CleanerAppointments from "./components/CleanerAppointments";
import CleanerCompleted from "./components/CleanerCompleted";
import { createContext, useEffect, useState } from "react";
import Booking from "src/models/Booking";
import { fetchData, updateData } from "./api";
import { IBookingsContext, ICustomerPage } from "./interfaces";
;



export const BookingsContext = createContext<IBookingsContext>({bookings: [] , setBookings: () => {}})

const CleanerPage = (props : ICustomerPage) => {

    let {name} = useParams();
    let data = name!;

    const [bookings, setBookings] = useState<Booking[]>([]);
    const [update, setUpdate] = useState('initial');

    //-----------------------------------------------------------
    useEffect(() => {(    
        async function() 
        {
        let res : Booking[] = await fetchData() as Booking[];
        setBookings(res);
        } 
        
      )() 
    }, []);

    //-----------------------------------------------------------
    const onCompleteTaskHandler = (id: string) => {
        setBookings(bookings.map(booking => (booking._id === id ? { ...booking, status: true } : booking)));
        updateData(id);
        setUpdate('updateOne')
    }

    //-----------------------------------------------------------
    const onScrollToElement = (el : string) => {
        let element = document.querySelector('#' + el);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }
    }

    //-----------------------------------------------------------
    props.loginButtonTextHandler(true);

    //-----------------------------------------------------------
    return(
        <div className="main-page">
            <BookingsContext.Provider value={{bookings, setBookings}}>
                <CleanerHero cleanerName={data}/>
                <CleanerButtonBar onScrollToElement={onScrollToElement}/>
                <CleanerAppointments onCompleteTaskHandler={onCompleteTaskHandler}/>
                <CleanerCompleted/>
            </BookingsContext.Provider>

        </div>
    )

}
export default CleanerPage