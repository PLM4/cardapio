"use client";

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
    <div className="flex flex-col w-full text-left">
      <label className="text-[#ccc] text-sm font-medium mb-1">{label}</label>
      <input
        value={value}
        onChange={(event) => updatedValue(event.target.value)}
        className="bg-[#2b2b2b] border border-[#444] rounded-[6px] text-[#f5f5f5] text-sm p-[10px] w-full outline-none transition-[border-color] duration-200 ease-[ease] box-border focus:border-[#888]"
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
    <div className="fixed inset-0 w-full h-full bg-[rgba(0,0,0,0.6)] flex items-center justify-center z-[999]">
      <div className="bg-[#1e1e1e] rounded-lg flex flex-col p-6 w-[90%] max-w-[450px] border border-[#333] md:w-95 md:p-4">
        <h2 className="text-xl text-[#f5f5f5] mb-5 font-semibold text-left md:text-lg">
          Cadastre uma nova comida no cardápio
        </h2>
        <form className="w-full flex flex-col gap-3" onSubmit={submit}>
          <Input label="Title" value={title} updatedValue={setTitle} />
          <Input label="Price" value={price} updatedValue={setPrice} />
          <Input label="Image" value={image} updatedValue={setImage} />
          <button
            type="submit"
            className="bg-[#f5f5f5] border-none rounded-[6px] text-[#111] cursor-pointer text-sm font-semibold p-3 w-full mt-[10px] transition-[background-color,opacity] duration-200 ease-[ease] hover:bg-[#e0e0e0]"
          >
            {isPending ? "postando..." : "Postar"}
          </button>
        </form>
      </div>
    </div>
  );
}
