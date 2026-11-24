import "./ClientCard.css";

function ClientCard({ client }) {
  return (
    <article className="client-card">
      <div className="client-card-logo">
        {client.logo ? (
          <img src={client.logo} alt={`${client.name} logo`} />
        ) : (
          <span>{client.logoText || client.shortName}</span>
        )}
      </div>

      <div className="client-card-content">
        <span className="client-card-category">{client.category}</span>

        <h3>{client.name}</h3>

        <p>{client.description}</p>
      </div>
    </article>
  );
}

export default ClientCard;