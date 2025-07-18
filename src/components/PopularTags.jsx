import React from "react";
import { useTagsQuery } from "../hooks";

function PopularTags() {
  const { isTagsLoading, tags } = useTagsQuery();

  return (
    <div className="p-4 rounded-4 shadow-sm ">
      <h5 className="fw-bold mb-3 text-gradient text-center text-md-start">
        🔥 Popular Tags
      </h5>

      {isTagsLoading ? (
        <div className="text-center text-muted">Loading tags...</div>
      ) : (
        <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
          {tags?.tags?.map((tag) => (
            <span
              key={tag}
              className="tag-pill px-3 py-2 rounded-pill"
              style={{
                background: "linear-gradient(135deg, #74ebd5 0%, #9face6 100%)",
                color: "#fff",
                fontWeight: 500,
                fontSize: "0.95rem",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.2s ease",
                cursor: "pointer",
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default PopularTags;
