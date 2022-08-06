import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { categoryReducer } from "./products/products.reducer";
import { currencyReducer } from "./nav/currency.reducer";
import storage from "redux-persist/lib/storage";

import { persistStore, persistReducer } from "redux-persist";

const rootReducer = combineReducers({
    category: categoryReducer,
    currency: currencyReducer,
});

const persistConfig = { key: "persist-ley", storage };
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, composeWithDevTools());
const persistor = persistStore(store);

export { persistor, store };
