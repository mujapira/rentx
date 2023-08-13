"use client";

import { useContext, useState } from "react";
import Image from "next/image";
import { AuthContext } from "@/contexts/AuthContext";
import rentx from "@/assets/rentx-logo.png";
import { CameraIcon, MailIcon } from "lucide-react";
import { archivo } from "@/styles/fonts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RiLock2Line, RiUser6Line } from "react-icons/ri";
import { PiCar } from "react-icons/pi";
import { CarData, Rent, fakeCars, rentHistory } from "@/utils";
import { CarCard } from "@/components/CarCard";
import { CarCardHistory } from "@/components/CarCardHistory";

export default function Perfil() {
  const [name, setName] = useState("");

  const { user } = useContext(AuthContext);

  const { cnh, email, firstName, fullName, userImageUrl, id } = user!;

  function handleUploadUserPhoto() {
    console.log("handleUploadUserPhoto");
  }

  const userRents: Rent[] = rentHistory.filter((rent) => rent.userId === id);

  console.log(userRents);
  return (
    <div className="flex items-start justify-center w-full h-full pb-4 bg-background-darkened min-h-[calc(100vh-80px)] px-[116px]">
      {/* user */}
      <div className="flex flex-col w-full max-w-[600px] p-16 mt-8 border-r">
        <div className="relative flex items-center justify-center max-w-[180px] mx-auto">
          <Image
            src={userImageUrl ? userImageUrl : rentx}
            width={180}
            height={180}
            alt=""
            className="rounded-full"
          />
          <button
            onClick={handleUploadUserPhoto}
            className="absolute bottom-0 right-0 flex items-center justify-center w-10 bg-secondary aspect-square hover:bg-secondary-darkened"
          >
            <CameraIcon className="text-background" />
          </button>
        </div>

        <Tabs defaultValue="dados" className="w-full h-full">
          <TabsList className="w-full p-0 my-6 border-b shrink-0">
            <TabsTrigger
              value="dados"
              className={`${archivo.className} text-xl font-regular text-text-details data-[state=active]:text-heading shadow-none data-[state=active]:shadow-none
              data-[state=active]:border-b-2 border-b-2 border-b-transparent data-[state=active]:border-secondary data-[state=active]:font-semibold data-[state=active]:bg-transparent
              `}
            >
              Dados
            </TabsTrigger>
            <TabsTrigger
              value="trocarSenha"
              className={`${archivo.className} text-xl font-regular text-text-details data-[state=active]:text-heading shadow-none data-[state=active]:shadow-none
              data-[state=active]:border-b-2 border-b-2 border-b-transparent data-[state=active]:border-secondary data-[state=active]:font-semibold data-[state=active]:bg-transparent
              `}
            >
              Trocar senha
            </TabsTrigger>
          </TabsList>
          <TabsContent value="dados" className="flex text-base text-text">
            <form action="" className="flex flex-col w-full gap-2">
              <div className="flex flex-row w-full border border-text-secondary bg-background">
                <div className="flex items-center justify-center p-6 border-r border-text-secondary">
                  <RiUser6Line color="#7A7A80" size={20} />
                </div>
                <div className="flex flex-col w-full">
                  <span className="p-3 pb-1 text-xs text-text-details">Nome</span>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={fullName}
                    placeholder="Nome"
                    className="p-3 pt-0 text-heading w-full placeholder:text-text-details placeholder:text-[16px]"
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-row w-full border border-text-secondary bg-background">
                <div className="flex items-center justify-center p-6 border-r border-text-secondary">
                  <MailIcon color="#7A7A80" size={20} />
                </div>
                <div className="flex flex-col w-full">
                  <span className="p-3 pb-1 text-xs text-text-details">E-mail</span>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    placeholder="E-mail"
                    className="p-3 pt-0 text-heading w-full placeholder:text-text-details placeholder:text-[16px]"
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-row w-full border border-text-secondary bg-background">
                <div className="flex items-center justify-center p-6 border-r border-text-secondary">
                  <PiCar color="#7A7A80" size={20} />
                </div>
                <div className="flex flex-col w-full">
                  <span className="p-3 pb-1 text-xs text-text-details">CNH</span>
                  <input
                    type="number"
                    name="cnh"
                    id="cnh"
                    value={cnh}
                    placeholder="cnh"
                    className="p-3 pt-0 text-heading w-full placeholder:text-text-details placeholder:text-[16px]"
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
              </div>

              <button
                disabled
                className={` flex mt-4 items-center justify-center w-full px-20 py-5 text-lg font-medium text-center duration-300 disabled:cursor-not-allowed disabled:opacity-70 lg:w-auto bg-secondary text-background hover:bg-secondary-darkened hover:transition-all`}
              >
                Salvar alterações
              </button>
            </form>
          </TabsContent>
          <TabsContent value="trocarSenha" className="flex text-base text-text">
            <form action="" className="flex flex-col w-full gap-2">
              <div className="flex flex-row w-full border border-text-secondary bg-background">
                <div className="flex items-center justify-center p-6 border-r border-text-secondary">
                  <RiLock2Line color="#7A7A80" size={20} />
                </div>
                <input
                  type="password"
                  name="password"
                  id="currentPassword"
                  placeholder="Senha atual"
                  className="p-4 text-heading w-full placeholder:text-text-details placeholder:text-[16px]"
                />
              </div>

              <div className="flex flex-row w-full border border-text-secondary bg-background">
                <div className="flex items-center justify-center p-6 border-r border-text-secondary">
                  <RiLock2Line color="#7A7A80" size={20} />
                </div>
                <input
                  type="password"
                  name="password"
                  id="newPassword"
                  placeholder="Nova senha"
                  className="p-4 text-heading w-full placeholder:text-text-details placeholder:text-[16px]"
                />
              </div>

              <div className="flex flex-row w-full border border-text-secondary bg-background">
                <div className="flex items-center justify-center p-6 border-r border-text-secondary">
                  <RiLock2Line color="#7A7A80" size={20} />
                </div>
                <input
                  type="password"
                  name="password"
                  id="newPasswordConfirm"
                  placeholder="Repita a nova senha"
                  className="p-4 text-heading w-full placeholder:text-text-details placeholder:text-[16px]"
                />
              </div>

              <button
                disabled
                className={` flex mt-4 items-center justify-center w-full px-20 py-5 text-lg font-medium text-center duration-300 disabled:cursor-not-allowed disabled:opacity-70 lg:w-auto bg-secondary text-background hover:bg-secondary-darkened hover:transition-all`}
              >
                Salvar alterações
              </button>
            </form>
          </TabsContent>
        </Tabs>
      </div>

      {/* agendamentos */}
      <div className="flex flex-col max-w-[800px] w-full gap-6 p-16">
        <h1 className={`${archivo.className} text-heading text-2xl font-semibold`}>
          Agendamentos feitos
        </h1>

        {userRents.map((rent) => {
          const rentedCar: CarData | undefined = fakeCars.find((car) => car.id === rent.carId);

          return (
            <div key={rent.id} className="">
             <CarCardHistory car={rentedCar!} rent={rent} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
