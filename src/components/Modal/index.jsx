import { forwardRef, useImperativeHandle, useRef } from "react";
import styles from "./modal.module.css";

export const Modal = forwardRef(({ children }, ref) => {
  const dialogRef = useRef(null);

  useImperativeHandle(ref, () => ({
    openModal: () => {
      if (dialogRef.current) {
        dialogRef.current.showModal();
      }
    },
    closeModal: () => {
      if (dialogRef.current) {
        dialogRef.current.close();
      }
    },
  }));

  return (
    <dialog className={styles.dialog} ref={dialogRef}>
      <header className={styles.header}>
        <button type="button" onClick={() => dialogRef.current?.close()}>
          X
        </button>
      </header>
      {children}
    </dialog>
  );
});

Modal.displayName = "Modal";
