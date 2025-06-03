import PropTypes from 'prop-types';
import { Card, CardQuantity, DecrementBtn, IncrementBtn } from './CardItem.styled';



export const CardItem = ({ item }) => {

    const total = item.price * item.quantity

    return (
        <Card>
            <img src={require('../../images/Peugeot-bike.png')} alt={item.name} />

            <p>{item.name}</p>
            <p>{item.price}$</p>
            <CardQuantity>
                <IncrementBtn>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M18.9976 11.5H12.9976V5.5C12.9976 5.23478 12.8922 4.98043 12.7047 4.79289C12.5171 4.60536 12.2628 4.5 11.9976 4.5C11.7323 4.5 11.478 4.60536 11.2905 4.79289C11.1029 4.98043 10.9976 5.23478 10.9976 5.5V11.5H4.99756C4.73234 11.5 4.47799 11.6054 4.29045 11.7929C4.10292 11.9804 3.99756 12.2348 3.99756 12.5C3.99756 12.7652 4.10292 13.0196 4.29045 13.2071C4.47799 13.3946 4.73234 13.5 4.99756 13.5H10.9976V19.5C10.9976 19.7652 11.1029 20.0196 11.2905 20.2071C11.478 20.3946 11.7323 20.5 11.9976 20.5C12.2628 20.5 12.5171 20.3946 12.7047 20.2071C12.8922 20.0196 12.9976 19.7652 12.9976 19.5V13.5H18.9976C19.2628 13.5 19.5171 13.3946 19.7047 13.2071C19.8922 13.0196 19.9976 12.7652 19.9976 12.5C19.9976 12.2348 19.8922 11.9804 19.7047 11.7929C19.5171 11.6054 19.2628 11.5 18.9976 11.5Z" fill="white" />
                    </svg>
                </IncrementBtn>
                <p>{item.quantity}</p>
                <DecrementBtn>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M18.9976 11.5H4.99756C4.73234 11.5 4.47799 11.6054 4.29045 11.7929C4.10292 11.9804 3.99756 12.2348 3.99756 12.5C3.99756 12.7652 4.10292 13.0196 4.29045 13.2071C4.47799 13.3946 4.73234 13.5 4.99756 13.5H18.9976C19.2628 13.5 19.5171 13.3946 19.7047 13.2071C19.8922 13.0196 19.9976 12.7652 19.9976 12.5C19.9976 12.2348 19.8922 11.9804 19.7047 11.7929C19.5171 11.6054 19.2628 11.5 18.9976 11.5Z" fill="white" fillOpacity="0.6" />
                    </svg>
                </DecrementBtn>
            </CardQuantity>
            <p>{total}$</p>
            <button>&times;</button>
        </Card>
    )
}

CardItem.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
    }),
}