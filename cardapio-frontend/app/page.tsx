import { useState } from "react";
import { Card } from "./components/card";
import { CreateModal } from "./components/modal";
import { useFoodData } from "./hooks/UseFoodData";

export default function Home() {
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
            key={foodData.title}
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

// .container {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   width: 100vw;
// }

// .card-grid {
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
//   gap: 16px;
// }

// .container > button {
//   background-color: dodgerblue;
//   color: white;
//   font-weight: bold;
//   position: fixed;
//   bottom: 16px;
//   right: 24px;
//   padding: 12px 20px;
//   border-radius: 6px;
//   transition: all 0.1s linear 0.1s;
// }

// .container > button:hover {
//   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 7px 0px;
//   transform: scale(1.1);
// }
// @media (max-width: 1024px) {
//   .card-grid {
//     grid-template-columns: repeat(2, 1fr);
//     gap: 16px;
//   }

//   .container {
//     padding: 0 20px;
//   }
// }

// @media (max-width: 768px) {
//   .card-grid {
//     grid-template-columns: repeat(2, 1fr);
//     gap: 12px;
//   }
// }

// @media (max-width: 600px) {
//   .card-grid {
//     grid-template-columns: 1fr;
//     gap: 16px;
//     max-width: 400px;
//     margin: 0 auto;
//   }

//   .container {
//     width: 100%;
//     padding: 0 16px;
//     box-sizing: border-box;
//   }

//   .container > button {
//     right: 16px;
//     bottom: 16px;
//     padding: 12px 20px;
//     font-size: 14px;
//     position: fixed;
//     z-index: 100;
//   }
// }

// @media (max-width: 480px) {
//   .card-grid {
//     gap: 12px;
//   }

//   .container {
//     padding: 0 12px;
//   }

//   .container > button {
//     right: 12px;
//     bottom: 12px;
//     padding: 10px 18px;
//   }
// }
