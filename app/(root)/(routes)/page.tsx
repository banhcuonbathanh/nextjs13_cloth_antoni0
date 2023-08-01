"use client";

import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);
  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return null;
};
//   return <div className="p-4">root page</div>;
// };

export default SetupPage;
// export default function SetUpPage() {
//   return (
//     <div className="p-4">
//       <Modal title="test " description="descrip" isOpen onClose={() => {}}>
//         Children
//       </Modal>
//     </div>
//   );
// }

// return <UserButton afterSignOutUrl="/" />;
