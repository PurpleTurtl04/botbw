import PlayerSelect from '@/components/player-select';
import WeekSelect from '@/components/week-select';
import Game from '@/app/weekly-picks/game';

import games from '@/data/games.json';

export default function WeeklyPicks() {
    return (
        <div className='font-pressStart container mx-auto'>
            <h1 className='mt-8 text-3xl lg:mt-16 lg:text-4xl'>Weekly Picks</h1>
            <div className='mt-10 flex flex-col items-center gap-4 md:flex-row lg:mt-12'>
                <WeekSelect />
                <PlayerSelect />
            </div>
            <div className='mt-10 grid gap-6 text-xs lg:mt-12 lg:grid-cols-2'>
                {games.map((game) => (
                    <Game key={game.id} {...game} />
                ))}
            </div>
        </div>
    );
}
