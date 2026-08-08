import { createContext, useContext, useState } from "react";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({
      message,
      type,
    });

    setTimeout(() => {
      setToast(null);
    }, 2500);
  };

  const hideToast = () => {
    setToast(null);
  };

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}

      {/* Toast */}
      {toast && (
        <div
        style={{paddingRight:"1rem",paddingLeft:"1rem",paddingTop:"0.70rem",paddingBottom:"0.70rem"}}
          className="  fixed bottom-5 right-5 z-[9999]  min-w-[220px]  rounded-xl  border border-white/10 
           bg-[#181818]  px-4 py-3  shadow-2xl  flex items-center gap-3  animate-in
          "
        >
          {/* Icon */}
          <div
            className={`h-7 w-7 rounded-full flex items-center justify-center
              ${
                toast.type === "success"
                  ? "bg-blue-400 text-black"
                  : toast.type === "error"
                  ? "bg-red-500 text-white"
                  : "bg-yellow-400 text-black"
              }
            `}
          >
            {toast.type === "success" && "✓"}
            {toast.type === "error" && "!"}
            {toast.type === "warning" && "!"}
          </div>

          {/* Message */}
          <span className="text-sm font-medium text-white">
            {toast.message}
          </span>
        </div>
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);