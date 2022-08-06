import Cart from "../Components/cart";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../Redux/products/products.action";
import "../Styles/detailed-cart.css";
function DetailedCart() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const removeProductFromList = (name) => {
        dispatch(removeProduct(name));
    };
    return (
        <div className="d-cart-container">
            {" "}
            <Cart
                checkOutSectionStyle={"d-checkout-section"}
                totalSectionStyle={"d-total-section"}
                removeItemStyle={"remove-item"}
                cardClass={"d-cart-item"}
                cardDetailsClass={"d-cart-item-details"}
                itemsSectionStyle={"d-items-section"}
                dropdownStyle={"dropdown cart-dropDown"}
                state={state}
                removeProductFromList={removeProductFromList}
            ></Cart>
        </div>
    );
}
export default DetailedCart;
