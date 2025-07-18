import Link from "next/link";
import { CiUser } from "react-icons/ci";

const User = () => {
  return (
    <Link href="/login">
      <CiUser className="w-6 h-6" />
    </Link>
  );
};

export default User;
