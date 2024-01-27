import Searchicon from "../icons/Navbar/Searchicon";
export default function Searchbar(){
    return(
        <div className="search-container none">
          <div className="search-text">
            <input type="text" placeholder="Search text" />
          </div>
          <div className="search-icon">
            <Searchicon/>
          </div>
        </div>
    )
}