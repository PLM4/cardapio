"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/dialog/index";
import { UseFoodDataDelete } from "@/app/hooks/UseFoodDataDelete";
import { Trash2 } from "lucide-react";

type trashButtonProps = {
  id?: number;
};

export default function TrashButton({ id }: trashButtonProps) {
  const { mutate } = UseFoodDataDelete();

  const handleDelete = () => {
    mutate(id);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-transparent cursor-pointer text-[#970D0D] active:text-[#c21111] hover:bg-[rgba(0,0,0,0.1)] transition-colors">
          <Trash2 />
        </button>
      </DialogTrigger>
      <DialogContent className="w-full sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Confirmar exclusão</DialogTitle>
          <DialogDescription>
            Ao confirmar, a comida será exluída permanentemente. Deseja
            continuar?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <button>Não</button>
          </DialogClose>
          <DialogClose asChild>
            <button onClick={handleDelete} type="submit">
              Sim
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
