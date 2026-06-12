import { useState } from "react";
import Toast from "./Toast";

let showToastFn: (msg: string) => void;

export function showToast(message: string) {
  if (showToastFn) showToastFn(message);
}

export default function ToastManager() {
  const [message, setMessage] = useState("");

  showToastFn = (msg: string) => {
    setMessage(msg);
  };

  return (
    <>
      {message && (
        <Toast
          message={message}
          onClose={() => setMessage("")}
        />
      )}
    </>
  );
}
