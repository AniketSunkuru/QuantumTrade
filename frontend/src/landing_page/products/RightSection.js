export default function RightSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    tryDemoText,
}){
    return(
        <div className="container ">
            <div className="row align-items-center">
                <div className="col-4">
                    <h3>{productName}</h3>
                    <h5 className="text-muted" style={{fontSize:"17px", lineHeight: "1.6" }}>{productDescription}</h5>
                    <div>
                        <a href={tryDemo} style={{textDecoration:"none"}}>{tryDemoText}  <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className="col-8 p-3 ">
                    <img src={imageURL} alt="" className="ms-5"></img>
                </div>
            </div>
        </div>
    )
}