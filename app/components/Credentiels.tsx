import { credentiels } from "@/constants/credentiels";
import CredentielsCard from "./CredentielsCard";
import { credientielsType } from "@/types";

const Credentiels = () => {
  return (
    <div className="md:border-1 rounded-2xl font-poppins border-border flex h-[100px] container mx-auto mt-14  justify-center items-center gap-10 flex-wrap">
      {credentiels.map((credit: credientielsType) => (
        <CredentielsCard
          key={credit.id}
          icon={credit.icon}
          title={credit.title}
          description={credit.description}
        />
      ))}
    </div>
  );
};

export default Credentiels;
