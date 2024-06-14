const MyLoader = () => {
    return (
      <div
        className="flex items-center justify-center h-screen fixed w-full left-0 select-none  "
        suppressHydrationWarning={true}
      >
        <div className="bg-black opacity-15 h-screen  w-screen fixed"></div>
        <span className="opacity-100 font-bold text-2xl"> loading...</span>
      </div>
    );
  };
  
  export default MyLoader;
  