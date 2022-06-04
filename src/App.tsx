import "./App.scss";

import Title from "./components/Title";
import ImageList from "./components/ImageList";
import Form from "./components/Form";
import Books from "./components/Books";
const App = () => {
  return (
    <div className="App">
      <Title />
      <ImageList />
      <Form />
      <Books />
    </div>
  );
};

export default App;
