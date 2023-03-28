import './css/CustomerPage.css'
import CustomerHero from './components/CustomerHero';
import CustomerButtonBar from './components/CustomerButtonBar';
import CustomerBooking from './components/CustomerBooking';
import CustomerAppointments from './components/CustomerAppointments'
import CustomerCompleted from './components/CustomerCompleted'
import { useParams } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import Booking from 'src/models/Booking';
import { fetchData, deleteAllData, deleteData } from './api';
import { IBookingsContext, ICustomerPage } from './interfaces';


export const BookingsContext = createContext<IBookingsContext>({bookings: [] , setBookings: () => {}})

const CustomerPage = (props: ICustomerPage ) => {

    let {name} = useParams();
    let data = name!;

    const [bookings, setBookings] = useState<Booking[]>([]);
    const [checked, setChecked] = useState<string[]>([])
    const [update, setUpdate] = useState('initial')

    //-----------------------------------------------------------
    useEffect(() => {(    
        async function() 
        {
        let res : Booking[] = await fetchData() as Booking[];
        setBookings(res);
        } 
        
      )() 
      setUpdate('initial');
      setChecked([]);
    }, [update]);

    //-----------------------------------------------------------
    const onDeleteTaskHandler = async (id: string) => {
        let res : any = await deleteData(id);
        //deleteData(id);
        setUpdate('deleteOne')
    }

    //-----------------------------------------------------------
    const onCheckboxHandler = (id : string) => {
        if (!checked.includes(id))
        {
            setChecked((checked: any) => {return [...checked, id]});
        }

        if (checked.includes(id))
        {
            const newChecked = checked.filter(function (booking_id) {
                return booking_id !== id;
            });
            setChecked(newChecked);
        }    
    }

    //-----------------------------------------------------------
    const onDeleteCheckedBookings = async () => {

        let res : any = await deleteAllData(checked);
        setUpdate('deleteAll')
    }

    //-----------------------------------------------------------
    const updateTrigger = () => {
        setUpdate('addNew')
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

    console.log('checked');
    console.log(checked);
    return(
        <div className='main-page'>
            <CustomerHero customerName={data}/>
            <CustomerButtonBar onScrollToElement={onScrollToElement}/>
            <CustomerBooking updateTrigger={updateTrigger}/>
            <BookingsContext.Provider value={{bookings, setBookings}}>
                <CustomerAppointments onDeleteTaskHandler={onDeleteTaskHandler}/>
                <CustomerCompleted    onDeleteTaskHandler={onDeleteTaskHandler}
                                      onCheckboxHandler={onCheckboxHandler}
                                      onDeleteCheckedBookings={onDeleteCheckedBookings}/>
            </BookingsContext.Provider>           
        </div>
    )
}

export default CustomerPage