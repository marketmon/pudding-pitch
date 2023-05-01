import React, { useEffect, useState } from 'react';

export default function SecondView() {
    const [items, setItems] = useState([]);

    const positions = [
        { x: 0, y: 34 },
        { x: 101, y: 89 },
        { x: 457, y: 56 },
        { x: 50, y: 130 },
        { x: 345, y: 10 },
        { x: 389, y: 150 },
        { x: 234, y: 45 },
        { x: 150, y: 167 },
        { x: 314, y: 96 },
        { x: 459, y: 126 },
        { x: 245, y: 197 }
    ];

    useEffect(() => {
        setItems([
            'wealth inequality',
            'volatility',
            'economic collapse',
            'ineffective and fragile retirement system',
            'wage stagnation',
            'too big to fail',
            'national debt',
            'monopolies',
            'offshore accounts',
            'planned obsolescence',
            'crippling credit card debt'
        ]);
    }, []);



    const styles = {
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        },
        item: {
            opacity: 0,
            position: 'absolute',
            animation: 'enter 2s ease-in-out forwards',
            fontSize: '24px', // <-- add this
            lineHeight: '4', // <-- add this
            margin: '30px'
        },
    };

    return (
        <div style={{ height: '300px' }}>
            {positions.map((position, index) => (
                <p
                    key={index}
                    style={{
                        ...styles.item,
                        left: `${position.x}px`,
                        top: `${position.y}px`,
                        animationDelay: `${0.2 * index}s`,
                        animationName: `enter_${index}`,
                    }}
                >
                    {items[index]}
                </p>
            ))}
            <style>
                {positions.map((position, index) => {
                    return `
            @keyframes enter_${index} {
              from {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0);
              }
              to {
                opacity: 1;
                transform: translate(${position.x}px, ${position.y}px) scale(1);
              }
            }
          `;
                })}
            </style>
        </div>
    );
}
