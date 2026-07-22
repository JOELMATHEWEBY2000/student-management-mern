import { useState } from "react";

function SearchBar({ onSearch }) {
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    onSearch(keyword);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const clearSearch = () => {
    setKeyword("");
    onSearch("");
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h4 className="mb-3">Search Student</h4>

        <div className="row">
          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              placeholder="Enter student name..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={handleKeyPress}
            />
          </div>

          <div className="col-md-3 d-grid gap-2">
            <button
              className="btn btn-primary"
              onClick={handleSearch}
            >
              Search
            </button>

            <button
              className="btn btn-secondary"
              onClick={clearSearch}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;