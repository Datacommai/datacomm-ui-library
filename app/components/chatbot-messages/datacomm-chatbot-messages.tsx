import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";

function getCurrentTime(): string {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}

type DatacommChatbotMessagesTypes = {
  user: "Bot" | "Person";
  isGoodFeedback: (feedback: boolean) => void;
  onRefresh: () => void;
  onShare: () => void;
  onCopy: (text: string) => void;
  text: string;
};

export const DatacommChatbotMessage: React.FC<DatacommChatbotMessagesTypes> = (
  props
) => {
  const { user, isGoodFeedback, onCopy, onRefresh, onShare, text } = props;

  const [isExpanded, setIsExpanded] = useState(false);
  const [isClipped, setIsClipped] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const isOverflowing =
        textRef.current.scrollHeight > textRef.current.clientHeight;
      setIsClipped(isOverflowing);
    }
  }, [text]);

  const toggleTextExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const styles = () => {
    switch (user) {
      case "Bot":
        return "bg-[#FDF6FF] text-[#1D1F2C] max-w-[500px] text-sm min-h-24 flex flex-col";
      case "Person":
        return "bg-[#D3F4EF] text-[#1D1F2C] max-w-[500px] text-sm min-h-24 flex flex-col";
      default:
        return "bg-[#FDF6FF] text-[#1D1F2C] text-sm min-h-24 flex flex-col";
    }
  };

  const handleLikeClick = () => isGoodFeedback(true);
  const handleDislikeClick = () => isGoodFeedback(false);
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(text);
      console.log(`Text copied to clipboard: ${text}`);
      onCopy(text);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };
  const handleRefreshClick = () => onRefresh();
  const handleShareClick = () => onShare();

  const bottomsection = () => {
    switch (user) {
      case "Bot":
        return (
          <section className="flex gap-4 mt-2">
            <Button
              onClick={handleLikeClick}
              className="bg-transparent p-0 h-fit rounded-full hover:bg-transparent"
              data-testid="like-button"
            >
              <Image
                src={"/assets/icons/like-icon.svg"}
                alt="like"
                width={14}
                height={14}
              />
            </Button>
            <Button
              onClick={handleDislikeClick}
              className="bg-transparent p-0 h-fit rounded-full hover:bg-transparent"
              data-testid="dislike-button"
            >
              <Image
                src={"/assets/icons/dislike-icon.svg"}
                alt="dislike"
                width={14}
                height={14}
              />
            </Button>
            <Button
              onClick={handleRefreshClick}
              className="bg-transparent p-0 h-fit rounded-full hover:bg-transparent"
              data-testid="refresh-button"
            >
              <Image
                src={"/assets/icons/refresh-icon.svg"}
                alt="refresh"
                width={14}
                height={14}
              />
            </Button>
            <Button
              onClick={handleShareClick}
              className="bg-transparent p-0 h-fit rounded-full hover:bg-transparent"
              data-testid="share-button"
            >
              <Image
                src={"/assets/icons/share-icon.svg"}
                alt="share"
                width={14}
                height={14}
              />
            </Button>
            <Button
              onClick={handleCopyClick}
              className="bg-transparent p-0 h-fit rounded-full hover:bg-transparent"
              data-testid="copy-button"
            >
              <Image
                src={"/assets/icons/copy-icon.svg"}
                alt="copy"
                width={14}
                height={14}
              />
            </Button>
          </section>
        );
      case "Person":
        return (
          <p className="text-[#A5A5AB] text-xs justify-self-end text-right">
            {getCurrentTime()}
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`${styles()} flex flex-col justify-between py-[15px] px-5 rounded-[16px]`}
    >
      <p
        ref={textRef}
        className={`${
          isExpanded ? "max-h-none" : "max-h-[395px]"
        } overflow-hidden transition-all duration-300`}
        style={{
          WebkitLineClamp: isExpanded ? 1000 : "20",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          textOverflow: "ellipsis",
        }}
      >
        {text}
      </p>

      {isClipped && (
        <div className="flex justify-end">
          <Button
            onClick={toggleTextExpansion}
            className="text-[10px] flex gap-1 items-center text-[#777980] hover:bg-transparent bg-transparent shadow-none w-fit capitalize"
          >
            {isExpanded ? "view less" : "view more"}
            <Image
              src={"/assets/icons/drop-down-icon.svg"}
              alt="toggle"
              width={6.5}
              height={3}
            />
          </Button>
        </div>
      )}

      <div>{bottomsection()}</div>
    </div>
  );
};
