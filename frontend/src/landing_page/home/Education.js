export default function Education() {
  return (
    <div className="container mt-5 gx-3">
      <div className="row mt-5">
        <div className="col-6">
          <img src="media\images\education.svg"></img>
        </div>
        <div className="col-6">
          <h3>Free and open market education</h3>
          <p className="mt-5">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" style={{ textDecoration: "none" }} className="mb-4">
            Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none" }} className="mb-4">
            TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
