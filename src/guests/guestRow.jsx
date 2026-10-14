import "./guests.css";

export default function GuestRow({ guest, setSelectedGuestId }) {
  return (
    <tr onClick={() => setSelectedGuestId(guest.id)}>
      <td>{guest.name}</td>
      <td>{guest.email}</td>
      <td>{guest.phone}</td>
    </tr>
  );
}
