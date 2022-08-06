import { gql } from "@apollo/client";
export const GET_ALL_PRODUCTS_PREVIEW = gql`
    query Category {
        categories {
            products {
                id
                inStock
                gallery
                name
                prices {
                    currency {
                        label
                        symbol
                    }
                    amount
                }
            }
        }
    }
`;

export const GET_PRODUCT_BY_ID = gql`
    query Query($productId: String!) {
        product(id: $productId) {
            gallery
            brand
            name
            prices {
                amount
                currency {
                    symbol
                }
            }
        }
    }
`;
