import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const pagesNumber = Array.from({ length: totalPages }, (_, i) => i + 1);

  if (totalPages <= 1) return null;

  return (
    <div className="font-poppins flex gap-1 items-center justify-center mt-12">
      <span
        onClick={() => onPageChange(currentPage - 1)}
        className="w-7 h-9 flex items-center text-body-text-color cursor-pointer"
      >
        <FaChevronLeft />
      </span>

      {pagesNumber.map((n) => (
        <span
          key={n}
          onClick={() => onPageChange(n)}
          className={`text-body-text-color w-9 h-9 bg-border flex items-center justify-center rounded-xl cursor-pointer ${
            currentPage === n ? "bg-primary text-white" : ""
          }`}
        >
          {n}
        </span>
      ))}

      <span
        onClick={() => onPageChange(currentPage + 1)}
        className="w-7 h-9 flex items-center text-body-text-color cursor-pointer"
      >
        <FaChevronRight />
      </span>
    </div>
  );
};

export default Pagination;
