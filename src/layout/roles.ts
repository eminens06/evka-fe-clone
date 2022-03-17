export enum Roles {
  kiosk = 'kiosk',
  orders = 'orders',
  management_production = 'management_production',
  production_summary = 'production_summary',
  production_wood = 'production_wood',
  production_metal = 'production_metal',
  production_paint = 'production_paint',
  production_glass = 'production_glass',
  production_marble = 'production_marble',
  production_fabric = 'production_fabric',
  packaging = 'packaging',
  shipment_summary = 'shipment_summary',
  shipment_shipmentOrder = 'shipment_shipmentOrder',
  shipment_shipmentManagement = 'shipment_shipmentManagement',
  shipment_invoice = 'shipment_invoice',
  log = 'log',
  oem = 'oem',
  return_cancel = 'return_cancel',
  admin = 'admin',
  storage = 'storage',
}

export const RolesMapper: Record<string, string> = {
  normal_order: 'orders',
  store_order: 'orders',
  custom_order: 'orders',
  return_cancel: 'return_cancel',
  return_product: 'return_cancel',
};

export const RoleTexts = {
  [Roles.admin]: 'Admin',
  [Roles.kiosk]: 'Kiosk',
  [Roles.management_production]: 'Üretim Yönetimi',
  [Roles.production_summary]: 'Üretim Özeti',
  [Roles.production_wood]: 'Ahşap Atölyesi',
  [Roles.production_metal]: 'Metal Atölyesi',
  [Roles.production_paint]: 'Boya Atölyesi',
  [Roles.production_marble]: 'Mermer Atölyesi',
  [Roles.production_glass]: 'Cam Atölyesi',
  [Roles.production_fabric]: 'Kumaş Atölyesi',
  [Roles.packaging]: 'Toplama/Paketleme',
  [Roles.return_cancel]: 'İptal/İade',
  [Roles.shipment_invoice]: 'Sevkiyat/Fatura',
  [Roles.shipment_shipmentManagement]: 'Sevkiyat Yönetimi',
  [Roles.shipment_shipmentOrder]: 'Sevkiyat',
  [Roles.shipment_summary]: 'Sevkiyat/Fatura Özeti',
  [Roles.log]: 'Loglar',
  [Roles.oem]: 'Al-Sat',
  [Roles.orders]: 'Siparişler',
  [Roles.storage]: 'Depo',
};

export const RoleOptions: Option[] = [
  {
    text: 'Admin',
    value: Roles.admin,
  },
  {
    text: 'Kiosk',
    value: Roles.kiosk,
  },
  {
    text: 'Üretim Yönetimi',
    value: Roles.management_production,
  },
  {
    text: 'Üretim Özeti',
    value: Roles.production_summary,
  },
  {
    text: 'Ahşap Atölyesi',
    value: Roles.production_wood,
  },
  {
    text: 'Metal Atölyesi',
    value: Roles.production_metal,
  },
  {
    text: 'Boya Atölyesi',
    value: Roles.production_paint,
  },
  {
    text: 'Mermer Atölyesi',
    value: Roles.production_marble,
  },
  {
    text: 'Cam Atölyesi',
    value: Roles.production_glass,
  },
  {
    text: 'Kumaş Atölyesi',
    value: Roles.production_fabric,
  },
  {
    text: 'Toplama/Paketleme',
    value: Roles.packaging,
  },
  {
    text: 'İptal/İade',
    value: Roles.return_cancel,
  },
  {
    text: 'Sevkiyat/Fatura',
    value: Roles.shipment_invoice,
  },
  {
    text: 'Sevkiyat Yönetimi',
    value: Roles.shipment_shipmentManagement,
  },
  {
    text: 'Sevkiyat',
    value: Roles.shipment_shipmentOrder,
  },
  {
    text: 'Sevkiyat/Fatura Özeti',
    value: Roles.shipment_summary,
  },
  {
    text: 'Loglar',
    value: Roles.log,
  },
  {
    text: 'Al-Sat',
    value: Roles.oem,
  },
  {
    text: 'Siparişler',
    value: Roles.orders,
  },
  {
    text: 'Depo',
    value: Roles.storage,
  },
];
