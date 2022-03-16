import Head from "next/head";
import Image from "next/image";
import pokeball from "../assets/pokeball.png";
import Credits from "../components/pages/Credits";
import Buttons from "../components/elements/Buttons";
import Content from "../components/container/Content";
import Container from "../components/container/Container";
export default function Home() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#E54222" />
        <meta property="og:title" content="Pokédex App" />
        <meta property="og:url" content="pokedex-app-rouge.vercel.app/" />
        <meta property="og:image" content="/OG image.png" />
        <meta
          property="og:description"
          content="Pokédex App in Next.js, Tailwind CSS and PokéAPI REST."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="es_ES" />
        <link rel="apple-touch-icon" href="/Logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>Pokédex App</title>
      </Head>

      <Container>
        <Content>
          <div className="w-2/3 mx-auto">
            <figure>
              <Image
                src={pokeball}
                alt="Icons made by Freepik"
                width={200}
                height={200}
              />
            </figure>
          </div>

          <div className="my-4">
            <h1 className="font-sans font-bold text-2xl">Pokédex App</h1>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <Buttons text="kanto" url="/pokedex/kanto" />
            <Buttons text="johto" url="/pokedex/johto" />
            <Buttons text="hoenn" url="/pokedex/hoenn" />
            <Buttons text="sinnoh" url="/pokedex/sinnoh" />
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
