import logo from "../images/react.png";

function Header() {
  return (
    <div>
      <img src={logo} style={{ width: "30px" }} alt="React logo" />
      <span> Welcome to Taskopedia</span>
    </div>
  );
}

export default Header;