import Cart from "./Cart";
import User from "./User";
const Manage = () => {
  return (
    <div className="flex items-center gap-5">
      <User />
      <Cart />
    </div>
  );
};

export default Manage;
