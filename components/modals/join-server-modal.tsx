"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Server } from "@prisma/client";
import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button"
import { LogIn, X } from "lucide-react";


const JoinServerModal = ({ server } : { server: Server }) => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const onJoin = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(`/api/servers/${server.id}/join`);

      setIsLoading(false);
      return router.push(`/servers/${response.data.id}`)
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  const onCancel = () => {
    router.push("/dashboard");
  }

  if (!isMounted) {
    return null;
  }

  return (
    <Dialog open>
      <DialogContent className="bg-white dark:bg-[#313338] text-black dark:text-white p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            {`Join ${server.name}`}
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500 dark:text-zinc-300">
            You have been invited to join this server. Here you can chat and interact with all the members.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className="p-6 dark:bg-zinc-800 flex justify-between w-full mt-4">
            <Button
              onClick={onCancel}
              disabled={isLoading}
              variant="destructive"
              size="sm"
              className=""
            >
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
            <Button
              onClick={onJoin}
              disabled={isLoading}
              variant="primary"
              size="sm"
              className=""
            >
              <LogIn className="h-4 w-4 mr-2" />
              Join Server
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default JoinServerModal;
