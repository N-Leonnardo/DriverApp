import React, { useState } from "react";

export default function TripsTable(props) {
  const [trips, setTrips] = useState(props.trips);

  return (
    <div className="overflow-x-auto overflow-y-auto h-96 my-12">
      <table className="table ml-auto mr-auto max-w-full">
        <thead>
          <tr>
            <th>From</th>
            <th>Destination</th>
            <th>Price</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {trips?.map((trip, i) => (
            <tr className="hover" id={i}>
              <td>{trip.pickup}</td>
              <td>{trip.dropoff}</td>
              <td>{trip.price}</td>
              <td>{trip.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
