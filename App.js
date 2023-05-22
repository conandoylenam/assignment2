import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import PostView from "./Pages/PostView";

const App = () => {
	return (
	
		<BrowserRouter>
			<Routes>
				<Route path="/" element={ <Home/> } />
				<Route path="/postview/:postID" element={ <PostView/> } />
				<Route path="/sum/:a:b" element={ <PostView/> } />
				<Route path="/sub/:a:b" element={ <PostView/> } />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
