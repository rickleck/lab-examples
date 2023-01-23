import { RouteID } from './types/RouteID';

const appRoutes: Record<RouteID, string> = {
    [RouteID.ROOT]: '/',
    [RouteID.RECORD_LIST]: '/',
    [RouteID.RECORD_DETAILS]: '/record/',
    [RouteID.ADMIN]: '/admin/',
    [RouteID.LOGIN]: '/login',
};

export { appRoutes };
