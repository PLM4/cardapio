import "./App.css";
import { Card } from "./components/card/index";
import { useFoodData } from "./hooks/useFoodData";

function App() {
  const { data } = useFoodData();
  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data?.map((foodData) => (
          <Card
            image={foodData.image}
            price={foodData.price}
            title={foodData.title}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
