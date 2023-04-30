import './SeventhView.css';
import React, { useEffect, useState } from "react";


export default function SeventhView() {

    const [items, setItems] = useState([
        { text: "You wouldn't understand, it's too complex", visible: false },
        { text: 'You need to go to school', visible: false },
        { text: 'Leave it to the experts', visible: false },
        { text: "You're not rich enough to participate", visible: false },
        { text: "You don't see the benefit because it's indirect", visible: false },
        { text: "You're crazy", visible: false },
        { text: "You don't see the benefit because it's indirect", visible: false },
    ]);

    useEffect(() => {
        let timeout = null;
        items.forEach((item, index) => {
            timeout = setTimeout(() => {
                const newItems = [...items];
                newItems[index].visible = true;
                setItems(newItems);
            }, index * 500);
        });
        return () => {
            clearTimeout(timeout);
        };
    }, [items]);


    return (
        <div style={{ width: '100vw', marginTop: '20vh', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <div style={{ width: 'fit-content', margin: 'auto' }}>
                <div style={{ fontSize: '1.6rem', fontWeight: '600' }}>
                    Even if you try to question
                    the answer is always:
                </div>
                <div>
                    {items.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                opacity: item.visible ? 1 : 0,
                                transform: item.visible ? 'translateY(0)' : 'translateY(-10px)',
                                transition: 'opacity 3s ease-out, transform 1s ease-out',
                                fontSize: '1.4rem',
                                fontFamily: 'inter'
                            }}
                        >
                            {item.text}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}