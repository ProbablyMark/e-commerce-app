import React, { useEffect, useState } from "react";
import "../Styles/nav.css";
import BrandIcon from "../Assets/BrandIcon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSterlingSign, faYenSign } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import DropdownMenu from "./DropdownMenu";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, removeProduct } from "../Redux/products/products.action";
import { setCurrency } from "../Redux/nav/currency.action";

import Cart from "./cart";

import { Link } from "react-router-dom";

function Nav() {
    const [openCurrencyDropDown, setOpenCurrencyDropDown] = useState(false);
    const [openCartDropDown, setOpenCartDropDown] = useState(false);
    const [activeDiv, setActiveDiv] = useState(0);
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const changeCategory = (category) => {
        dispatch(setCategory(category));
    };
    const changeCurrency = (currency) => {
        dispatch(setCurrency(currency));
    };
    const removeProductFromList = (name) => {
        dispatch(removeProduct(name));
    };

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!document.getElementsByClassName("nav-bar")[0].contains(e.target)) {
                setOpenCurrencyDropDown(false);
                setOpenCartDropDown(false);
            }
        };

        document.addEventListener("click", closeDropDown);
    });

    return (
        <div className="nav-bar">
            <header className="navbar">
                <div className="left-section">
                    <Link
                        to={"/"}
                        className={
                            " navbar-item " + (activeDiv === 0 ? "navbar-item-active" : null)
                        }
                        onClick={() => {
                            changeCategory(0);
                            setActiveDiv(0);
                        }}
                    >
                        ALL
                    </Link>
                    <Link
                        to={"/"}
                        className={
                            " navbar-item " + (activeDiv === 1 ? "navbar-item-active" : null)
                        }
                        onClick={() => {
                            changeCategory(1);
                            setActiveDiv(1);
                        }}
                    >
                        CLOTHS
                    </Link>
                    <Link
                        to={"/"}
                        className={
                            " navbar-item " + (activeDiv === 2 ? "navbar-item-active" : null)
                        }
                        onClick={() => {
                            changeCategory(2);
                            setActiveDiv(2);
                        }}
                    >
                        TECH
                    </Link>
                </div>

                <img src={BrandIcon} alt="" />
                <div className="right-section">
                    <div
                        onClick={() => {
                            setOpenCurrencyDropDown(!openCurrencyDropDown);
                            setOpenCartDropDown(false);
                        }}
                    >
                        <FontAwesomeIcon icon={faDollarSign} />
                        <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                    {openCurrencyDropDown && (
                        <DropdownMenu>
                            <div className="dropdown currency-dropdown">
                                <div
                                    onClick={(event) => {
                                        changeCurrency(0);
                                    }}
                                >
                                    <FontAwesomeIcon icon={faDollarSign} /> USD
                                </div>

                                <div
                                    onClick={(event) => {
                                        changeCurrency(1);
                                    }}
                                >
                                    <FontAwesomeIcon icon={faSterlingSign} /> GBP
                                </div>

                                <div
                                    onClick={(event) => {
                                        changeCurrency(3);
                                    }}
                                >
                                    <FontAwesomeIcon icon={faYenSign} /> JPY
                                </div>
                            </div>
                        </DropdownMenu>
                    )}

                    <FontAwesomeIcon
                        onClick={() => {
                            setOpenCartDropDown(!openCartDropDown);
                            setOpenCurrencyDropDown(false);
                        }}
                        icon={faCartShopping}
                    />

                    {openCartDropDown && (
                        <DropdownMenu>
                            <Cart
                                checkOutSectionStyle={"checkout-section"}
                                totalSectionStyle={"total-section"}
                                removeItemStyle={"remove-item"}
                                cardClass={"cart-item"}
                                cardDetailsClass={"cart-item-details"}
                                itemsSectionStyle={"items-section"}
                                containerStyle={"dropdown cart-dropDown"}
                                state={state}
                                removeProductFromList={removeProductFromList}
                                hasViewBag={true}
                            ></Cart>
                        </DropdownMenu>
                    )}
                </div>
            </header>
        </div>
    );
}

export default Nav;
