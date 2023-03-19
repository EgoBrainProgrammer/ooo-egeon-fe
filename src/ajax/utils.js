function extractAnswerData(response) {
    let result = {
        status: 999,
        headers: {},
        type: null,
        title: null,
        message: "",
        data: null
    };

    if (response) {
        result.status = response.status;
        switch (true) {
            case (response.status < 200):
                break;

            case (response.status >= 200 && response.status < 300):
                result.type = "success";
                break;

            case (response.status >= 300 && response.status < 499):
                result.type = "warning";
                break;

            case (response.status >= 500):
                result.type = "error";
                break;
        }

        result.headers = response.headers;
        response = response.data;
        result.data = response;

        if (Object.prototype.hasOwnProperty.call(response, "error"))
            result.title = response.error;

        if (Object.prototype.hasOwnProperty.call(response, "message"))
            result.message += response.message;
    }

    return result;
}

function removeNils(data) {
    const result = {};
    Object.entries(data).forEach(val => {
        let value = val[1];
        if (value != null) {
            if (typeof value === "object" && !(value instanceof Date)) {
                if (Array.isArray(value)) {
                    value = value.filter(el => el != null);
                    if (value.length == 0)
                        value = null;
                } else {
                    value = removeNils(value);
                    if (Object.keys(value).length == 0)
                        value = null;
                }
            }

            if (value != null)
                result[val[0]] = value;
        }
    });

    return result;
}

export { extractAnswerData, removeNils };