import React, { useState } from 'react'

export const InputDemo1 = () => {

    const[name,setname] = useState("")
    const[email, setmail]= useState("")
    const[number,setNumber] =useState("")
    const[city,setcity] =useState("")
    const[country,setcountry] =useState("")
    const[password,setpassword] =useState("")
    const[confirmPassword,setconfirmPassword] =useState("")


    const nameHandler =(event)=>{

        setname(event.target.value)
    }
  return (
<div style={{textAlign:"center"}}>
        <h1 >INPUT DEMO 1</h1>
        <div>
            <label>Name</label>
            <input type='text' placeholder='enter name' onChange={(event)=>{nameHandler(event)}}></input>
            {name}
        </div>
        <div>
            <label>EMAIL</label>
            <input type='text' placeholder='enter email' onChange={(event)=>{setemail(event.target.value)}}></input>
                {email}
        </div>
        <div>
            <label>Number</label>
            <input type='number' placeholder='enter a number' onChange={(event)=>{setNumber(event.target.value)}}></input>
                {number}
        </div>
        <div>
            <label>City</label>
            <input type='text' placeholder='Enter city' onChange={(event)=>{setCity(event.target.value)}}></input>
                {city}
        </div>
        <div>
            <label>Country</label>
            <input type='text' placeholder='Enter country' onChange={(event)=>{setcountry(event.target.value)}}></input>
                {country}
        </div>
        <div>
            <label>password</label>
            <input type='password' placeholder='Enter password' onChange={(event)=>{setpassword(event.target.value)}}></input>
                {password}
        </div>
        <div>
            <label>ConfirmPassword</label>
            <input type='password' placeholder='Re-Enter password' onChange={(event)=>{setconfirmPassword(event.target.value)}}></input>
                {email}
        </div>
        


    </div>
  )
}
