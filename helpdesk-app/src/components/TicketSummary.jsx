import { useTicket } from "../context/TicketContext";

function TicketSummary() {
  const { tickets } = useTicket();

  // Status counts
  const total = tickets.length;
  const open = tickets.filter((ticket) => ticket.status === "Open").length;
  const progress = tickets.filter(
    (ticket) => ticket.status === "In Progress"
  ).length;
  const resolved = tickets.filter(
    (ticket) => ticket.status === "Resolved"
  ).length;

  // Category counts (Latihan point g)
  const hardwareCount = tickets.filter((t) => t.category === "Hardware").length;
  const softwareCount = tickets.filter((t) => t.category === "Software").length;
  const networkCount = tickets.filter((t) => t.category === "Network").length;
  const accountCount = tickets.filter((t) => t.category === "Account").length;
  const securityCount = tickets.filter((t) => t.category === "Security").length;

  return (
    <div className="mb-4">
      {/* Status Summary */}
      <div className="row g-3 mb-3">
        <div className="col-md-3">
          <div className="card shadow-sm text-center">
            <div className="card-body">
              <h6 className="text-muted">Total Ticket</h6>
              <h2>{total}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm text-center">
            <div className="card-body">
              <h6 className="text-muted">Open</h6>
              <h2>{open}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm text-center">
            <div className="card-body">
              <h6 className="text-muted">In Progress</h6>
              <h2>{progress}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm text-center">
            <div className="card-body">
              <h6 className="text-muted">Resolved</h6>
              <h2>{resolved}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Kategori Summary (Latihan point g) */}
      <div className="card shadow-sm">
        <div className="card-body py-2">
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
            <span className="fw-bold text-secondary">Tiket per Kategori:</span>
            <span className="badge bg-light text-dark border">
              Hardware: <strong>{hardwareCount}</strong>
            </span>
            <span className="badge bg-light text-dark border">
              Software: <strong>{softwareCount}</strong>
            </span>
            <span className="badge bg-light text-dark border">
              Network: <strong>{networkCount}</strong>
            </span>
            <span className="badge bg-light text-dark border">
              Account: <strong>{accountCount}</strong>
            </span>
            <span className="badge bg-light text-dark border">
              Security: <strong>{securityCount}</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketSummary;