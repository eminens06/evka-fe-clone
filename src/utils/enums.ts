import {
  CargoTypeOption,
  ShipmentTypeValue,
  ShippingTypeOption,
} from '../modules/shipment_invoice/types';
import moment from 'moment';

export const productMetaData = [
  {
    description: 'Kategori',
    name: 'CT',
  },
  {
    description: 'Alt Kategori',
    name: 'CA',
  },
  {
    description: 'Ayak',
    name: 'AY',
  },
  {
    description: 'Tabla',
    name: 'TB',
  },
  {
    description: 'Default',
    name: 'DF',
  },
];

export const ShippingTypeOptions: ShippingTypeOption[] = [
  {
    text: 'Nakliyat',
    value: 'S',
  },
  {
    text: 'Kargo',
    value: 'C',
  },
];

export const CompanyOptions: Record<ShipmentTypeValue, CargoTypeOption[]> = {
  S: [
    {
      text: 'Vivense',
      value: 'Vivense',
    },
    {
      text: 'EVKA (Horoz)',
      value: 'EVKA (Horoz)',
    },
    {
      text: 'Proje',
      value: 'Proje',
    },
    {
      text: 'Mudo',
      value: 'Mudo',
    },
    {
      text: 'Blue Ground',
      value: 'Blue Ground',
    },
    {
      text: 'Ambar',
      value: 'Ambar',
    },
  ],
  C: [
    {
      text: 'MNG Kargo',
      value: 'MNG Kargo',
    },
    {
      text: 'Yurtiçi Kargo',
      value: 'Yurtiçi Kargo',
    },
    {
      text: 'Trendyol Express',
      value: 'Trendyol Express',
    },
    {
      text: 'Hepsi Express',
      value: 'Hepsi Express',
    },
    {
      text: 'Aras Kargo',
      value: 'Aras Kargo',
    },
    {
      text: 'UPS',
      value: 'UPS',
    },
    {
      text: 'EVKA (Fevzi)',
      value: 'EVKA (Fevzi)',
    },
    {
      text: 'Sürat Kargo',
      value: 'Sürat Kargo',
    },
  ],
};

export const months = [
  'Ocak',
  'Şubat',
  'Mart',
  'Nisan',
  'Mayıs',
  'Haziran',
  'Temmuz',
  'Ağustos',
  'Eylül',
  'Ekim',
  'Kasım',
  'Aralık',
];

export const daysInMonth = [
  31,
  moment(moment().year() + '-02', 'YYYY-MM').daysInMonth(),
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31,
];

export const colorPalette = [
  `#003f5c`,
  `#ffa600`,
  `#B6C8A9`,
  `#FFAEBC`,
  `#FBE7C6`,
  `#a05195`,
  `#f95d6a`,
  `#d45087`,
  `#fa8072`,
];

export const marketplaces = [
  'Evka',
  'Vivense',
  'Trendyol',
  'Tepehome',
  'Hepsiburada',
  'Hipicon',
  'Amazon',
  'Pazarama',
  'Toplam',
];

export const marketplaceOptions = marketplaces.map((item) => {
  return { text: item, value: item };
});
