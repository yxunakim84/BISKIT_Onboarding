export default function ViewportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="container-wrapper">
      <div
        id="container"
        className="items-center justify-center flex-col relative mx-auto h-full flex min-h-screen w-full bg-white"
      >
        {children}
      </div>
    </div>
  );
}
