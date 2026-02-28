export default function Hero(){
    return(
        <section className="container-fluid "id="supportHero">
            <div className="p-5 " id="supportWrapper">
                <h5>Support Portal</h5>
                <a href="" className="me-5 " >Track Tickets</a>
            </div>
            <div className="row m-5 " >
                <div className="col-6 p-5 " >
                    <h4 className="fs-4">search for an answer or browse help topics to create a ticket</h4>
                    <input placeholder="how do I activate F&O "></input><br/>
                    <a href="" className="me-3">Track account opening</a>
                    <a href="" className="me-3">Track segment activation</a>
                    <a href="" className="me-3">Intraday margins</a>
                    <a href="" className="me-3">Kite user manual</a>
                </div>
                <div className="col-6 p-5" >
                    <h3 className="fs-4">Featured</h3>
                    <ol>
                        <li><a href="">Current Takeovers and Delisting - January 2024</a></li>
                        <li> <a href="">Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                </div>
            </div>
        </section>
    )
}