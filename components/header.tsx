import { useRouter } from 'next/router';
import React from 'react';
import Image from 'next/image';

export default function HeaderTop() {
  const { push } = useRouter();

  return (
    <>
      <header className="flex flex-1 w-full p-10 justify-between" id="top">
        <button
          onClick={() => push('/')}
          className="flex justify-center gap-3 items-center bg-white w-36 h-10 border 
          border-solid border-4 rounded-full border-[#546E4D]  max-md:w-16 max-md:h-14"
        >
          {' '}
          <Image width={20} height={10} src={'barras.svg'} alt="" />{' '}
          <Image
            width={54}
            height={15}
            src={'menu.svg'}
            alt=""
            className=" hidden md:block"
          />
        </button>
        <div className="relative w-96">
          <Image
            width={197}
            height={200}
            src={'petlogo.svg'}
            className="absolute top-0 w-48 h-52 left-20 max-md:w-{118px} max-md:h-{120} max-md:left-10"
            alt=""
          />
        </div>

        <button
          onClick={() => push('/pettdating')}
          className="flex justify-center gap-3 items-center bg-[#546E4D] text-white w-36 h-10 border border-solid border-4 rounded-full border-[#546E4D] max-md:w-16 max-md:h-14 "
        >
          {' '}
          <Image width={15} height={15} src={'enter.svg'} alt="" />
          <Image
            width={60}
            height={15}
            src={'enterttxt.svg'}
            alt=""
            className=" hidden md:block"
          />
        </button>
      </header>
    </>
  );
}
