import React, { useEffect, useState } from 'react';

export default function SixthView() {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <div style={{ width: '100vw', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
            <img
                src="https://thumbs.dreamstime.com/b/illustration-gate-entrance-to-ancient-egyptian-temple-egypt-stone-statue-guards-guard-doorway-nice-background-scene-211602705.jpg"
                alt="egyptian temple entrance"
                style={{
                    width: '400px', height: '300px',
                    opacity: loaded ? 1 : 0,
                    transition: "opacity 1s ease-in-out",
                }}
            />
            <div>
                <img
                    src="https://mms.businesswire.com/media/20220414005334/en/1421237/4/270_Park_lobby.jpg?download=1"
                    alt="jp morgan new hq interior"
                    style={{
                        width: '350px',
                        opacity: loaded ? 1 : 0,
                        transition: "opacity 1s ease-in-out",
                    }}
                />
                <img
                    src="https://www.stirworld.com/images/article_gallery/425-park-avenue-the-latest-office-tower-in-new-york-city-425-park-avenue-norman-foster-stirworld-221214020735.jpg"
                    style={{
                        width: '350px',
                        opacity: loaded ? 1 : 0,
                        transition: "opacity 1s ease-in-out",
                    }}
                    alt="425 park avenue"
                />
            </div>
            <div style={{
                width: '600px',
                marginRight: '30px',
                fontFamily: 'inter',
                fontSize: '1.1rem',
                padding: '5px',
                color: 'white',
                backgroundColor: 'black',
                marginTop: '-20px',
                opacity: loaded ? 1 : 0,
                transition: "opacity 1s ease-in-out",
            }}>
                “In one sense… the free market has acquired the status that religion once enjoyed, treated as self evident and inevitable” -LSE
            </div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, margin: '20px', fontSize: '0.8rem' }}>
                Source: London School of Economics
            </div>
        </div>
    )
}