import BookList from "./components/BookList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <BookList />
      </div>
    </div>
  );
}

export default App;
