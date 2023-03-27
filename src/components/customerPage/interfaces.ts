import Booking from "src/models/Booking"

export interface ICustomerPage {
    loginButtonTextHandler : (login: boolean) => void
}

export interface IBookingsContext {
    bookings : Booking[]
    setBookings : React.Dispatch<React.SetStateAction<Booking[]>>
}

export interface IOneCompleted {
    id:string
    customerName: string
    cleanerName: string
    level: string
    time: string
    date: string
    onDeleteTaskHandler: (id:string) => void
    onCheckboxHandler : (id:string) => void
}

export interface IOneAppointment {
    id:string
    customerName: string
    cleanerName: string
    level: string
    time: string
    date: string
    onDeleteTaskHandler: (id:string) => void
}

export interface ICustomerHero{
    customerName : string
}

export interface ICustomerCompleted{
    onDeleteTaskHandler: (id:string) => void
    onCheckboxHandler : (id:string) => void
    onDeleteCheckedBookings : () => void;
}

export interface FormData {
    customername: string;
    cleanername: string;
    time: string;
    level: string;
    date: string;
  }

export interface ICustomerBooking{
    updateTrigger : () => void
}


export interface ICustomerAppointments{
    onDeleteTaskHandler: (id:string) => void
} 

export interface ICustomerButtonBar{
    onScrollToElement : (el : string) => void;
}