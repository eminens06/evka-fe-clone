export const generalPropsFileds = [
  {
    label: 'Ürün Adı',
    name: 'name',
    isText: true,
    isRequired: true,
  },
  {
    label: 'Kategori',
    name: 'category',
    filter: 'CT',
    isDropdown: true,
    isRequired: true,
  },
  {
    label: 'Alt Kategori',
    name: 'subCategory',
    filter: 'CA',
    isDropdown: true,
    isRequired: true,
  },
  {
    label: 'Ayak Malzemesi',
    name: 'ayak',
    filter: 'AY',
    isDropdown: true,
    isRequired: true,
  },
  {
    label: 'Tabla Malzemesi',
    name: 'tabla',
    filter: 'TB',
    isDropdown: true,
    isRequired: true,
  },
  {
    label: 'Montaj Durumu',
    name: 'isMonte',
    isDropdown: true,
    isRequired: true,
  },
  {
    label: 'En (mm)',
    name: 'width',
  },
  {
    label: 'Boy (mm)',
    name: 'length',
  },
  {
    label: 'Yükseklik (mm)',
    name: 'height',
  },
  {
    label: 'Desi',
    name: 'desi',
  },
  {
    label: 'Toplama Durumu',
    name: 'isCollectable',
    isDropdown: true,
  },
  {
    label: 'Paket Adedi',
    name: 'packageCount',
  },
  {
    label: 'Kdv',
    name: 'kdv',
    isDropdown: true,
  },
];

export const metalPropsFileds = [
  {
    label: 'Profil (kg)',
    name: 'profil',
  },
  {
    label: 'Paslanmaz (kg)',
    name: 'paslanmaz',
  },
  {
    label: 'Lazer (TL)',
    name: 'lazer',
  },
  {
    label: 'Statik Boya (TL)',
    name: 'statikBoya',
  },
  {
    label: 'Parlak/Eskitme Prinç (TL)',
    name: 'parlakEskitmePrinc',
  },
  {
    label: 'Büküm (m)',
    name: 'bukum',
  },
];

export const woodPropsFileds = [
  {
    label: 'MDF Lam (m2)',
    name: 'mdfLam',
  },
  {
    label: 'MDFKP (m2)',
    name: 'mdfkp',
  },
  {
    label: 'Papel (m2)',
    name: 'papel',
  },
  {
    label: 'Laminant (m2)',
    name: 'laminant',
  },
  {
    label: 'Cumba (m)',
    name: 'cumba',
  },
  {
    label: 'Balon (m2)',
    name: 'balon',
  },
  {
    label: 'Torna (Adet)',
    name: 'torna',
  },
  {
    label: 'Kayin Kereste (m3)',
    name: 'kayinKereste',
  },
  {
    label: 'Diğer Kereste (m3)',
    name: 'digerKereste',
  },
  {
    label: 'Ham MDF (m2)',
    name: 'hamMdf',
  },
  {
    label: 'Masif Panel (m2)',
    name: 'masifPanel',
  },
  {
    label: 'Kontplak (m2)',
    name: 'kontplak',
  },
  {
    label: 'Lake (m2)',
    name: 'lake',
  },
  {
    label: 'Cila (m2)',
    name: 'cila',
  },
];

export const otherWsPropsFileds = [
  {
    label: 'Mermer (m2)',
    name: 'mermer',
  },
  {
    label: 'Mermer İşçilik (m2)',
    name: 'mermerIscilik',
  },
  {
    label: 'Mermer Farkları (m2)',
    name: 'mermerFarklari',
  },
  {
    label: 'Cam 4mm (m2)',
    name: 'cam4mm',
  },
  {
    label: 'Cam 10mm (m2)',
    name: 'cam10mm',
  },
  {
    label: 'Cam Ayna Fazlalığı (m2)',
    name: 'camAynaFazlalik',
  },
  {
    label: 'Kumaş (m2)',
    name: 'kumas',
  },
];

export const laborPropsFileds = [
  {
    label: 'Kaynak Atölyesi İşçilik (A/S)',
    name: 'metal',
  },
  {
    label: 'Taşıma İşçilik (A/S)',
    name: 'tasima',
  },
  {
    label: 'Toplama İşçilik (A/S)',
    name: 'toplama',
  },
  {
    label: 'Marangoz Atölyesi İşçilik (A/S)',
    name: 'ahsapAtolyesi',
  },
  {
    label: 'Polisaj (A/S)',
    name: 'polisaj',
  },
  {
    label: 'Döşeme (TL)',
    name: 'doseme',
  },
  {
    label: 'Akrilik İşçilik (A/S)',
    name: 'akrilik',
  },
  {
    label: 'Ambalaj İşçilik (Adet)',
    name: 'ambalaj',
  },
  {
    label: 'Kutu Bedeli (TL)',
    name: 'kutu',
  }
];

export const otherPropsFileds = [
  {
    label: 'Alüminyum Döküm (kg)',
    name: 'aliminyumDokum',
  },
  {
    label: 'Sivama (TL)',
    name: 'sivama',
  },
  {
    label: 'Silikon Hırdavat (Adet)',
    name: 'silikonHirdavat',
  },
  {
    label: 'Ambalaj Malzemeleri (m2)',
    name: 'ambalajMalzeme',
  },
  {
    label: 'Aksesuar (TL)',
    name: 'aksesuar',
  },
  {
    label: 'Akrilik Kalınlığı (mm)',
    name: 'akrilikTipi',
  },
  {
    label: 'Akrilik Ebat (m2)',
    name: 'akrilikEbat',
  },
];

export const isMonteOptions = [
  { text: 'Monte', value: 'monte' },
  { text: 'Demonte', value: 'demonte' },
];

export const isCollectableOptions = [
  { text: 'Toplanacak', value: 'toplanacak' },
  { text: 'Toplanmayacak', value: 'toplanmayacak' },
];

export const kdvOptions = [
  { text: 'kdv1', value: 'kdv1' },
  { text: 'kdv2', value: 'kdv2' },
  { text: 'kdv3', value: 'kdv3' },
];

export const skuMustFields = generalPropsFileds.slice(0, 6);

export const generalMamuPropsFileds = [
  {
    label: 'Ürün Adı',
    name: 'name',
    isText: true,
    isRequired: true,
  },
  {
    label: 'En (mm)',
    name: 'width',
  },
  {
    label: 'Boy (mm)',
    name: 'length',
  },
  {
    label: 'Yükseklik (mm)',
    name: 'height',
  },
  {
    label: 'Desi',
    name: 'desi',
  },
  {
    label: 'Toplama Durumu',
    name: 'isCollectable',
    isDropdown: true,
  },
  {
    label: 'Paket Adedi',
    name: 'packageCount',
  },
  {
    label: 'Kdv',
    name: 'kdv',
    isDropdown: true,
  },
];
