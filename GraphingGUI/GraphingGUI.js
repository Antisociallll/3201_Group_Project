/* jshint esversion: 6 */

var fitness_trend = new Vue
(
    {
        el: '.figure.fitness.trend',
        data:
        {

        },
    }
);

var total_distance_trend = new Vue
(
    {
        el: '.figure.total_distance.trend',
        data:
        {

        },
    }
);

var generation = new Vue
(
    {
        el: '.figure.generation',
        data:
        {

        },
    }
);

var dashboard = new Vue
(
    {
        el: '#dashboard',
        data:
        {

        },
        methods:
        {
            logSth: function()
            {
                console.log("haha");
            }
        },
    }
);










































/*
var TESTER = $("#tester")[0];

Plotly.plot
(
    TESTER,
    [
        {
            x: [1, 2, 3, 4, 5, 1.5],
            y: [1, 2, 4, 8, 16, 7.5]
        }
    ],
    {
        margin: { t: 0 }
    }
);
*/
/*
ids = [];
xs = [];
ys = [];
for(let i in WesternSahara)
{
    ids.push(i+1);
    xs.push(WesternSahara[i][0]);
    ys.push(WesternSahara[i][1]);
}

var city_positions =
    {
        x: xs,
        y: ys,
        mode: "markers",
        type: "scatter",
    };
*/

// for test only //
Plotly.plot
(
    $(".figure.individual")[0],
    [
        {
            x: [1, 2, 3, 4, 5, 1.5],
            y: [1, 2, 4, 8, 16, 7.5],
        }
    ],
    {
        margin: { t: 0 }
    }
);

Plotly.plot
(
    $(".figure.fitness.trend")[0],
    [
        {
            x: [1, 2, 3, 4, 5, 1.5],
            y: [1, 2, 4, 8, 16, 7.5],
        }
    ],
    {
        margin: { t: 0 }
    }
);

Plotly.plot
(
    $(".figure.total_distance.trend")[0],
    [
        {
            x: [1, 2, 3, 4, 5, 1.5],
            y: [1, 2, 4, 8, 16, 7.5],
        }
    ],
    {
        margin: { t: 0 }
    }
);
