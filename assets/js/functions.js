$( document ).ready(function() {

	navbarActivate();

	//Add a nice favicon to the tab
	createFavicon();

	//create Select Options
	scdGl.options = createSelectOptions(scdGl.optionsLast, scdGl.sourceData);

	//set current upload
	setInitialData();

	// The rest baby
	Chart.defaults.global.responsive = true;
	// Chart.defaults.global.maintainAspectRatio = false;

	updatescreeningInfo(scdGl.current, scdGl.text);

	updateComparison(scdGl.current, scdGl.text);

	displayTopRisk(scdGl.current, scdGl.text);

	displayHits(scdGl.current, scdGl.text);

	displayTrend(scdGl.current, scdGl.sourceData, scdGl.options, scdGl.text);

	displayBpTrans(scdGl.current, scdGl.text);

	displayReasons(scdGl.current.reasons);
	
	createTrendLegend();

	displayPersonResponsible(scdGl.current.personResponsible);

	smoothScroll(300);
	
});

function displayBpTrans( current, tx){

	var segments = [
    {
        value: current.invalidTranslation,
        color:"#FF5A5E",
        highlight: "#FF8689",
        label: tx.invalidTrl
    },
    {
        value: current.noTranslation,
        color: "#9CC96B",
        highlight: "#C5E89F",
        label: tx.noTrl
    },
    {
        value: current.validTranslation,
        color: "#62A9F9",
        highlight: "#8ABFFB",
        label: tx.validTrl
    }
	]

	var ctx = document.getElementById("bpTrans").getContext("2d");

	// For a pie chart
	window.myPieChart = new Chart(ctx).Doughnut(segments, {

		//percentageInnerCutout : 30,

		//String - A legend template
    	//legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<data.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",

		animationEasing : "easeOutQuint"
	});


	//set the percentage

	var invalidTrl = Math.round( (current.invalidTranslation) / (current.invalidTranslation + current.noTranslation + current.validTranslation) * 100 )
	$('#invalid-trl').text(invalidTrl + '%');

	var validTrl = Math.round( (current.validTranslation) / (current.invalidTranslation + current.noTranslation + current.validTranslation) * 100 )
	$('#valid-trl').text(validTrl + '%');

		var noTrl = Math.round( (current.noTranslation) / (current.invalidTranslation + current.noTranslation + current.validTranslation) * 100 )
	$('#no-trl').text(noTrl + '%');
	// var legendHolder = document.createElement('div');
	// legendHolder.innerHTML = window.myPieChart.generateLegend();
	// document.getElementById('legendTrans').appendChild(legendHolder.firstChild);


}

function displayReasons( reasons ){

 	var color = [
	 	{
	 	color: "#62A9F9",
        highlight: "#8ABFFB",
	 	},
	 	{
	 	color: "#9CC96B",
        highlight: "#C5E89F",

	 	},
	 	{
		color:"#FF5A5E",
        highlight: "#FF8689",
	 	},
	 	{
		color: "#46BFBD",
        highlight: "#5AD3D1",
	 	},
	 	{
 		color: "#FFDA87",
        highlight: "#FFE6BD",
	 	},
	 	{
 		color: "#FF5ABB",
        highlight: "#FF86CD",
	 	},
	 	{
 		color: "#C563FF",
        highlight: "#E8C2FF",
	 	},
	 	{
 		color: "#CAFF5A",
        highlight: "#EAFFBF",
	 	},
	 	{
 		color: "#FFFE5A",
        highlight: "#FFFE86",
	 	},
	 	{
 		color: "#624BB0",
        highlight: "#AD9EE1",
	 	}
 	]

 	var data = [];

 	for (var i = 0; i < reasons.length; i++) {
 		if (i < 10) {

 			var str = reasons[i].text;

 			str = str.replace(/ +(?= )/g,'');

 			data.push(

 					{
 						value: reasons[i].value,
        				color: color[i].color,
        				highlight: color[i].highlight,
        				label: str
 					}

 				);


 		} else {

 			break;

 		}
 		
 	};

 	if (window.reasonsPie) {

		window.reasonsPie.destroy();
	};

	var sel = document.getElementById('reasonsLegend');

	while (sel.hasChildNodes()) {   

		sel.removeChild(sel.firstChild);
	};

	if (reasons.length > 0) {		

		//remove no data block
		$( '#reasons-no-data').addClass( 'no-display' );

		var ctx = document.getElementById("reasons").getContext("2d");

		// For a pie chart
		window.reasonsPie = new Chart(ctx).Doughnut(data, {
			animationEasing : "easeOutQuint"
		});

		var legendHolder = document.createElement('div');
		legendHolder.innerHTML = window.reasonsPie.generateLegend();


		sel.appendChild(legendHolder.firstChild);

	} else {

		//display no data block
		$( '#reasons-no-data').removeClass( 'no-display' );

	};
};

function displayPersonResponsible( perResp ){

	var data = {
    labels: [],
    datasets: [
        {
            label: "Released",
            fillColor: "#62A9F9",
            strokeColor: "#62A9F9",
            highlightFill: "#8ABFFB",
            highlightStroke: "#8ABFFB",
            data: []
        },
        {
            label: "Blocked",
            fillColor: "#FF5A5E",
            strokeColor: "#FF5A5E",
            highlightFill: "#FF8689",
            highlightStroke: "#FF8689",
            data: []
        }
    ]
	};

	if (window.responsibleBar) {
		window.responsibleBar.destroy();
	};
	

	for (var i = 0; i < perResp.length; i++) {
		
		data.labels.push( perResp[i].name );
		data.datasets[0].data.push( perResp[i].released );
		data.datasets[1].data.push( perResp[i].blocked );
	};

	var sel = document.getElementById('legendPersonResponsible');

	while (sel.hasChildNodes()) {   
		sel.removeChild(sel.firstChild);
	};

	if (perResp.length > 0){

		//remove no data block
		$( '#person-no-data').addClass( 'no-display' );

		var ctx = document.getElementById("personResponsible").getContext("2d");

		// For a pie chart
		window.responsibleBar = new Chart(ctx).Bar(data, {

			//Number - Spacing between each of the X value sets
		    barValueSpacing : 50,

		    //Number - Spacing between data sets within X values
		    barDatasetSpacing : 1


		});

		var legendHolder = document.createElement('div');
		legendHolder.innerHTML = window.responsibleBar.generateLegend();

		sel.appendChild(legendHolder.firstChild);

	} else {

		//display no data block
		$( '#person-no-data').removeClass( 'no-display' );

	};

}

function setInitialData() {


	if (scdGl.sourceData[0].splData[0].Customer) {

		scdGl.current = set_bp('Customer');

	} else {

		scdGl.current = set_bp('Vendor');

	};		
	

	scdGl.current.date 		    = scdGl.sourceData[0].date ;
	scdGl.current.scrNum        = scdGl.sourceData.length  ;
	
	if (scdGl.sourceData.length > 1) {
		scdGl.current.dateLast	    = scdGl.sourceData[1].date ;
	} else {
		scdGl.current.dateLast	    = false;
	};

	function set_bp(bp) {
		var curr;
		
		curr = scdGl.sourceData[0].splData[0][bp]

		if (scdGl.sourceData.length > 1 && 
			scdGl.sourceData[1].splData[0][bp] &&
			scdGl.sourceData[1].splData[0].lgreg === scdGl.sourceData[0].splData[0].lgreg
			) {

			var bp = scdGl.sourceData[1].splData[0][bp]			

			curr.hitsLast		= bp.hits;	
			curr.approvedLast	= bp.approved;
			curr.posListLast	= bp.posList;
			curr.negListLast	= bp.negList;

		} else {

			curr.hitsLast		= NaN;	
			curr.approvedLast	= NaN;
			curr.posListLast	= NaN;
			curr.negListLast	= NaN;

		};

		return curr;
	};

};

function createFavicon() {

	var favIcon = "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";

	var docHead = document.getElementsByTagName('head')[0];
	var newLink = document.createElement('link');
	newLink.rel = 'shortcut icon';
	newLink.type = 'image/x-icon';
	newLink.href = 'data:image/png;base64,'+favIcon;
	docHead.appendChild(newLink);

};


function displayTopRisk( current, text ) {
	
		//CHART TABLES DATA
	//Top 3 risk countries
	var topRiskData = [
	{
		value: current.firstPercentage,
		color:"#F7464A",
		highlight: "#FF5A5E",
		label: current.firstName
	},
	{
		value: current.secondPercentage,
		color: "#FF6C51",
		highlight: "#FF8F7A",
		label: current.secondName
	},
	{
		value: current.thirdPercentage,
		color: "#FFDA87",
		highlight: "#FFE6BD",
		label: current.thirdName
	}

	];

		// //Load Polar area chart for risk countries
	var ctx = document.getElementById("topRisk").getContext("2d");
	window.polarRisk = new Chart(ctx).PolarArea(topRiskData, {
		// // Boolean - If we want to override with a hard coded scale
		// scaleOverride: true,
		// // ** Required if scaleOverride is true **
		// // Number - The number of steps in a hard coded scale
		// scaleSteps: 2,
		// // Number - The value jump in the hard coded scale
		// scaleStepWidth: 2,
		// // Number - The scale starting value
		// scaleStartValue: 0,
	//String - A legend template
	// legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\" style=\"padding-left: 0px;\"><% for (var i=0; i<segments.length; i++){%><li style=\"display: list-item;\"><span style=\"width: 15px; background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
	maintainAspectRatio: false,
	animationEasing : "easeOutQuint"
	});

	setRisk( 'first', current.firstName, current.firstPercentage );
	setRisk( 'second', current.secondName, current.secondPercentage );
	setRisk( 'third', current.thirdName, current.thirdPercentage );
};

function setRisk(position, name, perc){

	var idName = '#'+position+'-name';
	var idPerc = '#'+position+'-perc';

	$(idName).text(name);
	$(idPerc).text( Math.round(perc) + '% ' + scdGl.text.blocked );

};

function updatescreeningInfo(current, text){

	//set screening Number
	$( '#head-up-date').html(current.date + text.screening);

	$( '#header_trl').html(     text.header_trl	+ 	 scdGl.currentDate );
	$( '#header_reason').html(  text.header_reason  );
	$( '#header_person').html(  text.header_person  );
	
	// footer
	current.dateLast ?	$( '.up-date').html(current.dateLast): $( '.up-date').html( ' ----- ' ) ;
	$( '.up-number').html(current.scrNum)

	$( '#ins-n').text(current.created);
	$( '#up-n').text(current.updated);

	//set statistics

	// function setPercentage( id, current, last ){

	// 	if (isNaN(last)) {

	// 		idArr 	= '#'+id+'-arr';
	// 		idNum = '#'+id+'-num';

	// 		$( idArr ).removeClass( 'red' );
	// 		$( idArr ).removeClass( 'green' );

	// 		$( idNum ).text(  ' --- ' );

	// 	} else {
	// 		var percentage = ( current / last ) * 100 - 100;

	// 		idArr 	= '#'+id+'-arr';
	// 		idNum = '#'+id+'-num';

	// 		$( idArr ).removeClass( 'red' );
	// 		$( idArr ).removeClass( 'green' );

	// 		if (percentage > 0) {
	// 			$( idArr ).addClass('green')
	// 		} else if (percentage < 0) {
	// 			$( idArr ).addClass('red')
	// 		};

	// 		$( idNum ).text(  Math.round(percentage) + '%' );
	// 	};
	// };


	// setPercentage( 'ins-avg' , current.created , current.createdAvg );
	
	// setPercentage( 'ins-last' , current.created , current.createdLast );
	
	// setPercentage( 'upd-avg' , current.updated , current.updatedAvg );

	// setPercentage( 'upd-last' , current.updated , current.updatedLast );


};

function updateComparison(current, text){

	var compData = {

		hitsLast: '',
		hitsAvg: '',
		appLast: '',
		appAvg: '',
		posLast: '',
		posAvg: '',
		negLast: '',
		negAvg: '',

	};
	
	setComparison(compData, 'hits', current.hits, current.hitsAvg, current.hitsLast);

	setComparison(compData, 'app', current.approved, current.approvedAvg, current.approvedLast);

	setComparison(compData, 'pos', current.posList, current.posListAvg, current.posListLast);

	setComparison(compData, 'neg', current.negList, current.negListAvg, current.negListLast);

	//normalize and set bar data
	normalizeBars(compData);

	function normalizeBars(compData) {
		
		// var idBarLast 	= '#hits-vs-last';
		// var idBarAvg 	= '#hits-vs-average';

		var numbers = [];

		if (!isNaN(compData.hitsLast)) {numbers.push(Math.abs(compData.hitsLast))};
		if (!isNaN(compData.hitsAvg )) {numbers.push(Math.abs(compData.hitsAvg ))};
		if (!isNaN(compData.appLast))  {numbers.push(Math.abs(compData.appLast ))};
		if (!isNaN(compData.appAvg ))  {numbers.push(Math.abs(compData.appAvg  ))};
		if (!isNaN(compData.posLast))  {numbers.push(Math.abs(compData.posLast ))};
		if (!isNaN(compData.posAvg ))  {numbers.push(Math.abs(compData.posAvg  ))};
		if (!isNaN(compData.negLast))  {numbers.push(Math.abs(compData.negLast ))};
		if (!isNaN(compData.negAvg ))  {numbers.push(Math.abs(compData.negAvg  ))};
	    
	    var setBar = initBarPainter(numbers);		

		setBar('#hits-vs-last', 	compData.hitsLast)
		setBar('#hits-vs-average', compData.hitsAvg ) 
		setBar('#app-vs-last', 	compData.appLast ) 	
		setBar('#app-vs-average',	compData.appAvg  )
		setBar('#pos-vs-last', 	compData.posLast ) 	
		setBar('#pos-vs-average',	compData.posAvg  )
		setBar('#neg-vs-last', 	compData.negLast ) 	
		setBar('#neg-vs-average',	compData.negAvg  )

		function initBarPainter(numbers){
			
			ratio = Math.max.apply(this, numbers) / 100;

			return function (id, value) {				

				if ( isNaN( value ) ){

					$( id ).removeClass('red');
					$( id ).removeClass('green');

					$( id ).css( {"margin-left":"50%", "margin-right": "50%"} );

				} else {

				percentage = Math.round(value / ratio);

				var marginValue = ( 47 - (Math.abs(percentage) / 2) ); //47 is to overcome border for small %

				marginValue < 0 ? marginValue = '0%' : marginValue = marginValue + '%' ;

				$( id ).removeClass('red');
				$( id ).removeClass('green');

				percentage > 0 ? 
				( $( id ).addClass('green') && $( id ).css( {"margin-left":"50%", "margin-right": marginValue} ) ) :
				( $( id ).addClass('red') && $( id ).css( {"margin-left":marginValue, "margin-right": '50%'} ) )

				};
			};
		};
	};	

	function setComparison(compData, item, num, average, last ){

		var idNum	 	= '#'+item+'-n';
		var idPerLast	= '#'+item+'-vs-last-txt';
		var idPerAvg	= '#'+item+'-vs-average-txt';			

		var prevText;
		var avgText;

		// calculate increase VS. last
		if ( isNaN(last) || last == 0 ) {

			prevText = scdGl.text.noPrev 

		} else {

			//var percLast = Math.round(( num / last ) * 100 - 100);
			var percLast = Math.round( (( num - last ) / last ) * 100 );
			
			var int;
			percLast >= 0 ? int = '+' + percLast : int = percLast;
			prevText = int +'% ' + text.vsLast + ' (<strong>'+ Math.round(last)  + '</strong>)';

		};

		// calculate increase VS. Average
		if ( isNaN(average) || average == 0 ) {

			avgText = text.noAverage ;

		} else {

			var percAvg  = Math.round( (( num - average ) / average ) * 100 );

			percAvg >= 0 ? int = '+' + percAvg : int = percAvg;
			avgText = int +'% ' + text.vsAvg + ' (<strong>'+ ( Math.round(average * 10) / 10 ) +'</strong>)';
		
		};

		// buffer the data for later use
		var itemLast = item + 'Last';
		var itemAvg = item + 'Avg';
		
		compData[itemLast] = percLast;
		compData[itemAvg] = percAvg;

		//write detailed data into html
		$( idNum ).text(num);
		$( idPerLast ).html(prevText);
		$( idPerAvg ).html(avgText);

	};
};

function navbarActivate(){

	var documentElem = $(document);
	var block = $('.sel-block');
	var btn = $('#show-block');
	var lastScrollTop = 0;

	$('#show-block').on('click', function(event) {

		var currentScrollTop = document.body.scrollTop;

		//block[0].style.top = ( currentScrollTop ) + 'px';

		//block[0].style.top = '50px'

		block.toggleClass('block');
		btn.toggleClass('down');

		//block[0].style.top = '57px'

	});

	// documentElem.on('scroll', function() {
	// 	var currentScrollTop = document.body.scrollTop;

	// 	//scroll down
	// 	if ( currentScrollTop > lastScrollTop) {

	// 		if ( currentScrollTop > 130) {

	// 			nav.addClass('hidden');
	// 			nav.addClass('transition');
			
	// 		} else {
				
	// 			nav.removeClass('transition');
	// 			nav[0].style.top = (0 - currentScrollTop ) + 'px';
	// 		}
	// 	} 
	// 	else {

	// 		if ( currentScrollTop > 130) {

	// 			nav.addClass('transition');
	// 			nav.removeClass('hidden');
	// 			nav[0].style.top = "0px"
			
	// 		} else {

	// 			var temp = parseInt(nav[0].style.top, 10);

	// 			if ( currentScrollTop < 90) {				
	// 			nav.removeClass('transition');
	// 			}

	// 			nav[0].style.top = (0 - currentScrollTop ) + 'px';			

	// 		};

	// 	};

	// 	lastScrollTop = currentScrollTop;
	// })

};

function displayHits(current, text) {

	var monthHitsData = {
		labels: [scdGl.text.all, scdGl.text.hits, scdGl.text.approved, scdGl.text.positiveList, scdGl.text.negativeList],
		datasets: [
		{
			label: scdGl.text.hits,
			fillColor: "#62A9F9",
			strokeColor: "#62A9F9",
			highlightFill: "#BEDCFD",
			highlightStroke: "#8ABFFB",
			data: [current.all, current.hits, current.approved, current.posList, current.negList]
		}
		]
	};

	//Load 	bar chart 
	var ctx2 = document.getElementById("monthHits").getContext("2d");
	window.barHits = new Chart(ctx2).Bar(monthHitsData);
};

function createTrendLegend(){

	var legendHolder1 = document.createElement('div');
	legendHolder1.innerHTML = window.lineTrend.generateLegend();
	document.getElementById('legendTrend').appendChild(legendHolder1.firstChild);

};


function displayTrend(current, sourceData, options, text){

	if ( options.type != scdGl.optionsLast.type) {
		//var trendData = getTrendData();
		var trendData = getTrendData(sourceData, options);

		var chartObj = initChartObj();

		var chartData = chartObj.initChartData().addTrendData(trendData);

		//Load 	Line chart for mothly trend
		var ctx1 = document.getElementById("monthTrend").getContext("2d");

		if (window.lineTrend) {
			window.lineTrend.destroy();
		};
			
		window.lineTrend = new Chart(ctx1).Line(chartData, {
			//String - A legend template
			legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li style=\"display: list-item;\"><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

		});

	};


	function initChartObj(){

		var chartObj = {

			initChartData: function () {
			
				this.chartData = {
					labels: [],
					datasets: [
					{
						label: scdGl.text.all,
						fillColor: "rgba(220,220,220,0.2)",
						strokeColor: "rgba(220,220,220,1)",
						pointColor: "rgba(220,220,220,1)",
						pointStrokeColor: "#fff",
						pointHighlightFill: "#fff",
						pointHighlightStroke: "rgba(220,220,220,1)",
						data: []
					},

					{
						label: scdGl.text.hits,
						fillColor: "#FFE6BD",
						strokeColor: "#FFDA87",
						pointColor: "#FFDA87",
						pointStrokeColor: "#fff",
						pointHighlightFill: "#fff",
						pointHighlightStroke: "#FFDA87",
						data: []


					},
					{
						label: scdGl.text.approved,
						fillColor: "#C5E89F",
						strokeColor: "#9CC96B",
						pointColor: "#9CC96B",
						pointStrokeColor: "#fff",
						pointHighlightFill: "#fff",
						pointHighlightStroke: "#9CC96B",
						data: []

					},
					{
						label: scdGl.text.positiveList,
						fillColor: "#8ABFFB",
						strokeColor: "#62A9F9",
						pointColor: "#62A9F9",
						pointStrokeColor: "#fff",
						pointHighlightFill: "#fff",
						pointHighlightStroke: "#62A9F9",
						data: []
					},
					{
						label: scdGl.text.negativeList,
						fillColor: "#FF8689",
						strokeColor: "#FF5A5E",
						pointColor: "#FF5A5E",
						pointStrokeColor: "#fff",
						pointHighlightFill: "#fff",
						pointHighlightStroke: "#FF5A5E",
						data: []
					}

					]
				};

				return this;
			},

			addTrendData: function (trendData) {				


				for (var i = trendData.length - 1; i >= 0; i--) {
					
					this.chartData.labels.push(trendData[i].date.trim());
					this.chartData.datasets[0].data.push(trendData[i].all);
					this.chartData.datasets[1].data.push(trendData[i].hits);
					this.chartData.datasets[2].data.push(trendData[i].approved);
					this.chartData.datasets[3].data.push(trendData[i].posList);
					this.chartData.datasets[4].data.push(trendData[i].negList);

				}

				return this.chartData;
			}
		};

		return chartObj;

	};

	function getTrendData(data, options) {
		
		var trendData = [];

			for (var f = 0; f < data.length; f++) {
				
				for (var g = data[f].splData.length - 1; g >= 0; g--) {
					
					if (data[f].splData[g].lgreg === options.lgreg ){

						// console.log( data[i].screenings[f].splData[g][options.type] );

						if (data[f].splData[g][options.type]) {

						var screening = {};

						screening.all = data[f].splData[g][options.type].all;
						screening.hits = data[f].splData[g][options.type].hits;
						screening.approved = data[f].splData[g][options.type].approved;
						screening.posList = data[f].splData[g][options.type].posList;
						screening.negList = data[f].splData[g][options.type].negList;
						screening.date = scdGl.sourceData[f].date 	   ;

						trendData.push(screening);

						};
						
						break;
					};

				};
					
			};

			return trendData;
	};

};

function atBpChange(value) {

	scdGl.options.type = value;

	scdGl.optionsLast.type = value;

	scdGl.current = selectCurrent(scdGl.sourceData, scdGl.options);

	updateGraphs(scdGl.current);
};

function atLgregChange(value) {

	scdGl.optionsLast = scdGl.options;

	scdGl.options = createSelectOptions(scdGl.optionsLast, scdGl.sourceData, scdGl.options.date, value);

	scdGl.current = selectCurrent(scdGl.sourceData, scdGl.options);

	updateGraphs(scdGl.current);

};

function atDateChange(value) {

	scdGl.optionsLast = scdGl.options;

	scdGl.options = createSelectOptions(scdGl.optionsLast, scdGl.sourceData, value);

	scdGl.current = selectCurrent(scdGl.sourceData, scdGl.options);

	updatescreeningInfo(scdGl.current, scdGl.text);

	updateGraphs(scdGl.current);

};

function createSelectOptions( optionsLast, sourceData, date, lgreg) {
	
	var options = {};
	var dateLevel   = 0;
	var lgregLevel = 0;
	
	// screening Date select option
	if (!date){ var appendDate = initEl('uploadDate');}	

	for (var i = 0; i < sourceData.length; i++) {

		if (sourceData[i].date === date){ dateLevel = i};

		if (!date){appendDate(sourceData[i].date, date);}	
	
	};

	options.date = sourceData[dateLevel].date;	


	// lgreg Select Option
	if (!lgreg){var appendLgreg = initEl('lgreg');}

	for (var i = 0; i < sourceData[dateLevel].splData.length; i++) {

		if (sourceData[dateLevel].splData[i].lgreg === lgreg){ lgregLevel = i};
		//create sourceData select option
		if (!lgreg){appendLgreg(sourceData[dateLevel].splData[i].lgreg, lgreg);}
	
	};

	options.lgreg = sourceData[dateLevel].splData[lgregLevel].lgreg;

	// append business partner type
	var appendBp = initEl('bp');

	switch(optionsLast.type) {
    case 'Customer':

        if (sourceData[dateLevel].splData[lgregLevel].Customer) {			

			appendBp('Customer', 'Selected');

			options.type = 'Customer';			

		} else {

			options.type = 'Vendor';
		};

		if (sourceData[dateLevel].splData[lgregLevel].Vendor) {

			appendBp('Vendor');
		};

        break;

    case 'Vendor':

        if (sourceData[dateLevel].splData[lgregLevel].Vendor) {			

			appendBp('Vendor', 'Selected');

			options.type = 'Vendor';			

		} else {

			options.type = 'Customer';
		};

		if (sourceData[dateLevel].splData[lgregLevel].Customer) {

			appendBp('Customer');
		};

        break;
    
    default: 

		if (sourceData[dateLevel].splData[lgregLevel].Customer) {			

			appendBp('Customer');

			options.type = 'Customer';			

		} else {

			options.type = 'Vendor';
		};


		if (sourceData[dateLevel].splData[lgregLevel].Vendor) {

			appendBp('Vendor');
		};
	};

	// if (sourceData[dateLevel].splData[lgregLevel].Vendor && 
	// 	sourceData[dateLevel].splData[lgregLevel].Customer) {

	// 	appendBp('all');
	// };

	return options;

	function initEl(id){

		var sel = document.getElementById(id);

		while (sel.hasChildNodes()) {   
    		sel.removeChild(sel.firstChild);
		};

		return function (value, selected) {
			
			var el = document.createElement("option");

			if (selected) {el.selected = 'selected';};

			el.textContent = value;
			el.value = value;
			sel.appendChild(el);	
		};
	};
};

// function atFtoChange(value) {
	
// 	scdGl.options = createSelectOptions(scdGl.sourceData, value);

// 	scdGl.current = selectCurrent(scdGl.sourceData, scdGl.options);

// 	updatescreeningInfo(scdGl.current, scdGl.text);

// 	updateGraphs(scdGl.current);

// };

function updateGraphs(current) {
	
	//update risk countries
	setRisk( 'first', current.firstName, current.firstPercentage );
	setRisk( 'second', current.secondName, current.secondPercentage );
	setRisk( 'third', current.thirdName, current.thirdPercentage );

	window.polarRisk.segments[0].value =  current.firstPercentage;				
	window.polarRisk.segments[0].label =  current.firstName;	
	
	window.polarRisk.segments[1].value =  current.secondPercentage;				
	window.polarRisk.segments[1].label =  current.secondName;

	window.polarRisk.segments[2].value =  current.thirdPercentage;				
	window.polarRisk.segments[2].label =  current.thirdName;	


	window.polarRisk.update();

	//update comparison area
	updateComparison(current, scdGl.text)

	//update hits bar graph
	window.barHits.datasets[0].bars[0].value = current.all;
	window.barHits.datasets[0].bars[1].value = current.hits;
	window.barHits.datasets[0].bars[2].value = current.approved;
	window.barHits.datasets[0].bars[3].value = current.posList;
	window.barHits.datasets[0].bars[4].value = current.negList;

	window.barHits.update();


	// update translation
	window.myPieChart.segments[0].value = current.invalidTranslation;
	window.myPieChart.segments[1].value = current.noTranslation;
	window.myPieChart.segments[2].value = current.validTranslation;

	window.myPieChart.update();

	displayPersonResponsible(current.personResponsible);

	displayReasons( current.reasons );


	//update trend
	displayTrend(current, scdGl.sourceData, scdGl.options, scdGl.text);

};

function selectCurrent(data, options){

	var current = {};

	for (var f = 0; f < data.length; f++) {
	//for (var f = data.length - 1; f >= 0; f--) {
		
		if (data[f].date === options.date) {

			for (var g = data[f].splData.length - 1; g >= 0; g--) {
				
				if (data[f].splData[g].lgreg === options.lgreg ){

					// console.log( data[f].splData[g][options.type] );

					current = set_bp( f, g, options.type );

					current.date 		  = scdGl.sourceData[f].date ;
					current.created       = scdGl.sourceData[f].created ;
					current.updated       = scdGl.sourceData[f].updated ;
					current.createdAvg    = scdGl.sourceData[f].createdAvg  ;
					current.updatedAvg    = scdGl.sourceData[f].updatedAvg  ;
					current.scrNum 		  = scdGl.sourceData.length ;
					
					if ( scdGl.sourceData.length > f + 1) {
						
						current.createdLast   = scdGl.sourceData[f+1].created ;
						current.updatedLast   = scdGl.sourceData[f+1].updated ;
						current.dateLast   	  = scdGl.sourceData[f+1].date ;
					
					} else {

						current.createdLast   =	NaN;
						current.updatedLast   =	NaN;
						current.dateLast   	  = false;
					};

					console.log(current);

					break;
				};

			};

			break;
		};
	};

	return current;

	function set_bp(date, lgreg, bp) {
		
		var curr = scdGl.sourceData[date].splData[lgreg][bp]

		if (scdGl.sourceData.length > date + 1 && 
			scdGl.sourceData[date + 1].splData[lgreg] &&
			scdGl.sourceData[date + 1].splData[lgreg][bp] &&
			scdGl.sourceData[date + 1].splData[lgreg].lgreg === scdGl.sourceData[date].splData[lgreg].lgreg
			) {

			var bp = scdGl.sourceData[date + 1].splData[lgreg][bp]			

			curr.hitsLast		= bp.hits;	
			curr.approvedLast	= bp.approved;
			curr.posListLast	= bp.posList;
			curr.negListLast	= bp.negList;

		} else {

			curr.hitsLast		= NaN;	
			curr.approvedLast	= NaN;
			curr.posListLast	= NaN;
			curr.negListLast	= NaN;

		};

		return curr;
	};
};

// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
	$('#scroll-top').on('click', function(event) {

	       $('html, body').animate({
	            scrollTop: 0
	        }, duration);
	});
};