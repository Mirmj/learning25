import React from 'react';

export const ArrayDemo5 = () => {
    var Cities = [
        {
            id: 1,
            Cityname: "Rajkot",
            Population: 300000,
            Aqi: 400,
        },
        {
            id: 2,
            Cityname: "Jamnagar",
            Population: 40000,
            Aqi: 500,
        },
        {
            id: 3,
            Cityname: "Surendranagar",
            Population: 600000,
            Aqi: 50,
        },
        {
            id: 4,
            Cityname: "Ahmedabad",
            Population: 5000000,
            Aqi: 600,
        },
    ];

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>ArrayDemo-5</h1>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>CITYNAME</th>
                        <th>POPULATION</th>
                        <th>AQI</th>
                    </tr>
                </thead>
                <tbody>
                    {Cities.map((city) => {
                        return (
                            <tr key={city.id}>
                                <td>{city.id}</td>
                                <td>{city.Cityname}</td>
                                <td style={{ color: city.Population > 4000000 ? "red" : "black" }}>
                                    {city.Population}
                                </td>
                                <td style={{ color: city.Aqi > 500 ? "red" : city.Aqi < 200 ? "green" : "black" }}>
                                    {city.Aqi}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
