import { credentiels } from "@/constants/credentiels";
import CredentielsCard from "./CredentielsCard";
import { credientielsType } from "@/types";

const Credentiels = () => {
  return (
    <div className="border-5 border-[#E5E7EB] flex h-[100px] container mx-auto mt-14 ">
      {credentiels.map((credit: credientielsType) => (
        <CredentielsCard key={credit.id} />
      ))}
    </div>
  );
};

export default Credentiels;
