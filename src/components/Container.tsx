
const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1100px]  flex flex-col min-h-screen bg-white mx-auto border-l border-r">
      {children}
    </div>
  );
};

export default Container;
