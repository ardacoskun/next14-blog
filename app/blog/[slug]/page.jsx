import { notFound } from "next/navigation";

const titles = {
  first: "Hello First!",
  second: "Hello Second!",
};

export async function generateMetadata({ params }, parent) {
  const description = (await parent).description ?? "Default desc";
  return {
    title: titles[params.slug],
    description,
  };
}

const Page = ({ params }) => {
  if (!["first", "second"].includes(params.slug)) {
    notFound();
  }

  return <div>Hello! {params.slug}</div>;
};

export default Page;
