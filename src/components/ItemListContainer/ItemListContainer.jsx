const ItemListContainer = ({ greeting }) => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    padding: "5px",
    border: "1px solid #ddd",
    backgroundColor: "#ff4e2f",
    borderRadius: "5px",
    textAlign: "center",
    color: "#fff",
    width: "100%",
  };
  return (
    <div style={containerStyle}>
      <p className="pt-2">{greeting}</p>
    </div>
  );
};

export default ItemListContainer;
