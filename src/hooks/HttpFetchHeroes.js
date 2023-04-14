import { useEffect, useState } from "react";
import axios from 'axios';

const HttpFetchHeroes = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(url).then((resp) => {
      const heroes = resp.data;
      setData(heroes);
      setLoading(false);
    });
  }, [url]);

  return { data, loading }
}

export default HttpFetchHeroes;