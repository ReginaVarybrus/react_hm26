import { useState } from "react";
import EpisodesList from "../components/EpisodesList";
import HttpFetchEpisodes from "../hooks/HttpFetchEpisodes";

const EpisodesComponent = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const { data, loading } = HttpFetchEpisodes(`episode?page=${currentPage}`);

    return <div className="Main-div">
        <div>
            {loading ? <p>Loading...</p> : <EpisodesList data={data} />}
            <div className="Pagination">
                <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}>
                    Prev
                </button>
                <button
                    onClick={() => setCurrentPage(p => p + 1)}
                    disabled={currentPage === data.info?.pages}>
                    Next
                </button>
            </div>
        </div>
    </div>
}

export default EpisodesComponent;