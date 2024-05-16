const ButtonComponent = ({
  label = "Nombre por defecto",
  description,
  myFunction,
}) => {
  return (
    <button onClick={myFunction} title={description}>
      {label}
    </button>
  );
};

export default ButtonComponent;
