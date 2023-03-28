import BooksForm from "./components/BooksForm";
import BooksList from "./components/BooksList";

const App = () => {
	return (
		<div>
			<h1>Books App</h1>
			<BooksList />
			<BooksForm />
		</div>
	);
}

export default App;