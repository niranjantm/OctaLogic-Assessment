import axios from "axios"
import { useDispatch } from "react-redux"
import { vehicleReducer } from "../store/bookingReducer"
import { useNavigate } from "react-router-dom"

function VehicleForm1() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

const handleClick=async(e)=>{
    let type = e.target.id
    try{
        const res = await axios(`http://localhost:4000/api/get/${type}`)
        console.log(res.data);
        if(res.data){
            dispatch(vehicleReducer(res.data))
            navigate("/vf2");
        }
    }catch(error){
        console.log(error)
    }
    
}

  return (
    <div>
        <h2 className="text-center text-2xl">Select type of vehicle</h2>
        <form
          
          className="flex mx-auto flex-col  items-center mt-10 bg-slate-300 p-8 rounded-md shadow-xl w-[400px] max-md:w-[300px] max-md:mx-4 "
        >
            <div className="flex justify-between w-[50%]">
            <label htmlFor="bike" className="text-xl">Bike</label>
            <input type="radio" id="bike" onClick={handleClick}></input>
            </div>
            
            <div className="flex justify-between w-[50%] mt-4">
            <label htmlFor="car" className="text-xl">Car</label>
            <input type="radio" id="car" onClick={handleClick}></input>
            </div>
            
        </form>
    </div>
  )
}

export default VehicleForm1