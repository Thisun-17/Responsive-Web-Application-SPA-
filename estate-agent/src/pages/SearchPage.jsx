import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import ResultsList from "../components/ResultsList";
import properties from "../data/properties";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]); // Stores search results
  const [favorites, setFavorites] = useState([]); // Stores favorite properties
  const [showSearchResults, setShowSearchResults] = useState(false); // Toggles between properties and search results

  // Add to Favorites
  const addToFavorites = (property) => {
    if (!favorites.some((fav) => fav.id === property.id)) {
      setFavorites([...favorites, property]);
    }
  };

  // Remove from Favorites
  const removeFromFavorites = (propertyId) => {
    setFavorites(favorites.filter((fav) => fav.id !== propertyId));
  };

  // Handle Search Form Submission
  const handleSearch = (criteria) => {
    const filteredResults = properties.filter((property) => {
      const matchesType = criteria.type === "any" || property.type.toLowerCase() === criteria.type;
      const matchesPrice =
        (!criteria.minPrice || property.price >= Number(criteria.minPrice)) &&
        (!criteria.maxPrice || property.price <= Number(criteria.maxPrice));
      const matchesBedrooms = !criteria.bedrooms || property.bedrooms >= Number(criteria.bedrooms);
      const matchesPostcode = !criteria.postcode || property.postcode.startsWith(criteria.postcode);
      return matchesType && matchesPrice && matchesBedrooms && matchesPostcode;
    });
    setSearchResults(filteredResults);
    setShowSearchResults(true); // Show the search results section
  };
  return (
    <div className="page-container">
      {/* Welcome Banner */}      <section className="welcome-banner">
        <div className="welcome-content">
          <h2>Find Your Dream Home with Prestige Estates</h2>
          <p>Discover exceptional properties tailored to your discerning taste and lifestyle</p>
        </div>
      </section>
      
      {/* Search Form Section */}
      <section className="form-section">
        <h3 className="section-title">Search Properties</h3>
        <SearchForm onSearch={handleSearch} />
      </section>

      {/* Available Properties Section */}
      {!showSearchResults && (
        <section className="available-properties">
          <h3 className="section-title">Featured Properties</h3>
          <ResultsList
            properties={properties}
            onAddToFavorites={addToFavorites}
            favorites={favorites}
          />
        </section>
      )}      {/* Search Results Section */}
      {showSearchResults && (
        <section className="search-results">
          <h3 className="section-title">Search Results</h3>
          {searchResults.length > 0 ? (
            <ResultsList
              properties={searchResults}
              onAddToFavorites={addToFavorites}
              favorites={favorites}
            />
          ) : (
            <div className="no-results">
              <p>No properties match your search criteria.</p>
              <button className="back-button" onClick={() => setShowSearchResults(false)}>
                Return to Featured Properties
              </button>
            </div>
          )}
        </section>
      )}      {/* Favorites Section */}
      <section className="favorites-section">
        <h3 className="section-title">Your Favorites</h3>
        {favorites.length > 0 ? (
          <ResultsList
            properties={favorites}
            onRemoveFromFavorites={removeFromFavorites}
            favorites={favorites}
            isFavorites={true}
          />        ) : (
          <div className="no-favorites">
            <p>You haven&apos;t added any properties to your favorites yet.</p>
            <p>Browse our listings and click the heart icon to save properties you love.</p>          </div>
        )}
      </section>
    </div>
  );
};

export default SearchPage;
