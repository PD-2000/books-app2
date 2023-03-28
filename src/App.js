import BooksForm from "./components/BooksForm";
import BooksList from "./components/BooksList";
import {useState} from "react";
import shortid from 'shortid';

const App = () => {
	const [books, setBooks] = useState([
		{id: 1, title: 'Of Mice and Men', author: 'John Steinbeck'},
		{id: 2, title: 'The Witcher', author: 'Andrzej Sapkowski'}
	]);
	const removeBook = bookId => {
		setBooks(books.filter(book => book.id !== bookId));
	};
	const addBook = newBook => {
		setBooks([...books, {id: shortid(), title: newBook.title, author: newBook.author}]);

	};
	return (
		<div>
			<h1>Books App</h1>
			<BooksList books={books} removeBook={removeBook}/>
			<BooksForm addBook={addBook}/>
		</div>
	);
}

export default App;