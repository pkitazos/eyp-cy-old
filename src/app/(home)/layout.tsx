import { Header, WaveDivider } from "~/components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="absolute left-0 -z-10 w-full">
        <WaveDivider.headerDiagonal className="" />
      </div>
      <Header />
      {children}
    </>
  );
}
