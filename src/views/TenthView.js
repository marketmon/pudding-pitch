import harvard from '../harvard.png'

export default function TenthView() {
    return (
        <div style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'flex', width: '70vw', justifyContent: 'space-between', alignItems: 'center' }}>
                <img
                    src={harvard}
                    alt="harvard finance career chart"
                    style={{ width: '400px', height: 'auto' }}
                />
                <div style={{ width: '500px', textAlign: 'center', fontFamily: 'inter', fontSize: '1.2rem' }}>
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