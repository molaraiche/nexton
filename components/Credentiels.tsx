import { credentiels } from "@/constants/credentiels";
import CredentielsCard from "./shared/CredentielsCard";
import { credientielsType } from "@/types";

const Credentiels = () => {
  return (
    <div className="md:border-1 rounded-2xl font-poppins border-border flex container mx-auto my-14 justify-center md:justify-between  items-center flex-wrap">
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
