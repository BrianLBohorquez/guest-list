import { useState, useEffect } from "react";
import "./guests.css";
import { getGuest } from "../guests.js";

export default function GuestDetails({ guestId, setSelectedGuestId }) {
  const [guest, setGuest] = useState(null);

  useEffect(() => {
    const loadGuest = async () => {
      const oneGuest = await getGuest(guestId);
      setGuest(oneGuest);
    };
    loadGuest();
  }, [guestId]);

  if (!guest) {
    return <p>Loading guest...</p>;
  }

  return (
    <section>
      <h1>{guest.name}</h1>
      <p>Email: {guest.email}</p>
      <p>Phone: {guest.phone}</p>
      <p>Job: {guest.job}</p>
      <p>{guest.bio}</p>
      <button onClick={() => setSelectedGuestId(null)}>Back</button>
    </section>
  );
}
