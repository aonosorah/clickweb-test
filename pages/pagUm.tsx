import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function HomePage() {
  const { push } = useRouter();

  return (
    <div className="flex flex-col w-full justify-center items-center">
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
      <div className="flex flex-wrap items-center justify-center mt-36 gap-10">
        <div className="flex">
          <Image width={500} height={380} src={'pet1.svg'} alt="" />
        </div>
        <div className="w-96">
          <div></div>
          <Image width={97} height={85} src={'patinha.svg'} alt="" />
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
      <Image
        width={597}
        height={308}
        src={'vetorUm.svg'}
        className="h-96"
        alt=""
      />
      <div className="flex flex-wrap items-center justify-center gap-10">
        <div className="w-96 ">
          <Image width={71} height={71} src={'lupa.svg'} alt="" />
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
          <Image width={500} height={380} src={'pet2.svg'} alt="" />
        </div>
      </div>
      <Image
        width={635}
        height={390}
        src={'vetorDois.svg'}
        className="h-96"
        alt=""
      />
      <div className="flex flex-wrap items-center justify-center gap-10 mb-28">
        <div>
          <Image width={500} height={380} src={'pet3.svg'} alt="" />
        </div>
        <div className="w-96 ">
          <Image width={77} height={73} src={'agenda.svg'} alt="" />
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
