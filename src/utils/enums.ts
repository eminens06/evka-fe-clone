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
    value: 'SH',
  },
  {
    text: 'Kargo',
    value: 'CR',
  },
];

export const CompanyOptions: Record<ShipmentTypeValue, CargoTypeOption[]> = {
  SH: [
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
  CR: [
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
