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
                <label className='input input-secondary'>
                    <span className='sr-only'>Away Team Game ${id}</span>
                    <input
                        type='text'
                        placeholder={`Away Team G${id}...`}
                        value={awayTeamName}
                        onChange={handleAwayTeamName}
                    />
                </label>
            </td>
            <td>
                <label className='input input-secondary border-dashed'>
                    <span className='sr-only'>Away Team Score Game ${id}</span>
                    <input
                        type='number'
                        min='0'
                        className='[appearance:textfield] text-center [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
                        value={awayTeamScore}
                        onChange={(e) =>
                            setAwayTeamScore(Number(e.target.value))
                        }
                    />
                </label>
            </td>
            <td>
                <label className='input input-secondary'>
                    <span className='sr-only'>Home Team Game ${id}</span>
                    <input
                        type='text'
                        placeholder={`Home Team G${id}...`}
                        value={homeTeamName}
                        onChange={handleHomeTeamName}
                    />
                </label>
            </td>
            <td>
                <label className='input input-secondary border-dashed'>
                    <span className='sr-only'>Home Team Score Game ${id}</span>
                    <input
                        type='number'
                        min='0'
                        className='[appearance:textfield] text-center [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
                        value={homeTeamScore}
                        onChange={(e) =>
                            setHomeTeamScore(Number(e.target.value))
                        }
                    />
                </label>
            </td>
            <td>
                <label>
                    <span className='sr-only'>Game ${id} Favorite Select</span>
                    <select
                        className='select select-primary'
                        value={selectFavorite}
                        onChange={(e) => setSelectFavorite(e.target.value)}
                    >
                        <option value='' disabled>
                            Pick a team
                        </option>
                        <option value={awayTeamName}>{awayTeamName}</option>
                        <option value={homeTeamName}>{homeTeamName}</option>
                    </select>
                </label>
            </td>
            <td>
                <label className='input input-secondary border-dashed'>
                    <span className='sr-only'>Game ${id} Spread</span>
                    <input
                        type='number'
                        min='0'
                        step='0.5'
                        className='[appearance:textfield] text-center [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
                        value={gameSpread}
                        onChange={(e) => setGameSpread(Number(e.target.value))}
                    />
                </label>
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
