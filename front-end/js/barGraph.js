var color = ['255, 99, 132', '54, 162, 235', '255, 206, 86', '75, 192, 192', '153, 102, 255'];

$(document).ready(function(){
	$.ajax({
		url: "/front-end/analytics/data.php",
		method: "GET",
		success: function(data) {
			console.log(data);
			var item = [];
			var would = [];
			
			//
        	var borderColors = [];
        	var backgroundColors = [];
        	
        	for (var i=0; i<color.length; i++) {
        		backgroundColors.push("rgba(" + color[i] + ", 0.2)");
        		borderColors.push("rgba(" +color[i] + ", 1.0)");
        	}
            
            // calculate two values : (result) = (wouldPurchase) - (wouldRemove)
			for(var i in data) {
				item.push(data[i].name);
							var first = data[i].wouldPurchase;
							var second = data[i].wouldRemove;
							
				 first = parseFloat(first.replace(',','')); 
				 console.log(first); 
				 
				 var total = (first - second);
				 console.log(total); 
				would.push(total);
			}
			
			//chart data
			var chartdata = {
				labels: item,
				datasets : [
					{
						label: '# of Votes',
        				backgroundColor: backgroundColors,
        				borderColor: borderColors,
        				borderWidth: 1,
						data: would
					}
				]
			};
			//option 
				    var options = {
				        responsive: true,
				        title: {
				            display: true,
				            position: "top",
				            text: "Item Popularity ('most common' - 'least common')",
				            fontSize: 18,
				            fontColor: "#111"
				        },
				        legend: {
				            display: true,
				            position: "bottom",
				            labels: {
				                fontColor: "#333",
				                fontSize: 16
				        }
    					 }
					   };
					   

			var ctx = $("#barGraph1");

			var barGraph = new Chart(ctx, {
				type: 'bar',
				data: chartdata,
				options: options
			});
		},
		error: function(data) {
			console.log(data);
		}
	});
});