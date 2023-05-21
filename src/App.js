import "./App.css";
import Counter from "./app/features/counter/Counter";
import AddPostForms from "./app/features/posts/AddPostForms";
import PostsList from "./app/features/posts/PostsList";

function App() {
  return (
    <div className="App">
      <PostsList />
      <AddPostForms />
    </div>
  );
}

export default App;
