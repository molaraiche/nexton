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
  if (totalPages <= 1) return null;

  const renderPageNumbers = () => {
    const pages: number[] = [];
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      pages.push(1, 2, 3, 4, -1, totalPages); 
    } else if (currentPage >= totalPages - 2) {
      pages.push(
        1,
        -1,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages
      );
    } else {
      pages.push(
        1,
        -1,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        -1,
        totalPages
      );
    }

    return pages;
  };

  const pages = renderPageNumbers();

  return (
    <div className="font-poppins flex flex-wrap sm:flex-nowrap gap-1 items-center justify-center mt-12 px-4">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="w-10 h-10 flex items-center justify-center text-body-text-color hover:bg-gray-100 rounded-md disabled:opacity-50"
      >
        <FaChevronLeft />
      </button>
      {pages.map((n, i) =>
        n === -1 ? (
          <span
            key={`ellipsis-${i}`}
            className="w-10 h-10 flex items-center justify-center text-gray-400"
          >
            ...
          </span>
        ) : (
          <button
            key={n}
            onClick={() => onPageChange(n)}
            className={`w-10 h-10 flex items-center justify-center rounded-md cursor-pointer ${
              currentPage === n
                ? "bg-primary text-white"
                : "text-body-text-color hover:bg-gray-100"
            }`}
          >
            {n}
          </button>
        )
      )}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="w-10 h-10 flex items-center justify-center text-body-text-color hover:bg-gray-100 rounded-md disabled:opacity-50"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
