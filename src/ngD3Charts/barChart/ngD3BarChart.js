(function() {
    'use strict';

    angular
        .module('analyticsChart')
        .directive('d3BarChart', d3BarChart);

    /* @ngInject */
    function d3BarChart($timeout) {
        var directive = {
            bindToController: true,
            controller: d3BarChartController,
            controllerAs: 'vm',
            templateUrl : 'ngD3Charts/barChart/ngD3BarChart.html',
            link: link,
            restrict: 'E',
            scope: {
                barChartData : '='
            }
        };
        return directive;

        function link(scope) {
            scope.$watch('barChartData', function() {
                console.log('Changed');
            });
            var barData = scope.vm.barChartData.plotingData;
            var graphHeight = scope.vm.barChartData.height;
            var graphWidth = scope.vm.barChartData.width;
            var uniqueName = scope.vm.barChartData.uniqueName;
            var barColor = scope.vm.barChartData.barColor;

            $timeout(function() {
                loadD3Js();
            }, 350);


            function loadD3Js() {
                var vis = d3.select('.'+uniqueName),
                    WIDTH = graphWidth,
                    HEIGHT = graphHeight,
                    MARGINS = {
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 50
                    },
                    xRange = d3.scale.ordinal().rangeRoundBands([MARGINS.left, WIDTH - MARGINS.right], 0.1).domain(barData.map(function(d) {
                        return d.x;
                    })),


                    yRange = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([0,
                        d3.max(barData, function(d) {
                            return d.y;
                        })
                    ]),

                    xAxis = d3.svg.axis()
                        .scale(xRange)
                        .tickSize(5)
                        .tickSubdivide(true),

                    yAxis = d3.svg.axis()
                        .scale(yRange)
                        .tickSize(5)
                        .orient("left")
                        .tickSubdivide(true);


                // //For making it responsive

                // d3.select(window).on("resize", resize);
                //
                // //Set the size of the graph
                // function resize() {
                //     var containerWidth = parseInt(vis.style("width"));
                //     var targetWidth = containerWidth ? containerWidth : parseInt(svg.style("width"));
                //     console.log(targetWidth);
                //     svg.attr("width", targetWidth);
                //     svg.attr("height", Math.round(targetWidth / aspect));
                // }

                vis.attr("width", graphWidth);
                vis.attr("height", graphHeight);

                vis.append('svg:g')
                    .attr('class', 'x axis')
                    .attr('transform', 'translate(0,' + (HEIGHT - MARGINS.bottom) + ')')
                    .call(xAxis);

                vis.append('svg:g')
                    .attr('class', 'y axis')
                    .attr('transform', 'translate(' + (MARGINS.left) + ',0)')
                    .call(yAxis);

                vis.selectAll('rect')
                    .data(barData)
                    .enter()
                    .append('rect')
                    .attr('x', function(d) {
                        return xRange(d.x);
                    })
                    .attr("fill", function(d) {
                        if (d.x > 60) {
                            return barColor[2].color;
                        } else if (d.x > 30) {
                            return barColor[1].color;
                        } else if (d.x > 0 || d.x < 0) {
                            return barColor[0].color;
                        }
                        return "#95a5a6";
                    })
                    .attr('y', function(d) {
                        return yRange(d.y);
                    })
                    .attr('width', xRange.rangeBand())
                    .attr('height', function(d) {
                        return ((HEIGHT - MARGINS.bottom) - yRange(d.y));
                    })
                    .attr('style', 'transition : all 0.4s ease');
            }
        }
    }

    d3BarChartController.$inject = ['$scope'];

    /* @ngInject */
    function d3BarChartController($scope) {

    }

})();