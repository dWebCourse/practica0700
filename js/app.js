jQuery(document).ready(function ($) {
    console.log($('#headChange'))
    $('#headChange').on("click", function (e) {
        e.preventDefault();
        console.log('Head Change');
        headChange();
    });

    $('#diosesGriegos').on("click", function (e) {
        e.preventDefault();
        console.log('Dioses Griegos');
        diosesGriegos();
    });

    $('#otrosDioses').on("click", function (e) {
        e.preventDefault();
        console.log('Otros Dioses');
        otrosDioses();
    });

    $('#reslatarMitologia').on("click", function (e) {
        e.preventDefault();
        console.log('Resaltar Mitologia');
        reslatarMitologia();
    });

    $('#reset').on("click", function (e) {
        e.preventDefault();
        console.log('reset');
        reset();
    });

    /**Funciones para estilos */
    function headChange() {
        $('th').addClass('headImprove mejorado');
    }

    function diosesGriegos() {
        $('.griego').addClass('mejorado');
    }

    function otrosDioses() {
        $('.otrosDioses').addClass('mejorado');
    }

    function reslatarMitologia() {
        $('table tr td:last-child').addClass('mejorado');
    }

    function reset() {
        $('.mejorado').removeClass('mejorado');
    }
});