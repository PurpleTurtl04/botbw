import WeekSelect from '@/components/week-select';

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
                <table className='3xl:table-auto table w-full table-auto lg:table-fixed'>
                    {/* head */}
                    <thead className='bg-base-content text-base-200 font-pressStart'>
                        <tr>
                            <th className='w-1/11'>Game</th>
                            <th className='w-1/4'>Away Team</th>
                            <th className='w-1/10'>Score</th>
                            <th className='w-1/4'>Home Team</th>
                            <th className='w-1/10'>Score</th>
                            <th className='w-1/4'>Favorite</th>
                            <th className='w-1/8'>Spread</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>1</td>
                            <td>
                                <label
                                    htmlFor='away-team-game-1'
                                    className='sr-only'
                                >
                                    Away Team Game 1
                                </label>
                                <input
                                    type='text'
                                    id='away-team-game-1'
                                    placeholder='Secondary'
                                    className='input input-secondary'
                                />
                            </td>
                            <td>
                                <label
                                    htmlFor='away-team-score-game-1'
                                    className='sr-only'
                                >
                                    Away Team Score Game 1
                                </label>
                                <input
                                    type='text'
                                    id='away-team-score-game-1'
                                    placeholder='Secondary'
                                    className='input input-secondary'
                                />
                            </td>
                            <td>
                                <label
                                    htmlFor='home-team-game-1'
                                    className='sr-only'
                                >
                                    Home Team Game 1
                                </label>
                                <input
                                    type='text'
                                    id='home-team-game-1'
                                    placeholder='Secondary'
                                    className='input input-secondary'
                                />
                            </td>
                            <td>
                                <label
                                    htmlFor='home-team-score-game-1'
                                    className='sr-only'
                                >
                                    Home Team Score Game 1
                                </label>
                                <input
                                    type='text'
                                    id='home-team-score-game-1'
                                    placeholder='Secondary'
                                    className='input input-secondary'
                                />
                            </td>
                            <td>
                                <label
                                    htmlFor='favorite-game-1'
                                    className='sr-only'
                                >
                                    Game 1 Favorite
                                </label>
                                <select
                                    className='select select-primary'
                                    id='favorite-game-1'
                                >
                                    <option>Away Team</option>
                                    <option>Home Team</option>
                                </select>
                            </td>
                            <td>
                                <label
                                    htmlFor='spread-game-1'
                                    className='sr-only'
                                >
                                    Game 1 Spread
                                </label>
                                <input
                                    type='text'
                                    id='spread-game-1'
                                    placeholder='Secondary'
                                    className='input input-secondary'
                                />
                            </td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <td>2</td>
                            <td>
                                <label
                                    htmlFor='away-team-game-2'
                                    className='sr-only'
                                >
                                    Away Team Game 2
                                </label>
                                <input
                                    type='text'
                                    id='away-team-game-2'
                                    placeholder='Secondary'
                                    className='input input-secondary'
                                />
                            </td>
                            <td>
                                <label
                                    htmlFor='away-team-score-game-2'
                                    className='sr-only'
                                >
                                    Away Team Score Game 2
                                </label>
                                <input
                                    type='text'
                                    id='away-team-score-game-2'
                                    placeholder='Secondary'
                                    className='input input-secondary'
                                />
                            </td>
                            <td>
                                <label
                                    htmlFor='home-team-game-2'
                                    className='sr-only'
                                >
                                    Home Team Game 2
                                </label>
                                <input
                                    type='text'
                                    id='home-team-game-2'
                                    placeholder='Secondary'
                                    className='input input-secondary'
                                />
                            </td>
                            <td>
                                <label
                                    htmlFor='home-team-score-game-2'
                                    className='sr-only'
                                >
                                    Home Team Score Game 2
                                </label>
                                <input
                                    type='text'
                                    id='home-team-score-game-2'
                                    placeholder='Secondary'
                                    className='input input-secondary'
                                />
                            </td>
                            <td>
                                <label
                                    htmlFor='favorite-game-2'
                                    className='sr-only'
                                >
                                    Game 2 Favorite
                                </label>
                                <select
                                    className='select select-primary'
                                    id='favorite-game-2'
                                >
                                    <option>Away Team</option>
                                    <option>Home Team</option>
                                </select>
                            </td>
                            <td>
                                <label
                                    htmlFor='spread-game-2'
                                    className='sr-only'
                                >
                                    Game 2 Spread
                                </label>
                                <input
                                    type='text'
                                    id='spread-game-2'
                                    placeholder='Secondary'
                                    className='input input-secondary'
                                />
                            </td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <td>3</td>
                            <td>
                                <label
                                    htmlFor='away-team-game-3'
                                    className='sr-only'
                                >
                                    Away Team Game 3
                                </label>
                                <input
                                    type='text'
                                    id='away-team-game-3'
                                    placeholder='Secondary'
                                    className='input input-secondary'
                                />
                            </td>
                            <td>
                                <label
                                    htmlFor='away-team-score-game-3'
                                    className='sr-only'
                                >
                                    Away Team Score Game 3
                                </label>
                                <input
                                    type='text'
                                    id='away-team-score-game-3'
                                    placeholder='Secondary'
                                    className='input input-secondary'
                                />
                            </td>
                            <td>
                                <label
                                    htmlFor='home-team-game-3'
                                    className='sr-only'
                                >
                                    Home Team Game 3
                                </label>
                                <input
                                    type='text'
                                    id='home-team-game-3'
                                    placeholder='Secondary'
                                    className='input input-secondary'
                                />
                            </td>
                            <td>
                                <label
                                    htmlFor='home-team-score-game-3'
                                    className='sr-only'
                                >
                                    Home Team Score Game 3
                                </label>
                                <input
                                    type='text'
                                    id='home-team-score-game-3'
                                    placeholder='Secondary'
                                    className='input input-secondary'
                                />
                            </td>
                            <td>
                                <label
                                    htmlFor='favorite-game-3'
                                    className='sr-only'
                                >
                                    Game 3 Favorite
                                </label>
                                <select
                                    className='select select-primary'
                                    id='favorite-game-3'
                                >
                                    <option>Away Team</option>
                                    <option>Home Team</option>
                                </select>
                            </td>
                            <td>
                                <label
                                    htmlFor='spread-game-3'
                                    className='sr-only'
                                >
                                    Game 3 Spread
                                </label>
                                <input
                                    type='text'
                                    id='spread-game-3'
                                    placeholder='Secondary'
                                    className='input input-secondary'
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
