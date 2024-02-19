import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { vehicleId, vehicleReducer } from '../store/bookingReducer'
import { useNavigate } from 'react-router-dom'

function VehicleForm3() {
    const vehicle = useSelector(state=>state.data.vehicle)
    const dispach = useDispatch()
    const navigate = useNavigate()
    const [unavailable,setUnavailable] = useState({});

    const handleClick=()=>{
        dispach(vehicleId(vehicle.id))
        dispach(vehicleReducer(vehicle.model))
        navigate("/vf4")
        
    }

    useEffect(()=>{
      const availability = async()=>{
        const data = await fetch("http://localhost:4000/api/available")
        const res = await data.json();
        setUnavailable(res[0]);
    }
      availability();

    })
  return (
    <div>
        <h2 className='text-2xl text-center'>Select the Model</h2>
        <form
          
          className="flex mx-auto flex-col  items-center mt-10 bg-slate-300 p-8 rounded-md shadow-xl w-[400px] max-md:w-[300px] max-md:mx-4 "
        >
            <div className="flex justify-between w-[50%]">
            <label htmlFor='model'className="text-xl">{vehicle.model}</label>
            {unavailable.model!==vehicle.model?<input type='radio' id='model' onClick={handleClick}></input>:<div className='flex flex-col justify-center ml-5'><p className='text-red-500 items-center'>Booked</p></div>}
            </div>
            
        </form>
    </div>
  )
}

export default VehicleForm3