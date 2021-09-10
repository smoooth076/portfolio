 //기준시간
 var today = new Date();
 var ct = today.toLocaleString();
 document.getElementById("currentTime").innerHTML = `기준시간: ${ct}`;

 //숫자 카운팅
 function numberCounter(target_frame, target_number) {
     this.count = 0;
     this.diff = 0;
     this.target_count = parseInt(target_number);
     this.target_frame = document.getElementById(target_frame);
     this.timer = null;
     this.counter();
 };
 numberCounter.prototype.counter = function() {
     var self = this;
     this.diff = this.target_count - this.count;

     if (this.diff > 0) {
         self.count += Math.ceil(this.diff / 5);
     }

     this.target_frame.innerHTML = this.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

     if (this.count < this.target_count) {
         this.timer = setTimeout(function() {
             self.counter();
         }, 20);
     } else {
         clearTimeout(this.timer);
     }
 };

 new numberCounter("count1", 2164);
 new numberCounter("count2", 281);
 new numberCounter("count3", 1997);
 new numberCounter("count4", 37);
 new numberCounter("count5", 123456);
 new numberCounter("count6", 1234);

 $(document).ready(function() {
     //a1 메뉴
     $(".menu").click(function() {
         $(this).next(".sub").stop().slideToggle(400);
         $(this).toggleClass('on').siblings().removeClass('on');
         $(this).next(".sub").siblings(".sub").slideUp(300);
     });
     //탭 메뉴
     $(".a1menu").click(function() {
         $("#" + $(this).data('id')).addClass('on').siblings().removeClass('on');
         map.relayout();
         map.setCenter(new kakao.maps.LatLng(36.635981, 127.491302))
     });
     //위탁의료기관 탭메뉴
     $(".bt button").click(function() {
         $(this).addClass('on').siblings().removeClass('on');
         $("#" + $(this).data('id')).addClass('on').siblings().removeClass('on');
     });
     //m3 faq 
     $(".question").click(function() {
         $(this).next(".answer").stop().slideToggle(400);
         $(this).toggleClass('on').siblings().removeClass('on');
         $(this).next(".answer").siblings(".answer").slideUp(300);
     });
     //news
     $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v2/search/web",
        data: {
            query: '코로나19 청주 기자',
            'size': 5
        },
        headers: { Authorization: "KakaoAK 5eeed208981be93e64e7308603e61019" }
    })
    .done(function(news) {
        // console.log(news);
        $(".newsresult > *").hide(); // tbody의 모든 내역을 감추기
        const newsresult = $(".newsresult");

        // 결과 5개 출력
        for (let i in news.documents) {
            let listNum = Number(i)+1;
            const extractSpanPattern = /<(\/b|b)([^>]*)>/gi; // 태그 선택 정규식
            let articleTitle = news.documents[i].title.replace(extractSpanPattern, ''); // <b>태그 제거
            let articleURL = news.documents[i].url;
            let articleFullDate = news.documents[i].datetime;
            let articleDate = articleFullDate.slice(0, 10);
            newsresult.append(`
            <tr>
                <td>${listNum}</td>
                <td><a href="${articleURL}" target="_blank">${articleTitle}</a></td>
                <td>${articleDate}</td>
            </tr>
        `);
        }
    })
 });

 //main2 지도 
 var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
 var options = { //지도를 생성할 때 필요한 기본 옵션
     center: new kakao.maps.LatLng(36.635981, 127.491302), //지도의 중심좌표.
     level: 9 //지도의 레벨(확대, 축소 정도)
 };

 var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
 // 마커가 표시될 위치입니다 
 var positions = [{
         title: '상당구청 스포츠센터',
         latlng: new kakao.maps.LatLng(36.590881, 127.506562)
     },
     {
         title: '청주체육관',
         latlng: new kakao.maps.LatLng(36.637917, 127.472356)
     },
     {
         title: '구 흥덕구청',
         latlng: new kakao.maps.LatLng(36.643394, 127.426416)
     },
     {
         title: '청주시 장애인 스포츠센터',
         latlng: new kakao.maps.LatLng(36.679673, 127.478043)
     }
 ];

 for (var i = 0; i < positions.length; i++) {
     // 마커를 생성합니다
     var marker = new kakao.maps.Marker({
         map: map, // 마커를 표시할 지도
         position: positions[i].latlng, // 마커를 표시할 위치
         title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
     });
 }

 // 마커가 지도 위에 표시되도록 설정합니다
 marker.setMap(map);

 //swiper
 var swiper1 = new Swiper(".mySwiper1", {
     navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
     },
 });
 var swiper2 = new Swiper(".mySwiper2", {
     navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
     },
 });

 //확진자추세 
 Highcharts.chart('container1', {
     chart: {
         type: 'column'
     },
     title: {
         text: ' '
     },
     xAxis: {
         categories: [
             '8/27',
             '8/28',
             '8/29',
             '8/30',
             '8/31',
             '9/1',
             '9/2'
         ],
         crosshair: true
     },
     yAxis: {
         min: 0,
         title: {
             text: '확진자수 (명)'
         }
     },
     tooltip: {
         headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
         pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
             '<td style="padding:0"><b>{point.y} 명</b></td></tr>',
         footerFormat: '</table>',
         shared: true,
         useHTML: true
     },
     plotOptions: {
         column: {
             pointPadding: 0.2,
             borderWidth: 0
         }
     },
     series: [{
         name: '청주시',
         data: [10, 20, 30, 40, 50, 40, 30]

     }]
 });

 //백신접종률
 var pieColors = (function() {
     var colors = [],
         base = Highcharts.getOptions().colors[0],
         i;

     for (i = 0; i < 10; i += 1) {
         // Start out with a darkened base color (negative brighten), and end
         // up with a much brighter color
         colors.push(Highcharts.color(base).brighten((i - 3) / 7).get());
     }
     return colors;
 }());

 // Build the chart
 Highcharts.chart('container2', {
     chart: {
         plotBackgroundColor: null,
         plotBorderWidth: null,
         plotShadow: false,
         type: 'pie'
     },
     title: {
         text: ' '
     },
     tooltip: {
         pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
     },
     accessibility: {
         point: {
             valueSuffix: '%'
         }
     },
     plotOptions: {
         pie: {
             allowPointSelect: true,
             cursor: 'pointer',
             colors: pieColors,
             dataLabels: {
                 enabled: true,
                 format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                 distance: -50,
                 filter: {
                     property: 'percentage',
                     operator: '>',
                     value: 4
                 }
             }
         }
     },
     series: [{
         name: 'Share',
         data: [{
                 name: '비접종자',
                 y: 40.00
             },
             {
                 name: '1차 접종자',
                 y: 30.00
             },
             {
                 name: '2차 접종자',
                 y: 30.00
             },
         ]
     }]
 });