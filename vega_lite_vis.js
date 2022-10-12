var vg_1 = "js/interactive_line_chart_V2.vg.json"
var vg_2 = "js/bubble_chart.vg.json"
var vg_3 = "js/macroplastic.vg.json"
var vg_4 = "js/microplastic.vg.json"

vegaEmbed("#line_chart", vg_1).then(function(result) {
    // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);


vegaEmbed("#bubble_chart", vg_2).then(function(result) {
    // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

vegaEmbed("#macroplastic", vg_3).then(function(result) {
    // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

vegaEmbed("#microplastic", vg_4).then(function(result) {
    // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);
