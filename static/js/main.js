
$(function() {
	$( "#tags" ).autocomplete({source: availableTags});
	// var stuff = [
	// ["TWTR", "$1", "poopoo"],
	// ["IUIBIUBIB", "$23", "IUHI"],
	// ["JKHKJH", "$56", "UGY"]]
	// stuff.forEach(function(e){
	// 	newtablerow(e[0], e[1], e[2])
	// })
	$("#tags").keydown(function(e){
		if (e.which == 13){
			var inputval = $("#tags").val()
			if (availableTags.indexOf(inputval) == -1){
				alert("Invalid value.  Please use the autocomplete feature\n")
				return
			}
			var ticker = inputval.split(" ")[0]
			$.ajax({
				url:"/query/"+ticker
			}).done(newtablerow)
		}
	})
});

function newtablerow(obj){
	var compiled = _.template($("#tablerow").html(), obj)
	$("#stocktable").html($("#stocktable").html()+compiled)

}