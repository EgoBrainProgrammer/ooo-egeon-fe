function findIfNull(array, findFnc, field = "data", value = "") {
    let item = array.find(findFnc);
    if (!item)
        item = {
            [field]: value
        };

    return item;
}

function getDictTextValue(dict, id, key = "value", field = "title") {
    let result = "";

    for (let i = 0; i < dict.length; ++i) {
        if (dict[i][key] == id) {
            result = dict[i][field];
            break;
        }
    }

    return result;
}

function trimString(str, maxlen, mask = "...") {
    if (!str)
        return str;
    return str.length > maxlen ? str.substring(0, maxlen) + mask : str;
}

function dateToString(date) {
    if (date == null)
        return date;
    if (["string", "number"].includes(typeof date))
        date = new Date(date);
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
}

function toLocaleString(date) {
    return date ? new Date(date).toLocaleString() : '';
}

function toTimeStamp(seconds) {
    return new Date(seconds * 1000).toISOString().substring(11, 19);
}

function closeEditDialog(dialog) {
    if (Array.isArray(dialog))
        dialog.forEach(val => val.cancel());
    else
        dialog.cancel();
}

export {
    getDictTextValue, trimString, dateToString,
    toLocaleString, toTimeStamp, closeEditDialog,
    findIfNull
};