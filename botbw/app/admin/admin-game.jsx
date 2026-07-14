'use client';

import { useState } from 'react';

export default function AdminGame({
    id,
    awayTeam,
    awayScore,
    homeTeam,
    homeScore,
    favorite,
    spread,
    isFinalFlg,
}) {
    const [awayTeamName, setAwayTeamName] = useState(awayTeam);
    const [awayTeamScore, setAwayTeamScore] = useState(awayScore);
    const [homeTeamName, setHomeTeamName] = useState(homeTeam);
    const [homeTeamScore, setHomeTeamScore] = useState(homeScore);
    const [selectFavorite, setSelectFavorite] = useState(favorite);
    const [gameSpread, setGameSpread] = useState(spread);
    const [isFinal, setIsFinal] = useState(isFinalFlg);

    function handleAwayTeamName(e) {
        setAwayTeamName(e.target.value);
        setSelectFavorite('');
    }

    function handleHomeTeamName(e) {
        setHomeTeamName(e.target.value);
        setSelectFavorite('');
    }

    return (
        <tr key={id}>
            <td className='text-center'>{id}</td>
            <td>
                <label htmlFor={`away-team-game-${id}`} className='sr-only'>
                    Away Team Game ${id}
                </label>
                <input
                    type='text'
                    id={`away-team-game-${id}`}
                    placeholder={`Away Team G${id}...`}
                    className='input input-secondary'
                    value={awayTeamName}
                    onChange={handleAwayTeamName}
                />
            </td>
            <td>
                <label
                    htmlFor={`away-team-score-game-${id}`}
                    className='sr-only'
                >
                    Away Team Score Game ${id}
                </label>
                <input
                    type='text'
                    id={`away-team-score-game-${id}`}
                    placeholder='Secondary'
                    className='input input-secondary border-dashed text-center'
                    value={awayTeamScore}
                    onChange={(e) => setAwayTeamScore(Number(e.target.value))}
                />
            </td>
            <td>
                <label htmlFor={`home-team-game-${id}`} className='sr-only'>
                    Home Team Game ${id}
                </label>
                <input
                    type='text'
                    id={`home-team-game-${id}`}
                    placeholder={`Home Team G${id}...`}
                    className='input input-secondary'
                    value={homeTeamName}
                    onChange={handleHomeTeamName}
                />
            </td>
            <td>
                <label
                    htmlFor={`home-team-score-game-${id}`}
                    className='sr-only'
                >
                    Home Team Score Game ${id}
                </label>
                <input
                    type='text'
                    id={`home-team-score-game-${id}`}
                    placeholder='Secondary'
                    className='input input-secondary border-dashed text-center'
                    value={homeTeamScore}
                    onChange={(e) => setHomeTeamScore(Number(e.target.value))}
                />
            </td>
            <td>
                <label htmlFor={`favorite-game-${id}`} className='sr-only'>
                    Game ${id} Favorite
                </label>
                <select
                    className='select select-primary'
                    id={`favorite-game-${id}`}
                    value={selectFavorite}
                    onChange={(e) => setSelectFavorite(e.target.value)}
                >
                    <option value='' disabled={true}>
                        Pick a team
                    </option>
                    <option value={awayTeamName}>{awayTeamName}</option>
                    <option value={homeTeamName}>{homeTeamName}</option>
                </select>
            </td>
            <td>
                <label htmlFor={`spread-game-${id}`} className='sr-only'>
                    Game ${id} Spread
                </label>
                <input
                    type='text'
                    id={`spread-game-${id}`}
                    placeholder='Secondary'
                    className='input input-secondary border-dashed text-center'
                    value={gameSpread}
                    onChange={(e) => setGameSpread(Number(e.target.value))}
                />
            </td>
            <td className='text-center'>
                <label htmlFor={`final-flag-game-${id}`} className='sr-only'>
                    Game ${id} Final Flag
                </label>
                <input
                    type='checkbox'
                    id={`final-flag-game-${id}`}
                    className='checkbox checkbox-lg checkbox-primary'
                    checked={isFinal}
                    onChange={(e) => setIsFinal(e.target.checked)}
                />
            </td>
        </tr>
    );
}
