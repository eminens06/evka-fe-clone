import { deleteSession } from './session.utils';
import { clearCache } from '../../../relay/environment';
import { Routes } from './routes';

export default function signOut(router: any): void {
  deleteSession();
  clearCache();
  router.push(Routes.initial);
}
