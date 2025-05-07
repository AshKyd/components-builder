declare const Modal: import("svelte").Component<{
    children: any;
    footerChildren: any;
    title?: string;
    onClose?: Function;
}, {}, "">;
type Modal = ReturnType<typeof Modal>;
export default Modal;
