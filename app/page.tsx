import { Categories, Container, SortPopup, Title, TopBar } from "@/components/shared";

export default function Home() {
  return (
   <>
      <Container className="mt-8">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      
      <TopBar />
    </>
  );
}
