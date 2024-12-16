import { Button } from "@/components/ui/button";
import Image from "next/image";

export type DatacommContactProps = {
  type: "Phone" | "Whatsapp" | "Email" | "Invalid";
  contactInfo: string;
  onClick?: () => void;
};

export const DatacommContactButton: React.FC<DatacommContactProps> = ({
  type,
  contactInfo,
  onClick,
}) => {
  const handleClick = () => {
    if (!contactInfo) {
      console.warn("Contact information is missing");
      return null;
    }
    switch (type) {
      case "Phone":
        window.location.href = `tel:${contactInfo}`;
        break;
      case "Whatsapp":
        window.location.href = `tel:${contactInfo}`;
        break;
      case "Email":
        window.location.href = `mailto:${contactInfo}`;
        break;
      default:
        console.warn("Invalid contact type");
    }
  };

  const renderIcon = () => {
    const icons: Record<DatacommContactProps["type"], string> = {
      Phone: "/assets/icons/phone-icon.svg",
      Whatsapp: "/assets/icons/whatsapp-icon.svg",
      Email: "/assets/icons/send-icon.svg",
      Invalid: "/assets/icons/send-icon.svg",
    };

    return (
      <Image
        className="w-3 h-3"
        src={icons[type]}
        alt={type}
        width={12}
        height={12}
        onError={(e) => {
          (e.target as HTMLImageElement).src = "/assets/icons/default-icon.svg";
        }}
      />
    );
  };

  return (
    <Button
      onClick={() => {
        handleClick();
        onClick?.();
      }}
      aria-label={`Contact via ${type}`}
      className="bg-transparent hover:bg-gray-100 focus:ring-1 focus:ring-offset-1 focus:ring-gray-400 w-8 h-8 rounded-full border p-0 border-gray-400 flex justify-center items-center"
    >
      {renderIcon()}
    </Button>
  );
};
