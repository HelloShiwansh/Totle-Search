import React, { useState } from "react";

const topicsData = [
  { id: 1, name: "Thermodynamics", category: "Physics" },
  { id: 2, name: "Organic Chemistry", category: "Chemistry" },
  { id: 3, name: "Calculus", category: "Mathematics" },
  { id: 4, name: "Microbiology", category: "Biology" },
  { id: 5, name: "Quantum Mechanics", category: "Physics" }
];

const TopicSearch = () => {
  const [query, setQuery] = useState("");

  const filteredTopics = topicsData.filter((topic) =>
    topic.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial"
      }}
    >
      <h2 style={{ textAlign: "center" }}>Totle Topic Search By Shiwansh</h2>

      <input
        type="text"
        placeholder="Search topics..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          marginBottom: "20px",
          borderRadius: "5px",
          border: "1px solid #ccc"
        }}
      />

      {filteredTopics.length === 0 ? (
        <p style={{ textAlign: "center", color: "gray" }}>No topics found</p>
      ) : (
        filteredTopics.map((topic) => (
          <div
            key={topic.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "8px",
              marginBottom: "12px",
              background: "#f9f9f9"
            }}
          >
            <h3 style={{ margin: "0 0 5px 0" }}>{topic.name}</h3>
            <p style={{ margin: 0, color: "#555" }}>
              Category: {topic.category}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default TopicSearch;
