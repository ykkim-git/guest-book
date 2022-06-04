import "./App.scss";

import Title from "./components/Title";
import ImageList from "./components/ImageList";
import Books from "./components/Books";
const App = () => {
  return (
    <div className="App">
      <Title />
      <ImageList />
      <Books />
    </div>
  );
};

export default App;
