import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { vehicleReducer } from '../store/bookingReducer';
import { useNavigate } from 'react-router-dom';

function VehicleForm2() {

    const data = useSelector(state=>state.data.vehicle);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    console.log(data)

  return (
    <div>
        <h2 className='text-center text-2xl'>Select type </h2>
        <form
          
          className="flex mx-auto flex-col  items-center mt-10 bg-slate-300 p-8 rounded-md shadow-xl w-[400px] max-md:w-[300px] max-md:mx-4 "
        >
            {data.map((item,index)=>{
                return(
                    <div key={index} className="flex justify-between w-[50%]">
                        <label className="text-xl">{item.type}</label>
                        <input type='radio' id={index}  onClick={(e)=>{
                            dispatch(vehicleReducer(data[index]))
                            navigate("/vf3")
                        }}></input>
                    </div>
                )
            })}
        </form>
    </div>
  )
}

export default VehicleForm2