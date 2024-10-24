import Image from "next/image";

export enum StepBarTypes {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

export enum StepBarIconTypes {
  ACTIVE_ICON,
  INACTIVE_ICON,
}

type StepBarProps = {
  type: StepBarTypes;
  isActive: boolean;
};

export const DatacommStepBar: React.FC<StepBarProps> = ({ type, isActive }) => {
  const getInputAttributes = (type: StepBarTypes) => {
    switch (type) {
      case StepBarTypes.ACTIVE:
        return { iconType: StepBarIconTypes.ACTIVE_ICON };
      case StepBarTypes.INACTIVE:
        return { iconType: StepBarIconTypes.INACTIVE_ICON };
      default:
        return { iconType: StepBarIconTypes.INACTIVE_ICON };
    }
  };

  const { iconType } = getInputAttributes(type);

  const renderIcon = () => {
    // Determine the icon based on both type and isActive state
    if (iconType === StepBarIconTypes.ACTIVE_ICON && isActive) {
      return (
        <Image
          src="/assets/icons/active-bar-icon.svg"
          alt="Active User"
          width={38}
          height={2}
        />
      );
    } else {
      return (
        <Image
          src="/assets/icons/inactive-bar-icon.svg"
          alt="Inactive User"
          width={38}
          height={2}
        />
      );
    }
  };

  return <figure>{renderIcon()}</figure>;
};
