export const fetchData = async() => {
        
    try {
        const resp = await fetch('https://stadafint-server-production.up.railway.app/booking/allbookings');
        const data = await resp.json();     
  
        console.log('data in fetchdata');
        console.log(data);
  
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
        //setBookings(transformData);
  
    }
    catch (error) {
        console.log(error);
    }
  } 


  export const updateData = async (id: string) => {
        
    console.log('inside updateData in cleaner account');
    console.log('Id');
    console.log(id); 
         
    let newBooking= {
        status: true
    } 

     console.log('inside await update data in cleaner account');
    console.log('New booking');
    console.log(newBooking); 

     try
    {
        const res = await fetch('https://stadafint-server-production.up.railway.app/booking/updatebooking/' + id, 
        {
            method: 'PATCH',
            body: JSON.stringify(newBooking),
            headers: 
            {
                'Content-Type': 'application/json',
            }
        })    
    }
    catch(error) 
    {
      console.log(error);     
    } 

    //fetchData();
    //console.log('fech in update');  
    //console.log(bookings);  
}