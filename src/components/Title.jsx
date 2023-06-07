// Title.js
import React from 'react';

function Title({ text }) {
  const createSpans = (text) => 
    text.split("").map((char, index) => (
      <span
        key={index}
        className="char"
        style={{ "--animation-delay": `${index * 50}ms` }}
      >
        {char}
      </span>
    ));

  return <h1 className="floating-text">{createSpans(text)}</h1>;
}

export default Title;
