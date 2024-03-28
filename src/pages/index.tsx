import React, { useState } from 'react';

export default function Home() {
    const [count, setCount] = useState(0);
    const countUp = () => setCount(count + 1);
    return (
        <div>
            <p className='text-3xl font-bold bg-black text-white'>eyyyy
                OMG {count}</p>
            <button onClick={countUp}>Click me</button>
        </div>
    );
}