import {
  CargoTypeOption,
  ShipmentTypeValue,
  ShippingTypeOption,
} from '../modules/shipment_invoice/types';

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
