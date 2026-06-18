import PlayerSelect from '@/components/player-select';
import WeekSelect from '@/components/week-select';

export default function WeeklyPicks() {
    return (
        <div className='font-pressStart container mx-auto'>
            <h1 className='mt-8 text-3xl lg:mt-16 lg:text-4xl'>Weekly Picks</h1>
            <div className='mt-10 flex flex-col items-center gap-4 md:flex-row lg:mt-12'>
                <WeekSelect />
                <PlayerSelect />
            </div>
            <div className='mt-10 grid gap-6 text-xs lg:mt-12 lg:grid-cols-2'>
                <div className='flex justify-center lg:justify-end'>
                    <div className='border-primary min-w-140 border-5'>
                        <div className='border-secondary flex flex-col gap-4 border-3 p-4'>
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
                                            name='radio-4'
                                            className='radio radio-sm radio-primary'
                                        />
                                        <p>Ole Miss</p>
                                    </div>
                                </div>
                                <div className='col-span-1 text-center'>
                                    75%
                                </div>
                                <div className='col-span-1 text-center'>38</div>
                            </div>
                            <div className='grid grid-cols-4'>
                                <div className='col-span-2'>
                                    <div className='flex items-center gap-2'>
                                        <input
                                            type='radio'
                                            name='radio-4'
                                            className='radio radio-sm radio-primary'
                                        />
                                        <p>Miss St(-7.5)</p>
                                    </div>
                                </div>
                                <div className='col-span-1 text-center'>
                                    25%
                                </div>
                                <div className='col-span-1 text-center'>19</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center lg:justify-start'>
                    <div className='border-primary min-w-140 border-5'>
                        <div className='border-secondary flex flex-col gap-4 border-3 p-4'>
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
                                            name='radio-4'
                                            className='radio radio-sm radio-primary'
                                        />
                                        <p>Ole Miss</p>
                                    </div>
                                </div>
                                <div className='col-span-1 text-center'>
                                    75%
                                </div>
                                <div className='col-span-1 text-center'>38</div>
                            </div>
                            <div className='grid grid-cols-4'>
                                <div className='col-span-2'>
                                    <div className='flex items-center gap-2'>
                                        <input
                                            type='radio'
                                            name='radio-4'
                                            className='radio radio-sm radio-primary'
                                        />
                                        <p>Miss St(-7.5)</p>
                                    </div>
                                </div>
                                <div className='col-span-1 text-center'>
                                    25%
                                </div>
                                <div className='col-span-1 text-center'>19</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
