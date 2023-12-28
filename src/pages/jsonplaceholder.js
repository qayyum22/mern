import { Link } from "react-router-dom";
import Posts from "../components/jsonplaceholder/Posts";

const JSON = () => {

    return (
        <div>
            
            <div>
                <h3><Link to={"/posts"}>JSON PlaceHolder API (Posts)</Link></h3>
                <h3><Link to={"/comments"}>JSON PlaceHolder API (Comments)</Link></h3>
                <h3><Link to={"/albums"}>JSON PlaceHolder API (Albums)</Link></h3>
                <h3><Link to={"/photos"}>JSON PlaceHolder API (Photos)</Link></h3>
                <h3><Link to={"/todos"}>JSON PlaceHolder API (Todos)</Link></h3>
                <h3><Link to={"/users"}>JSON PlaceHolder API (Users)</Link></h3>
            </div>
        </div>

    )
};

export default JSON;