// import { InlineIcon } from "@iconify/react";
import noPhoto from "../assets/img/no-photo.png";

const Cards = (games, handleLoadMore) => {
    // const listPlatforms = ['pc', 'xbox-360', 'xbox-one', 'xbox-series-x', 'xbox', 'playstation3', 'playstation4', 'playstation5', 'nintendo'];
    return (
        <>
        { games.map((element, index) => (
            <a href={`/game/${element.id}`} className='cards' key={index}>
                <div className="h-64 overflow-hidden rounded-lg">
                    <img src={element.background_image ? element.background_image : noPhoto} alt="" className="w-full h-full object-cover transition delay-75 hover:transform hover:scale-125" />
                </div>
                <h1>{element.name}</h1>
                {/* {
                element.platforms.map((platform, key) => (
                    <InlineIcon icon={listPlatforms.includes(platform.platform.slug) ? `cib:${listPlatforms}` : ""} />
                ))} */}
                {
                element.platforms.map((platform, key) => (
                    <span>{platform.platform.name}</span>
                ))}
            </a>
        ))}
        <button onClick={handleLoadMore}>Charger plus de jeux</button>
        </>
    );
};

export default Cards;