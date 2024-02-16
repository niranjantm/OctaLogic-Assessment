import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { vehicleId, vehicleReducer } from '../store/bookingReducer'
import { useNavigate } from 'react-router-dom'

function VehicleForm3() {
    const vehicle = useSelector(state=>state.data.vehicle)
    const dispach = useDispatch()
    const navigate = useNavigate()

    const handleClick=()=>{
        dispach(vehicleId(vehicle.id))
        dispach(vehicleReducer(vehicle.model))
        navigate("/vf4")
        
    }
  return (
    <div>
        <h2 className='text-2xl text-center'>Select the Model</h2>
        <form
          
          className="flex mx-auto flex-col  items-center mt-10 bg-slate-300 p-8 rounded-md shadow-xl w-[400px] max-md:w-[300px] max-md:mx-4 "
        >
            <div className="flex justify-between w-[50%]">
            <label htmlFor='model'className="text-xl">{vehicle.model}</label>
            <input type='radio' id='model' onClick={handleClick}></input>
            </div>
            
        </form>
    </div>
  )
}

export default VehicleForm3