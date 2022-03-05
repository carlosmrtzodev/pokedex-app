import Link from "next/link";
import Image from "next/image";
import Button from "./button";
import pokeball from "../assets/pokeball.png";

const Menu = () => {
  return (
    <div className="flex container justify-center items-center h-screen mx-auto">
      <div className="text-center bg-glass drop-shadow-xl rounded-3xl p-6">
        <Image
          src={pokeball}
          alt="Icons made by Freepik"
          width={100}
          height={100}
        />

        <h1 className="font-sans font-bold text-center text-light text-3xl mb-8">
          Pokédex App
        </h1>

        <div className="flex flex-col gap-4">
          <Button name="kanto" />
          <Button name="johto" />
          <Button name="hoenn" />
          <Button name="sinnoh" />
          <Button name="unova" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
