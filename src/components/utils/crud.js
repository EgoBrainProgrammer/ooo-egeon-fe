import store from "@/store";
import { ajaxGet, ajaxPost, ajaxPut, ajaxDel } from '@/ajax';
import { removeNils } from "@/ajax/utils"

const saveItem = (loading, path, array, item, callback = null, dict = null, formdata = false, removenils = true) => {
    loading.value = true;

    if (dict)
        store.getters.dicts[dict].loading = true;

    const index = array ? array.value.findIndex(x => x.id == item.id) : 
        store.getters.dicts[dict].data.findIndex(x => x.id == item.id);
    if (array && index > -1)
        array.value[index] = { ...array.value[index], loading: true }; //--Пометить элемент массива, как loading--
    //--После обновления объекта, элемент массива будет заменен ответом сервера, в котором нет поля loading--

    let preparedData = removenils ? removeNils(item) : item;
    if(formdata) {
        let formData = new FormData();
        for (const [key, value] of Object.entries(preparedData)) {
            if(Array.isArray(value))
                value.forEach(x => formData.append(key, x));
            else
                formData.append(key, value);
        }
        preparedData = formData;
    }

    const data = [
        path + (item.id ? "/" + item.id : ""),
        preparedData,
        response => {
            loading.value = false;

            if ([200, 201].includes(response.status)) {
                if (array) {
                    if(index > -1)
                        array.value[index] = response.data;
                    else
                        array.value.push(response.data);
                }

                if (dict)
                    store.commit(item.id ? "dictreplace" : "dictadd", {
                        dict,
                        data: response.data,
                        index
                    });

                if (callback)
                    callback(response);
            } else
                store.dispatch("snackbar", response);
        },
    ];

    //--Сохранить запись--
    item.id ? ajaxPut(...data) : ajaxPost(...data);
};

function deleteItem(path, array, index, item, callback = null, dict = null) {
    if (!item.value.loading && confirm('Вы уверены, что хотите удалить запись?')) {
        item.value.loading = true;

        ajaxDel(path + "/" + item.value.id, null,
            response => {
                item.value.loading = false;
                if (response.status != 200)
                    store.dispatch("snackbar", response);
                else {
                    if (array)
                        array.value.splice(index, 1);

                    if (dict)
                        store.commit("dictremove", {
                            dict,
                            index
                        });
                }

                if (callback)
                    callback(response);
            }
        );
    }
}

function getItems(path, params, context, array, resolve, reject, fin = null, parse = true) {
    ajaxGet(path, params, response => {
        if (response.status == 200) {
            context[array] = parse ? response.data.map(val => ({
                value: val.id,
                text: val.name,
            })) : response.data;
            if (resolve) {
                if (typeof resolve == "object")
                    resolve.callback(resolve.data);
                else
                    resolve();
            }
        } else
            if (reject) {
                if (typeof reject == "object")
                    reject.callback({ ...reject.data, ...response });
                else
                    reject(response);
            }
        if (fin)
            fin();
    });
}

export { saveItem, deleteItem, getItems };