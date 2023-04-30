import harvard from '../harvard.png'

export default function TenthView() {
    return (
        <div style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'flex', width: '70vw', justifyContent: 'space-between', alignItems: 'center' }}>
                <img
                    src={harvard}
                    style={{ width: '400px', height: 'auto' }}
                />
                <div style={{ width: '500px', textAlign: 'center', fontFamily: 'inter', fontSize: '1.2rem' }}>
                    “More profit comes from shenanigans of money manipulation…
                    and in market societies, people with capital
                    (intellectual and monetary) go for what’s profitable” - Noam Chomsky
                </div>
            </div>
        </div>
    )
}