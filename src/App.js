import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <div className="App">
        <Navbar />
        <div className="content">
          <BookList />
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
