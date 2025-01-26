import React from 'react'
import Yopi from "./yopi";
import Bima from "./bima";
import Dava from "./dava";
import Ridwan from "./ridwan";
import Agri from "./agri";
import Faisal from "./faisal";
import Yayat from "./yayat";
import Elvio from "./elvio";
import HendraKenji from "./hendra";
import Sukma from './sukma';
import Angger from './angger';

export default function Teams() {
  return (
    <div className="w-auto flex flex-col gap-4">
          <div className="flex flex-row justify-center items-center">
            <Yayat />
            <Dava />
            <Yopi />
            <Bima />
            <Agri />
          </div>
          <div className="flex flex-row justify-center items-center">
            <HendraKenji />
            <Faisal />
            <Ridwan />
            <Elvio />
            <Sukma />
            <Angger />
          </div>
        </div>
  )
}
