import React from "react";

function Mailto({ email, subject, body, ...props }) {
  return (
    <a
      href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}
      style={{ textDecoration: "none" }}
    >
      {props.children}
    </a>
  );
}

export default Mailto;
