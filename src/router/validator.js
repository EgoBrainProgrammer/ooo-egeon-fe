//import { filterByRoles } from '@/common/utils';

// export default function validateAuthRoute(router, user, path) {
//     let result = true;

//     const existedRoute = router.options.routes.find((element) => {
//         if (element.path === path) return element;
//     });

//     if (existedRoute) {
//         //--Проверить требуется ли авторизация--
//         if (existedRoute.auth && !user.auth)
//             result &= false;

//         //--Проверить наличие прав на маршрут у пользователя--
//         if (filterByRoles([existedRoute], user.roles).length < 1)
//             result &= false;
//     }

//     return result;
// }

export default function validateRoute(to, user) {
    return !(to.path !== '/login' && to.path !== '/login/' &&
        to.meta && Array.isArray(to.meta.roles) &&
        to.meta.roles.filter(x => user.roles.map(x => x.name).includes(x)).length == 0);
}