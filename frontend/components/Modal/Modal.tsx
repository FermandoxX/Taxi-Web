import type { ModalProps } from "./ModalProps";
import { Dialog, DialogPanel } from "@headlessui/react";

export function Modal({ isOpen = false, onClose, children }: ModalProps) {
  return (
    <Dialog open={isOpen} as="div" onClose={onClose}>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/30 backdrop-blur-sm">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md rounded-xl p-6 duration-300 ease-out data-closed:opacity-0"
          >
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
