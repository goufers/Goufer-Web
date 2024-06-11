function Card({ data, cardIndex }: any) {
  return (
    <div className="">
      {data[cardIndex].map((item: any, index: number) => (
        <div className="flex flex-col space-y-7" key={index}>
          <p className="font-bold text-[20px] text-left">{item.title}</p>
          <p className=" font-Roboto text-[16px]">{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
