function Spinner() {
  return (
    <div className="relative grid w-12 m-auto h-44 place-items-center">
      <div className="absolute w-12 h-12 rounded-full bg-gradient-to-r from-primary-700 to-white animate-spin">
        <div className="absolute w-10 h-10 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full top-1/2 left-1/2" />
      </div>
    </div>
  );
}

export default Spinner;
