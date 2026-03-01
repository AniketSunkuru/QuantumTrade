import React from "react";

function Pricing() {
  return (
    <div className="container mt-5 ">
      <div className="row mt-5">
        <div className="col-5">
          <h3>Unbeatable pricing</h3>
          <p className="mt-4">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See Pricing{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-7">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              textAlign: "center",
            }}
          >
            <div>
              <img src="media/images/pricing-eq.svg" style={{ width: "40%" }} />
              <p>
                Free account
                <br />
                opening
              </p>
            </div>

            <div>
              <img src="media/images/pricing-eq.svg" style={{ width: "40%" }} />
              <p>
                Free equity delivery
                <br />
                and direct mutual funds
              </p>
            </div>

            <div>
              <img
                src="media/images/other-trades.svg"
                style={{ width: "40%" }}
              />
              <p>
                Intraday and
                <br />
                F&O
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
