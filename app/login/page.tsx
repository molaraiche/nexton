import Link from "next/link";

const Login = () => {
  return (
    <section className="font-poppins flex items-center justify-center">
      <div className=" w-[440px] flex flex-col items-center">
        <div className="mt-10">
          <h1 className="text-4xl font-semibold text-primary mb-14">Login</h1>{" "}
        </div>
        <form action="" className="w-full mb-20 px-5">
          <div className="flex flex-col gap-1.5 ">
            <label htmlFor="email" className="font-semibold text-primary">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@example.com"
              className="border-border rounded-xl border h-11 w-full px-2.5"
            />
          </div>
          <div className="flex flex-col my-6 gap-1.5">
            <label htmlFor="password" className="font-semibold text-primary">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="border-border rounded-xl border h-11 w-full  px-2.5"
            />
          </div>
          <div className="">
            <button className="bg-primary text-white font-medium w-full h-12 rounded-full shadow-drop-1 ">
              Continue
            </button>
          </div>
          <div className="w-full my-6 flex items-center justify-center">
            <span className="text-sm font-medium text-center ">OR</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-body-text-color text-center">
              New user? <br className="flex md:hidden" />
              <Link href="/register" className="text-vibrant">
                Create an account
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
