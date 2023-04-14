import EpisodesCard from "./ItemCard";

const EpisodesList = (props) => {

    return (
        <div>
            {props.data?.results &&
                props.data.results.map((item) => (
                    <EpisodesCard key={item.id} className="Hero-Card">
                        <div>
                            <p>{item.name}</p>
                            <p>{item.air_date}</p>
                        </div>
                    </EpisodesCard>
                ))}
        </div>
    )
}

export default EpisodesList;