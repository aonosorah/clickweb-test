import React from 'react';
import DatingContent from '../components/pgTres';
import pets from '../components/data/pets.json';
import HeaderTop from '../components/header';
import Footer from '../components/footer';

export default function PettDating() {
  const petList = pets.map((item) => {
    return <DatingContent {...item} key={item.id} />;
  });

  return (
    <div>
      <HeaderTop />
      <div className="flex flex-col mt-48 justify-center items-center">
        <span className="text-4xl text-[#556F4D] font-bold">
          <span className="text-4xl text-[#F6C63B] font-bold">Pets</span>{' '}
          Namorando
        </span>
        <span className="text-[#707070] text-2xl">
          Duis aute irure dolor in reprehenderit in voluptate
        </span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-wrap gap-10 max-w-[1260px] m-10 justify-center items-center">
          {' '}
          {petList}
        </div>
        <div className="bg-[#E5E5E5] w-1/3 h-24 flex justify-center items-center mx-96 mt-24">
          <span className="text-[#9A9A9A]">Publicidade 750x100</span>
        </div>
        <div className="flex flex-wrap gap-10 max-w-[1260px] m-10 justify-center items-center">
          {petList}
        </div>
        <div className="my-16">
          <button className=" text-[#546E4D] bg-[#F6C63B] rounded-full font-bold w-72 h-16 ">
            {' '}
            Carregar mais antigos
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
