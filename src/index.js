import ReactDom from "react-dom";
import "./index.css";
import App from "./app";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

ReactDom.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
);
