import React from 'react';
import Image from 'next/image';

interface IProps {
  id: string;
  petPhoto1: string;
  petName1: string;
  petPhoto2: string;
  petName2: string;
}

export default function DatingContent({
  id,
  petPhoto1,
  petName1,
  petPhoto2,
  petName2,
}: IProps) {
  return (
    <div>
      <div className="flex flex-col items-center mt-24">
        <div className="flex justify-center items-center relative gap-5">
          <Image
            width={180}
            height={180}
            src={petPhoto1}
            alt={`Foto do Pet ${petName1}`}
          />
          <Image
            width={60}
            height={60}
            src={'coracao.svg'}
            className="absolute "
            alt=""
          />
          <Image
            width={180}
            height={180}
            src={petPhoto2}
            alt={`Foto do Pet ${petName2}`}
          />
        </div>
        <div>
          <span className="text-lg text-[#546E4D] font-bold">{`${petName1} e ${petName2}`}</span>
        </div>
      </div>
    </div>
  );
}
