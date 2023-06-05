const Cards = (games, handleLoadMore) => {
    return (
        <>
        { games.map((element, index) => (
            <a href='' className='cards' key={index}>
                <div>
                    <img src={element.background_image} alt="" />
                </div>
                <h1>{element.name}</h1>
                <h1>Test</h1>
                <h1>Test</h1>
                <h1>Test</h1>
            </a>
        ))}
        <button onClick={handleLoadMore}>Charger plus de jeux</button>
        </>
    );
};

export default Cards;