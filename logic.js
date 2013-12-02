// State data
var state_stats = {
"AL":{"population":"4822023","population_change":"18334","population_commute_change":"-35548","internet_users":"4448630","political_contributions_democrat":"661643","political_contributions_republican":"3014154"},
"AK":{"population":"731449","population_change":"7589","population_commute_change":"6398","internet_users":"664369","political_contributions_democrat":"246967","political_contributions_republican":"315889"},
"AZ":{"population":"6553255","population_change":"85940","population_commute_change":"-24202","internet_users":"6336222","political_contributions_democrat":"2105604","political_contributions_republican":"2969442"},
"AR":{"population":"2949131","population_change":"10549","population_commute_change":"4322","internet_users":"2707740","political_contributions_democrat":"1619996","political_contributions_republican":"2308495"},
"CA":{"population":"38041430","population_change":"357497","population_commute_change":"432","internet_users":"35459347","political_contributions_democrat":"26937845","political_contributions_republican":"17613206"},
"CO":{"population":"5187582","population_change":"71280","population_commute_change":"-10474","internet_users":"4851790","political_contributions_democrat":"3443308","political_contributions_republican":"3305575"},
"CT":{"population":"3590347","population_change":"3630","population_commute_change":"-12793","internet_users":"3344322","political_contributions_democrat":"3435158","political_contributions_republican":"3654424"},
"DE":{"population":"917092","population_change":"8955","population_commute_change":"7615","internet_users":"849915","political_contributions_democrat":"684620","political_contributions_republican":"347576"},
"FL":{"population":"19317568","population_change":"235306","population_commute_change":"-44262","internet_users":"17777433","political_contributions_democrat":"7527562","political_contributions_republican":"10538587"},
"GA":{"population":"9919945","population_change":"107485","population_commute_change":"-676","internet_users":"9333957","political_contributions_democrat":"3137538","political_contributions_republican":"7216337"},
"HI":{"population":"1392313","population_change":"14184","population_commute_change":"725","internet_users":"1209661","political_contributions_democrat":"2131931","political_contributions_republican":"160467"},
"ID":{"population":"1595728","population_change":"11984","population_commute_change":"-15698","internet_users":"1474991","political_contributions_democrat":"175831","political_contributions_republican":"486917"},
"IL":{"population":"12875255","population_change":"15503","population_commute_change":"-7110","internet_users":"12280267","political_contributions_democrat":"8017830","political_contributions_republican":"9475617"},
"IN":{"population":"6537334","population_change":"20981","population_commute_change":"-56845","internet_users":"6120703","political_contributions_democrat":"1051747","political_contributions_republican":"3286710"},
"IA":{"population":"3074186","population_change":"10089","population_commute_change":"-1386","internet_users":"2881325","political_contributions_democrat":"958132","political_contributions_republican":"997239"},
"KS":{"population":"2885905","population_change":"15519","population_commute_change":"12538","internet_users":"2653452","political_contributions_democrat":"552491","political_contributions_republican":"2326280"},
"KY":{"population":"4380415","population_change":"13601","population_commute_change":"14702","internet_users":"4132660","political_contributions_democrat":"895024","political_contributions_republican":"2327064"},
"LA":{"population":"4601893","population_change":"27127","population_commute_change":"16743","internet_users":"4282468","political_contributions_democrat":"1122888","political_contributions_republican":"3164504"},
"ME":{"population":"1329192","population_change":"648","population_commute_change":"-14098","internet_users":"1252087","political_contributions_democrat":"384039","political_contributions_republican":"420043"},
"MD":{"population":"5884563","population_change":"44991","population_commute_change":"-275595","internet_users":"5440487","political_contributions_democrat":"6498548","political_contributions_republican":"3199285"},
"MA":{"population":"6646144","population_change":"39141","population_commute_change":"66391","internet_users":"6341368","political_contributions_democrat":"10182580","political_contributions_republican":"5350169"},
"MI":{"population":"9883360","population_change":"6559","population_commute_change":"-41581","internet_users":"9437656","political_contributions_democrat":"3614327","political_contributions_republican":"4538923"},
"MN":{"population":"5379139","population_change":"31840","population_commute_change":"18732","internet_users":"5062549","political_contributions_democrat":"2685710","political_contributions_republican":"4131861"},
"MS":{"population":"2984926","population_change":"7469","population_commute_change":"-43816","internet_users":"2772016","political_contributions_democrat":"150328","political_contributions_republican":"1337925"},
"MO":{"population":"6021988","population_change":"13004","population_commute_change":"46135","internet_users":"5686304","political_contributions_democrat":"1276658","political_contributions_republican":"4468305"},
"MT":{"population":"1005141","population_change":"7474","population_commute_change":"-985","internet_users":"933067","political_contributions_democrat":"262439","political_contributions_republican":"568619"},
"NE":{"population":"1855525","population_change":"13291","population_commute_change":"17307","internet_users":"1693674","political_contributions_democrat":"284837","political_contributions_republican":"843118"},
"NV":{"population":"2758931","population_change":"38903","population_commute_change":"14627","internet_users":"2518723","political_contributions_democrat":"653335","political_contributions_republican":"1658466"},
"NH":{"population":"1320718","population_change":"2911","population_commute_change":"-40852","internet_users":"1273336","political_contributions_democrat":"792390","political_contributions_republican":"402290"},
"NJ":{"population":"8864590","population_change":"29817","population_commute_change":"-238670","internet_users":"8261355","political_contributions_democrat":"6182693","political_contributions_republican":"2891905"},
"NM":{"population":"2085538","population_change":"6864","population_commute_change":"-5446","internet_users":"1942281","political_contributions_democrat":"1358444","political_contributions_republican":"370484"},
"NY":{"population":"19570261","population_change":"68645","population_commute_change":"318650","internet_users":"18637085","political_contributions_democrat":"20498840","political_contributions_republican":"11989887"},
"NC":{"population":"9752073","population_change":"100970","population_commute_change":"2336","internet_users":"9004785","political_contributions_democrat":"1861041","political_contributions_republican":"3665688"},
"ND":{"population":"699628","population_change":"14888","population_commute_change":"17985","internet_users":"611776","political_contributions_democrat":"157130","political_contributions_republican":"192841"},
"OH":{"population":"11544225","population_change":"3218","population_commute_change":"14326","internet_users":"10967068","political_contributions_democrat":"2042188","political_contributions_republican":"5655290"},
"OK":{"population":"3814820","population_change":"30657","population_commute_change":"-18903","internet_users":"3496046","political_contributions_democrat":"572440","political_contributions_republican":"2611758"},
"OR":{"population":"3899353","population_change":"31124","population_commute_change":"45512","internet_users":"3712951","political_contributions_democrat":"1111516","political_contributions_republican":"1022594"},
"PA":{"population":"12763536","population_change":"19588","population_commute_change":"-84783","internet_users":"12004026","political_contributions_democrat":"4208064","political_contributions_republican":"7013441"},
"RI":{"population":"1050292","population_change":"-354","population_commute_change":"-21804","internet_users":"1007538","political_contributions_democrat":"919772","political_contributions_republican":"247630"},
"SC":{"population":"4723723","population_change":"50375","population_commute_change":"-32214","internet_users":"4343696","political_contributions_democrat":"1200744","political_contributions_republican":"3371321"},
"SD":{"population":"833354","population_change":"9761","population_commute_change":"3697","internet_users":"777820","political_contributions_democrat":"118332","political_contributions_republican":"1183328"},
"TN":{"population":"6456243","population_change":"56456","population_commute_change":"39824","internet_users":"6056518","political_contributions_democrat":"1272194","political_contributions_republican":"5289651"},
"TX":{"population":"26059203","population_change":"427425","population_commute_change":"-17186","internet_users":"23863643","political_contributions_democrat":"7989549","political_contributions_republican":"20972567"},
"UT":{"population":"2855287","population_change":"40940","population_commute_change":"-667","internet_users":"2692961","political_contributions_democrat":"458455","political_contributions_republican":"603819"},
"VT":{"population":"626011","population_change":"-581","population_commute_change":"-3842","internet_users":"599310","political_contributions_democrat":"411932","political_contributions_republican":"66939"},
"VA":{"population":"8185867","population_change":"81483","population_commute_change":"-80492","internet_users":"7506440","political_contributions_democrat":"10790915","political_contributions_republican":"20629692"},
"WA":{"population":"6897012","population_change":"73745","population_commute_change":"-50348","internet_users":"6453315","political_contributions_democrat":"2592019","political_contributions_republican":"2292939"},
"WV":{"population":"1855413","population_change":"505","population_commute_change":"-20761","internet_users":"1748080","political_contributions_democrat":"346596","political_contributions_republican":"1083112"},
"WI":{"population":"5726398","population_change":"16555","population_commute_change":"-52736","internet_users":"5402260","political_contributions_democrat":"906970","political_contributions_republican":"2758702"},
"WY":{"population":"576412","population_change":"9056","population_commute_change":"7404","internet_users":"516717","political_contributions_democrat":"121529","political_contributions_republican":"425352"}
};

// Array of states user has selected
// Initiates with a null array
var selected_states = new Array();

// For formmating only - borrowed online
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Called to update metrics based on selected_states
function update_calculations() {

	// Loop through each HTML element that displays a metric (everything of the 'answer' class)
	$('.answer').each(function(){

		// Identify which of the HTML metrics .each is currently on
		var current_metric = $(this).attr('id');

		// Final output for current HTML metric
		var new_metric_value = 0;
		
		// Iterate through selected_states to calculate value for new_metric_value
		jQuery.each(selected_states, function(index,one_state_in_array){

			// eval automatically handles case when user has no states selected
			var value_for_one_state_user_selected = eval('state_stats.' + one_state_in_array + '.' + current_metric);
			
			new_metric_value+=parseInt(value_for_one_state_user_selected);

		});

		// Update HTML metric with value
		$(this).html(numberWithCommas(new_metric_value));
		
	});

};

// Click listener for each state
$('.state').click(function(){

	clicked_state = $(this).attr('id');

	// Check if clicked state has already been selected
	if(jQuery.inArray(clicked_state,selected_states)!= -1){

		// Run if clicked state is already selected		
		$(this).css('fill','#DFE2DB');

		// Since clicked_state has already been selected, remove it from selected_states
		selected_states = jQuery.grep(selected_states,
			function(value){
				return value != clicked_state;
			}
		);

		// Update metrics
		update_calculations();

	} else {

		// Run if clicked state has not yet been selected
		$(this).css('fill','#FFF056');

		// Since clicked_state has not yet been selected, add it to selected_states
		selected_states.push(clicked_state);

		// Update metrics
		update_calculations();

	}

});

