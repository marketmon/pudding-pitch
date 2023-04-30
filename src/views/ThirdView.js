import simplebank from '../simple_bank.png'

export default function ThirdView() {
    return (
        <div style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                    src="https://www.i1.creditdonkey.com/image/1/540w/how-banks-work-diagram-v2.png"
                    style={{ width: '350px', animation: 'fadeIn 1s ease-in-out forwards' }}
                />
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Jamestown._The_old_Savings_Bank_of_South_Australia._A_grand_19th_century_style_bank_building._%2844043913335%29.jpg/800px-Jamestown._The_old_Savings_Bank_of_South_Australia._A_grand_19th_century_style_bank_building._%2844043913335%29.jpg?20191210204218"
                    style={{ width: '350px', height: '300px', animation: 'fadeIn 1s ease-in-out 0.5s forwards' }}
                />
                <div>
                    <img
                        src={simplebank}
                        style={{ width: '300px', height: '180px', animation: 'fadeIn 1s ease-in-out 0.5s forwards' }}
                    />

                </div>
            </div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, margin: '20px', fontSize: '0.8rem' }}>
                Source: Credit Donkey, Wikipedia, Johnny Harris
            </div>
        </div>
    )
}
