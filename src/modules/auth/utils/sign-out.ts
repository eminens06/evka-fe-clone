import { deleteSession } from './session.utils';
import { clearCache } from '../../../relay/environment';
import { Routes } from '../../utils/routes';

export default function signOut(router): void {
  deleteSession();
  clearCache();
  router.push(Routes.initial);
}
