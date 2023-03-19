const confSession = {
    defaultUser: {
        auth: true,
        name: "Гость",
        roles: [],
        notices: [],
        icon: "",
    }
};

const backend = {
    url: (process.env.NODE_ENV === "development" ? (process.env.HTTPS ? "https:" : "http:") : window.location.protocol) + "//" +
        (process.env.VUE_APP_BACKENDHOST ? process.env.VUE_APP_BACKENDHOST : window.location.hostname) + ":" +
        (process.env.NODE_ENV === "development" && process.env.VUE_APP_BACKENDPORT ? process.env.VUE_APP_BACKENDPORT : window.location.port) +
        process.env.VUE_APP_BACKENDPREFIX,

    origin: (process.env.NODE_ENV === "development" ? (process.env.HTTPS ? "https:" : "http:") : window.location.protocol) + "//" +
        (process.env.VUE_APP_BACKENDHOST ? process.env.VUE_APP_BACKENDHOST : window.location.hostname) + ":" +
        (process.env.NODE_ENV === "development" && process.env.VUE_APP_BACKENDPORT ? process.env.VUE_APP_BACKENDPORT : window.location.port)
};

export { confSession, backend };