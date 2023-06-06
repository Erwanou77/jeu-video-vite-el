import React, { useEffect, useState } from 'react';
import Cards from '../components/Cards';
import { Icon } from '@iconify/react';

const Profil = () => {
    const [favoriteGames, setFavoriteGames] = useState([]);
    const [completedGames, setCompletedGames] = useState([]);

    useEffect(() => {
        const favorites = localStorage.getItem('favoriteGames');
        const parsedFavorites = favorites ? JSON.parse(favorites) : [];
        setFavoriteGames(parsedFavorites);

        const completed = localStorage.getItem('completedGames');
        const parsedCompleted = completed ? JSON.parse(completed) : [];
        setCompletedGames(parsedCompleted);
    }, []);

    return (
        <section id='profil'>
            {completedGames.length >= 10 && (
                <Icon icon={'cil:badge'} className='text-4xl text-yellow-300' />
            )}
            <h1 className='text-4xl text-center my-5 font-bold'>Jeux dans favoris</h1>
            <div className="galleryCards">
                <Cards games={favoriteGames} />
            </div>
            <h1 className='text-4xl text-center my-5 font-bold'>Jeux terminés</h1>
            <div className="galleryCards">
                <Cards games={completedGames} />
            </div>
        </section>
    );
};

export default Profil;