import axios from "axios"
import { useEffect, useState } from "react";
import CustomPagination from "../../components/CustomPagination/CustomPagination";
import "../../components/SingleContent/SingleContent";
import SingleContent from "../../components/SingleContent/SingleContent";

const Movies = () => {
const [page, setPage] = useState(1);
const [content, setContent] = useState([]);   
const [numOfPages, setNumOfPages] = useState();



  const getMovies = async () => {
      const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=${page}`);
    
    setContent(data.results);
    setNumOfPages(data.total_pages);
    };

  useEffect(() => {
    getMovies();
  }, [page])

    return (
    <div>
        <span className = "pageTitle">Фильмы</span>
        
        <div className="mostViewed">
        {
        content && content.map((c)=>(<SingleContent 
        key ={c.id} 
        id = {c.id} 
        poster = {c.poster_path} 
        title ={c.name || c.title} 
        date = {c.first_air_date || c.release_date}
        media_type ="movie"
        vote_average = {c.vote_average}/>
        ))
        }
        </div>
        {numOfPages >1 &&  (
        <CustomPagination setPage={setPage} numOfPages={500} /> ) }
    </div>
  )
}

export default Movies