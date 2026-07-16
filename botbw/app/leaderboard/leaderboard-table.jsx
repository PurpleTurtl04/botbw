'use client';

import React, { useState } from 'react';
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table';

import leaderboardData from '@/data/leaderboard.json';

// 1. Mock Data
const data = leaderboardData;

// 2. Column Helper
const columnHelper = createColumnHelper();

// 3. Column Definitions
const columns = [
    columnHelper.accessor('id', {
        header: () => 'ID',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('place', {
        header: ({ column }) => (
            <div className='flex items-center justify-center gap-0.5'>
                <span>Place</span>
                <span>
                    {{ asc: ' ⬆', desc: ' ⬇' }[column.getIsSorted()] ?? ''}
                </span>
            </div>
        ),
        cell: (info) => <div className='text-center'>{info.getValue()}</div>,
    }),
    columnHelper.accessor('name', {
        header: ({ column }) => (
            <div className='flex items-center gap-0.5'>
                <span>Name</span>
                <span>
                    {{ asc: ' ⬆', desc: ' ⬇' }[column.getIsSorted()] ?? ''}
                </span>
            </div>
        ),
        cell: (info) => <b>{info.getValue()}</b>,
    }),
    columnHelper.accessor('weeklyPoints', {
        header: ({ column }) => (
            <div className='flex items-center justify-center gap-0.5'>
                <span className='text-center'>Weekly Points</span>
                <span>
                    {{ asc: ' ⬆', desc: ' ⬇' }[column.getIsSorted()] ?? ''}
                </span>
            </div>
        ),
        cell: (info) => <div className='text-center'>{info.getValue()}</div>,
    }),
    columnHelper.accessor('weeklyPickPercentage', {
        header: ({ column }) => (
            <div className='flex items-center justify-center gap-0.5'>
                <div className='text-center'>
                    Weekly <span className='whitespace-nowrap'>Pick %</span>
                </div>
                <span>
                    {{ asc: ' ⬆', desc: ' ⬇' }[column.getIsSorted()] ?? ''}
                </span>
            </div>
        ),
        cell: (info) => <div className='text-center'>{info.getValue()}%</div>,
    }),
    columnHelper.accessor('seasonPoints', {
        header: ({ column }) => (
            <div className='flex items-center justify-center gap-0.5'>
                <span className='text-center'>Season Points</span>
                <span>
                    {{ asc: ' ⬆', desc: ' ⬇' }[column.getIsSorted()] ?? ''}
                </span>
            </div>
        ),
        cell: (info) => <div className='text-center'>{info.getValue()}</div>,
    }),
    columnHelper.accessor('seasonPickPercentage', {
        header: ({ column }) => (
            <div className='flex items-center justify-center gap-0.5'>
                <div className='text-center'>
                    Season <span className='whitespace-nowrap'>Pick %</span>
                </div>
                <span>
                    {{ asc: ' ⬆', desc: ' ⬇' }[column.getIsSorted()] ?? ''}
                </span>
            </div>
        ),
        cell: (info) => <div className='text-center'>{info.getValue()}%</div>,
    }),
];

export default function LeaderboardTable() {
    const [sorting, setSorting] = useState([]);

    // 4. Table Instance
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: setSorting,
        state: {
            sorting,
        },
        initialState: {
            columnVisibility: { id: false }, // Hides the "id" column initially
        },
    });

    // 5. Render JSX using daisyUI classes
    return (
        <div className='w-full overflow-x-auto'>
            <table className='table w-full'>
                {/* head */}
                <thead className='font-pressStart bg-primary text-secondary'>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    onClick={header.column.getToggleSortingHandler()}
                                    className='cursor-pointer whitespace-normal'
                                >
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext(),
                                    )}
                                    {/* Add sorting indicator */}
                                    {/* {
                                        {
                                            asc: ' ⬆',
                                            desc: ' ⬇',
                                        }[header.column.getIsSorted()]
                                    } */}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                {/* body */}
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td
                                    key={cell.id}
                                    className='border-primary border-b text-base'
                                >
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext(),
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
