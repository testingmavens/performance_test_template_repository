/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 298.0, "minX": 0.0, "maxY": 884.0, "series": [{"data": [[0.0, 298.0], [0.1, 298.0], [0.2, 298.0], [0.3, 298.0], [0.4, 298.0], [0.5, 298.0], [0.6, 298.0], [0.7, 298.0], [0.8, 298.0], [0.9, 298.0], [1.0, 298.0], [1.1, 298.0], [1.2, 298.0], [1.3, 298.0], [1.4, 298.0], [1.5, 298.0], [1.6, 298.0], [1.7, 298.0], [1.8, 298.0], [1.9, 298.0], [2.0, 298.0], [2.1, 298.0], [2.2, 298.0], [2.3, 298.0], [2.4, 298.0], [2.5, 298.0], [2.6, 298.0], [2.7, 298.0], [2.8, 298.0], [2.9, 298.0], [3.0, 298.0], [3.1, 298.0], [3.2, 298.0], [3.3, 298.0], [3.4, 298.0], [3.5, 298.0], [3.6, 299.0], [3.7, 299.0], [3.8, 299.0], [3.9, 299.0], [4.0, 299.0], [4.1, 299.0], [4.2, 299.0], [4.3, 299.0], [4.4, 299.0], [4.5, 299.0], [4.6, 299.0], [4.7, 299.0], [4.8, 299.0], [4.9, 299.0], [5.0, 299.0], [5.1, 299.0], [5.2, 299.0], [5.3, 299.0], [5.4, 299.0], [5.5, 299.0], [5.6, 299.0], [5.7, 299.0], [5.8, 299.0], [5.9, 299.0], [6.0, 299.0], [6.1, 299.0], [6.2, 299.0], [6.3, 299.0], [6.4, 299.0], [6.5, 299.0], [6.6, 299.0], [6.7, 299.0], [6.8, 299.0], [6.9, 299.0], [7.0, 299.0], [7.1, 299.0], [7.2, 299.0], [7.3, 299.0], [7.4, 299.0], [7.5, 299.0], [7.6, 299.0], [7.7, 299.0], [7.8, 299.0], [7.9, 299.0], [8.0, 299.0], [8.1, 299.0], [8.2, 299.0], [8.3, 299.0], [8.4, 299.0], [8.5, 299.0], [8.6, 299.0], [8.7, 299.0], [8.8, 299.0], [8.9, 299.0], [9.0, 299.0], [9.1, 299.0], [9.2, 299.0], [9.3, 299.0], [9.4, 299.0], [9.5, 299.0], [9.6, 299.0], [9.7, 299.0], [9.8, 299.0], [9.9, 299.0], [10.0, 299.0], [10.1, 299.0], [10.2, 299.0], [10.3, 299.0], [10.4, 299.0], [10.5, 299.0], [10.6, 299.0], [10.7, 299.0], [10.8, 299.0], [10.9, 299.0], [11.0, 299.0], [11.1, 299.0], [11.2, 299.0], [11.3, 299.0], [11.4, 299.0], [11.5, 299.0], [11.6, 299.0], [11.7, 299.0], [11.8, 299.0], [11.9, 299.0], [12.0, 299.0], [12.1, 299.0], [12.2, 299.0], [12.3, 300.0], [12.4, 300.0], [12.5, 300.0], [12.6, 300.0], [12.7, 300.0], [12.8, 300.0], [12.9, 300.0], [13.0, 300.0], [13.1, 300.0], [13.2, 300.0], [13.3, 300.0], [13.4, 300.0], [13.5, 300.0], [13.6, 300.0], [13.7, 300.0], [13.8, 300.0], [13.9, 300.0], [14.0, 300.0], [14.1, 300.0], [14.2, 300.0], [14.3, 300.0], [14.4, 300.0], [14.5, 300.0], [14.6, 300.0], [14.7, 300.0], [14.8, 300.0], [14.9, 300.0], [15.0, 300.0], [15.1, 300.0], [15.2, 300.0], [15.3, 300.0], [15.4, 300.0], [15.5, 300.0], [15.6, 300.0], [15.7, 300.0], [15.8, 300.0], [15.9, 300.0], [16.0, 300.0], [16.1, 300.0], [16.2, 300.0], [16.3, 300.0], [16.4, 300.0], [16.5, 300.0], [16.6, 300.0], [16.7, 300.0], [16.8, 300.0], [16.9, 300.0], [17.0, 300.0], [17.1, 300.0], [17.2, 300.0], [17.3, 300.0], [17.4, 300.0], [17.5, 300.0], [17.6, 300.0], [17.7, 300.0], [17.8, 300.0], [17.9, 300.0], [18.0, 300.0], [18.1, 300.0], [18.2, 300.0], [18.3, 300.0], [18.4, 300.0], [18.5, 300.0], [18.6, 300.0], [18.7, 300.0], [18.8, 300.0], [18.9, 300.0], [19.0, 300.0], [19.1, 300.0], [19.2, 300.0], [19.3, 300.0], [19.4, 300.0], [19.5, 300.0], [19.6, 300.0], [19.7, 300.0], [19.8, 300.0], [19.9, 300.0], [20.0, 300.0], [20.1, 300.0], [20.2, 300.0], [20.3, 300.0], [20.4, 300.0], [20.5, 300.0], [20.6, 300.0], [20.7, 300.0], [20.8, 300.0], [20.9, 300.0], [21.0, 300.0], [21.1, 300.0], [21.2, 300.0], [21.3, 300.0], [21.4, 300.0], [21.5, 300.0], [21.6, 300.0], [21.7, 300.0], [21.8, 300.0], [21.9, 300.0], [22.0, 300.0], [22.1, 300.0], [22.2, 300.0], [22.3, 300.0], [22.4, 300.0], [22.5, 300.0], [22.6, 300.0], [22.7, 300.0], [22.8, 300.0], [22.9, 300.0], [23.0, 300.0], [23.1, 300.0], [23.2, 300.0], [23.3, 300.0], [23.4, 300.0], [23.5, 300.0], [23.6, 300.0], [23.7, 300.0], [23.8, 300.0], [23.9, 300.0], [24.0, 300.0], [24.1, 300.0], [24.2, 300.0], [24.3, 300.0], [24.4, 300.0], [24.5, 300.0], [24.6, 301.0], [24.7, 301.0], [24.8, 301.0], [24.9, 301.0], [25.0, 301.0], [25.1, 301.0], [25.2, 301.0], [25.3, 301.0], [25.4, 301.0], [25.5, 301.0], [25.6, 301.0], [25.7, 301.0], [25.8, 301.0], [25.9, 301.0], [26.0, 301.0], [26.1, 301.0], [26.2, 301.0], [26.3, 301.0], [26.4, 301.0], [26.5, 301.0], [26.6, 301.0], [26.7, 301.0], [26.8, 301.0], [26.9, 301.0], [27.0, 301.0], [27.1, 301.0], [27.2, 301.0], [27.3, 301.0], [27.4, 301.0], [27.5, 301.0], [27.6, 301.0], [27.7, 301.0], [27.8, 301.0], [27.9, 301.0], [28.0, 301.0], [28.1, 301.0], [28.2, 301.0], [28.3, 301.0], [28.4, 301.0], [28.5, 301.0], [28.6, 301.0], [28.7, 301.0], [28.8, 301.0], [28.9, 301.0], [29.0, 301.0], [29.1, 301.0], [29.2, 301.0], [29.3, 301.0], [29.4, 301.0], [29.5, 301.0], [29.6, 301.0], [29.7, 301.0], [29.8, 301.0], [29.9, 301.0], [30.0, 301.0], [30.1, 301.0], [30.2, 301.0], [30.3, 301.0], [30.4, 301.0], [30.5, 301.0], [30.6, 301.0], [30.7, 301.0], [30.8, 301.0], [30.9, 301.0], [31.0, 302.0], [31.1, 302.0], [31.2, 302.0], [31.3, 302.0], [31.4, 302.0], [31.5, 302.0], [31.6, 302.0], [31.7, 302.0], [31.8, 302.0], [31.9, 302.0], [32.0, 302.0], [32.1, 302.0], [32.2, 302.0], [32.3, 302.0], [32.4, 302.0], [32.5, 302.0], [32.6, 302.0], [32.7, 302.0], [32.8, 302.0], [32.9, 302.0], [33.0, 302.0], [33.1, 302.0], [33.2, 302.0], [33.3, 302.0], [33.4, 302.0], [33.5, 302.0], [33.6, 302.0], [33.7, 302.0], [33.8, 302.0], [33.9, 302.0], [34.0, 302.0], [34.1, 302.0], [34.2, 302.0], [34.3, 302.0], [34.4, 302.0], [34.5, 302.0], [34.6, 305.0], [34.7, 305.0], [34.8, 305.0], [34.9, 305.0], [35.0, 305.0], [35.1, 305.0], [35.2, 305.0], [35.3, 305.0], [35.4, 305.0], [35.5, 305.0], [35.6, 305.0], [35.7, 305.0], [35.8, 305.0], [35.9, 305.0], [36.0, 305.0], [36.1, 305.0], [36.2, 305.0], [36.3, 305.0], [36.4, 305.0], [36.5, 305.0], [36.6, 305.0], [36.7, 305.0], [36.8, 305.0], [36.9, 305.0], [37.0, 305.0], [37.1, 305.0], [37.2, 305.0], [37.3, 305.0], [37.4, 305.0], [37.5, 306.0], [37.6, 306.0], [37.7, 306.0], [37.8, 306.0], [37.9, 306.0], [38.0, 306.0], [38.1, 306.0], [38.2, 306.0], [38.3, 306.0], [38.4, 306.0], [38.5, 306.0], [38.6, 306.0], [38.7, 306.0], [38.8, 306.0], [38.9, 306.0], [39.0, 306.0], [39.1, 306.0], [39.2, 306.0], [39.3, 306.0], [39.4, 306.0], [39.5, 306.0], [39.6, 306.0], [39.7, 306.0], [39.8, 306.0], [39.9, 306.0], [40.0, 306.0], [40.1, 306.0], [40.2, 306.0], [40.3, 306.0], [40.4, 306.0], [40.5, 306.0], [40.6, 306.0], [40.7, 306.0], [40.8, 306.0], [40.9, 306.0], [41.0, 306.0], [41.1, 306.0], [41.2, 306.0], [41.3, 306.0], [41.4, 306.0], [41.5, 306.0], [41.6, 306.0], [41.7, 306.0], [41.8, 306.0], [41.9, 306.0], [42.0, 306.0], [42.1, 306.0], [42.2, 306.0], [42.3, 306.0], [42.4, 306.0], [42.5, 306.0], [42.6, 306.0], [42.7, 306.0], [42.8, 306.0], [42.9, 306.0], [43.0, 306.0], [43.1, 306.0], [43.2, 306.0], [43.3, 306.0], [43.4, 306.0], [43.5, 306.0], [43.6, 306.0], [43.7, 306.0], [43.8, 306.0], [43.9, 306.0], [44.0, 306.0], [44.1, 306.0], [44.2, 306.0], [44.3, 306.0], [44.4, 306.0], [44.5, 306.0], [44.6, 306.0], [44.7, 306.0], [44.8, 306.0], [44.9, 306.0], [45.0, 306.0], [45.1, 306.0], [45.2, 306.0], [45.3, 306.0], [45.4, 306.0], [45.5, 306.0], [45.6, 306.0], [45.7, 306.0], [45.8, 306.0], [45.9, 306.0], [46.0, 306.0], [46.1, 306.0], [46.2, 306.0], [46.3, 306.0], [46.4, 306.0], [46.5, 306.0], [46.6, 306.0], [46.7, 306.0], [46.8, 306.0], [46.9, 306.0], [47.0, 306.0], [47.1, 306.0], [47.2, 306.0], [47.3, 306.0], [47.4, 307.0], [47.5, 307.0], [47.6, 307.0], [47.7, 307.0], [47.8, 307.0], [47.9, 307.0], [48.0, 307.0], [48.1, 307.0], [48.2, 307.0], [48.3, 307.0], [48.4, 307.0], [48.5, 307.0], [48.6, 307.0], [48.7, 307.0], [48.8, 307.0], [48.9, 307.0], [49.0, 307.0], [49.1, 307.0], [49.2, 307.0], [49.3, 307.0], [49.4, 307.0], [49.5, 307.0], [49.6, 307.0], [49.7, 307.0], [49.8, 307.0], [49.9, 307.0], [50.0, 307.0], [50.1, 307.0], [50.2, 307.0], [50.3, 307.0], [50.4, 307.0], [50.5, 307.0], [50.6, 307.0], [50.7, 307.0], [50.8, 307.0], [50.9, 307.0], [51.0, 307.0], [51.1, 307.0], [51.2, 307.0], [51.3, 307.0], [51.4, 307.0], [51.5, 307.0], [51.6, 307.0], [51.7, 307.0], [51.8, 307.0], [51.9, 307.0], [52.0, 307.0], [52.1, 307.0], [52.2, 307.0], [52.3, 307.0], [52.4, 307.0], [52.5, 307.0], [52.6, 307.0], [52.7, 307.0], [52.8, 307.0], [52.9, 307.0], [53.0, 307.0], [53.1, 307.0], [53.2, 307.0], [53.3, 307.0], [53.4, 307.0], [53.5, 307.0], [53.6, 307.0], [53.7, 307.0], [53.8, 307.0], [53.9, 307.0], [54.0, 307.0], [54.1, 307.0], [54.2, 307.0], [54.3, 307.0], [54.4, 307.0], [54.5, 307.0], [54.6, 307.0], [54.7, 307.0], [54.8, 307.0], [54.9, 307.0], [55.0, 308.0], [55.1, 308.0], [55.2, 308.0], [55.3, 308.0], [55.4, 308.0], [55.5, 308.0], [55.6, 308.0], [55.7, 308.0], [55.8, 308.0], [55.9, 308.0], [56.0, 308.0], [56.1, 308.0], [56.2, 308.0], [56.3, 308.0], [56.4, 308.0], [56.5, 308.0], [56.6, 308.0], [56.7, 308.0], [56.8, 308.0], [56.9, 308.0], [57.0, 308.0], [57.1, 308.0], [57.2, 308.0], [57.3, 308.0], [57.4, 308.0], [57.5, 308.0], [57.6, 308.0], [57.7, 308.0], [57.8, 308.0], [57.9, 308.0], [58.0, 308.0], [58.1, 308.0], [58.2, 308.0], [58.3, 308.0], [58.4, 308.0], [58.5, 308.0], [58.6, 308.0], [58.7, 308.0], [58.8, 308.0], [58.9, 308.0], [59.0, 308.0], [59.1, 308.0], [59.2, 308.0], [59.3, 308.0], [59.4, 308.0], [59.5, 308.0], [59.6, 308.0], [59.7, 308.0], [59.8, 308.0], [59.9, 308.0], [60.0, 308.0], [60.1, 308.0], [60.2, 308.0], [60.3, 308.0], [60.4, 308.0], [60.5, 308.0], [60.6, 308.0], [60.7, 308.0], [60.8, 308.0], [60.9, 308.0], [61.0, 308.0], [61.1, 308.0], [61.2, 308.0], [61.3, 308.0], [61.4, 308.0], [61.5, 308.0], [61.6, 308.0], [61.7, 308.0], [61.8, 308.0], [61.9, 308.0], [62.0, 308.0], [62.1, 308.0], [62.2, 308.0], [62.3, 308.0], [62.4, 308.0], [62.5, 308.0], [62.6, 308.0], [62.7, 308.0], [62.8, 308.0], [62.9, 308.0], [63.0, 308.0], [63.1, 308.0], [63.2, 309.0], [63.3, 309.0], [63.4, 309.0], [63.5, 309.0], [63.6, 309.0], [63.7, 309.0], [63.8, 309.0], [63.9, 309.0], [64.0, 309.0], [64.1, 309.0], [64.2, 309.0], [64.3, 309.0], [64.4, 309.0], [64.5, 309.0], [64.6, 309.0], [64.7, 309.0], [64.8, 309.0], [64.9, 309.0], [65.0, 309.0], [65.1, 309.0], [65.2, 309.0], [65.3, 309.0], [65.4, 309.0], [65.5, 309.0], [65.6, 309.0], [65.7, 309.0], [65.8, 309.0], [65.9, 309.0], [66.0, 309.0], [66.1, 309.0], [66.2, 309.0], [66.3, 309.0], [66.4, 309.0], [66.5, 309.0], [66.6, 309.0], [66.7, 309.0], [66.8, 309.0], [66.9, 309.0], [67.0, 309.0], [67.1, 309.0], [67.2, 309.0], [67.3, 309.0], [67.4, 309.0], [67.5, 309.0], [67.6, 309.0], [67.7, 309.0], [67.8, 309.0], [67.9, 310.0], [68.0, 310.0], [68.1, 310.0], [68.2, 310.0], [68.3, 310.0], [68.4, 310.0], [68.5, 310.0], [68.6, 310.0], [68.7, 310.0], [68.8, 310.0], [68.9, 310.0], [69.0, 310.0], [69.1, 310.0], [69.2, 310.0], [69.3, 310.0], [69.4, 310.0], [69.5, 310.0], [69.6, 310.0], [69.7, 310.0], [69.8, 310.0], [69.9, 310.0], [70.0, 310.0], [70.1, 310.0], [70.2, 310.0], [70.3, 310.0], [70.4, 310.0], [70.5, 310.0], [70.6, 310.0], [70.7, 310.0], [70.8, 310.0], [70.9, 310.0], [71.0, 310.0], [71.1, 310.0], [71.2, 310.0], [71.3, 310.0], [71.4, 310.0], [71.5, 310.0], [71.6, 310.0], [71.7, 310.0], [71.8, 310.0], [71.9, 310.0], [72.0, 310.0], [72.1, 310.0], [72.2, 310.0], [72.3, 310.0], [72.4, 310.0], [72.5, 310.0], [72.6, 311.0], [72.7, 311.0], [72.8, 311.0], [72.9, 311.0], [73.0, 311.0], [73.1, 311.0], [73.2, 311.0], [73.3, 311.0], [73.4, 311.0], [73.5, 311.0], [73.6, 311.0], [73.7, 311.0], [73.8, 311.0], [73.9, 311.0], [74.0, 311.0], [74.1, 311.0], [74.2, 311.0], [74.3, 360.0], [74.4, 360.0], [74.5, 360.0], [74.6, 360.0], [74.7, 360.0], [74.8, 360.0], [74.9, 445.0], [75.0, 445.0], [75.1, 445.0], [75.2, 445.0], [75.3, 445.0], [75.4, 445.0], [75.5, 446.0], [75.6, 446.0], [75.7, 446.0], [75.8, 446.0], [75.9, 446.0], [76.0, 446.0], [76.1, 446.0], [76.2, 446.0], [76.3, 446.0], [76.4, 446.0], [76.5, 446.0], [76.6, 446.0], [76.7, 446.0], [76.8, 446.0], [76.9, 446.0], [77.0, 446.0], [77.1, 446.0], [77.2, 447.0], [77.3, 447.0], [77.4, 447.0], [77.5, 447.0], [77.6, 447.0], [77.7, 447.0], [77.8, 449.0], [77.9, 449.0], [78.0, 449.0], [78.1, 449.0], [78.2, 449.0], [78.3, 449.0], [78.4, 450.0], [78.5, 450.0], [78.6, 450.0], [78.7, 450.0], [78.8, 450.0], [78.9, 450.0], [79.0, 452.0], [79.1, 452.0], [79.2, 452.0], [79.3, 452.0], [79.4, 452.0], [79.5, 452.0], [79.6, 454.0], [79.7, 454.0], [79.8, 454.0], [79.9, 454.0], [80.0, 454.0], [80.1, 454.0], [80.2, 455.0], [80.3, 455.0], [80.4, 455.0], [80.5, 455.0], [80.6, 455.0], [80.7, 455.0], [80.8, 455.0], [80.9, 455.0], [81.0, 455.0], [81.1, 455.0], [81.2, 455.0], [81.3, 455.0], [81.4, 455.0], [81.5, 455.0], [81.6, 455.0], [81.7, 455.0], [81.8, 455.0], [81.9, 457.0], [82.0, 457.0], [82.1, 457.0], [82.2, 457.0], [82.3, 457.0], [82.4, 457.0], [82.5, 457.0], [82.6, 457.0], [82.7, 457.0], [82.8, 457.0], [82.9, 457.0], [83.0, 457.0], [83.1, 458.0], [83.2, 458.0], [83.3, 458.0], [83.4, 458.0], [83.5, 458.0], [83.6, 458.0], [83.7, 458.0], [83.8, 458.0], [83.9, 458.0], [84.0, 458.0], [84.1, 458.0], [84.2, 458.0], [84.3, 464.0], [84.4, 464.0], [84.5, 464.0], [84.6, 464.0], [84.7, 464.0], [84.8, 474.0], [84.9, 474.0], [85.0, 474.0], [85.1, 474.0], [85.2, 474.0], [85.3, 474.0], [85.4, 476.0], [85.5, 476.0], [85.6, 476.0], [85.7, 476.0], [85.8, 476.0], [85.9, 476.0], [86.0, 476.0], [86.1, 476.0], [86.2, 476.0], [86.3, 476.0], [86.4, 476.0], [86.5, 476.0], [86.6, 477.0], [86.7, 477.0], [86.8, 477.0], [86.9, 477.0], [87.0, 477.0], [87.1, 477.0], [87.2, 477.0], [87.3, 477.0], [87.4, 477.0], [87.5, 477.0], [87.6, 477.0], [87.7, 477.0], [87.8, 478.0], [87.9, 478.0], [88.0, 478.0], [88.1, 478.0], [88.2, 478.0], [88.3, 478.0], [88.4, 480.0], [88.5, 480.0], [88.6, 480.0], [88.7, 480.0], [88.8, 480.0], [88.9, 480.0], [89.0, 480.0], [89.1, 480.0], [89.2, 480.0], [89.3, 480.0], [89.4, 480.0], [89.5, 480.0], [89.6, 480.0], [89.7, 480.0], [89.8, 480.0], [89.9, 480.0], [90.0, 480.0], [90.1, 480.0], [90.2, 480.0], [90.3, 480.0], [90.4, 480.0], [90.5, 480.0], [90.6, 480.0], [90.7, 482.0], [90.8, 482.0], [90.9, 482.0], [91.0, 482.0], [91.1, 482.0], [91.2, 482.0], [91.3, 483.0], [91.4, 483.0], [91.5, 483.0], [91.6, 483.0], [91.7, 483.0], [91.8, 483.0], [91.9, 483.0], [92.0, 483.0], [92.1, 483.0], [92.2, 483.0], [92.3, 483.0], [92.4, 484.0], [92.5, 484.0], [92.6, 484.0], [92.7, 484.0], [92.8, 484.0], [92.9, 484.0], [93.0, 485.0], [93.1, 485.0], [93.2, 485.0], [93.3, 485.0], [93.4, 485.0], [93.5, 485.0], [93.6, 486.0], [93.7, 486.0], [93.8, 486.0], [93.9, 486.0], [94.0, 486.0], [94.1, 486.0], [94.2, 486.0], [94.3, 486.0], [94.4, 486.0], [94.5, 486.0], [94.6, 486.0], [94.7, 486.0], [94.8, 486.0], [94.9, 486.0], [95.0, 486.0], [95.1, 486.0], [95.2, 486.0], [95.3, 486.0], [95.4, 486.0], [95.5, 486.0], [95.6, 486.0], [95.7, 486.0], [95.8, 486.0], [95.9, 486.0], [96.0, 487.0], [96.1, 487.0], [96.2, 487.0], [96.3, 487.0], [96.4, 487.0], [96.5, 488.0], [96.6, 488.0], [96.7, 488.0], [96.8, 488.0], [96.9, 488.0], [97.0, 488.0], [97.1, 488.0], [97.2, 488.0], [97.3, 488.0], [97.4, 488.0], [97.5, 488.0], [97.6, 488.0], [97.7, 489.0], [97.8, 489.0], [97.9, 489.0], [98.0, 489.0], [98.1, 489.0], [98.2, 489.0], [98.3, 490.0], [98.4, 490.0], [98.5, 490.0], [98.6, 490.0], [98.7, 490.0], [98.8, 490.0], [98.9, 493.0], [99.0, 493.0], [99.1, 493.0], [99.2, 493.0], [99.3, 493.0], [99.4, 493.0], [99.5, 884.0], [99.6, 884.0], [99.7, 884.0], [99.8, 884.0], [99.9, 884.0], [100.0, 884.0]], "isOverall": false, "label": "home_page", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 107.0, "series": [{"data": [[300.0, 107.0], [800.0, 1.0], [400.0, 42.0], [200.0, 21.0]], "isOverall": false, "label": "home_page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 800.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 170.0, "series": [{"data": [[0.0, 170.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 25.842105263157887, "minX": 1.69058586E12, "maxY": 25.842105263157887, "series": [{"data": [[1.69058586E12, 25.842105263157887]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69058586E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 299.0, "minX": 1.0, "maxY": 482.5, "series": [{"data": [[32.0, 374.9166666666667], [33.0, 363.3333333333333], [2.0, 301.0], [34.0, 318.3], [35.0, 335.0], [36.0, 320.3571428571429], [37.0, 302.4], [3.0, 299.0], [4.0, 482.5], [5.0, 306.3333333333333], [6.0, 308.0], [7.0, 300.0], [8.0, 306.0], [9.0, 452.0], [10.0, 445.0], [11.0, 307.0], [12.0, 382.0], [13.0, 309.0], [14.0, 428.25], [15.0, 355.6666666666667], [16.0, 421.0], [1.0, 478.0], [17.0, 305.0], [18.0, 363.3333333333333], [19.0, 375.0], [20.0, 413.3333333333333], [21.0, 304.44444444444446], [22.0, 427.3333333333333], [23.0, 415.0], [24.0, 347.625], [25.0, 301.0], [26.0, 331.85714285714283], [27.0, 371.625], [28.0, 304.6666666666667], [29.0, 334.66666666666663], [30.0, 302.6666666666667], [31.0, 348.99999999999994]], "isOverall": false, "label": "home_page", "isController": false}, {"data": [[25.842105263157887, 348.672514619883]], "isOverall": false, "label": "home_page-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 37.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 327.75, "minX": 1.69058586E12, "maxY": 23344.733333333334, "series": [{"data": [[1.69058586E12, 23344.733333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.69058586E12, 327.75]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69058586E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 348.672514619883, "minX": 1.69058586E12, "maxY": 348.672514619883, "series": [{"data": [[1.69058586E12, 348.672514619883]], "isOverall": false, "label": "home_page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69058586E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 348.54385964912296, "minX": 1.69058586E12, "maxY": 348.54385964912296, "series": [{"data": [[1.69058586E12, 348.54385964912296]], "isOverall": false, "label": "home_page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69058586E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 44.15204678362571, "minX": 1.69058586E12, "maxY": 44.15204678362571, "series": [{"data": [[1.69058586E12, 44.15204678362571]], "isOverall": false, "label": "home_page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69058586E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 298.0, "minX": 1.69058586E12, "maxY": 884.0, "series": [{"data": [[1.69058586E12, 884.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.69058586E12, 480.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.69058586E12, 602.4800000000005]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.69058586E12, 486.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.69058586E12, 298.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.69058586E12, 307.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69058586E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 306.0, "minX": 1.0, "maxY": 489.0, "series": [{"data": [[1.0, 489.0], [4.0, 454.0], [5.0, 306.0], [10.0, 306.0], [3.0, 465.5], [6.0, 308.0], [7.0, 306.0], [14.0, 307.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 14.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 306.0, "minX": 1.0, "maxY": 489.0, "series": [{"data": [[1.0, 489.0], [4.0, 454.0], [5.0, 306.0], [10.0, 306.0], [3.0, 465.5], [6.0, 308.0], [7.0, 306.0], [14.0, 307.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 14.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 2.85, "minX": 1.69058586E12, "maxY": 2.85, "series": [{"data": [[1.69058586E12, 2.85]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69058586E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 2.85, "minX": 1.69058586E12, "maxY": 2.85, "series": [{"data": [[1.69058586E12, 2.85]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69058586E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 2.85, "minX": 1.69058586E12, "maxY": 2.85, "series": [{"data": [[1.69058586E12, 2.85]], "isOverall": false, "label": "home_page-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69058586E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 2.85, "minX": 1.69058586E12, "maxY": 2.85, "series": [{"data": [[1.69058586E12, 2.85]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69058586E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

