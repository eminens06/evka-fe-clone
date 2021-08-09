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
      value: 'vivense',
    },
    {
      text: 'EVKA (Horoz)',
      value: 'evka',
    },
    {
      text: 'Proje',
      value: 'proje',
    },
    {
      text: 'Mudo',
      value: 'mudo',
    },
    {
      text: 'Blue Ground',
      value: 'blueGround',
    },
  ],
  C: [
    {
      text: 'MNG Kargo',
      value: 'mng',
    },
    {
      text: 'Yurtiçi Kargo',
      value: 'yurtici',
    },
    {
      text: 'MNG Kargo',
      value: 'mng',
    },
    {
      text: 'UPS',
      value: 'ups',
    },
    {
      text: 'EVKA (Fevzi)',
      value: 'evka',
    },
    {
      text: 'Sürat Kargo',
      value: 'surat',
    },
  ],
};
