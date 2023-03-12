function Cards({ children }) {
  return (
    <div className="w-3/4 h-52 flex p-5 justify-center items-center border-2 border-cyan-800 rounded-sm lg:w-1/4">
      <img
        className="w-full h-full object-contain object-center hover:focus-within"
        src={children}
        alt=""
      />
    </div>
  );
}

export default Cards;
