import { useState } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type DatacoomChatbotInputTypes = {
  placeholder: string;
  onSubmit: (inputValue: string) => void;
};

export const DatacoomChatbotInput: React.FC<DatacoomChatbotInputTypes> = (
  props
) => {
  const { placeholder, onSubmit } = props;
  const [value, setValue] = useState("");

  const inputContainerStyles =
    "relative flex border border-[#D2D2D5] rounded-full w-[718px] h-[64px]";
  const inputStyles =
    "bg-transparent text-[#777980] rounded-full w-full h-full pl-[40px] pr-[30px] placeholder:text-[#777980] border-none";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit(value);
      setValue("");
    }
  };

  const renderLeftIcon = () => {
    return (
      <Image
        src="/assets/icons/add-file-icon.svg"
        alt="Left Icon"
        width={18}
        height={18}
        className="absolute left-3 top-1/2 transform -translate-y-1/2"
      />
    );
  };

  const renderRightIcon = () => {
    return (
      <Image
        src="/assets/icons/input-forward-icon.svg"
        alt="Right Icon"
        width={34}
        height={34}
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
      <Button
        onClick={(e) => {
          e.preventDefault();
          onSubmit(value);
          setValue("");
        }}
        className="absolute bg-transparent p-0 h-fit rounded-full right-3 top-1/2 transform -translate-y-1/2 hover:bg-transparent "
      >
        {renderRightIcon()}
      </Button>
    </div>
  );
};
