import { Header, WaveDivider } from "~/components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="-mb-40">
        <div className="h-20 lg:h-12 bg-primary-800">&nbsp;</div>
        <WaveDivider.headerHorizontal />
      </div>
      {children}
    </>
  );
}
