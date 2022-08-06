import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import Card from "../Components/card";
import { GET_ALL_PRODUCTS_PREVIEW } from "../GraphQL/Queries";
import "../Styles/shop.css";
import { useSelector } from "react-redux";

import { addProduct } from "../Redux/products/products.action";
import { useDispatch } from "react-redux";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Shop() {
    const { error, data, loading } = useQuery(GET_ALL_PRODUCTS_PREVIEW);
    const dispatch = useDispatch();
    const addingProduct = (id) => {
        dispatch(addProduct(id));
    };
    const state = useSelector((state) => state);
    useEffect(() => {}, [data]);

    return (
        <div className="main-shop-container  ">
            {/* {loading && <div style={{ margin: "auto" }}>loading</div>} */}
            {data &&
                data.categories[state.category.currentCategory].products.map((e, index) => {
                    return (
                        <Card
                            cardClass="card"
                            cardDetailsClass="card-details"
                            hasAddToCart={true}
                            data={e}
                            state={state}
                            addProduct={addingProduct}
                            key={index}
                        >
                            {e.inStock ? (
                                <div className="buy">
                                    <FontAwesomeIcon
                                        onClick={() => {
                                            addingProduct({
                                                id: e.id,
                                                name: e.name,
                                                gallery: e.gallery,
                                                prices: e.prices,
                                                count: 1,
                                            });
                                        }}
                                        className="buy-icon"
                                        icon={faCartShopping}
                                    />
                                </div>
                            ) : (
                                <div className="not-inStock">
                                    <p>Not in Stock</p>
                                </div>
                            )}
                        </Card>
                    );
                })}
        </div>
    );
}

export default Shop;
