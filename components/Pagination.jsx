"use client";

const Pagination = ({ pageCount }) => {
  console.log("🚀 ~ Pagination ~ pageCount:", pageCount);

  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <ul className="flex justify-center space-x-4 font-mono text-lg">
      {pages.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Pagination;
