interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="mx-auto px-3 sm:px-5 max-w-[85rem]">{children}</div>;
};

export default Container;
