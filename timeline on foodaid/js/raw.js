/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

// Add data
chart.data = [{
  "x": "1",
  "y": 3,
  "text": "[bold]2018 Q1[/]\nThere seems to be some furry animal living in the neighborhood.",
  "center": "bottom"
}, {
  "x": "2",
  "y": 3,
  "text": "[bold]2018 Q2[/]\nWe're now mostly certain it's a fox.",
  "center": "bottom"
}, {
  "x": "3",
  "y": 3,
  "text": "[bold]2018 Q3[/]\nOur dog does not seem to mind the newcomer at all.",
  "center": "bottom"
}, {
  "x": "3",
  "y": 2,
  "text": "[bold]2018 Q4[/]\nThe quick brown fox jumps over the lazy dog.",
  "center": "top"
}, {
  "x": "2",
  "y": 2,
  "text": "[bold]2019 Q1[/]\nPoor feline is still trying to recover from what happened.",
  "center": "bottom"
}, {
  "x": "1",
  "y": 2,
  "text": "[bold]2019 Q2[/]\nNew security measures are put in place to prevent further accidents.",
  "center": "bottom"
}, {
  "x": "1",
  "y": 1,
  "text": "[bold]2019 Q3[/]\nNo successful fox-jump attacks reported.",
  "center": "top"
}, {
  "x": "2",
  "y": 1,
  "text": "[bold]2019 Q4[/]\nThe yard is now considered fox-free.",
  "center": "top"
}];

// Create axes
var xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
xAxis.dataFields.category = "x";
xAxis.renderer.grid.template.disabled = true;
xAxis.renderer.labels.template.disabled = true;
xAxis.tooltip.disabled = true;
xAxis.data = [{
  "x": "1"
}, {
  "x": "2"
}, {
  "x": "3"
}];

var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
yAxis.min = 0;
yAxis.max = 4;
yAxis.strictMinMax = true;
yAxis.renderer.grid.template.disabled = true;
yAxis.renderer.labels.template.disabled = true;
yAxis.renderer.baseGrid.disabled = true;
yAxis.tooltip.disabled = true;


// Create series
var series = chart.series.push(new am4charts.LineSeries());
series.dataFields.categoryX = "x";
series.dataFields.valueY = "y";
series.strokeWidth = 4;
series.sequencedInterpolation = true;
series.tensionX = 0.7;

var bullet = series.bullets.push(new am4charts.CircleBullet());
bullet.circle.radius = 10;

bullet.setStateOnChildren = true;
bullet.states.create("hover");
bullet.circle.states.create("hover").properties.radius = 15;

var labelBullet = series.bullets.push(new am4charts.LabelBullet());
labelBullet.label.text = "{text}";
labelBullet.label.maxWidth = 250;
labelBullet.label.wrap = true;
labelBullet.label.truncate = false;
labelBullet.label.textAlign = "middle";
labelBullet.label.padding(20, 20, 20, 20)
labelBullet.label.fill = am4core.color("#999");
labelBullet.label.background.fill = series.fill;
labelBullet.label.background.fillOpacity = 0.1;

labelBullet.setStateOnChildren = true;
labelBullet.states.create("hover").properties.scale = 1.2;
labelBullet.label.states.create("hover").properties.fill = am4core.color("#000");

labelBullet.label.propertyFields.verticalCenter = "center";