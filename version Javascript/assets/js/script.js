

//=========  Sélection de la div à afficher ======//

var select = document.getElementById("choix_options");

select.addEventListener("change", event => {
	for ( var item of select){	
		if (select.selectedIndex == "1"){ 
			option0.style.display = 'none';
			option1.style.display = 'block';
			option2.style.display = 'none';
			option3.style.display = 'none';
		}
		else if (select.selectedIndex == "2"){
			option0.style.display = 'none';
			option1.style.display = 'none';
			option2.style.display = 'block';
			option3.style.display = 'none'; 			
		}
		else if (select.selectedIndex == "3"){
			option0.style.display = 'none';
			option1.style.display = 'none';
			option2.style.display = 'none';
			option3.style.display = 'block';
		}
		else {
			option0.style.display = 'block';
			option1.style.display = 'none';
			option2.style.display = 'none';
			option3.style.display = 'none';
		}
	}
});	


//========= Stocker et afficher nombre total de contacts==========//

var nbtot = document.getElementById('option1').childElementCount-1;

document.getElementById('nbtotal').textContent = nbtot;


