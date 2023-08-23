(async () => {
    const { Teac, Lang} = await import('./teac.mjs');
    exports.Teac = Teac;
    exports.Lang = Lang;
})();