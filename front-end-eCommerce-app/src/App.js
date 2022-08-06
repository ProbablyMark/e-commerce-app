import "./App.css";
import Nav from "./Components/nav";
import Shop from "./pages/shop";
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailedCart from "./pages/detailed-cart";
import ProductOverView from "./pages/product-overview";

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) => {
            alert(`graphql err ${message}`);
        });
    }
});
const link = from([
    errorLink,
    new HttpLink({ uri: "http://localhost:4000" /* local just for development*/ }),
]);

const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache(),
});

function App() {
    return (
        <div className="App">
            <ApolloProvider client={client}>
                <Router>
                    <Nav></Nav>
                    <Switch>
                        <Route path="/" exact component={Shop} />
                        <Route path="/home" exact component={Shop} />
                        <Route path="/my-bag" exact component={DetailedCart} />
                        <Route path="/product" exact component={ProductOverView} />
                    </Switch>
                </Router>
            </ApolloProvider>
        </div>
    );
}

export default App;
