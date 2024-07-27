import { Container, Filter, SortPopup, Title } from "@/components/shared";
import { TopBar } from "@/components/shared/top-bar";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All Pizza" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">

          {/* filter */}
          <div className="w-[250px]">
            <Filter />
          </div>

          {/* Produc list */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              Product list
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
