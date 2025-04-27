import Jumbotron from "./Jumbotron";
import Card from "./Card";

const Home = () => {
	return (
		<div id="home" className="container-fluid px-5 py-4">
			<Jumbotron />
			<div className="row px-2">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default Home;