import { useEffect, useState } from "react";
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import type { FoodData } from "../../interface/FoodData";
import "./create-modal.css";

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
