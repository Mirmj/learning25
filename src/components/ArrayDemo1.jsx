import React from 'react'
var users =["mir","mjtabaraza","mustafa","mohhamad"]
export const ArrayDemo1 = () => {
  return (
    <div style={{textAlign:"center"}}>
        <h1 style={{textAlign:'center'}}>
        Araay demo
        </h1>
        {
            users.map((user)=>{
                return(<li>
                    {user}
                </li>)
            })
        }
        


    </div>
  )
}
