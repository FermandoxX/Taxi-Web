import type { FormModalProps } from "./FormModalProps";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

export function FormModal({
  isOpen = false,
  onClose,
  children,
}: FormModalProps) {
  return (
    <Dialog open={isOpen} as="div" onClose={onClose}>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/30 backdrop-blur-sm">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-[700px] h-full rounded-xl p-6 duration-300 ease-out data-closed:opacity-0 flex flex-col bg-white border border-gray-200"
          >
            <DialogTitle className="font-bold">Deactivate account</DialogTitle>
            <div>{children}</div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
