import React, { useEffect, useState } from 'react';
import ApiCall from '../components/ApiCall';
import { useParams } from 'react-router-dom';
import noPhoto from "../assets/img/no-photo.png";
import { htmlToText } from 'html-to-text';
import { Icon } from '@iconify/react';

const Detail = () => {
    const { id } = useParams();
    const [isFavorite, setIsFavorite] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        const storedFavoriteGames = localStorage.getItem('favoriteGames') || '[]';
        const favoriteGames = JSON.parse(storedFavoriteGames);
        setIsFavorite(favoriteGames.some((favorite) => favorite.id === JSON.parse(id)));

        const storedCompletedGames = localStorage.getItem('completedGames') || '[]';
        const completedGames = JSON.parse(storedCompletedGames);
        setIsCompleted(completedGames.some((completed) => completed.id === JSON.parse(id)));
    });

    const addToFavorites = (game) => {
        const storedFavoriteGames = localStorage.getItem('favoriteGames');
        let favoriteGames = [];

        if (storedFavoriteGames) {
            favoriteGames = JSON.parse(storedFavoriteGames);
        }

        favoriteGames.push(game);
        localStorage.setItem('favoriteGames', JSON.stringify(favoriteGames));
        setIsFavorite(true)
    };

    const removeFromFavorites = (game) => {
        const storedFavoriteGames = localStorage.getItem('favoriteGames');
        let favoriteGames = [];
      
        if (storedFavoriteGames) {
          favoriteGames = JSON.parse(storedFavoriteGames);
          favoriteGames = favoriteGames.filter(favorite => favorite.id !== game.id);
          localStorage.setItem('favoriteGames', JSON.stringify(favoriteGames));
          setIsFavorite(false)
        }
    };

    const addToCompleted = (game) => {
        const storedCompletedGames = localStorage.getItem('completedGames');
        let completedGames = [];
      
        if (storedCompletedGames) {
          completedGames = JSON.parse(storedCompletedGames);
        }
      
        completedGames.push(game);
        localStorage.setItem('completedGames', JSON.stringify(completedGames));
        setIsCompleted(true)
    };
    
    const removeFromCompleted = (game) => {
        const storedCompletedGames = localStorage.getItem('completedGames');
        let completedGames = [];
      
        if (storedCompletedGames) {
          completedGames = JSON.parse(storedCompletedGames);
          completedGames = completedGames.filter(completed => completed.id !== game.id);
          localStorage.setItem('completedGames', JSON.stringify(completedGames));
          setIsCompleted(false)
        }
    };

    const params = {
        key: "703ab7abdb434e81b8492cd1c95664d6"
    };
    return (
        <section id="detail">
            <div className="galleryCards">
                <ApiCall
                    url={`https://api.rawg.io/api/games/${id}`}
                    params={params}
                    boolList={false}
                    render={game => (
                        <>
                            <div className='flex w-full gap-5'>
                                {console.log(game)}
                                <div className='w-1/2 h-[630px]'>
                                    <img src={game.background_image ? game.background_image : noPhoto} alt="" className='w-full h-full object-cover' />
                                </div>
                                <div className='w-1/2'>
                                    <h4 className='text-center'>{game.name}</h4>
                                    <div>
                                        <dl className='flex justify-between border-b border-b-gray-500'>
                                            <dt className='text-xl uppercase font-bold'>Note</dt>
                                            <dd>{game.rating} / 5</dd>
                                        </dl>
                                        <dl className='flex justify-between border-b mt-5 border-b-gray-500'>
                                            <dt className='text-xl uppercase font-bold'>Vote</dt>
                                            <dd>{game.ratings_count}</dd>
                                        </dl>
                                        <dl className='flex justify-between border-b mt-5 border-b-gray-500'>
                                            <dt className='text-xl uppercase font-bold'>Date de sortie</dt>
                                            <dd>{game.released}</dd>
                                        </dl>
                                        <dl className='flex justify-between border-b mt-5 border-b-gray-500'>
                                            <dt className='text-xl uppercase font-bold'>Ajouter au favoris</dt>
                                            <dd>{!isFavorite ? (<Icon icon={"material-symbols:star-outline"} onClick={() => addToFavorites(game)} />) : (<Icon icon={"material-symbols:star"} onClick={() => removeFromFavorites(game)} />) }</dd>
                                        </dl>
                                        <dl className='flex justify-between border-b mt-5 border-b-gray-500'>
                                            <dt className='text-xl uppercase font-bold'>Jeux terminés ?</dt>
                                            <dd>{!isCompleted ? (<Icon icon={"mdi:stop"} onClick={() => addToCompleted(game)} />) : (<Icon icon={"mdi:play"} onClick={() => removeFromCompleted(game)} />) }</dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p>{htmlToText(game.description)}</p>
                            </div>
                        </>
                    )}
                />
            </div>
        </section>
    );
};

export default Detail;