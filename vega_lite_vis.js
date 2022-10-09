var vg_1 = "js/map.vg.json";
var vg_2 = "js/bubble_chart.vg.json"

vegaEmbed("#choropleth_map", vg_1).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#bubble_chart", vg_2).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
