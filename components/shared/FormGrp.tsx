const FormGrp = ({
  name,
  label,
  type,
  className,
}: {
  name: string;
  label: string;
  type: string;
  className?: string;
}) => {
  return (
    <div className="flex flex-col gap-1.5 w-full my-6">
      <label htmlFor={name} className="font-semibold text-primary">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className={`border-border rounded-xl border h-11 px-2.5 ${className}`}
      />
    </div>
  );
};

export default FormGrp;
