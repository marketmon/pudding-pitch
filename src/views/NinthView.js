import React, { useEffect, useState } from 'react';

export default function NinthView() {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <div style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'flex', width: '85vw', justifyContent: 'space-between', alignItems: 'center' }}>
                <img
                    src="https://assets.change.org/photos/9/vr/ag/irVRAgsQDsUYddJ-800x450-noPad.jpg?1535061405"
                    alt="huntsman hall"
                    style={{
                        width: '500px', height: 'auto',
                        opacity: loaded ? 1 : 0,
                        transition: "opacity 1s ease-in-out",
                    }}
                />
                <div style={{
                    width: '500px',
                    textAlign: 'center',
                    fontFamily: 'inter',
                    fontSize: '1.2rem',
                    opacity: loaded ? 1 : 0,
                    transition: "opacity 1s ease-in-out",
                }}>
                    My fellow students think the average income in America is atleast six figures...
                    <br></br>
                    One even thought it was $800,000
                </div>
            </div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, margin: '20px', fontSize: '0.8rem' }}>
                Source: Zip Recruiter, Fortune
            </div>
        </div>
    )
}