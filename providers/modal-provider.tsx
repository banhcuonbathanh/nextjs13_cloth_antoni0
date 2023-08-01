"use client";

import { useEffect, useState } from "react";

import { StoreModal } from "@/components/modals/store-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  console.log("this is ModalProvider");
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    console.log("this is ModalProvider check is mounted");
    return null;
  }

  return (
    <>
      <StoreModal />
    </>
  );
};
