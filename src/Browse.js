import { useState } from "react";

const Browse = ()=>{
  
      const [titleToSearchFor, setTitleToSearchFor] = useState("");
      const [searchResults, setSearchResults] = useState([]);


  const Search = async (evt) => {
    evt.preventDefault();

    try {
      const response = await fetch(`https://www.themoviedb.org/search?query=${titleToSearchFor}`);
      const data = await response.json();
      console.log(data)
      // setSearchResults(data.)
      //set data results into searchResults in state
      .then (data => {
        setSearchResults(data)
      })
    } catch (err){
      console.error(err)
    }
  }

    return (
        <div id="body">

    <nav className="navbar navbar-light bg-light">
    <div className="container-fluid">
      <form className="d-flex"
      //add onSubmit function
      onSubmit={Search} 
      >
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
        value={titleToSearchFor}
        onChange={(evt)=>{
          setTitleToSearchFor(evt.target.value);
        }}
        />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
{/* add map over searchRestlts to show all titles */}
        {searchResults.map((value, index) => {

          return <div>
            <h1>{value.title}</h1>
            <p>Release date: {value.release_date}</p>
            </div>
        })}

    </div> 

    );
};

export default Browse;