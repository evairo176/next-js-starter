"use client";
import React, { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { revokeMFAMutationFn } from "@/lib/api";
import { Loader } from "lucide-react";
import { toast } from "sonner";
import { useAuthContext } from "@/context/auth-provider";

const RevokeMfa = () => {
  //   const queryClient = useQueryClient();
  const { refetch } = useAuthContext();
  const { mutate, isPending } = useMutation({
    mutationFn: revokeMFAMutationFn,
    onSuccess: (response: any) => {
      refetch();
      toast.success("Success", { description: response?.data?.message });
    },
    onError: (error: any) => {
      console.log(error);
      toast.error("Error", { description: error?.message });
    },
  });

  const handleClick = useCallback(() => {
    mutate();
  }, []);

  return (
    <Button
      disabled={isPending}
      className="h-[35px] !text-[#c40006d3] !bg-red-100 shadow-none mr-1"
      onClick={handleClick}
    >
      {isPending && <Loader className="animate-spin" />}
      Revoke Access
    </Button>
  );
};

export default RevokeMfa;
