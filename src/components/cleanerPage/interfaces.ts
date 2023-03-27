import Booking from "src/models/Booking"

export interface IBookingsContext {
    bookings : Booking[]
    setBookings : React.Dispatch<React.SetStateAction<Booking[]>>
}

export interface ICustomerPage {
    loginButtonTextHandler : (login: boolean) => void
}

export interface IOnePlannedCleaning {
    id:string
    customerName: string
    cleanerName: string
    level: string
    time: string
    date: string
    onCompleteTaskHandler: (id:string) => void
}

export interface IOneCompletedCleaning {
    id:string
    customerName: string
    cleanerName: string
    level: string
    time: string
    date: string
}

export interface ICleanerHero{
    customerName : string
}

export interface ICleanerAppointments {
    onCompleteTaskHandler :(id : string) => void
}

export interface ICleanerButtonBar{
    onScrollToElement : (el : string) => void;
}