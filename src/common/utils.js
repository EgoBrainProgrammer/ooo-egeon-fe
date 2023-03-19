function filterByRoles(array, roles) {
    if (roles.includes("admin"))
        return array;

    const result = [];
    array.forEach(el => {
        if (Object.prototype.hasOwnProperty.call(el, "roles") && Array.isArray(el.roles)) {
            for (let i = 0; i < roles.length; ++i) {
                let breako = false;
                for (let j = 0; j < el.roles.length; ++j)
                    if ((el.roles[j] instanceof RegExp && el.roles[j].test(roles[i])) || el.roles[j] == roles[i]) {
                        result.push(el);
                        breako = true;
                        break;
                    }

                if (breako)
                    break;
            }
        } else
            result.push(el);
    });

    return result;
}

function filteredByPrm(array, prm) {
    return array.filter(x => !x.hasOwnProperty('prm') || prm >= x.prm);
}

function filterObject(objData, filter) {
    return Object.keys(objData)
        .filter(key => filter.includes(key))
        .reduce((obj, key) => {
            obj[key] = objData[key];
            return obj;
        }, {});
}

function objectFieldsToNumber(objData, fields = []) {
    Object.keys(objData).forEach(x => {
        if (!Array.isArray(fields) || fields.length == 0 || fields.includes(x))
            objData[x] = Number(objData[x]);
    });
    return objData;
}

function quickSortBy(array, field) {
    if (array.length <= 1) {
        return array;
    }

    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex];
    let less = [];
    let greater = [];

    for (let i = 0; i < array.length; ++i) {
        if (i === pivotIndex)
            continue;
        if (array[i][field] < pivot[field])
            less.push(array[i]);
        else
            greater.push(array[i]);
    }

    return [...quickSortBy(less, field), pivot, ...quickSortBy(greater, field)];
}

function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

export { filterByRoles, filteredByPrm, filterObject, objectFieldsToNumber, quickSortBy, parseJwt };