"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  title,
  description,
  isOpen,
  onClose,
  children
}) => {
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
};

// return (
//   <div>
//     <Dialog open={ssrCompleted} onOpenChange={handleDialogClose}>
//       <DialogTrigger asChild>
//         <Button variant="outline" onClick={handleDialogOpen}>
//           Edit Profile
//         </Button>
//       </DialogTrigger>
//       {ssrCompleted && (
//         <DialogContent className="sm:max-w-[425px]">
//           <div>this is dialog contend</div>
//         </DialogContent>
//       )}
//     </Dialog>
//   </div>
// );
