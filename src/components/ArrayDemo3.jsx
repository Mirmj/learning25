import React from 'react'



export const ArrayDemo3 = () => {
    var employees =[
        {
            id: 1111,
            name: "Mir",
            age: 20,
            salary: 1000,
            gender: "male",
          },
          {
            id: 1110,
            name: "Mahi",
            age: 26,
            salary: 15000,
            gender: "female",
          },
          {
            id: 1100,
            name: "Mustu",
            age: 24,
            salary: 35000,
            gender: "male",
          },
          {
            id: 1011,
            name: "MD",
            age: 25,
            salary: 130000,
            gender: "male",
          },

    ]
  return (

    
    <div style={{textAlign:'center'}}>
        
        <h1>ArrayDemo3</h1>
        <div>
        <table class ="table table-dark"> 
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>SALARY</th>                  
                    <th>GENDER</th> 
                </tr>
            </thead>
            <tbody>
                {employees.map((emp)=>{
                    return(
                    <tr>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.age}</td>
                            <td>{emp.salary}</td>
                            <td>{emp.gender}</td>
                    </tr>
                    );

                })}
            </tbody>
            
        

        </table>

        </div>
        </div>
  );
};
