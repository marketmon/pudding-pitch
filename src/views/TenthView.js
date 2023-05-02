import harvard from '../harvard.png';
import React, { useEffect, useState } from 'react';

export default function TenthView() {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <div style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'flex', width: '70vw', justifyContent: 'space-between', alignItems: 'center' }}>
                <img
                    src={harvard}
                    alt="harvard finance career chart"
                    style={{
                        width: '400px', height: 'auto',
                        opacity: loaded ? 1 : 0,
                        transition: "opacity 1s ease-in-out",
                    }}
                />
                <div style={{
                    width: '500px', textAlign: 'center', fontFamily: 'inter', fontSize: '1.2rem',
                    opacity: loaded ? 1 : 0,
                    transition: "opacity 1s ease-in-out",
                }}>
                    “More profit comes from shenanigans of money manipulation…
                    and in market societies, people with capital
                    (intellectual and monetary) go for what’s profitable” - Noam Chomsky
                </div>
            </div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, margin: '20px', fontSize: '0.8rem' }}>
                Source: The Crimson, Noam Chomsky
            </div>
        </div>
    )
}