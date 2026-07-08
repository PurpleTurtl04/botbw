'use client';

import { useState } from 'react';

export default function WeekSelect() {
    const [selectedWeek, setSelectedWeek] = useState('1');

    // Generate an array from 1 to 14
    const weeks = Array.from({ length: 14 }, (_, i) => i + 1);

    return (
        <div>
            <select
                className='select font-pressStart lg:select-lg select-primary text-primary min-h-13 min-w-68 border-3'
                value={selectedWeek}
                onChange={(e) => setSelectedWeek(e.target.value)}
            >
                {weeks.map((week) => (
                    <option key={week} value={week}>
                        Week {week}
                    </option>
                ))}
            </select>
        </div>
    );
}
