import { ModuleType } from '../admin/externalService/types';
import { OrderTypes } from '../orders/types';

export const LogOrderTypeTexts: Record<OrderTypes, string> = {
  [OrderTypes.CUSTOM]: 'Özel Sipariş',
  [OrderTypes.NORMAL]: 'Normal Sipariş',
  [OrderTypes.STORE]: 'Gel - Al Sipariş',
};

export const ModuleTexts: Record<ModuleType, string> = {
  [ModuleType.PT]: 'Boya',
  [ModuleType.MR]: 'Mermer',
  [ModuleType.AS]: 'Al - Sat',
  [ModuleType.F]: 'Kumaş',
  [ModuleType.GL]: 'Cam',
};
