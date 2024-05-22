const FooterBarComponent = () => {
  const FooterStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#23262C",
    color: "white",
    padding: "20px 0",
  };
  return (
    <footer className="text-center mt-5">
      <div style={FooterStyles}>
        <p>
          <span>SkullClothing ©Copyright 2024 </span>
        </p>
      </div>
    </footer>
  );
};

export default FooterBarComponent;
