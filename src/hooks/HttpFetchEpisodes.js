import { useEffect, useState } from "react";
import axios from 'axios';

const HttpFetchEpisodes = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);
    axios.get(url).then((resp) => {
      const episodes = resp.data;
      setData(episodes);
      setLoading(false);
    });
  }, [url]);

  return { data, loading }
}

export default HttpFetchEpisodes;