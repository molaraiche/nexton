import Shop from "@/components/Shop";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<div>Loading shop...</div>}>
      <Shop />
    </Suspense>
  );
};

export default page;
