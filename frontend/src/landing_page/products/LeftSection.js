//In this section the image is in the left and the info is in the right
export default function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  tryDemoText,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container ">
        <div className="row">
            <div className="col-8 p-3 ">
                <img src={imageURL} alt="" className="ms-5"></img>
            </div>
            <div className="col-4 mt-5 ">
                <h3>{productName}</h3>
                <h5 className="text-muted" style={{fontSize:"17px", lineHeight: "1.6" }}>{productDescription}</h5>
                <div>
                    <a href={tryDemo} style={{textDecoration:"none"}}>{tryDemoText}  <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href={learnMore} style={{marginLeft:"60px",textDecoration:"none"}}>Learn More  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className="mt-4 ">
                    <a href={googlePlay} className="me-4"><img src="media/images/googlePlayBadge.svg" alt=""></img></a>
                    <a href={appStore}><img src="media/images/appstoreBadge.svg" alt=""></img></a>
                </div>
            </div>
        </div>
    </div>
  );
}
