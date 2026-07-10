'use client';

import { useState } from 'react';

export default function Game({
    id,
    awayTeam,
    awayScore,
    homeTeam,
    homeScore,
    favorite,
    spread,
    isCompletedFlg,
    isCorrectFlg,
    playerPick,
}) {
    const [playerSelection, setPlayerSelection] = useState(playerPick);

    let backgroundColor = '';
    let outerBorder = 'border-primary';
    let innerBorder = 'border-secondary';
    let radioColor = 'radio-primary';

    if (isCompletedFlg) {
        outerBorder = 'border-secondary';
        innerBorder = 'border-neutral';
        radioColor = 'radio-secondary';
        backgroundColor = isCorrectFlg ? 'bg-success' : 'bg-error';
    }

    return (
        <div
            className={`flex justify-center ${id % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}`}
            key={id}
        >
            <div
                className={`min-w-110 border-5 sm:min-w-120 xl:min-w-140 ${outerBorder}`}
            >
                <div
                    className={`flex flex-col gap-4 border-3 p-4 ${innerBorder} ${backgroundColor}`}
                >
                    <div className='grid grid-cols-4'>
                        <div className='col-span-2'></div>
                        <div className='col-span-1 text-center underline'>
                            Pick %
                        </div>
                        <div className='col-span-1 text-center underline'>
                            Score
                        </div>
                    </div>
                    <div className='grid grid-cols-4'>
                        <div className='col-span-2'>
                            <div className='flex items-center gap-2'>
                                <input
                                    type='radio'
                                    id={`away-team${id}`}
                                    name={`radio-game${id}`}
                                    className={`radio radio-sm ${radioColor}`}
                                    checked={awayTeam === playerSelection}
                                    value={awayTeam}
                                    onChange={(e) =>
                                        setPlayerSelection(e.target.value)
                                    }
                                    disabled={isCompletedFlg}
                                />
                                <label htmlFor={`away-team${id}`}>
                                    {awayTeam}
                                    <span>
                                        {awayTeam === favorite && `(${spread})`}
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className='col-span-1 text-center'>25%</div>
                        <div className='col-span-1 text-center'>
                            {awayScore}
                        </div>
                    </div>
                    <div className='grid grid-cols-4'>
                        <div className='col-span-2'>
                            <div className='flex items-center gap-2'>
                                <input
                                    type='radio'
                                    id={`home-team${id}`}
                                    name={`radio-game${id}`}
                                    className={`radio radio-sm ${radioColor}`}
                                    checked={homeTeam === playerSelection}
                                    value={homeTeam}
                                    onChange={(e) =>
                                        setPlayerSelection(e.target.value)
                                    }
                                    disabled={isCompletedFlg}
                                />
                                <label htmlFor={`home-team${id}`}>
                                    {homeTeam}
                                    <span>
                                        {homeTeam === favorite && `(${spread})`}
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className='col-span-1 text-center'>75%</div>
                        <div className='col-span-1 text-center'>
                            {homeScore}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
