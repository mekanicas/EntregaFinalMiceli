const ItemListContainer = ({ greeting }) => {
  const containerStyle = {
    marginTop: "20px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    textAlign: "center",
    color: "#fff",
    width: "250px",
  };
  return (
    <div style={containerStyle}>
      <p>{greeting}</p>
    </div>
  );
};

export default ItemListContainer;
