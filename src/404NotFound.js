import { Link } from "react-router-dom";

const PageNotFound = () => {
    return ( 
        <div className="notFound">
            <h2>Sorry, Page not Found</h2>
            <Link to={'/'}>Go to Home</Link>
        </div>
     );
}
 
export default PageNotFound;