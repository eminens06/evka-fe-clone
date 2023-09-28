export type metalTypes = {
  fiyat: number;
  sarfKatsayisi: number;
  fireKatsayisi: number;
  paslanmazKatsayisi: number;
  bukumFiyat: number;
  statikBoyaKatsayisi: number;
  eskitmeParlakPrincKatsayisi: number;
};
export type woodTypes = {
  mdfFiyat: number;
  mdfFireKatsayisi: number;
  mdfLamFiyat: number;
  ahsapKaplamaFiyat: number;
  ahsapKaplamaFireKatsayisi: number;
  ahsapAstarKaplamaFireKatsayisi: number;
  ahsapAstarKaplamaFiyat: number;
  astarBasimFiyati: number;
  papelFiyat: number;
  laminantFiyat: number;
  cumbaFiyat: number;
  cumbaFireKatsayisi: number;
  cumbaIscilik: number;
  balonFiyat: number;
  tornaFiyatKatsayisi: number;
  keresteFiyat: number;
  keresteFireKatsayisi: number;
  masifPanelFiyati: number;
  digerKeresteFiyati: number;
  kontraplakFiyati: number;
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
  genelGiderler: number;
  reklamGiderler: number;
  barem1: number;
  barem2: number;
  barem3: number;
  evkaBaremMultiplier: number;
  hepsiBaremMultiplier: number;
  tepeBaremMultiplier: number;
  trendBaremMultiplier: number;
  amazonBaremMultiplier: number;
  vivenseBaremMultiplier: number;
};

export type SystemFormTypes = {
  metalParams: metalTypes;
  woodParams: woodTypes;
  laborParams: laborTypes;
  otherWorkshopParams: otherWorkshopTypes;
  otherParams: otherTypes;
};

export type SystemParamsDTO = {
  id: string;
  metalParams: unknown;
  woodParams: unknown;
  laborParams: unknown;
  otherWorkshopParams: unknown;
  otherParams: unknown;
};
