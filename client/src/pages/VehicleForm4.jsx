import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { endDate, startDate } from '../store/bookingReducer'
import axios from 'axios';

function VehicleForm4() {
    const dispatch = useDispatch()
    const data = useSelector(s=>s.data);
    const [status,setStatus] = useState("")

    console.log(data)
    const handleChange=(e)=>{
        if(e.target.id==="start_date"){
            dispatch(startDate(e.target.value))
        }
        else{
            dispatch(endDate(e.target.value))
        }
    }

    const handleBooking=async()=>{
        try{
            const res = await axios.post("http://localhost:4000/api/booking/post",data);
            if(res.data){
                setStatus("Booking Successfull")
                console.log(res.data)
            }
        }catch(error){
            setStatus(error.response.data)
        }
    }

  return (
    <div>
        <h2 className='text-2xl text-center'>Select start date and end date</h2>
        <form
          
          className="flex mx-auto flex-col  items-center mt-10 bg-slate-300 p-8 rounded-md shadow-xl w-[400px] max-md:w-[300px] max-md:mx-4 "
        >
            <div className="flex justify-between w-[50%] my-4">
            <label htmlFor='start_date'>Start date</label>
            <input type='date' id='start_date' className='p-3 rounded-md'onChange={handleChange}></input>
            </div>
            
            <div className="flex justify-between w-[50%] my-4">
            <label htmlFor='end_date'>End date</label>
            <input type='date' id='end_date' className='p-3 rounded-md' onChange={handleChange}></input>
            </div>
            <button type='button' className='bg-red-500 p-3 rounded-md' onClick={handleBooking}>Book Now</button>
        </form>
        {status&&<div>
            <p className='text-xl text-red-500 text-center'>{status}</p>
            
            </div>}

    </div>
  )
}

export default VehicleForm4