export default function DebugOverlay() {
  return (
    <div className="fixed z-50 top-5 left-5 media-debug py-2 px-3 rounded-xl grid place-items-center font-semibold">
      <h1 className="block xs:hidden">xs</h1>
      <h1 className="hidden xs:block sm:hidden">sm</h1>
      <h1 className="hidden sm:block md:hidden">md</h1>
      <h1 className="hidden md:block lg:hidden">md-lg</h1>
      <h1 className="hidden lg:block xl:hidden">lg</h1>
      <h1 className="hidden xl:block 2xl:hidden">lg-xl</h1>
      <h1 className="hidden 2xl:block 3xl:hidden">xl</h1>
      <h1 className="hidden 3xl:block">2xl</h1>
    </div>
  );
}
