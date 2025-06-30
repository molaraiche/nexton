const Slogan = ({
  strong,
  paragraph,
}: {
  strong: string;
  paragraph: string;
}) => {
  return (
    <h2 className="text-4xl font-semibold text-[#4B5563CC] conatiner mx-auto ml-4">
      <span className="text-primary">{strong}. </span>
      <span className="hidden md:inline">{paragraph}</span>
    </h2>
  );
};

export default Slogan;
