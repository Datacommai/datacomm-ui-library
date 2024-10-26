import Link from "next/link";

export enum LinkTypes {
  STANDARD = "standard",
  SMALL = "small",
  UNDERLINED = "underlined",
}

export type LinkProps = {
  type: LinkTypes;
  title: string;
  url: string;
};

export const DatacommLink: React.FC<LinkProps> = ({ type, title, url }) => {
  const styles = () => {
    switch (type) {
      case LinkTypes.STANDARD:
        return "text-[#6AB9BE] text-sm";
      case LinkTypes.SMALL:
        return "text-[#6AB9BE] text-xs";
      case LinkTypes.UNDERLINED:
        return "text-[#20caad] text-xs underline";
      default:
        return "text-[#6AB9BE] text-sm";
    }
  };

  return (
    <Link className={styles()} href={url} passHref>
      {title}
    </Link>
  );
};
