import React from "react";
import "../Styles/nav.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Card from "./card";
function Cart(props) {
    let price = 0;
    return (
        <div className={props.containerStyle}>
            <div className={props.itemsSectionStyle}>
                <div>
                    {" "}
                    <strong>MY CART</strong>{" "}
                    {Object.keys(props.state.category.productList).length > 1 &&
                        Object.keys(props.state.category.productList).length + " items"}
                </div>
                {Object.keys(props.state.category.productList).length !== 0 ? (
                    Object.keys(props.state.category.productList).map((e, index) => {
                        price +=
                            props.state.category.productList[e].prices[
                                props.state.currency.currentCurrency
                            ].amount;

                        return (
                            <Card
                                cardDetailsClass={props.cardDetailsClass}
                                cardClass={props.cardClass}
                                hasAddToCart={false}
                                data={props.state.category.productList[e]}
                                state={props.state}
                                key={index}
                            >
                                <FontAwesomeIcon
                                    icon={faTrash}
                                    className={props.removeItemStyle}
                                    onClick={(e) => {
                                        props.removeProductFromList(
                                            e.target.parentNode.parentNode.children[2].children[0]
                                                .innerHTML
                                        );
                                    }}
                                />
                            </Card>
                        );
                    })
                ) : (
                    <>
                        <br />
                        <br />
                        Start Shopping now?
                    </>
                )}
            </div>
            <div className={props.totalSectionStyle}>
                <strong>TOTAL</strong>
                <strong>
                    {Object.keys(props.state.category.productList).length !== 0 &&
                        props.state.category.productList[
                            Object.keys(props.state.category.productList)[0] + ""
                        ].prices[props.state.currency.currentCurrency].currency.symbol}

                    {price}
                </strong>
            </div>
            <div className={props.checkOutSectionStyle}>
                {props.hasViewBag && (
                    <Link style={{ textDecoration: "none", color: "black" }} to={"/my-bag"}>
                        <button> VIEW BAG </button>
                    </Link>
                )}
                <button>CHECK OUT</button>
            </div>
        </div>
    );
}

export default Cart;
