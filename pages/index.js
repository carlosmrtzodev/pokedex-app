import Image from "next/image";
import pokeball from "../assets/pokeball.png";
import Credits from "../components/pages/Credits";
import Button from "../components/elements/button";
import GitHub from "../components/elements/GitHub";
import Toggle from "../components/elements/Toggle";
import Container from "../components/container/Container";

export default function Home() {
  return (
    <>
      <Container>
        <div className="fixed right-0 top-0 m-2">
          <Toggle />
        </div>

        <div className="container flex flex-col justify-start lg:justify-center items-center h-screen  w-2/3 md:w-4/5 mx-auto pt-4 lg:pt-0">
          <GitHub />

          <div className="flex flex-col transition-all ease-in-out bg-dark dark:border-red text-center drop-shadow-2xl rounded-3xl duration-300 border-2 gap-2 p-8">
            <div className="md:w-2/3 mx-auto">
              <Image
                src={pokeball}
                alt="Icons made by Freepik"
                width={200}
                height={200}
              />
            </div>

            <div>
              <h1 className="font-mono font-bold text-2xl md:text-3xl mb-4">
                Pokédex App
              </h1>

              <div className="grid grid-cols-1 gap-4">
                <Button
                  text="kanto"
                  color="light"
                  bg="red"
                  hover="dred"
                  url="/pokedex/kanto"
                />
                <Button
                  text="johto"
                  color="light"
                  bg="red"
                  hover="dred"
                  url="/pokedex/johto"
                />
                <Button
                  text="hoenn"
                  color="light"
                  bg="red"
                  hover="dred"
                  url="/pokedex/hoenn"
                />
                <Button
                  text="sinnoh"
                  color="light"
                  bg="red"
                  hover="dred"
                  url="/pokedex/sinnoh"
                />
              </div>
            </div>
          </div>

          <div className="absolute left-0 bottom-0 m-2">
            <Credits
              text="API used:"
              link="PokéAPI"
              url="https://pokeapi.co/"
            />

            <Credits
              text="Pokémon icons created by:"
              link="Freepik - Flaticon"
              url="https://www.flaticon.com/free-icons/pokemon"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
