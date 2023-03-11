function Cards({ children }) {
  return (
    <div className="w-3/4 h-22 flex p-5 justify-center items-center border-2 rounded-sm">
      <img
        className="w-full h-full object-contain object-center hover:focus-within:"
        src={children}
        alt=""
      />
    </div>
  );
}

export default Cards;
