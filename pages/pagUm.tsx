import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function HomePage() {
  const { push } = useRouter();

  return (
    <div className="flex flex-col w-full justify-center">
      <div className="flex flex-col bg-[#F7F4EB] items-center p-36">
        <span className="text-[#9A9A9A] text-lg">COMO FUNCIONA</span>
        <span className="text-5xl font-bold text-[#506849] justify-center">
          Encontre um pretendente
        </span>
        <span className="text-5xl font-bold text-[#506849] justify-center">
          para o seu animal{' '}
        </span>
        <button
          className="w-72 h-16 mt-10 bg-[#F6C63B] rounded-full text-[#546E4D] font-bold text-lg"
          onClick={() => push('/pettdating')}
        >
          Comece agora!
        </button>
      </div>
      <div className="flex flex col items-center justify-center mt-36 w-{500px} gap-10">
        <div className="flex">
          <img src={'pet1.svg'} />
        </div>
        <div className="w-96">
          <div></div>
          <img src={'patinha.svg'} />
          <span className="text-4xl text-[#506849] font-bold">
            Cadastre seu{' '}
            <span className="text-4xl text-[#F6C63B] font-bold">animal</span>
          </span>
          <br></br>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            egestas, erat et convallis gravida, nisl libero imperdiet dolor, et
            vestibulum tortor quam in nunc.
          </span>
        </div>
      </div>
      <img src={'vetorUm.svg'} className="h-96" />
      <div className="flex flex col items-center justify-center gap-10">
        <div className="w-96 ">
          <img src={'lupa.svg'} />
          <span className="text-4xl text-[#506849] font-bold">
            <span className="text-4xl text-[#F6C63B] font-bold">Procure</span>{' '}
            pretendentes
          </span>
          <br></br>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            egestas, erat et convallis gravida, nisl libero imperdiet dolor, et
            vestibulum tortor quam in nunc.
          </span>
        </div>
        <div>
          <img src={'pet2.svg'} />
        </div>
      </div>
      <img src={'vetorDois.svg'} className="h-96" />
      <div className="flex flex col items-center justify-center gap-10 mb-28">
        <div>
          <img src={'pet3.svg'} />
        </div>
        <div className="w-96 ">
          <img src={'agenda.svg'} />
          <span className="text-4xl text-[#506849] font-bold">
            Marque um{' '}
            <span className="text-4xl text-[#F6C63B] font-bold">encontro</span>
          </span>
          <br></br>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            egestas, erat et convallis gravida, nisl libero imperdiet dolor, et
            vestibulum tortor quam in nunc.
          </span>
        </div>
      </div>
    </div>
  );
}
