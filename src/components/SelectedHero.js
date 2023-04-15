import { useParams } from "react-router-dom";
import HttpFetchHeroes from "../hooks/HttpFetchHeroes";

const SelectedHero = () => {
    const { id } = useParams();

    const { data, loading } = HttpFetchHeroes(`/character/${id}`);

    return <div className="Hero">
            <p>{data.name}</p>
            <p>{data.status}</p>
        </div>
  }

export default SelectedHero;



  
