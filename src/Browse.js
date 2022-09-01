import { useState } from "react";
import APIUrl from "./APIUrl";

const Browse = ()=>{
  
      const [titleToSearchFor, setTitleToSearchFor] = useState("");
      const [searchResults, setSearchResults] = useState([]);
      const [expandedMovieID, setExpandedMovieID] = useState();
      const [streamingInfo, setStreamingInfo] = useState();
      //set id into state [done]


  const Search = async (evt) => {
    evt.preventDefault();

    try {
      const response = await fetch(`${APIUrl}/search/${titleToSearchFor}`);
      const data = await response.json();
      console.log(data)
      // setSearchResults(data.) [done]
      //set data results into searchResults in state [done]
      
    setSearchResults(data.results.results)
    
    } catch (err){
      console.error(err)
    }
  }

  const movieSelected = async (id) => {
   
    try {
      const response = await fetch(`${APIUrl}/providers/${id}`);
      const data = await response.json();
      setStreamingInfo(data.results.results.US)
      setExpandedMovieID(id)
      console.log(data.results.results.US)
      
    
    } catch (err){
      console.error(err)
    }
  }


    return (
        <div id="body">

    <nav className="navbar navbar-light bg-light" className="SUPPOSEDTOBEBUFFALO">
    <div className="container-fluid">
      <form className="d-flex"
      //add onSubmit function [done]
      onSubmit={Search} 
      >
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
        value={titleToSearchFor}
        onChange={(evt)=>{
          setTitleToSearchFor(evt.target.value);
        }}
        />
        <button className="BAHTUN" type="submit">Search</button>
      </form>
    </div>
  </nav>
{/* add map over searchRestlts to show all titles [done]  */}
        {searchResults.map((value, index) => {

          return <div>
                      <h1>{value.title}</h1>
                      <p>Summary: {value.overview}</p>
                      <p>Release date: {value.release_date}</p>
                      <p>
                          <button className="BAHTUN" type="button" aria-expanded="false" aria-controls="collapseExample" onClick={()=>{
                            movieSelected(value.id)
                          }}>
                          See Streaming Services
                          </button>
                      </p>
                      <div className={value.id===expandedMovieID ? "collapse show" : "collapse"} id="collapseExample">
                        <a href={streamingInfo?.link} target="_blank"><div className="card card-body" className="SUPPOSEDTOBEBUFFALO">
                          {streamingInfo?.buy?.map(service=>{
                            return <li key={service.provider_id}> <img src={`https://image.tmdb.org/t/p/original/${service.logo_path}`}/> {service.provider_name}
                            
                            </li>
                          })}
                        {/*  {streamingInfo?.buy.length===0 || !streamingInfo && <h1>This movie isn't available in your country</h1>} */}
                        </div>
                        </a>
                      </div>
                      {/* add button to say "see streaming services"[done] */}
                      {/* add collapse section[done] */}
                      {/* on onclick of the button to open the collpased section, make another fetch call to backend that will pass this movies ID */}
                      </div>
        })}

    </div> 

    );
};

export default Browse;