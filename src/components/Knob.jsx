import React from "react";

const Knob = ({ selected = false, onClick, ariaLabel }) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={selected}
      aria-label={ariaLabel}
      onClick={onClick}
      style={{
        width: "44px",
        height: "24px",
        borderRadius: "999px",
        background: selected ? "#000000" : "#d1d5db", // ✅ Black when ON
        position: "relative",
        transition: "all 0.3s ease",
        cursor: "pointer",
        border: "none",
        outline: "none",
      }}
    >
      <span
        style={{
          position: "absolute",
          top: "2px",
          left: selected ? "22px" : "2px",
          width: "20px",
          height: "20px",
          background: "#fff",
          borderRadius: "50%",
          transition: "all 0.3s ease",
          boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
        }}
      />
    </button>
  );
};

export default Knob;