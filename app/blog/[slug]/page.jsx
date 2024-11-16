import { notFound } from "next/navigation";

const Page = ({ params }) => {
  if (!["first", "second"].includes(params.slug)) {
    notFound();
  }

  return <div>Hello! {params.slug}</div>;
};

export default Page;
