"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash, X } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { useModal } from "@/hooks/use-modal-store";
import { Button } from "@/components/ui/button"


const DeleteServerModal = () => {
  const { onOpen, isOpen, onClose, type, data } = useModal();
  const router = useRouter();

  const isModalOpen = isOpen && type === "deleteServer";
  const { server } = data;

  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      await axios.delete(`/api/servers/${server?.id}`);
      router.refresh();
      onClose();
      router.push("/dashboard");
      window.location.reload();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white dark:bg-[#313338] text-black dark:text-white p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Delete Server
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500 dark:text-zinc-300">
            Are you sure you want to delete this server? This action is irreversible!
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className="p-6 bg-gray-100 dark:bg-zinc-800 flex justify-between w-full mt-4">
            <Button
              onClick={onClose}
              disabled={isLoading}
              variant="outline"
              size="sm"
              className="dark:bg-transparent dark:hover:opacity-75"
            >
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
            <Button
              onClick={onClick}
              disabled={isLoading}
              variant="destructive"
              size="sm"
              className=""
            >
              <Trash className="h-4 w-4 mr-2" />
              Delete Server
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DeleteServerModal;
