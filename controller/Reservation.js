

const reservationModal=require('../model/Reservation')
const ReservationController=async(req,res)=>{


    const {book,hotelName,name,price}=req.body;

    console.log(req.body);
  
 console.log(book.checkInDate,book.checkOutDate);

    
             const signDocument= new reservationModal({
                 hotelName:hotelName,
                 name:name,
                 checkIn:book.checkInDate,
                 checkOut:book.checkOutDate,
                 price:price,
                })
                const result= await signDocument.save()
                console.log(result);
                res.send({msg:`Reservation complete, welcome on ${book.checkInDate}`})
               
         } 
     
 const compareReserve=async(req,res)=>{
    console.log(req.body);

    let checkout;
    let checkin;
    let fetchname;
    const { book,hotelName } = req.body;
   
    const querey = { hotelName: hotelName }

    const fetchData = await reservationModal.find(querey)
    console.log(fetchData);
    fetchData.map((item) => {
        checkin = item.checkIn;
        checkout = item.checkOut;
        fetchname=item.hotelName
    })
    console.log(book.checkInDate,checkin);
    if (hotelName === fetchname) {

        if(book.checkInDate === checkin){
            res.send({msg:`Rooms are reserved on ${book.checkInDate} to ${checkout}`,result:false})

        }else{
            res.send({msg:`you can reserve on ${book.checkInDate} `,result:true})
        }
        

 }else{
    res.send({msg:`you can reserve on ${book.checkInDate} `,result:true})

 }

 }
module.exports={ReservationController,compareReserve}