import './App.css';
import MyButton from './Button';
import Sales from './Price';
import ShoppingLists from './ShoppingList';
import WelcomeMessage, { Avatar } from './Welcome';

export default function App() {
  const name = "CUPID";
  return (
    <div className="App">
      <h1 className="Heading">
        {name} CLOTHINGS <MyButton />
      </h1>
      <section className="Divider"></section>
      <br />
      <Avatar />
      <WelcomeMessage />
      <ShoppingLists />
      <Sales discount={500} />
    </div> 
  );
}
