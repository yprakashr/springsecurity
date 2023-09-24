/* eslint-disable import/no-anonymous-default-export */
import { toast } from "react-toastify";
import { css } from "glamor";
export default {
  // Keep the signature of the original toast object
  // Doing so you can pass additionnal options
  success(msg, options = {}) {
    return toast.success(msg, {
      // Merge additionals options
      ...options,
      className: {
        color: "#343A40",
        minHeight: "60px",
        borderRadius: "8px",
        background: "#2FEDAD",
        boxShadow: "2px 2px 20px 2px rgba(0,0,0,0.3)",
      },
      position: "top-right",
      autoClose: 2000,
      progressClassName: css({
        background: "#007AFF",
      }),
    });
  },
  error(msg, options = {}) {
    return toast.error(msg, {
      ...options,
      className: {
        color: "#FFF",
        minHeight: "60px",
        borderRadius: "8px",
        boxShadow: "2px 2px 20px 2px rgba(0,0,0,0.3)",
      },
      position: "top-right",
      autoClose: 2000,
      progressClassName: css({
        background: "#007AFF",
      }),
    });
  },
  warn(msg, options = {}) {
    return toast.warn(msg, {
      ...options,
      className: {
        color: "#FFA500",
        minHeight: "60px",
        borderRadius: "8px",
        boxShadow: "2px 2px 20px 2px rgba(0,0,0,0.3)",
      },
      position: "top-right",
      autoClose: 2000,
      progressClassName: css({
        background: "#007AFF",
      }),
    });
  },
};
