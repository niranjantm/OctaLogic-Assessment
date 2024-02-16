import React, { useState } from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux"
import {userSignIn} from "../store/bookingReducer";
import { useNavigate } from "react-router-dom";

function User() {
  const [formData, setFormData] = useState({ first_name: "", last_name: "" });
  const [error, setError] = useState("");
  const dispatch  = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setError("");
    if (e.target.id === "last_name") {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    } else {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.first_name === "") {
      setError("Enter valid names");
    } else if (formData.last_name === "") {
      setError("Enter valid names");
    } else {
      try {
        const res = await axios.post(
          "http://localhost:4000/api/post/user",
          formData
        );
        if(res.data.id){
          dispatch(userSignIn(res.data.id))
          navigate("/vf1")
        }
        
      } catch (error) {
        setError(error.message);
      }
    }
  };

  return (
    <div>
      <div>
        <h2 className="text-2xl text-center ">First, Whats your name ?</h2>
      </div>

      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center mt-10 bg-slate-300 p-8 rounded-md shadow-xl w-[400px] max-md:w-[300px] max-md:mx-4 "
        >
          <label className="block">First Name</label>
          <input
            type="text"
            className="p-2 border border-gray-600 rounded-lg w-full"
            required
            id="first_name"
            onChange={handleChange}
          ></input>

          <label className="block mt-4">Last Name</label>
          <input
            type="text"
            className="p-2 border border-gray-600 rounded-lg w-full"
            // required
            id="last_name"
            onChange={handleChange}
          ></input>
          {error && (
            <p className="block text-red-500 text-center">{error}</p>
          )}
          <div className="w-full mt-5">
            <button
              type="submit"
              className="bg-red-600 text-white w-full p-3 rounded-lg hover:opacity-85"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default User;
