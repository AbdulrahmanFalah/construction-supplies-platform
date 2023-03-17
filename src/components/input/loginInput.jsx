function LoginInput({ type, text, icon, onChange }) {
  return (
    <div className="input">
      <form>
        <div className="group">
          <input type={type} onChange={onChange} required />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>
            <span>
              <img className="icon" src={icon} alt="" />
            </span>
            {text}{" "}
          </label>
        </div>
      </form>
    </div>
  );
}
export default LoginInput;
