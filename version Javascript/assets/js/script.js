

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


//==================================
var almanach = new Array();
almanach[0] = {"name" : "Bismuth", "firstname" : "Paul", "phone_number" : "0648528998"}
almanach[1] = {"name" : "Dupont", "firstname" : "Dupond", "phone_number" : "0976543258"}
almanach[2] = {"name" : "XIV", "firstname" : "Louis", "phone_number" : "0600000000"}


var data_contact_vide = {"name" : "", "firstname" : "", "phone_number":""}

function getNewContact() {
	var nameField = document.getElementById("get_name").value;
	var firstnameField = document.getElementById("get_firstname").value;
	var phone_numberField = document.getElementById("get_phone_number").value;

	var data_contact_remplie = data_contact_vide;

	data_contact_remplie.name = nameField;
	data_contact_remplie.firstname = firstnameField;
	data_contact_remplie.phone_number = phone_numberField;
	almanach.push(data_contact_remplie);
console.log(almanach[0].name);
  //document.getElementById(nom_prenom).textContent = almanach[0].name;
}

var bouton = document.getElementById('button');
bouton.addEventListener('click', getNewContact, false);



// =========== Verifié les champs contacts ====================

// function surligne(erreur)
// {
//    if(erreur)
//       champ.style.backgroundColor = "#fba";
//    else
//       champ.style.backgroundColor = "";
// }
//
//
// 			// ===verifié Nom===
//
// function verifChamp()
// {
//
//    if(champ.value.length < 2 || champ.value.length > 20)
//    {
//       surligne(champ, true);
//       return false;
//    }
//    else
//    {
//       surligne(champ, false);
//       return true;
//    }
// }

			// ===verifié Prenom===

// function verifPrenom(champ)
// {
//    if(champ.value.length < 2 || champ.value.length > 20)
//    {
//       surligne(champ, true);
//       return false;
//    }
//    else
//    {
//       surligne(champ, false);
//       return true;
//    }
// }
//
// 			// ===verifié Numero===
//
// function verifNum(champ)
// {
//    var num = parseInt(champ.value);
//    if(isNaN(num) || champ.value.length < 10 || champ.value.length > 10)
//    {
//       surligne(champ, true);
//       return false;
//    }
//    else
//    {
//       surligne(champ, false);
//       return true;
//    }
// }
//
// // ===verifié le tout===
//
// function verifForm(f)
// {
//    var nomOk = verifNom(f.name);
//    var prenomOk = verifPrenom(f.firstname);
//    var numOk = verifNum(f.phone_number);
//
//    if(nomOk && prenomOk && numOk)
//       return true;
//    else
//    {
//       alert("Veuillez remplir correctement tous les champs");
//       return false;
//    }
// }


// =========================
