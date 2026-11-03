import { createContext, useContext, useState } from "react";

const TicketContext = createContext();

export function TicketProvider({ children }) {
  const [tickets, setTickets] = useState([]);

  // Menambahkan ticket
  const addTicket = (ticket) => {
    setTickets((previousTickets) => [
      ...previousTickets,
      {
        ...ticket,
        id: Date.now(),
        ticketNumber: `HD-${String(previousTickets.length + 1).padStart(3, "0")}`,
        status: "Open",
        createdAt: new Date().toLocaleString("id-ID"),
      },
    ]);
  };

  // Mengubah status ticket
  const updateTicketStatus = (id, status) => {
    setTickets((previousTickets) =>
      previousTickets.map((ticket) =>
        ticket.id === id ? { ...ticket, status } : ticket
      )
    );
  };

  // Menghapus single ticket (Latihan point f)
  const deleteTicket = (id) => {
    setTickets((previousTickets) =>
      previousTickets.filter((ticket) => ticket.id !== id)
    );
  };

  // Menghapus seluruh ticket
  const clearTickets = () => {
    setTickets([]);
  };

  return (
    <TicketContext.Provider
      value={{
        tickets,
        addTicket,
        updateTicketStatus,
        deleteTicket,
        clearTickets,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
}

export function useTicket() {
  return useContext(TicketContext);
}