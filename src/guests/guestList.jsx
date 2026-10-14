import { useState, useEffect } from "react";
import "./guests.css";
import { getGuests } from "../guests.js";
import GuestRow from "./guestRow.jsx";

export default function GuestList({ setSelectedGuestId }) {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    const loadGuests = async () => {
      const allGuests = await getGuests();
      setGuests(allGuests);
    };
    loadGuests();
  }, []);

  return (
    <section>
      <h1>Guest List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((guest) => (
            <GuestRow
              key={guest.id}
              guest={guest}
              setSelectedGuestId={setSelectedGuestId}
            />
          ))}
        </tbody>
      </table>
      <p>Select a guest to see more details.</p>
    </section>
  );
}
