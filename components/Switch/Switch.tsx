"use client";

import { useState, type FC, type KeyboardEvent } from "react";

interface SwitchProps {
  initialChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  ariaLabel?: string;
}

const Switch: FC<SwitchProps> = ({
  initialChecked = false,
  onChange,
  disabled = false,
  ariaLabel = "Toggle switch",
}) => {
  const [isChecked, setIsChecked] = useState(initialChecked);

  const toggle = () => {
    if (disabled) return;
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange?.(newChecked);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
  };

  return (
    <div
      role="switch"
      tabIndex={disabled ? -1 : 0}
      aria-checked={isChecked}
      aria-label={ariaLabel}
      onClick={toggle}
      onKeyDown={handleKeyDown}
      className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer select-none transition-colors duration-300
        ${
          disabled
            ? "bg-gray-300 cursor-not-allowed"
            : isChecked
            ? "bg-primary"
            : "bg-gray-400"
        }`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300
          ${isChecked ? "translate-x-6" : "translate-x-0"}`}
      />
    </div>
  );
};

export default Switch;
