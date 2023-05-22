import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<p> A + B </p>
			<Link to="/postview/0001">
				<p> A + B 포스트로 이동 </p>
			</Link>
			<p> A - B </p>
			<Link to="/postview/0002">
				<p> A - B 포스트로 이동 </p>
			</Link>
			</div>
		
		
	);
}

export default Home;
