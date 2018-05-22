

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

// =========== Verifié les champs contacts ====================

function surligne(champ, erreur)
{
   if(erreur)
      champ.style.backgroundColor = "#fba";
   else
      champ.style.backgroundColor = "";
}


			// ===verifié Nom===

function verifNom(champ)
{
   if(champ.value.length < 2 || champ.value.length > 20)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

			// ===verifié Prenom===

function verifPrenom(champ)
{
   if(champ.value.length < 2 || champ.value.length > 20)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

			// ===verifié Numero===

function verifNum(champ)
{
   var num = parseInt(champ.value);
   if(isNaN(num) || champ.value.length < 10 || champ.value.length < 10)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

// ===verifié le tout===

function verifForm(f)
{
   var nomOk = verifNom(f.name);
   var prenomOk = verifPrenom(f.firstname);
   var numOk = verifNum(f.phone_number);

   if(nomOk && prenomOk && numOk)
      return true;
   else
   {
      alert("Veuillez remplir correctement tous les champs");
      return false;
   }
}
