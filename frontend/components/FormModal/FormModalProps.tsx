export interface FormModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    onSubmit?: (data: any) => void | Promise<void>;
    header?: string;
}
