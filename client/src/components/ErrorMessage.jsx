import React from "react";

const ErrorMessage = ({ Msg }) => {
  return (
    <div className="text-sm text-red-700 px-4 py-3 rounded flex gap-1 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
        />
      </svg>

      {Msg}
    </div>
  );
};

export default ErrorMessage;
