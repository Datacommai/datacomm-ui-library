import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";

export enum StepButtonTypes {
  BACK = "back",
  FORWARD = "forward",
}

export enum StepIconTypes {
  BACK_ICON = "back icon",
  FORWARD_ICON = "forward icon",
}

export type StepButtonProps = {
  type: StepButtonTypes;
  // Record number inside function
  onStepChange: (step: number) => void;
  onClick?: () => void;
};

export const DatacommStepButton: React.FC<StepButtonProps> = (props) => {
  const { type, onStepChange, onClick } = props;
  const [step, setStep] = useState(type === StepButtonTypes.BACK ? -1 : 1);

  useEffect(() => {
    // Update parent with current step
    onStepChange(step);
  }, [step, onStepChange]);

  const retrieveStep = () => {
    const step = type === StepButtonTypes.BACK ? -1 : +1;
    setStep(step);
  };

  const getStepAttributes = (type: StepButtonTypes) => {
    switch (type) {
      case StepButtonTypes.BACK:
        return { iconType: StepIconTypes.BACK_ICON };
      case StepButtonTypes.FORWARD:
        return { iconType: StepIconTypes.FORWARD_ICON };
      default:
        return { iconType: StepIconTypes.BACK_ICON };
    }
  };

  const { iconType } = getStepAttributes(type);

  const renderIcon = () => {
    switch (iconType) {
      case StepIconTypes.BACK_ICON:
        return (
          <Image
            src="/assets/icons/step-icon-back.svg"
            alt="Back"
            width={34}
            height={34}
          />
        );
      case StepIconTypes.FORWARD_ICON:
        return (
          <Image
            src="/assets/icons/step-icon-forward.svg"
            alt="Forward"
            width={34}
            height={34}
          />
        );
      default:
        return null;
    }
  };

  const buttonStyles =
    "w-fit h-fit bg-transparent border-none p-0 rounded-full";

  return (
    <Button
      className={buttonStyles}
      onClick={() => {
        retrieveStep();
        onClick?.();
      }}
    >
      {renderIcon()}
    </Button>
  );
};
