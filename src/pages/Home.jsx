import { useState } from "react";
import ApiCall from "../components/ApiCall";
import Cards from "../components/Cards";
import { useEffect } from "react";

const Home = () => {
    const [page, setPage] = useState(1);
    const [sortOption, setSortOption] = useState("name");
    const [clearList, setClearList] = useState(false);

    const handleLoadMore = () => {
        setPage(prevCount => prevCount + 1);
        setClearList(false)
    };

    const handleSortChange = event => {
        const option = event.target.value;
        setSortOption(option);
        setClearList(true);
        setPage(1);
    };

    const params = {
        key: "703ab7abdb434e81b8492cd1c95664d6",
        ordering: sortOption,
        page_size: 20,
        page: page,
    };
    return (
        <section id="home">
            <select value={sortOption} onChange={handleSortChange}>
                    <option value="name">Nom (A-Z)</option>
                    <option value="-name">Nom (Z-A)</option>
                    <option value="rating">Note (croissant)</option>
                    <option value="-rating">Note (décroissant)</option>
                </select>
            <div className="galleryCards">
            <ApiCall
                url={`https://api.rawg.io/api/games`}
                params={params}
                boolList={true}
                clearList={clearList}
                render={games => <Cards games={games} handleLoadMore={handleLoadMore} />}
            />
            </div>
        </section>
    );
};

export default Home;