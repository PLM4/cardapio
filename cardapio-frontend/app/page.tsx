"use client";

import { useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/card";
import { CreateModal } from "./components/modal";
import { UseFoodData } from "./hooks/UseFoodData";
import TrashButton from "./components/buttons/trashButton";

export default function Home() {
  const { data } = UseFoodData();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="text-3xl text-white">Cardápio</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] w-full max-w-5xl mx-auto px-4">
        {data?.map((foodData) => (
          <Card className="text-[#0D4F97] mb-7">
            <CardHeader>
              <CardTitle className="font-bold text-center text-lg md:text-xl">
                {foodData.title}
              </CardTitle>
              <CardAction>
                <TrashButton id={foodData.id} />
              </CardAction>
            </CardHeader>
            <CardContent>
              <img
                src={foodData.image}
                alt={foodData.title}
                className="w-full h-48 object-cover rounded-lg"
              />
            </CardContent>
            <CardFooter>Preço: {foodData.price}</CardFooter>
          </Card>
        ))}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
      <button
        className="bg-[dodgerblue] text-white font-bold fixed bottom-4 right-6 px-4 py-[16px] rounded-[6px] transition-all duration-100 delay-100 ease-linear hover:shadow-[rgba(100,100,111,0.2)_0px_7px_7px_0px] hover:scale-110"
        onClick={handleOpenModal}
      >
        Novo
      </button>
    </div>
  );
}
