const Page = () => {
  if (Math.random() > 0.5) throw new Error("ooops");
  return <div>About Page</div>;
};

export default Page;
