document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        const q = Array.from({ length: 39 }, (_, i) =>
            parseInt(document.getElementById(`question${i + 1}`).value) || 0
        );

        const est_de_met = q[0] - q[13] + q[26] + 3;
        const ris_calc = q[1] + q[14] - q[27] + 3;
        const qual = q[2] + q[15] - q[28] + 3;
        const plan = q[3] - q[16] + q[29] + 3;
        const busc_info = q[4] + q[17] - q[30] + 3;
        const busc_opor = q[5] + q[18] - q[31] + 3;
        const init_prop = q[6] + q[19] - q[32] + 3;
        const persis = q[7] - q[20] + q[33] + 3;
        const efic = q[8] + q[21] - q[34] + 3;
        const persua = q[9] + q[22] - q[35] + 3;
        const necess_de_idp = q[10] + q[23] - q[36] + 3;
        const autoconf = q[11] - q[24] + q[37] + 3;
        const compr = q[12] + q[25] - q[38] + 3;

        localStorage.setItem("est_de_met", est_de_met.toString());
        localStorage.setItem("ris_calc", ris_calc.toString());
        localStorage.setItem("qual", qual.toString());
        localStorage.setItem("plan", plan.toString());
        localStorage.setItem("busc_info", busc_info.toString());
        localStorage.setItem("busc_opor", busc_opor.toString());
        localStorage.setItem("init_prop", init_prop.toString());
        localStorage.setItem("persis", persis.toString());
        localStorage.setItem("efic", efic.toString());
        localStorage.setItem("persua", persua.toString());
        localStorage.setItem("necess_de_idp", necess_de_idp.toString());
        localStorage.setItem("autoconf", autoconf.toString());
        localStorage.setItem("compr", compr.toString());


        window.location.href = "resultado.html";
    });
});