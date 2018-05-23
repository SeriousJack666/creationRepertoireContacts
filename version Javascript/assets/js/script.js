

//____________Sélection de la div à afficher____________
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
		window.onload;
	}
});


//_______________Créer l'Almanach, oui, ce mot est cool__________
var almanach = new Array();

almanach[0] = {"name" : "Bismuth", "firstname" : "Paul", "phone_number" : "0648528998"}
almanach[1] = {"name" : "Dupont", "firstname" : "Dupond", "phone_number" : "0976543258"}
almanach[2] = {"name" : "XIV", "firstname" : "Louis", "phone_number" : "0600000000"}

//_______________Stocker inputs du nouveau contact_______________
var data_contact_vide = {"name" : "", "firstname" : "", "phone_number":""}

function getNewContact() {
    //__________ partie almanach_________
	var nameField = document.getElementById("get_name").value;
	var firstnameField = document.getElementById("get_firstname").value;
	var phone_numberField = document.getElementById("get_phone_number").value;

	var data_contact_remplie = data_contact_vide;

	data_contact_remplie.name = nameField;
	data_contact_remplie.firstname = firstnameField;
	data_contact_remplie.phone_number = phone_numberField;
	almanach.push(data_contact_remplie);
	console.log(almanach);

	//____________partie DOM______________
	
}

var bouton = document.getElementById('button');
bouton.addEventListener('click', getNewContact, false);


function addUl(i){
	ulistNode = document.getElementById('conteneur_uls'),
	ulNode = document.createElement("UL");	
	ulNode.setAttribute("id", "contact"+i);
	ulistNode.appendChild(ulNode);
}

function addLi1(i){

	var contact = almanach[i];

	var txtVal1 = contact.name,
		txtVal2 = contact.firstname,
		txtVal = txtVal1+" "+txtVal2;

	var listNode = document.getElementById('contact'+i),
		liNode = document.createElement("LI"),
		txtNode = document.createTextNode(txtVal);

	liNode.setAttribute('id', "noms_contact"+i)
	liNode.appendChild(txtNode);
	listNode.appendChild(liNode);

	return liNode;
}

function addLi2(i){

	var contact = almanach[i];

	var txtVal = contact.phone_number,
		listNode = document.getElementById('contact'+i),
		liNode = document.createElement("LI"),
		txtNode = document.createTextNode(txtVal);

	liNode.setAttribute('id', "num_contact"+i)
	liNode.appendChild(txtNode);
	listNode.appendChild(liNode);

	return liNode;
}


//_________Déploit l'almanach dans la liste des Contacts_______//
for ( var i=0; i < almanach.length; i++){
	
	addUl(i);
	var blaze = addLi1(i) ;
	ulNode.appendChild(blaze);
	var nUm = addLi2(i);
	ulNode.appendChild(nUm);
}

//________Stocker et afficher nombre total de contacts_______//

var nbtot = almanach.length;

document.getElementById('nbtotal').textContent = nbtot;


