import { useState } from "react";
import "./App.css";
import { Card } from "./components/card/index";
import { useFoodData } from "./hooks/useFoodData";
import { CreateModal } from "./components/create-modal";

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen((prev) => !prev);
  };

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
      {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
      <button onClick={handleOpenModal}>Novo</button>
    </div>
  );
}

export default App;
