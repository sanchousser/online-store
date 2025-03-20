import { CardItem } from "components/CardItem/CardItem";
import PropTypes from "prop-types";

export const CardList = ({ items }) => <div>{items.map(item => (<CardItem key={item.id} item={item} />))}</div>

CardList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ),
};