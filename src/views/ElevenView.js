import wall from '../finance_wall.jpg';
import React, { useEffect, useState } from 'react';

export default function ElevenView() {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <div style={{ width: '100vw', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
            <img
                src={wall}
                style={{
                    width: '95vw',
                    opacity: loaded ? 1 : 0,
                    transition: "opacity 1s ease-in-out",
                }}
                alt="difference between systems"
            />
        </div>
    )
}