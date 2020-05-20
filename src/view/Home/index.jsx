import React from "react";
import Grafico from "../Grafico";

import * as S from "./styled";

export default function Home() {
  return <S.Container>
      <Grafico url="BR" title="Brasil"/>
      <Grafico url="AR" title="Argentina"/>
      <Grafico url="US" title="Estado Unidos"/>
      <Grafico url="BO" title="Bolivia"/>
      <Grafico url="CO" title="Canada"/>
      <Grafico url="CL" title="Chile"/>
      <Grafico url="EC" title="Ecuador"/>
      <Grafico url="PE" title="Peru"/>
      <Grafico url="VE" title="Venezuela"/>
      <Grafico url="PY" title="Paraguay"/>
      <Grafico url="MX" title="Mexico"/>
      <Grafico url="UY" title="Uruguay"/>
      <Grafico url="CN" title="China"/>
  </S.Container>;
}
