import './Header.css';
const Header = () => {
  return (
    <>
      <div className="container text-center">
        <div className="row header">
          <div className="col">Home</div>
          <div className="col">Store</div>
          <div className="col">About</div>
        </div>
        <div className="row">
          <div className="col">cart</div>
        </div>
      </div>
      <div className='container headline'> The Generics</div>
    </>
  );
};

export default Header;
