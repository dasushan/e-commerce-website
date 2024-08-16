import Footer from "../components/Footer/Footer";
const Home = () => {
  return (
    <>
      {/* <div className="container-lg">
        <div className="d-flex flex-column min-vh-100">This is home page</div>
      </div> */}
      <div className="container-lg d-flex justify-content-center p-4 bg-secondary mb-4">
        <div className="fs-5 text-white border border-white px-3 py-2">Get our Latest Album</div>
      </div>
      <div className="container-lg min-vh-100">
        <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-around align-items-center mb-2 border-2 border-bottom border-dark">
                <div>JUL16</div>
                <div>DETROIT, MI</div>
                <div>DTE ENERGY MUSIC THEATRE</div>
                <div className="btn btn-info text-white fw-bolder">BUY TICKETS</div>
            </li>
            <li className="list-group-item d-flex justify-content-around align-items-center mb-2 border-2 border-bottom border-dark">
                <div>JUL17</div>
                <div>TORONTO, ON   </div>
                <div>BUDWISER STAGE    </div>
                <div className="btn btn-info text-white fw-bolder">BUY TICKETS</div>
            </li>
            <li className="list-group-item d-flex justify-content-around align-items-center mb-2 border-2 border-bottom border-dark">
                <div>JUL22</div>
                <div>DETROIT, MI</div>
                <div>DTE ENERGY MUSIC THEATRE</div>
                <div className="btn btn-info text-white fw-bolder">BUY TICKETS</div>
            </li>
            <li className="list-group-item d-flex justify-content-around align-items-center mb-2 border-2 border-bottom border-dark">
                <div>JUL16</div>
                <div>DETROIT, MI</div>
                <div>DTE ENERGY MUSIC THEATRE</div>
                <div className="btn btn-info text-white fw-bolder">BUY TICKETS</div>
            </li>
            <li className="list-group-item d-flex justify-content-around align-items-center mb-2 border-2 border-bottom border-dark">
                <div>JUL16</div>
                <div>DETROIT, MI</div>
                <div>DTE ENERGY MUSIC THEATRE</div>
                <div className="btn btn-info text-white fw-bolder">BUY TICKETS</div>
            </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Home;
