import { Header, Footer } from "components";

export const Layout = (props) => {
  return (
    <div className=" w-full flex flex-col items-center justify-start px-0 md:px-5 lg:px-7 xl:w-5/6">
      <Header />
      <div className="w-full xl:w-10/12 flex flex-col items-center justify-start pb-5">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};
