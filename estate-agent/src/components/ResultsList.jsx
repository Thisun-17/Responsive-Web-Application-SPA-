import React from "react";
import { Link } from "react-router-dom";

const ResultsList = ({ properties, onAddToFavorites, onRemoveFromFavorites, favorites, isFavorites }) => {
  const isFavorite = (property) => favorites.some((fav) => fav.id === property.id);

  return (
    <div className="results-grid">
      {properties.map((property) => (
        <div key={property.id} className="property-card">
          <img src={property.images[0]} alt={property.type} className="property-image" />
          <h3>{property.type}</h3>
          <p>Price: £{property.price.toLocaleString()}</p>
          <p>Bedrooms: {property.bedrooms}</p>
          <p>Postcode: {property.postcode}</p> {/* Added Postcode Field */}
          
          <Link to={`/property/${property.id}`} className="details-link">
            View More Details
          </Link>
          {isFavorites ? (
            <button
              className="remove-button"
              onClick={() => onRemoveFromFavorites(property.id)}
            >
              Remove
            </button>
          ) : (
            <button
              className="favorites-button"
              onClick={() =>
                isFavorite(property)
                  ? console.log("Already a favorite")
                  : onAddToFavorites(property)
              }
            >
              {isFavorite(property) ? "In Favorites" : "Add to Favorites"}
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ResultsList;
