import "./button.css";

function Button(props) {
  return (
    <button className="button" type={props.type}>
      {props.img}
      {props.text}
    </button>
  );
}
export default Button;
