import { useState } from "react";
import HttpFetchHeroes from "../hooks/HttpFetchHeroes";
import HeroesList from "../components/HeroesList";

const HttpHeroComponent = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const { data, loading } = HttpFetchHeroes(`character?page=${currentPage}`);

    return <div className="Main-div">
        <div>
            {loading ? <p>Loading...</p> : <HeroesList data={data} />}
            <div className="Pagination">
                <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}>
                    Prev
                </button>
                <button
                    disabled={currentPage === data.info?.pages}
                    onClick={() => setCurrentPage(p => p + 1)}>
                    Next
                </button>
            </div>
        </div>
    </div>
}

export default HttpHeroComponent;

