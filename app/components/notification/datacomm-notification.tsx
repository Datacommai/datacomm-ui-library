export type NotificationTypes = {
  counter: number;
};

export const DatacommNotification: React.FC<NotificationTypes> = ({
  counter,
}) => {
  return (
    <div
      className="bg-[#FF6680] flex justify-center items-center text-center h-[19px] w-[27px] text-white"
      style={{
        borderRadius: "9px",
      }}
    >
      <p className="text-xs"> {counter}</p>
    </div>
  );
};
