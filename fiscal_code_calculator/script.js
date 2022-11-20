/*
 * List of municipal codes:
 * https://www1.agenziaentrate.gov.it/servizi/codici/ricerca/VisualizzaTabella.php?ArcName=COM-ICI
*/

municipal_codes = {
	"AIELLO DEL FRIULI": "A103",
	"AMARO": "A254",
	"AMPEZZO": "A267",
	"AQUILEIA": "A346",
	"ARTA TERME": "A447",
	"ARTEGNA": "A448",
	"ATTIMIS": "A491",
	"BAGNARIA ARSA": "A553",
	"BASILIANO": "A700",
	"BERTIOLO": "A810",
	"BICINICCO": "A855",
	"BORDANO": "A983",
	"BUJA": "B259",
	"BUTTRIO": "B309",
	"CAMINO AL TAGLIAMENTO": "B483",
	"CAMPOFORMIDO": "B536",
	"CAMPOLONGO TAPOGLIANO": "M311",
	"CARLINO": "B788",
	"CASSACCO": "B994",
	"CASTIONS DI STRADA": "C327",
	"CAVAZZO CARNICO": "C389",
	"CERCIVENTO": "C494",
	"CERVIGNANO DEL FRIULI": "C556",
	"CHIOPRIS-VISCONE": "C641",
	"CHIOPRIS VISCONE": "C641",
	"CHIUSAFORTE": "C656",
	"CIVIDALE DEL FRIULI": "C758",
	"CODROIPO": "C817",
	"COLLOREDO DI MONTE ALBANO": "C885",
	"COMEGLIANS": "C918",
	"CORNO DI ROSAZZO": "D027",
	"COSEANO": "D085",
	"DIGNANO": "D300",
	"DOGNA": "D316",
	"DRENCHIA": "D366",
	"ENEMONZO": "D408",
	"FAEDIS": "D455",
	"FAGAGNA": "D461",
	"FIUMICELLO VILLA VICENTINA": "M400",
	"FLAIBANO": "D630",
	"FORGARIA NEL FRIULI": "D700",
	"FORNI AVOLTRI": "D718",
	"FORNI DI SOPRA": "D719",
	"FORNI DI SOTTO": "D720",
	"GEMONA DEL FRIULI": "D962",
	"GONARS": "E085",
	"GRIMACCO": "E179",
	"LATISANA": "E473",
	"LAUCO": "E476",
	"LESTIZZA": "E553",
	"LIGNANO SABBIADORO": "E584",
	"LUSEVERA": "E760",
	"MAGNANO IN RIVIERA": "E820",
	"MAJANO": "E833",
	"MALBORGHETTO VALBRUNA": "E847",
	"MALBORGHETTO-VALBRUNA": "E847",
	"MANZANO": "E899",
	"MARANO LAGUNARE": "E910",
	"MARTIGNACCO": "E982",
	"MERETO DI TOMBA": "F144",
	"MOGGIO UDINESE": "F266",
	"MOIMACCO": "F275",
	"MONTENARS": "F574",
	"MORTEGLIANO": "F756",
	"MORUZZO": "F760",
	"MUZZANA DEL TURGNANO": "F832",
	"NIMIS": "F898",
	"OSOPPO": "G163",
	"OVARO": "G198",
	"PAGNACCO": "G238",
	"PALAZZOLO DELLO STELLA": "G268",
	"PALMANOVA": "G284",
	"PALUZZA": "G300",
	"PASIAN DI PRATO": "G352",
	"PAULARO": "G381",
	"PAVIA DI UDINE": "G389",
	"POCENIA": "G743",
	"PONTEBBA": "G831",
	"PORPETTO": "G891",
	"POVOLETTO": "G949",
	"POZZUOLO DEL FRIULI": "G966",
	"PRADAMANO": "G969",
	"PRATO CARNICO": "H002",
	"PRECENICCO": "H014",
	"PREMARIACCO": "H029",
	"PREONE": "H038",
	"PREPOTTO": "H040",
	"PULFERO": "H089",
	"RAGOGNA": "H161",
	"RAVASCLETTO": "H196",
	"RAVEO": "H200",
	"REANA DEL ROJALE": "H206",
	"REMANZACCO": "H229",
	"RESIA": "H242",
	"RESIUTTA": "H244",
	"RIGOLATO": "H289",
	"RIVE D'ARCANO": "H347",
	"RIVIGNANO TEOR": "M317",
	"RONCHIS": "H533",
	"RUDA": "H629",
	"SAN DANIELE DEL FRIULI": "H816",
	"SAN GIORGIO DI NOGARO": "H895",
	"SAN GIOVANNI AL NATISONE": "H906",
	"SAN LEONARDO": "H951",
	"SAN PIETRO AL NATISONE": "I092",
	"SAN VITO AL TORRE": "I404",
	"SAN VITO DI FAGAGNA": "I405",
	"SANTA MARIA LA LONGA": "I248",
	"SAPPADA": "I421",
	"SAURIS": "I464",
	"SAVOGNA": "I478",
	"SEDEGLIANO": "I562",
	"SOCCHIEVE": "I777",
	"STREGNA": "I974",
	"SUTRIO": "L018",
	"TAIPANA": "G736",
	"TALMASSONS": "L039",
	"TARCENTO": "L050",
	"TARVISIO": "L057",
	"TAVAGNACCO": "L065",
	"TERZO D'ACQUILEIA": "L144",
	"TERZO DI ACQUILEIA": "L144",
	"TOLMEZZO": "L195",
	"TORREANO": "L246",
	"TORVISCOSA": "L309",
	"TRASAGHIS": "L335",
	"TREPPO GRANDE": "L382",
	"TREPPO LIGOSULLO": "M399",
	"TRICESIMO": "L421",
	"TRIVIGNANO UDINESE": "L438",
	"UDINE": "L483",
	"VARMO": "L686",
	"VENZONE": "L743",
	"VERZEGNIS": "L801",
	"VILLA SANTINA": "L909",
	"VISCO": "M073",
	"ZUGLIO": "M200"
}

const vowels = ["A", "E", "I", "O", "U"]
const month_list = ["A", "B", "C", "D", "E", "H", "L", "M", "P", "R", "S", "T"];
const char_list = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const consonants_values = [1, 0, 5, 7, 9, 13, 15, 17, 19, 21, 1, 0, 5, 7, 9, 13, 15, 17, 19, 21, 2, 4, 18, 20, 11, 3, 6, 8, 12, 14, 16, 10, 22, 25, 24, 23];
const vowels_values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

function calculate() {
	// clear output box
	document.getElementById("result").value = "";
	
	// get values from page inputs
	var name = document.getElementById("name").value.toUpperCase();
	if(name == "") {alert("You must also indicate the name."); return;}
	
	var surname = document.getElementById("surname").value.toUpperCase();
	if(surname == "") {alert("You must also indicate the surname."); return;}
	
	var birth_place = document.getElementById("birth_place").value.toUpperCase();
	if(birth_place == "") {alert("You must also indicate the birth place."); return;}
	
	var sex = document.getElementById("sex").value;
	
	var date = new Date(document.getElementById("birth_date").value);
	if(!isValidDate(date)) {alert("You must also indicate the birth date."); return;}
	
	// calculate fiscal code
	surname = getFirstThreeConsonants(surname, false);
	
	name = getFirstThreeConsonants(name, true);
	
	var year = date.getFullYear().toString().substring(2);
	
	var month = month_list[date.getMonth().toString()];
	
	var day = date.getDate();
	if(sex == "F") {
		day = (day + 40).toString();
	}
	else if(day < 10) {
		day = "0" + day.toString();
	}
	
	birth_place = municipal_codes[birth_place];
	var known_place = true;
	if(typeof birth_place == "undefined") {known_place = false; birth_place = "-----";}
	
	var fiscal_code = surname + name + year + month + day + birth_place;
	if(known_place == true) {fiscal_code += char_list[10 + (sumOddCharacters(fiscal_code) + sumEvenCharacters(fiscal_code)) % 26];}
	
	// write fiscal code in output box
	document.getElementById("result").value = fiscal_code;
}

// function to get string length
function getCharacterLength(string) {
	return [...string].length;
}

// function to check if date is valid
function isValidDate(date) {
	return date instanceof Date && !isNaN(date);
}

// function to get a string with the first 3 consonants (or vowels if no more consonants)
function getFirstThreeConsonants(string, check_skip) {
	string = string.replace(/\s+/g, "");
	var length = getCharacterLength(string);
	var string1 = "";
	var counter = 0;
	var consonants = 0;
	var skip_second = false;
	
	if(check_skip == true) {
		for(let i = 0; i < length; i++) {
			if(!vowels.includes(string[i])) {consonants += 1;}
		}
		if(consonants > 3) {var skip_second = true;}
	}
	
	for(let i = 0; i < length * 2; i++) {
		if(i < length && !vowels.includes(string[i])) {
			if(skip_second == true && counter == 1) {skip_second = false; continue;}
			
			string1 += string[i];
			counter += 1;
		}
		else if(i >= length && vowels.includes(string[i - length])) {
			string1 += string[i - length];
			counter += 1;
		}
		
		if(counter == 3) {break;}
	}
	
	length = getCharacterLength(string1);
	if(length < 3) {
		for(let i = 0; i < 3 - length; i++) {
			string1 += "X";
		}
	}
	
	return string1;
}

// function to associate a value to the odd characters
function sumOddCharacters(string) {
	var sum = 0;
	
	for(let i = 0; i < getCharacterLength(string); i += 2) {
		sum += consonants_values[char_list.indexOf(string[i])];
	}
	
	return sum;
}

// function to associate a value to the even characters
function sumEvenCharacters(string) {
	var sum = 0;
	
	for(let i = 1; i < getCharacterLength(string); i += 2) {
		sum += vowels_values[char_list.indexOf(string[i])];
	}
	
	return sum;
}
