import "./button.css";

function Button(props) {
  return (
    <button className="button">
      {props.img}
      {props.text}
    </button>
  );
}
export default Button;
