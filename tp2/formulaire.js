function validation(){
    var nom,prenom,error,resultat;
nom=document.getElementById("nom").value
prenom=document.getElementById("prenom").value
error=document.getElementById("error");
resultat=document.getElementById("resultat");
error.innerHTML=="";
resultat.innerHTML=="";
if (nom==""){
    resultat=document.getElementById("resultat").innerHTML="la saisie du nom est obligatoire" }

if (nom.length <= 5 ){		
    document.getElementById("error").innerHTML="le nom doit comporter au moins 5 caractères";
}
else{
    document.getElementById("resultat").innerHTML="Bienvenue "+prenom;
    
}
}
