import React from "react";

const leaderboardData = [
  { name: "Helping Hands NGO", contributions: 120 },
  { name: "Green Leaf Restaurant", contributions: 95 },
  { name: "Sahara Foundation", contributions: 88 },
  { name: "Spice Junction", contributions: 75 },
  { name: "Smile Givers NGO", contributions: 68 },
];

const containerStyle = {
  minHeight: "100vh",
  backgroundColor: "#ffffff",
  padding: "40px",
  fontFamily: "Arial, sans-serif",
  border: "2px solidrgb(62, 99, 64)",
  borderRadius: "16px",
  margin: "40px auto",
  maxWidth: "1000px",
  boxSizing: "border-box",
  boxShadow: "0 8px 20px rgba(35, 99, 37, 0.2)",
};


const headingStyle = {
  fontSize: "36px",
  textAlign: "center",
  marginBottom: "40px",
  color: "#2e7d32",
  fontWeight: "bold",
};

const boxStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#ffffff",
  padding: "20px",
  marginBottom: "20px",
  borderRadius: "10px",
  borderLeft: "8px solidrgb(12, 85, 14)",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
};

const rankStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#388e3c",
  marginRight: "20px",
};

const nameStyle = {
  fontSize: "18px",
  color: "#333333",
};

const contributionsStyle = {
  fontSize: "20px",
  fontWeight: "600",
  color: "#555555",
};

const Leaderboard = () => {
  const sortedData = leaderboardData.sort((a, b) => b.contributions - a.contributions);

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Leaderboard</h1>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {sortedData.map((item, index) => (
          <div key={index} style={boxStyle}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={rankStyle}>#{index + 1}</div>
              <div style={nameStyle}>{item.name}</div>
            </div>
            <div style={contributionsStyle}>{item.contributions} Contributions</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
