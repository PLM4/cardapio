import { useEffect, useState } from "react";
import { useFoodDataMutate } from "@/app/hooks/UseFoodDataMutate";
import type { FoodData } from "@/app/interface/FoodData";

interface InputProps {
  label: string;
  value: string | number;
  updatedValue(value: any): void;
}

interface ModalProps {
  closeModal(): void;
}

const Input = ({ label, value, updatedValue }: InputProps) => {
  return (
    <div className="input-wrapper">
      <label>{label}</label>
      <input
        value={value}
        onChange={(event) => updatedValue(event.target.value)}
      />
    </div>
  );
};

export function CreateModal({ closeModal }: ModalProps) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const { mutate, isSuccess, isPending } = useFoodDataMutate();

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    const foodData: FoodData = {
      title,
      price,
      image,
    };
    mutate(foodData);
  };

  useEffect(() => {
    if (!isSuccess) return;
    closeModal();
  }, [isSuccess]);

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2>Cadastre uma nova comida no cardápio</h2>
        <form className="input-container" onSubmit={submit}>
          <Input label="Title" value={title} updatedValue={setTitle} />
          <Input label="Price" value={price} updatedValue={setPrice} />
          <Input label="Image" value={image} updatedValue={setImage} />
          <button type="submit" className="button-secondary">
            {isPending ? "postando..." : "Postar"}
          </button>
        </form>
      </div>
    </div>
  );
}

// .modal-overlay {
//   align-items: center;
//   background-color: rgba(0, 0, 0, 0.6);
//   display: flex;
//   height: 100vh;
//   justify-content: center;
//   position: fixed;
//   inset: 0;
//   width: 100vw;
//   z-index: 999;
// }

// .modal-overlay .modal-body {
//   background-color: #1e1e1e; /* fundo escuro */
//   border-radius: 8px;
//   display: flex;
//   flex-direction: column;
//   padding: 24px;
//   width: 90%;
//   max-width: 450px;
//   border: 1px solid #333; /* cinza suave */
// }

// .modal-overlay .modal-body h2 {
//   font-size: 20px;
//   color: #f5f5f5; /* texto quase branco */
//   margin-bottom: 20px;
//   font-weight: 600;
//   text-align: left;
// }

// .modal-overlay .modal-body .input-container {
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 12px;
// }

// .modal-overlay .modal-body .input-wrapper {
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   text-align: left;
// }

// .modal-overlay .modal-body label {
//   color: #ccc; /* cinza médio */
//   font-size: 14px;
//   font-weight: 500;
//   margin-bottom: 4px;
// }

// .modal-overlay .modal-body input {
//   background: #2b2b2b; /* cinza escuro */
//   border: 1px solid #444; /* borda sutil */
//   border-radius: 6px;
//   color: #f5f5f5; /* texto claro */
//   font-size: 14px;
//   padding: 10px;
//   width: 100%;
//   outline: none;
//   transition: border-color 0.2s ease;
//   box-sizing: border-box;
// }

// .modal-overlay .modal-body input:focus {
//   border-color: #888; /* cinza mais claro no foco */
// }

// .modal-overlay .modal-body .input-container .button-secondary {
//   background-color: #f5f5f5; /* botão claro */
//   border: none;
//   border-radius: 6px;
//   color: #111; /* texto escuro */
//   cursor: pointer;
//   font-size: 14px;
//   font-weight: 600;
//   padding: 12px;
//   width: 100%;
//   margin-top: 10px;
//   transition: background-color 0.2s ease, opacity 0.2s ease;
// }

// .modal-overlay .modal-body .input-container .button-secondary:hover {
//   background-color: #e0e0e0; /* cinza mais suave */
// }

// @media (max-width: 768px) {
//   .modal-overlay .modal-body {
//     width: 95%;
//     padding: 16px;
//   }

//   .modal-overlay .modal-body h2 {
//     font-size: 18px;
//   }
// }
