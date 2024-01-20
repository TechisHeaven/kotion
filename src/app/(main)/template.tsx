import Header from "@/components/MainHeader/Header";

export default async function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
