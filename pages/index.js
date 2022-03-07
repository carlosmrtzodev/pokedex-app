import Image from "next/image";
import pokeball from "../assets/pokeball.png";
import Credits from "../components/pages/Credits";
import Button from "../components/elements/Buttons";
import Content from "../components/container/Content";
import Container from "../components/container/Container";
export default function Home() {
  return (
    <>
      <Container>
        <Content>
          <div className="w-2/3 mx-auto">
            <Image
              src={pokeball}
              alt="Icons made by Freepik"
              width={200}
              height={200}
            />
          </div>

          <div className="my-4">
            <h1 className="font-sans font-bold text-2xl">Pokédex App</h1>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <Button text="kanto" url="/pokedex/kanto" />
            <Button text="johto" url="/pokedex/johto" />
            <Button text="hoenn" url="/pokedex/hoenn" />
            <Button text="sinnoh" url="/pokedex/sinnoh" />
          </div>
        </Content>

        <div className="absolute bottom-0 left-0 m-4">
          <Credits text="API used:" link="PokéAPI" url="https://pokeapi.co/" />

          <Credits
            text="Pokémon icons created by:"
            link="Freepik - Flaticon"
            url="https://www.flaticon.com/free-icons/pokemon"
          />
        </div>
      </Container>
    </>
  );
}
