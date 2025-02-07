import React from "react";

export const ArrayDemo2 = () => {

    var students = [
        {
            name:"Kunal",
            age:22,
            marks:78
        },
        {
            name:"Ajay",
            age:23,
            marks:80
        },
        {
            name:"Raj",
            age:21,
            marks:66
        }
    ]


  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "red" }}>Array Demo 2</h1>
      {
        students.map((student)=>{
           
            return <div>
                <h1>Name = {student.name}</h1>
                <h2>Age = {student.age}</h2>
                <h3>Marks = {student.marks}</h3>
            </div>
        })
      }
    </div>
  );
};