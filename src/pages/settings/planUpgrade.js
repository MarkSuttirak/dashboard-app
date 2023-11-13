import React, { useState,useEffect  } from 'react';
import { user } from "src/client/api";
export default function PlanUpgrades() {


  const fetchData = async()=> {
      console.log( await  user.get_plans() )
  }


  useEffect(()=>{
    fetchData()
  },[] )


   
    return (
        <h1 className="text-[39px] font-semibold text-[#151515]">Free trial</h1>
      )
}