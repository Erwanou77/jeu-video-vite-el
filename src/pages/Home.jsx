import { useState } from "react";
import ApiCall from "../components/ApiCall";
import Cards from "../components/Cards";

const Home = () => {
    const [page, setPage] = useState(1);
    const handleLoadMore = () => {
        setPage(prevCount => prevCount + 1);
    };
    const params = {
        key: '703ab7abdb434e81b8492cd1c95664d6', // Remplacez 'YOUR_API_KEY' par votre clé d'API de RAWG
        ordering: 'name',
        page_size: 20,
        page: page,
    };
    return (
        <section id="home">
            <div className="galleryCards">
                <ApiCall
                    url={`https://api.rawg.io/api/games`}
                    params={params}
                    boolList={true}
                    render={games => Cards(games, handleLoadMore)}
                />
            </div>
        </section>
    );
};

export default Home;