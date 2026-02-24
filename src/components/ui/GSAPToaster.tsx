import React from "react";
import { useGSAPToast } from "@/hooks/use-gsap-toast";
import GSAPToast from "./GSAPToast";

const GSAPToaster: React.FC = () => {
  const { toasts } = useGSAPToast();

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[9999] flex flex-col gap-3 pointer-events-none">
      {toasts.map((toast) => (
        <GSAPToast key={toast.id} toastData={toast} />
      ))}
    </div>
  );
};

export default GSAPToaster;
