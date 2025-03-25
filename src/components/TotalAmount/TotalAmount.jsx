export const TotalAmount = ({items}) => {
    const total = items.reduce((acc, item) => acc + item.quantity * item.price, 0);

    return (
        <p><b>Total:</b> {total}$</p>
    )
}