import { useState, useEffect, useCallback } from "react";

export type ToastVariant = "success" | "error" | "warning" | "info";

export interface ToastData {
  id: string;
  message: string;
  variant: ToastVariant;
  duration?: number;
}

// Global state for toasts to be used outside of components if needed
let toastListeners: Array<(toasts: ToastData[]) => void> = [];
let toasts: ToastData[] = [];

const notify = () => {
  toastListeners.forEach((listener) => listener([...toasts]));
};

export const toast = {
  show: (message: string, variant: ToastVariant = "info", duration = 3000) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast: ToastData = { id, message, variant, duration };
    toasts = [...toasts, newToast];
    notify();
    return id;
  },
  success: (message: string, duration?: number) =>
    toast.show(message, "success", duration),
  error: (message: string, duration?: number) =>
    toast.show(message, "error", duration),
  warning: (message: string, duration?: number) =>
    toast.show(message, "warning", duration),
  info: (message: string, duration?: number) =>
    toast.show(message, "info", duration),
  dismiss: (id: string) => {
    toasts = toasts.filter((t) => t.id !== id);
    notify();
  },
};

export const useGSAPToast = () => {
  const [currentToasts, setCurrentToasts] = useState<ToastData[]>(toasts);

  useEffect(() => {
    const listener = (updatedToasts: ToastData[]) => {
      setCurrentToasts(updatedToasts);
    };
    toastListeners.push(listener);
    return () => {
      toastListeners = toastListeners.filter((l) => l !== listener);
    };
  }, []);

  return {
    toasts: currentToasts,
    dismiss: toast.dismiss,
  };
};
