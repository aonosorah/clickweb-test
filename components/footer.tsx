import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="bg-[#556F4D] flex justify-between px-8 pt-12 text-white">
        <div>
          <img src={'fulllogo.svg'} className="w-96 h-28" />
          <div className="flex justify-between gap-20 my-10">
            <div className="flex flex-col font-bold">
              <span className="mb-1">Sobre nós</span>
              <span className="mb-1">Como funciona</span>
              <span className="mb-1">Dúvidas frequentes</span>
              <span>Blog</span>
            </div>
            <div className="flex flex-col font-bold">
              <span className="mb-1">Pets namorando</span>
              <span className="mb-1">Comece agora!</span>
              <span>Contato</span>
            </div>
            <div className="flex flex-col">
              <span className="mb-1 font-bold text-[#F6C63B]">
                Ajude uma entidade
              </span>
              <span className="flex gap-2 font-bold text-sm">
                SOS Vida Animal <img src={'seta.svg'} />{' '}
              </span>
              <span className="text-sm">
                Banco Itaú: <b>Ag 8804</b> Conta <b>01234-5</b>
              </span>
              <span className="text-sm">
                PIX: <b>43.660.696/0001-95</b>
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <span className="font-bold mb-1">Receba nossas novidades</span>
            <div className=" flex items-center justify-center bg-white font-bold text-[#556F4D] rounded-full w-96 h-14 p-5">
              {' '}
              <input
                placeholder="Digite seu e-mail"
                className="bg-white w-full"
              />
              <button className="rounded-full bg-[#F6C63B] w-36 h-10 text-white">
                Cadastrar
              </button>
            </div>
          </div>
          <div className="flex justify-self-end gap-8 mt-10 ">
            <img src={'facebook.svg'} className="w-16 h-16" />
            <img src={'instagram.svg'} className="w-16 h-16" />
            <img src={'youtube.svg'} className="w-16 h-16" />
          </div>
        </div>
      </div>
      <div className="bg-[#556F4D] flex font-normal px-8 pt-12 pb-7 text-sm text-white">
        <span>Política de privacidade</span>
        <img src={'dot.svg'} className="mx-3.5" />
        <span>Termos de uso</span>
        <img src={'dot.svg'} className="mx-3.5" />
        <span>Política de Cookies</span>
        <img src={'dot.svg'} className="mx-3.5" />
        <span>Política de cancelamento</span>
      </div>
      <div className=" flex justify-between bg-[#506849] px-8 p-8 text-white">
        <span className="font-bold">
          Pett Love - Relacionamento | CNPJ: 43.660.696/0001-95{' '}
        </span>
        <img src={'setaUp.svg'} />
        <img src={'clickweb.svg'} />
      </div>
    </footer>
  );
}
