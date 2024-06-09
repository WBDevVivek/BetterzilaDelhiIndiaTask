import { configureStore } from "@reduxjs/toolkit";
import user from "./user";
import loading from "./loading";
import history from "./history";
import messages from "./messages";
import themeToggler from "./themeToggler";

export const store = configureStore({
    reducer: {
        user,
        loading,
        history,
        messages,
        themeToggler
    }
})