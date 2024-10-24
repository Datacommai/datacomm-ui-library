import Link from "next/link";

export enum LinkTypes {
  STANDARD,
  SMALL,
  UNDERLINED,
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
        return "text-[#6AB9BE] text-[14px]";
      case LinkTypes.SMALL:
        return "text-[#6AB9BE] text-[10px]";
      case LinkTypes.UNDERLINED:
        return "text-[#20caad] text-[10px] underline";
      default:
        return "text-[#6AB9BE] text-[14px]";
    }
  };

  return (
    <Link href={url} passHref>
      <span className={styles()}>{title}</span>
    </Link>
  );
};
