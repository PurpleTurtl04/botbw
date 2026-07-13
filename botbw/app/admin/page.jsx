import WeekSelect from '@/components/week-select';

export default function Admin() {
    return (
        <div className='container mx-auto'>
            <h1 className='font-pressStart mt-8 text-3xl lg:mt-16 lg:text-4xl'>
                Admin Game Picks
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
                            <th className='w-1/9'>Spread</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>1</td>
                            <td>
                                <input
                                    type='text'
                                    placeholder='Secondary'
                                    className='input input-secondary'
                                />
                            </td>
                            <td>
                                <input
                                    type='text'
                                    placeholder='Secondary'
                                    className='input input-secondary'
                                />
                            </td>
                            <td>
                                <input
                                    type='text'
                                    placeholder='Secondary'
                                    className='input input-secondary'
                                />
                            </td>
                            <td>
                                <input
                                    type='text'
                                    placeholder='Secondary'
                                    className='input input-secondary'
                                />
                            </td>
                            <td>
                                <select className='select select-primary'>
                                    <option>Away Team</option>
                                    <option>Home Team</option>
                                </select>
                            </td>
                            <td>
                                <input
                                    type='text'
                                    placeholder='Secondary'
                                    className='input input-secondary'
                                />
                            </td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <td>2</td>
                            <td>
                                <input
                                    type='text'
                                    placeholder='Secondary'
                                    className='input input-secondary'
                                />
                            </td>
                            <td>
                                <input
                                    type='text'
                                    placeholder='Secondary'
                                    className='input input-secondary'
                                />
                            </td>
                            <td>
                                <input
                                    type='text'
                                    placeholder='Secondary'
                                    className='input input-secondary'
                                />
                            </td>
                            <td>
                                <input
                                    type='text'
                                    placeholder='Secondary'
                                    className='input input-secondary'
                                />
                            </td>
                            <td>
                                <select className='select select-primary'>
                                    <option>Away Team</option>
                                    <option>Home Team</option>
                                </select>
                            </td>
                            <td>
                                <input
                                    type='text'
                                    placeholder='Secondary'
                                    className='input input-secondary'
                                />
                            </td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <td>3</td>
                            <td>
                                <input
                                    type='text'
                                    placeholder='Secondary'
                                    className='input input-secondary'
                                />
                            </td>
                            <td>
                                <input
                                    type='text'
                                    placeholder='Secondary'
                                    className='input input-secondary'
                                />
                            </td>
                            <td>
                                <input
                                    type='text'
                                    placeholder='Secondary'
                                    className='input input-secondary'
                                />
                            </td>
                            <td>
                                <input
                                    type='text'
                                    placeholder='Secondary'
                                    className='input input-secondary'
                                />
                            </td>
                            <td>
                                <select className='select select-primary'>
                                    <option>Away Team</option>
                                    <option>Home Team</option>
                                </select>
                            </td>
                            <td>
                                <input
                                    type='text'
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
