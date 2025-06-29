import Image from "next/image";

const CredentielsCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex items-center justify-center gap-4  w-[303px] h-[50px] md:nth-[2]:border-r-2 md:nth-[2]:border-border md:nth-[3]:border-r-2 md:nth-[3]:border-border ">
      <div className="">
        <Image src={icon} alt="" width={24} height={24} />
      </div>
      <div className="">
        <h4 className="text-lg font-semibold text-primary"> {title} </h4>
        <p className="text-sm text-body-text-color"> {description} </p>
      </div>
    </div>
  );
};

export default CredentielsCard;
