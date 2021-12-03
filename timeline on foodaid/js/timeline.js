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

 am4core.ready(function() { 
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    var chart = am4core.create("chartdiv", am4charts.XYChart);

    // Add data
    chart.data = [{
    "x": "1",
    "y": 3,
    "text": "[bold]2020 Mar 4[/]\nShort-term Food Assistance Service by Hong Kong Sheng Kung Hui Welfare Council.",
    "center": "bottom"
    }, {
    "x": "2",
    "y": 3,
    "text": "[bold]2020 May 4[/]\nFood for Good resumed Community Center Volunteer Service.",
    "center": "bottom"
    }, {
    "x": "3",
    "y": 3,
    "text": "[bold]2020 Jun 16[/]\nFood Bank by St. James’Settlement.",
    "center": "bottom"
    }, {
    "x": "4",
    "y": 3,
    "text": "[bold]2020 Sep 3[/]\nShort-term Food Assistance Service by Po Leung Kuk.",
    "center": "top"
    }, {
    "x": "4",
    "y": 2,
    "text": "[bold]2020 Sep 15[/]\nJockey Club Food Assistance Programme.",
    "center": "bottom"
    }, {
    "x": "3",
    "y": 2,
    "text": "[bold]2020 Sep 16[/]\nNew security measures are put in place to prevent further accidents.",
    "center": "bottom"
    }, {
    "x": "2",
    "y": 2,
    "text": "[bold]2020 Sep 17[/]\nHot Meal Service by Food for Good.",
    "center": "top"
    }, {
    "x": "1",
    "y": 2,
    "text": "[bold]2020 Sep 21[/]\nFood Angel resumed Community Center Volunteer Service.",
    "center": "top"
    }
    , {
        "x": "1",
        "y": 1,
        "text": "[bold]2020 Oct 20[/]\nFood Pack Service by Hong Kong Women Development Association Limited.",
        "center": "top"
        }
    , {
        "x": "2",
        "y": 1,
        "text": "[bold]2020 Oct 27[/]\nFood Express Service.",
        "center": "top"
        }
    , {
        "x": "3",
        "y": 1,
        "text": "[bold]2021 Jun 1[/]\nShort-term Food Assistance Service by St. James’Settlement.",
        "center": "top"
        }
    
    ];

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
    }, {
    "x": "4"
    }];

    var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = -1;
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
    series.stroke = am4core.color("#EBB471"); // red
    series.fill = am4core.color("#424242");
    series.fontFamily="Roboto Condensed"
    series.tensionX = 0.4;

    var bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.radius = 5;
    bullet.fill = am4core.color("#77969A");
   

    bullet.setStateOnChildren = true;
    bullet.states.create("hover");
    bullet.circle.states.create("hover").properties.radius = 10;

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
    labelBullet.label.states.create("hover").properties.fill = am4core.color("#EBB471");

    labelBullet.label.propertyFields.verticalCenter = "center";

    var title = chart.titles.create();
    title.text = "Timeline for food-aid in Hong Kong during COVID-19";
    title.fontSize = 30;
    title.fontFamily="Roboto Condensed"
    title.marginTop = 15;
    title.marginBottom = 1;

});