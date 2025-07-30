import React, { useEffect, useRef } from "react";

function ToastMessage({ show, message, type = "success", onClose }) {
  const toastRef = useRef();

  useEffect(() => {
    if (show && toastRef.current && window.bootstrap?.Toast) {
      const toastInstance = new window.bootstrap.Toast(toastRef.current, {
        autohide: true,
        delay: 3000,
      });
      toastInstance.show();
    }
  }, [show]);

  return (
    <div
      className="toast-container position-fixed top-0 end-0 p-3"
      style={{ zIndex: 1055 }}
    >
      <div
        className={`toast fade align-items-center text-bg-${type} border-0 ${
          show ? "show" : ""
        }`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        ref={toastRef}
      >
        <div className="d-flex">
          <div className="toast-body">{message}</div>
          <button
            type="button"
            className="btn-close btn-close-white me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
            onClick={onClose}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default ToastMessage;
