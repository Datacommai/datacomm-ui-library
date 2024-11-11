import { useState } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export type DatacommSearchbarTypes = {
  placeholder: string;
  onInput: (inputValue: string) => void;
};

export const DatacommSearchbar: React.FC<DatacommSearchbarTypes> = (props) => {
  const { placeholder, onInput } = props;
  const [value, setValue] = useState("");

  const inputContainerStyles =
    "relative flex border border-[#E9E9EA] rounded-full w-[354px] h-[48px]";
  const inputStyles =
    "bg-transparent text-[#777980] rounded-full w-full h-full pl-[40px] placeholder:text-[#A5A5AB] border-none";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && value.trim() !== "") {
      e.preventDefault();
      onInput(value);
    }
  };

  const renderLeftIcon = () => {
    return (
      <Image
        src="/assets/icons/search-icon.svg"
        alt="Left Icon"
        width={16}
        height={16}
        className="absolute left-3 top-1/2 transform -translate-y-1/2"
      />
    );
  };

  return (
    <div className={inputContainerStyles}>
      {renderLeftIcon()}
      <Input
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        className={inputStyles}
        placeholder={placeholder}
      />
    </div>
  );
};
