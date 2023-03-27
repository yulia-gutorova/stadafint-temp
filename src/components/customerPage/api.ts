
import { createContext } from "react";
import User from "../../models/User";
import { fetchAPIData } from "../global/api";


export const getCleaners = async () => {
  try {
    const data = await fetchAPIData("user/all");

    const customerData: User[] = data.users.filter(
      (item: User) => !item.isCustomer
    );

    const cleanerArray = [...customerData];

    const names = cleanerArray.map((user: User) => user.name);
    return names;
  } catch (error) {
    console.log(error);
  }
};


interface APIContextProps {
  apiUrl: string;
}

const APIContext = createContext<APIContextProps>({
  apiUrl: 'https://stadafint-server-production.up.railway.app/'
});

export default APIContext;

//------------------------------------------------------------------
export const fetchData = async() => {
        
  try {
      const resp = await fetch('https://stadafint-server-production.up.railway.app/booking/allbookings');
      const data = await resp.json();     

      const transformData : any = data.map((b :any) => {
          return{
            _id : b._id,
            cleanerName : b.cleanername,
            customerName : b.customername,
            level: b.level,
            date: b.date,
            time: b.time,
            status: b.status
          }
        })

      return transformData;

  }
  catch (error) {
      console.log(error);
  }
} 

//------------------------------------------------------------------
export const deleteData = async(id: string) => {
  console.log('inside deleteData in customer account');

  try {
      const resp = await fetch('https://stadafint-server-production.up.railway.app/booking/deletebooking/' + id,
      {
          method: 'DELETE', 
      })
  }
  catch (error) {
      console.log(error);
  }
  //fetchData();   
}

//------------------------------------------------------------------
export const deleteAllData = async(checkedBookings : string[]) => {
  for(let id of checkedBookings){

      try {
          const resp = await fetch('https://stadafint-server-production.up.railway.app/booking/deletebooking/' +id,
          {
              method: 'DELETE', 
          })
      }
      catch (error) {
          console.log(error);
      }
  }
}