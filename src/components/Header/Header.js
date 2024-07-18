import './Header.css';
const Header = (props) => {
  return (
    <>
      <div className="container text-center">
        <div className="row gx-5 header">
          <div className="col">Home</div>
          <div className="col">Store</div>
          <div className="col">About</div>
        </div>
        <div className="row">
          <div className="col">
            <button onClick={props.onShowCart}>cart</button>
          </div>
        </div>
      </div>
      <div className='container headline'> The Generics</div>
    </>
  );
};

export default Header;
