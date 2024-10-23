import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export enum StepButtonTypes {
  BACK = "BACK",
  FORWARD = "FORWARD",
}

export enum StepIconTypes {
  BACKICON = "BACKICON",
  FORWARDICON = "FORWARDICON",
}

export type StepButtonProps = {
  type: StepButtonTypes;
  onClick: (step: number) => void;
};

export function StepButton(props: StepButtonProps) {
  const { type, onClick } = props;
  const [step, setStep] = useState(0);

  const retrieveStep = () => {
    const newStep = type === StepButtonTypes.BACK ? step - 1 : step + 1;

    if (newStep >= -1 && newStep <= 1) {
      if (newStep !== step) {
        setStep(newStep);
        onClick(newStep);
      }
    }
  };

  const getStepAttributes = (type: StepButtonTypes) => {
    switch (type) {
      case StepButtonTypes.BACK:
        return { iconType: StepIconTypes.BACKICON };
      case StepButtonTypes.FORWARD:
        return { iconType: StepIconTypes.FORWARDICON };
      default:
        return { iconType: StepIconTypes.BACKICON };
    }
  };

  const { iconType } = getStepAttributes(type);

  const renderIcon = () => {
    switch (iconType) {
      case StepIconTypes.BACKICON:
        return (
          <Image
            src="/assets/icons/step-icon-back.svg"
            alt="Back"
            width={34}
            height={34}
          />
        );
      case StepIconTypes.FORWARDICON:
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
    <Button className={buttonStyles} onClick={retrieveStep}>
      {renderIcon()}
    </Button>
  );
}
