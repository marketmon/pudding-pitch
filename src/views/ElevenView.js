import wall from '../finance_wall.jpg'

export default function ElevenView() {
    return (
        <div style={{ width: '100vw', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
            <img
                src={wall}
                style={{ width: '95vw' }}
                alt="difference between systems"
            />
        </div>
    )
}