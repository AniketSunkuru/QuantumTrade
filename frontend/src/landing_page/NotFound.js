import {Link} from "react-router-dom"

export default function NotFound() {
    return ( 
         <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h3 className='m-4'>404 NOt Found</h3>
                <p >Sorry ,We couldn’t find the page you were looking for.</p>
                <p>
                    Visit {" "}
                    <Link to="/">
                         Zerodha’s home page
                    </Link>
                </p>
            </div>
        </div>
    );
}
