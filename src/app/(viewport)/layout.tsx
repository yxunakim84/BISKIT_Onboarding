export default function ViewportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="container-wrapper">
      <div
        id="container"
        className="max-w-[1220px] items-center justify-center flex-col bg-bg-elevation2 relative mx-auto h-full flex min-h-screen w-full bg-white"
      >
        {children}
      </div>
    </div>
  );
}
