import { useParams } from "react-router-dom";
import HttpFetchHeroes from "../hooks/HttpFetchHeroes";

const Hero = () => {
    const { id } = useParams();

    const { data, loading } = HttpFetchHeroes(`/character/${id}`);

    return <div>
            <p>{data.name}</p>
            <p>{data.status}</p>
        </div>
  }

export default Hero;



  
