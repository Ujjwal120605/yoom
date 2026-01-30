'use client';

import { useEffect, useState } from 'react';

const CurrentTime = () => {
    const [time, setTime] = useState(new Date());
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const timeString = time.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
    });
    const dateString = new Intl.DateTimeFormat('en-US', {
        dateStyle: 'full',
    }).format(time);

    if (!isMounted) return <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-extrabold lg:text-7xl">--:-- --</h1>
        <p className="text-lg font-medium text-sky-1 lg:text-2xl">Loading...</p>
    </div>;

    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{timeString}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{dateString}</p>
        </div>
    );
};

export default CurrentTime;
