'use client';

import { useState } from 'react';
import players from '@/data/players.json';

export default function PlayerSelect() {
    const [selectedPlayer, setSelectedPlayer] = useState('1');

    return (
        <div>
            <select
                className='select font-pressStart lg:select-lg select-primary text-primary min-h-13 min-w-68 border-3 border-dashed'
                value={selectedPlayer}
                onChange={(e) => setSelectedPlayer(e.target.value)}
            >
                {players.map((player) => (
                    <option key={player.id} value={player.id}>
                        {player.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
