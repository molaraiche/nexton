import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = () => {
  const pagesNumber = [1, 2, 3, 4, 5];
  return (
    <div className="font-poppins hidden gap-1 items-center justify-center mt-12">
      <span className="w-7 h-9 flex items-center text-body-text-color">
        <FaChevronLeft />
      </span>
      {pagesNumber.map((n) => (
        <span
          key={n}
          className="text-body-text-color w-9 h-9 bg-border flex items-center justify-center rounded-xl "
        >
          {n}
        </span>
      ))}
      <span className="w-7 h-9 flex items-center text-body-text-color">
        <FaChevronRight />
      </span>
    </div>
  );
};

export default Pagination;
