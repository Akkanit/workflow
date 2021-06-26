import React from 'react'
import {
    NavLink
  } from "react-router-dom";
const Home = () => {
    return <div>
        You are...
        <NavLink  to="/Boss" ><div>Boss</div></NavLink>
        <NavLink  to="/Employee" ><div>Employee</div></NavLink>
        </div>
}

export default Home