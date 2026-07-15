import WeekSelect from '@/components/week-select';
import LeaderboardTable from './leaderboard-table';

export default function Leaderboard() {
    return (
        <div className='container mx-auto'>
            <h1 className='font-pressStart mt-8 text-3xl lg:mt-16 lg:text-4xl'>
                Leaderboard
            </h1>
            <div className='mt-10 flex flex-col items-center gap-4 md:flex-row lg:mt-12'>
                <WeekSelect />
            </div>
            <div className='mt-10 lg:mt-12'>
                <LeaderboardTable />
            </div>
        </div>
    );
}
