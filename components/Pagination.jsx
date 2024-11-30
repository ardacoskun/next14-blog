"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const Pagination = ({ pageCount }) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const currentPage = searchParams.get("page") || "1";

  return (
    <ul className="flex justify-center space-x-4 font-mono text-lg">
      {Array.from({ length: pageCount }, (_, i) => {
        const pageNumber = (i + 1).toString();
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber);

        const isActive = currentPage === pageNumber;

        return (
          <li key={pageNumber}>
            <Link
              href={`${pathName}?${params.toString()}`}
              className={`${
                isActive
                  ? "underline decoration-gray-400 underline-offset-4 decoration-4"
                  : ""
              } text-gray-500 dark:text-gray-400`}
            >
              {pageNumber}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
