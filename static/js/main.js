

$(document).ready(function(){
	$("#stocktable").hide();
});

var tagToSearch;

$(function() {
	if($("#NASDAQ").attr("checked") == "checked")
	{
		tagToSearch=NASDAQTags;
	}

	else if($("#LSE").attr("checked") == "checked")
	{
		tagToSearch=LSETags;
	}

	else if($("#NYSE").attr("checked") == "checked")
	{
		tagToSearch=NYSETags;
	}

	$("#tags").autocomplete({source: tagToSearch});
	$("#tags").keydown(function(e){
		
		if (e.which == 13){
			var inputval = $("#tags").val()
			if (tagToSearch.indexOf(inputval) == -1){
				alert("Invalid value.  Please use the autocomplete feature\n")
				return
			}
			$("#stocktable").show()
			var ticker = inputval.split(" ")[0]
			$.ajax({
				url:"/query/"+ticker
			}).done(newtablerow)
		}
	})
	$("#search").click(function(){
		var inputval = $("#tags").val()
		if (tagToSearch.indexOf(inputval) == -1){
			alert("Invalid value.  Please use the autocomplete feature\n")
			return
		}
		$("#stocktable").show()
		var ticker = inputval.split(" ")[0]
		$.ajax({
			url:"/query/"+ticker
		}).done(newtablerow)
	})
});
$(function() {
	$("#NASDAQ").click(function()
	{
		tagToSearch=NASDAQTags;
		$( "#tags" ).autocomplete({source: tagToSearch});
	});

	$("#LSE").click(function()
	{
		tagToSearch=LSETags;
		$( "#tags" ).autocomplete({source: tagToSearch});
	});

	$("#NYSE").click(function()
	{
		tagToSearch=NYSETags;
		$( "#tags" ).autocomplete({source: tagToSearch});
	});
	
});

function newtablerow(obj){
	var compiled = _.template($("#tablerow").html(), obj)
	$("#stocktable").html($("#stocktable").html()+compiled)

}
