import React, { useState, useEffect } from 'react';

function AboutUs({ text }) {
  const [showMore, setShowMore] = useState(false);
  const [showBtn, setShowBtn] = useState(false)
  const [displayedText, setDisplayedText] = useState("");

  const updateText = () => {
    if (window.innerWidth < 768) {
      setDisplayedText(showMore ? text : text.slice(0, 290));
     setShowBtn(true)
    } else {
      setDisplayedText(text);
     setShowBtn(false)

    }
  };

  const handleShowMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  useEffect(() => {
    updateText();
    window.addEventListener("resize", updateText);

    return () => {
      window.removeEventListener("resize", updateText);
    };
  }, [showMore]);

  return (
    <div className="about">
      {displayedText}
{   showBtn ?  <div> {showMore ? (
        <button className="read-btn" onClick={handleShowMore}>
          Read Less
        </button>
      ) : (
        <button className="read-btn" onClick={handleShowMore}>
          Read More
        </button>
      )} </div> : null}
    </div>
  );
}

export default AboutUs;
