export type metalTypes = {
  fiyat: number;
  sarfKatsayisi: number;
  fireKatsayisi: number;
  paslanmazKatsayisi: number;
  bukumFiyat: number;
  statikBoyaKatsayisi: number;
  eskitmePrincKatsayisi: number;
  parlakPrincKatsayisi: number;
};
export type woodTypes = {
  mdfFiyat: number;
  mdfFireKatsayisi: number;
  mdfLamFiyat: number;
  ahsapKaplamaFiyat: number;
  ahsapAstarKaplamaFireKatsayisi: number;
  papelFiyat: number;
  laminantFiyat: number;
  cumbaFiyat: number;
  cumbaFireKatsayisi: number;
  cumbaIscilik: number;
  balonFiyat: number;
  tornaFiyatKatsayisi: number;
  keresteFiyat: number;
  keresteFireKatsayisi: number;
  digerKeresteFiyati: number;
  digerKeresteFireKatsayisi: number;
  keresteKaplamaCilaFiyat: number;
  lakeBoyaFiyat: number;
};
export type laborTypes = {
  metal: number;
  tasima: number;
  toplama: number;
  ahsap: number;
  polisaj: number;
  dosemeIscilikKatsayisi: number;
  akrilik: number;
  ambalaj: number;
  mermer: number;
};
export type otherWorkshopTypes = {
  mermerFiyat: number;
  ozelMermerKatsayisi: number;
  kumasFiyat: number;
  camFiyat: number;
  mm4Katsayisi: number;
  mm10Katsayisi: number;
  aynaKatsayisi: number;
};
export type otherTypes = {
  kdv1: number;
  kdv2: number;
  kdv3: number;
  silikon: number;
  aksesuarFiyatKatsayisi: number;
  akrilik: number;
  ambalajMalzeme: number;
  aliminyumDokumFiyatKatsayisi: number;
  sivamaFiyatKatsayisi: number;
  nakliyeFiyat: number;
  fahisKatsayisi: number;
};

export type SystemFormTypes = {
  metalParams: metalTypes;
  woodParams: woodTypes;
  laborParams: laborTypes;
  otherWorkshopParams: otherWorkshopTypes;
  otherParams: otherTypes;
};
