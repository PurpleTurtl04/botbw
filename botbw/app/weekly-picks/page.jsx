import PlayerSelect from '@/components/player-select';
import WeekSelect from '@/components/week-select';

export default function WeeklyPicks() {
    return (
        <div className='container mx-auto'>
            <h1 className='font-pressStart mt-8 text-3xl lg:mt-16 lg:text-4xl'>
                Weekly Picks
            </h1>
            <div className='mt-10 flex flex-col gap-4 md:flex-row lg:mt-12'>
                <WeekSelect />
                <PlayerSelect />
            </div>
        </div>
    );
}
