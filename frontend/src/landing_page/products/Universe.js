export default function Universe() {
  return (
    <div className="container ">
      <div className="row text-center">
        <h2>The Zerodha Universe</h2>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-5">
          <img src="media\images\zerodhaFundhouse.png" style={{height:"50px"}} alt=""></img>
          <p>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
          <img src="media/images/streakLogo.png"  style={{height:"50px"}} alt="" className="mt-5"></img>
          <p>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/images/sensibullLogo.svg"  style={{height:"50px"}} alt=""></img>
          <p>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
          <img src="media/images/smallcaseLogo.png"  style={{height:"50px"}} alt="" className="mt-5"></img>
          <p>
            Systematic trading platform that allows you to create and backtest strategies without coding.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media\images\goldenpiLogo.png"  style={{height:"50px"}} alt=""></img>
          <p>
            Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.
          </p>
          <img src="media/images/dittoLogo.png"  style={{height:"50px"}} alt="" className="mt-5"></img>
          <p>
            Personalized advice on life and health insurance. No spam and no mis-selling. Sign up for free
          </p>
        </div>
        <div className="text-center mb-5">
            <button className="btn btn-primary btn-lg px-5 py-3 rounded-3">
                Sign Up For Free
            </button>
        </div>
      </div>
    </div>
  );
}
