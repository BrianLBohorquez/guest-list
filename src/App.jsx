import { useState } from "react";
import GuestList from "./guests/guestList.jsx";
import GuestDetails from "./guests/guestDetails.jsx";

export default function App() {
  const [selectedGuestId, setSelectedGuestId] = useState(null);

  return (
    <main>
      {selectedGuestId ? (
        <GuestDetails
          guestId={selectedGuestId}
          setSelectedGuestId={setSelectedGuestId}
        />
      ) : (
        <GuestList setSelectedGuestId={setSelectedGuestId} />
      )}
    </main>
  );
}
