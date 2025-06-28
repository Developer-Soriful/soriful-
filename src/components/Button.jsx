const Button = ({ text, className, id, download }) => {
  const handleClick = (e) => {
    if (download) {
      // If download prop is true, don't prevent default and let the link work
      return;
    }
    
    e.preventDefault(); // Stop the link from jumping instantly

    const target = document.getElementById("counter"); // Find the section with ID "counter"

    // Only scroll if we found the section and an ID is passed in
    // taht prevents the contact button from scrolling to the top
    if (target && id) {
      const offset = window.innerHeight * 0.15; // Leave a bit of space at the top

      // Calculate how far down the page we need to scroll
      const top =
        target.getBoundingClientRect().top + window.pageYOffset - offset;

      // Scroll smoothly to that position
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <a
      href={download ? "/resume.pdf" : "#"}
      download={download ? "Soriful_Islam_Resume.pdf" : undefined}
      onClick={handleClick}
      className={`${className ?? ""} cta-wrapper`} // Add base + extra class names
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
