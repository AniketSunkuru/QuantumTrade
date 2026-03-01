export default function Team() {
  return (
    <div className="container mb-5">
      <div className="row text-center">
        <h2>People</h2>
      </div>
      <div className="row p-5 ">
        <div className="col-5 fs-5 text-center">
            <img src="media\images\nithinKamath.jpg" alt="nithinKamnath" style={{borderRadius:"100%", width:"70%"}}></img>
            <h5>Nithin Kamath</h5>
            <h6 className="text-muted">Founder, CEO</h6>
        </div>
        <div className="col-7 fs-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on <a href=" " style={{textDecoration:"none"}}> Homepage </a>/ <a href=" "style={{textDecoration:"none"}}>TradingQnA </a>/ <a href=" "style={{textDecoration:"none"}}>Twitter</a></p>
        </div>
      </div>
    </div>
  );
}
