import Head from "next/head";
import Image from "next/image";
import pokeball from "../assets/pokeball.png";
import Content from "../components/container/Content";
import Container from "../../components/container/Container";

export default function Error() {
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
        <title>Pokédex - {capitalizeFirstLetter(region)}</title>
      </Head>

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
            <h1 className="font-sans font-bold text-2xl">
              404 Error, Page not Found
            </h1>
          </div>
        </Content>
      </Container>
    </>
  );
}
