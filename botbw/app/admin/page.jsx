import WeekSelect from '@/components/week-select';
import AdminGame from '@/app/admin/admin-game';

import adminGames from '@/data/admin.json';

export const metadata = {
    title: 'BOTB - Admin Weekly Picks',
    description:
        'As an administrator you can select the games for the week and update scores upon a game concluding.',
};

export default function Admin() {
    return (
        <div className='container mx-auto'>
            <h1 className='font-pressStart mt-8 text-3xl lg:mt-16 lg:text-4xl'>
                Admin Picks
            </h1>
            <div className='mt-10 flex flex-col items-center justify-between gap-4 md:flex-row lg:mt-12'>
                <WeekSelect />
                <div>
                    <button className='btn btn-primary font-pressStart text-cont btn-lg'>
                        Post Games
                    </button>
                </div>
            </div>
            <div className='mt-10 overflow-x-auto lg:mt-12'>
                <table className='3xl:table-auto table w-full table-auto xl:table-fixed'>
                    <thead className='bg-base-content text-base-200 font-pressStart'>
                        <tr>
                            <th className='w-1/11 text-center'>Game</th>
                            <th className='w-1/4'>Away Team</th>
                            <th className='w-1/10 text-center'>Score</th>
                            <th className='w-1/4'>Home Team</th>
                            <th className='w-1/10 text-center'>Score</th>
                            <th className='w-1/4'>Favorite</th>
                            <th className='w-1/9 text-center'>Spread</th>
                            <th className='w-1/10 text-center'>Final</th>
                        </tr>
                    </thead>
                    <tbody>
                        {adminGames.map((game) => (
                            <AdminGame key={game.id} {...game} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
