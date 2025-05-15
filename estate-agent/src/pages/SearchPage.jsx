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
      {/* Search Form Section */}
      <section className="form-section">
        <SearchForm onSearch={handleSearch} />
      </section>

      {/* Available Properties Section */}
      {!showSearchResults && (
        <section className="available-properties">
          <h1>Available Properties</h1>
          <ResultsList
            properties={properties}
            onAddToFavorites={addToFavorites}
            favorites={favorites}
          />
        </section>
      )}

      {/* Search Results Section */}
      {showSearchResults && (
        <section className="search-results">
          <h1>Search Results</h1>
          {searchResults.length > 0 ? (
            <ResultsList
              properties={searchResults}
              onAddToFavorites={addToFavorites}
              favorites={favorites}
            />
          ) : (
            <p>No properties match your search criteria.</p>
          )}
        </section>
      )}

      {/* Favorites Section */}
      <section className="favorites-section">
        <h1>Favorites</h1>
        <ResultsList
          properties={favorites}
          onRemoveFromFavorites={removeFromFavorites}
          favorites={favorites}
          isFavorites={true}
        />
      </section>
    </div>
  );
};

export default SearchPage;
