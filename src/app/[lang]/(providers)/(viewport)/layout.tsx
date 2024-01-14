import FloatingButton from "@/components/FloatingButton";
import Header from "@/components/Header";

export default function ViewportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="container-wrapper">
      <Header />
      <div
        id="container"
        className="max-w-[1220px] items-center justify-center flex-col bg-bg-elevation2 relative mx-auto h-full flex min-h-screen w-full bg-white"
      >
        {children}
      </div>
      <FloatingButton />
    </div>
  );
}
