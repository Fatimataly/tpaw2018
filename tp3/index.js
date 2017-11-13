$(function(){
	
	
	$( "#inputDate_naissance3" ).datepicker();

  $("#validate").click(function(){
	  if (($("#inputNom3").val() == " " )|| ($("#inputPrenom3").val() == " ") || ($("#inputDate_naissance3").val() == " ") || ($("#inputAdresse3").val() == " ") || ($("#inputMail3").val()=="")){		
		$(".modal-body").html("Veuillez remplir tous les champs svp");
		
		$(".modal").modal("show");
	
	  }
	  else{
		  $(".modal-title").html("Bienvenue   " + $("#inputPrenom3").val() );
		$(".modal-body").html("vous etes nés le   " + $("#inputDate_naissance3").val()  + " et  vous habitez  " 
		+ "<img src='https://maps.googleapis.com/maps/api/staticmap?center=" + $("#inputAdresse3").val() + "&markers="+$("#inputAdresse3").val()+"&size=300x300'/><br>"  +  $("#inputAdresse3").val() );
		
	
		$(".modal").modal("show");
		
}
  }
);

}); 