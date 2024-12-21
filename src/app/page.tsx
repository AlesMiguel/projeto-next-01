import Image from "next/image";

export default function Home() {
  return (
    <form className="flex items-center flex-col gap-5">

      <h1 className=" flex text-white text-xl">Formulario</h1>


      <div className="px-5 gap-5 flex flex-col">

        <input 
          className="px-3 w-30 h-15 rounded-[5px] bg-gray-100"
          type ="Nome" 
          placeholder="Nome" 
        />
        <input 
          className="px-3 w-30 h-15 rounded-[5px]  bg-gray-100"
          type ="Qualidades" 
          placeholder="Qualidades" 
        />
        <input
          className="px-3 w-30 h-15 rounded-[5px] bg-gray-100"
          type="Descriçao"
          placeholder="Descriçao"
        />
      </div>

      <div className="px-2 w-19 h-7 bg-green-600 text-black">Inserir</div>
      
    </form>
  );
}
