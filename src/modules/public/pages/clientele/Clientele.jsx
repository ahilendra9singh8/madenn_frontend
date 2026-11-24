import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import clientData from "../../data/clientData";
import ClientCard from "../../../../components/cards/ClientCard";
import "./Clientele.css";

function Clientele() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => {
    return [
      "All",
      ...new Set(clientData.map((client) => client.category)),
    ];
  }, []);

  const filteredClients = useMemo(() => {
    return clientData.filter((client) => {
      const searchMatch =
        client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.shortName.toLowerCase().includes(searchTerm.toLowerCase());

      const categoryMatch =
        selectedCategory === "All" ||
        client.category === selectedCategory;

      return searchMatch && categoryMatch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="clientele-page">
      <section className="clientele-banner">
        <div className="clientele-banner-overlay">
          <div className="container">
            <span>OUR NETWORK</span>
            <h1>Our Clients</h1>
            <p>
              Building strong relationships through quality infrastructure
              and reliable project delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="clientele-section">
        <div className="container">
          <div className="clientele-heading">
            <span className="section-eyebrow">OUR CLIENTELE</span>
            <h2>Trusted Relationships</h2>
            <p>
              We work with government departments and organizations across
              multiple infrastructure sectors.
            </p>
          </div>

          <div className="clientele-toolbar">
            <div className="clientele-search">
              <Search size={19} />
              <input
                type="text"
                placeholder="Search clients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="clientele-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  className={
                    selectedCategory === category ? "active" : ""
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="clientele-grid">
            {filteredClients.length > 0 ? (
              filteredClients.map((client) => (
                <ClientCard key={client.id} client={client} />
              ))
            ) : (
              <div className="clientele-empty">
                <h3>No clients found</h3>
                <p>Try another search term or category.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Clientele;