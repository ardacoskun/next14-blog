const Page = () => {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-semibold">My Photos</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="overflow-hidden h-60">
          <img src="/images/dog1.png" className="object-cover w-full h-full" />
        </div>
        <div className="overflow-hidden h-60">
          <img src="/images/dog2.png" className="object-cover w-full h-full" />
        </div>
        <div className="overflow-hidden h-60">
          <img src="/images/dog3.png" className="object-cover w-full h-full" />
        </div>
        <div className="overflow-hidden h-60">
          <img src="/images/dog4.png" className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Page;
