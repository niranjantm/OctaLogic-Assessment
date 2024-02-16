import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet,Navigate } from 'react-router-dom';

function PrivatePages() {
    const userId = useSelector(state=>state.data.user_id);
  return userId?<Outlet></Outlet>:<Navigate to="/"></Navigate>
}

export default PrivatePages