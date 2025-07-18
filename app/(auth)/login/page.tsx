import Link from "next/link";

const Login = () => {
  return (
    <section className="font-poppins container mx-auto pt-10 pb-[72px]">
      <div className="flex items-center justify-center ">
        <h1 className="text-4xl font-semibold text-primary">Login</h1>
      </div>
      <div className="flex items-center justify-center px-5 md:px-0">
        <form action="" className="flex flex-col gap-6 md:w-[440px] w-full">
          <div className="flex flex-col mt-[60px]">
            <label
              htmlFor="email"
              className="text-primary font-semibold leading-6"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Example@example.com"
              name="email"
              id="email"
              className="border-border rounded-xl px-4 py-3 border"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-primary font-semibold leading-6 mt-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="border-border rounded-xl px-4 py-3 border mt-2"
            />
          </div>
          <div className="flex flex-col">
            <button
              type="submit"
              className="py-3.5 bg-primary text-white font-medium leading-6 rounded-full"
            >
              Continue
            </button>
          </div>
          <div className="flex items-center my-4">
            <hr className="flex-grow border-t border-border" />
            <span className="mx-4 text-body-text-color font-semibold">OR</span>
            <hr className="flex-grow border-t border-border" />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-body-text-color leading-6">
              New user ?{" "}
              <Link href="/register" className="text-vibrant">
                Create an account.
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
