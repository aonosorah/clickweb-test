import { useRouter } from 'next/router';
import React from 'react';

export default function HeaderTop() {
  const { push } = useRouter();

  return (
    <>
      <header className="flex flex-1 w-full p-10 justify-between">
        <button className=" flex justify-center gap-3 items-center bg-white w-36 h-10 border border-solid border-4 rounded-full border-[#546E4D] ">
          {' '}
          <img src={'barras.svg'} alt="" /> <img src={'menu.svg'} />
        </button>
        <img src={'petlogo.svg'} />
        <button
          onClick={() => push('/pettdating')}
          className=" flex justify-center gap-3 items-center bg-[#546E4D] text-white w-36 h-10 border border-solid border-4 rounded-full border-[#546E4D] "
        >
          {' '}
          <img src={'enter.svg'} />
        </button>
      </header>
    </>
  );
}
