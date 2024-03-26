import axios from "axios";
import { useEffect, useState } from "react";
import CustomPagination from "../../components/CustomPagination/CustomPagination";
import "../../components/SingleContent/SingleContent";
import SingleContent from "../../components/SingleContent/SingleContent";
import "./Home.css"

const Home = () => {
  
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);

    const getTrentding = async () => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
       
       
        setContent(data.results);
    };
    
    useEffect(() => {
      getTrentding();
    }, [page])
    

    return (
    <div>
        <span className = "pageTitle">Главная</span>
        <div className="mostViewed">
        {
        content && content.map((c)=>(<SingleContent 
        key ={c.id} 
        id = {c.id} 
        poster = {c.poster_path} 
        title ={c.name || c.title} 
        date = {c.first_air_date || c.release_date}
        media_type ={c.media_type}
        vote_average = {c.vote_average}/>
        ))
        }
        </div>
        
        <CustomPagination setPage = {setPage} /> 

    </div>
  )
}

export default Home