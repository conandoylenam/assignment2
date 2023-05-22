import { useParams } from "react-router-dom";

const PostView = () => {
	const params = useParams();
	const sum = (a, b) => {
		a = 1;
		b = 2;
		return a + b;
	}
	return (
		<div>
			<p> A + B 페이지 입니다. </p>
			<p> { params.sum } 3 </p>
		</div>
	);

}

export default PostView;
