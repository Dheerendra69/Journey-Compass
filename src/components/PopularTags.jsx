import React from "react";
import { useTagsQuery } from "../hooks";

function PopularTags({ selectedTags, setSelectedTags }) {
  const { isTagsLoading, tags } = useTagsQuery();

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const clearFilters = () => {
    setSelectedTags([]);
  };

  return (
    <div className="p-4 rounded-4 shadow-sm">
      <h5 className="fw-bold mb-3 text-gradient text-center text-md-start">
        🔥 Popular Tags
      </h5>

      {selectedTags.length > 0 && (
        <div className="mb-3 text-center text-md-start">
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={clearFilters}
          >
            Clear Filters
          </button>
        </div>
      )}

      {isTagsLoading ? (
        <div className="text-center text-muted">Loading tags...</div>
      ) : (
        <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
          {tags?.tags?.map((tag) => {
            const isSelected = selectedTags.includes(tag);
            return (
              <span
                key={tag}
                className="tag-pill px-3 py-2 rounded-pill"
                style={{
                  background: isSelected
                    ? "linear-gradient(135deg, #2980b9 0%, #6dd5fa 100%)"
                    : "linear-gradient(135deg, #74ebd5 0%, #9face6 100%)",
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  boxShadow: isSelected
                    ? "0 4px 12px rgba(0, 0, 0, 0.2)"
                    : "0 2px 8px rgba(0, 0, 0, 0.1)",
                  transform: isSelected ? "scale(1.05)" : "scale(1)",
                  transition: "all 0.2s ease",
                  cursor: "pointer",
                }}
                onClick={() => toggleTag(tag)}
              >
                #{tag}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default PopularTags;
