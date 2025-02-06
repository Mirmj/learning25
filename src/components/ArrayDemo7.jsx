import React from "react";

export const ArrayDemo7 = () => {
  var PlayersData = [
    {
      id: 1,
      jNumber: 7,
      name: "C.Ronaldo",
      age: 39,
      goals: 924,
      club: "Al Nassr",
    },
    {
      id: 2,
      jNumber: 10,
      name: "Lionel Messi",
      age: 36,
      goals: 820,
      club: "Inter Miami",
    },
    {
      id: 3,
      jNumber: 9,
      name: "Zlatan Ibrahimovic",
      age: 42,
      goals: 570,
      club: "Retired",
    },
    {
      id: 4,
      jNumber: 11,
      name: "Robert Lewandowski",
      age: 34,
      goals: 650,
      club: "Barcelona",
    },
    {
      id: 5,
      jNumber: 8,
      name: "Andres Iniesta",
      age: 39,
      goals: 150,
      club: "Emirates Club",
    },
    {
      id: 6,
      jNumber: 6,
      name: "Xavi Hernandez",
      age: 44,
      goals: 85,
      club: "Retired",
    },
    {
      id: 7,
      jNumber: 14,
      name: "Thierry Henry",
      age: 46,
      goals: 411,
      club: "Retired",
    },
    {
      id: 8,
      jNumber: 10,
      name: "Neymar Jr",
      age: 32,
      goals: 400,
      club: "Al Hilal",
    }
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "red", textAlign: "center" }}>Top Football Players</h1>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>J-Number</th>
            <th>Player Name</th>
            <th>Age</th>
            <th>Goals</th>
            <th>Club</th>
          </tr>
        </thead>
        <tbody>
          {PlayersData.map((player) => {
            return (
              <tr key={player.id}>
                <td>{player.id}</td>
                <td>{player.jNumber}</td>
                <td>
                  {player.age > 35 && player.name !== "C.Ronaldo" ? `${player.name}_Plz Retire` : player.name}
                </td>
                <td>{player.age}</td>
                <td style={{ backgroundColor: player.goals > 900 ? "grey" : player.goals < 300 ? "green" : "black" }}>
                  {player.goals}
                </td>
                <td>{player.club}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
