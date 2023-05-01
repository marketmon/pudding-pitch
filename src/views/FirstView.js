import recession_comic from '../finance_comic.PNG'

export default function FirstView() {
    return (
        <div style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'flex' }}>
                <img
                    alt="recession comic"
                    src={recession_comic}
                    style={{ width: '85vw' }}
                />
            </div>
        </div>
    )
}