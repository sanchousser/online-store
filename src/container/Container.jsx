import { InputForm } from "components/InputForm/InputForm";
import { Loader } from "components/Loader/Loader";
import { CardList } from "components/CardList/CardList";
import { TotalAmount } from "components/TotalAmount/TotalAmount";


const initialState = [
    {
        id: '1',
        name: 'PEUGEOT- LR01',
        price: 1999.99,
        quantity: 1,
        image: '../images/Peugeot-bike.png'
    },
    {
        id: '2',
        name: 'PILOT - CHROMOLY 520',
        price: 3999.99,
        quantity: 1,
        image:  '../images/Pilot-bile.png'
    },
    {
        id: '3',
        name: 'SMITH - Trade',
        price: 120,
        quantity: 1,
        image:  '../images/Helmet.png'
    },
    {
        id: '4',
        name: 'ELECTRIC - WHHERO',
        price: 5499.99,
        quantity: 1,
        image:  '../images/White-bike.png'
    }
]


export const Container = () => {
    return (
        <div>
            <InputForm />
            <Loader />
            <CardList items={initialState}/>
            <TotalAmount items={initialState}/>
        </div>
    )
}