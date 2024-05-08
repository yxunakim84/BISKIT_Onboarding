import Header from "@/components/Header";

export default function ViewportLayout({ children }: { children: React.ReactNode }) {
  return (
    <div id="container-wrapper">
      <Header />
      <div
        id="container"
        className="bg-white relative mx-auto flex h-full min-h-screen w-full max-w-[1220px] flex-col items-center justify-center bg-bg-elevation2"
      >
        {children}
      </div>
      {/* <FloatingButton /> */}
    </div>
  );
}
