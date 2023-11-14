import React, { useState,useEffect  } from 'react';
import { useUser } from "../../hooks/useUser";
import { EditProfileForm } from '../../components/editProfileForm'

export default function AccountForm() {
  const { user } = useUser();
  const [userData,setuserData]=useState(null)
  const fetchData = async()=> {
    setuserData(await user)
  }
  useEffect(()=>{
    fetchData()
  },[] )
  fetchData()
 
  return userData ? <EditProfileForm preloadedValues={userData}/> : <div>Loading...</div>
}