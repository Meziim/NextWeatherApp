"use client";
import { Provider } from "react-redux";
import store from "./store";

export function AppProvider({ Children }) {
	return <Provider store={store}>{Children}</Provider>;
}
