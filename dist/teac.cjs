(async () => {
    let { Teac, Lang} = await import('./teac.min.mjs');
    exports.Teac = Teac;
    exports.Lang = Lang;
})();