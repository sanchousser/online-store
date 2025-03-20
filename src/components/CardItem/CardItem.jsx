import PropTypes from 'prop-types';

export const CardItem = ({ item }) => {

    const total = item.price * item.quantity

    return (
        <div>
            <p>{item.name}</p>
            <p>{item.price}$</p>
            <div>
                <button>-</button>
                <p>{item.quantity}</p>
                <button>+</button>
            </div>
            <p>{total}$</p>
            <button>&times;</button>
        </div>
    )
}

CardItem.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
    }),
}