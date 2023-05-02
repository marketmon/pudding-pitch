import recession_comic from '../finance_comic.PNG';
import React, { useEffect, useState } from 'react';

export default function FirstView() {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <div style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'flex' }}>
                <img
                    alt="recession comic"
                    src={recession_comic}
                    style={{
                        width: '85vw',
                        opacity: loaded ? 1 : 0,
                        transition: "opacity 1s ease-in-out",
                    }}
                />
            </div>
        </div>
    )
}