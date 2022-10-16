var vg_1 = "js/improve_map.vg.json"
var vg_2 = "js/bar_chart.vg.json"
var vg_3 = "js/line_chart.vg.json"

vegaEmbed("#map", vg_1, { "actions": false }).then(function(result) {
    // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

vegaEmbed("#bar_chart", vg_2, { "actions": false }).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

vegaEmbed("#line_chart", vg_3, { "actions": false }).then(function(result) {
    // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);
