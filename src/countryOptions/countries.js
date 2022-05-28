const timeZone = [
    {
      timezones: ["Asia/Kabul"],
      name: "Afghanistan",
      country_code: "AF",
      capital: "Kabul"
    },
    {
      timezones: ["Europe/Tirane"],
      name: "Albania",
      country_code: "AL",
      capital: "Tirana"
    },
    {
      timezones: ["Europe/Andorra"],
      name: "Andorra",
      country_code: "AD",
      capital: "Andorra la Vella"
    },
    {
      timezones: ["Asia/Dubai"],
      name: "United Arab Emirates",
      country_code: "AE",
      capital: "Abu Dhabi"
    },
    {
      timezones: [
        "America/Argentina/Buenos_Aires",
        "America/Argentina/Cordoba",
        "America/Argentina/Salta",
        "America/Argentina/Jujuy",
        "America/Argentina/Tucuman",
        "America/Argentina/Catamarca",
        "America/Argentina/La_Rioja",
        "America/Argentina/San_Juan",
        "America/Argentina/Mendoza",
        "America/Argentina/San_Luis",
        "America/Argentina/Rio_Gallegos",
        "America/Argentina/Ushuaia"
      ],
      name: "Argentina",
      country_code: "AR",
      capital: "Buenos Aires"
    },
    {
      timezones: ["Asia/Yerevan"],
      name: "Armenia",
      country_code: "AM",
      capital: "Yerevan"
    },
    {
      timezones: ["Pacific/Pago_Pago"],
      name: "American Samoa",
      country_code: "AS",
      capital: "Pago Pago"
    },
    {
      timezones: ["Indian/Kerguelen"],
      name: "French Southern and Antarctic Lands",
      country_code: "TF",
      capital: "Port-aux-Français"
    },
    {
      timezones: ["America/Antigua"],
      name: "Antigua and Barbuda",
      country_code: "AG",
      capital: "Saint John's"
    },
    {
      timezones: [
        "Australia/Lord_Howe",
        "Antarctica/Macquarie",
        "Australia/Hobart",
        "Australia/Currie",
        "Australia/Melbourne",
        "Australia/Sydney",
        "Australia/Broken_Hill",
        "Australia/Brisbane",
        "Australia/Lindeman",
        "Australia/Adelaide",
        "Australia/Darwin",
        "Australia/Perth",
        "Australia/Eucla"
      ],
      name: "Australia",
      country_code: "AU",
      capital: "Canberra"
    },
    {
      timezones: ["Europe/Vienna"],
      name: "Austria",
      country_code: "AT",
      capital: "Vienna"
    },
    {
      timezones: ["Asia/Baku"],
      name: "Azerbaijan",
      country_code: "AZ",
      capital: "Baku"
    },
    {
      timezones: ["Africa/Bujumbura"],
      name: "Burundi",
      country_code: "BI",
      capital: "Bujumbura"
    },
    {
      timezones: ["Europe/Brussels"],
      name: "Belgium",
      country_code: "BE",
      capital: "Brussels"
    },
    {
      timezones: ["Africa/Porto-Novo"],
      name: "Benin",
      country_code: "BJ",
      capital: "Porto-Novo"
    },
    {
      timezones: ["Africa/Ouagadougou"],
      name: "Burkina Faso",
      country_code: "BF",
      capital: "Ouagadougou"
    },
    {
      timezones: ["Asia/Dhaka"],
      name: "Bangladesh",
      country_code: "BD",
      capital: "Dhaka"
    },
    {
      timezones: ["Europe/Sofia"],
      name: "Bulgaria",
      country_code: "BG",
      capital: "Sofia"
    },
    {
      timezones: ["Asia/Bahrain"],
      name: "Bahrain",
      country_code: "BH",
      capital: "Manama"
    },
    {
      timezones: ["America/Nassau"],
      name: "Bahamas",
      country_code: "BS",
      capital: "Nassau"
    },
    {
      timezones: ["Europe/Sarajevo"],
      name: "Bosnia and Herzegovina",
      country_code: "BA",
      capital: "Sarajevo"
    },
    {
      timezones: ["America/St_Barthelemy"],
      name: "Saint Barthélemy",
      country_code: "BL",
      capital: "Gustavia"
    },
    {
      timezones: ["Europe/Minsk"],
      name: "Belarus",
      country_code: "BY",
      capital: "Minsk"
    },
    {
      timezones: ["America/Belize"],
      name: "Belize",
      country_code: "BZ",
      capital: "Belmopan"
    },
    {
      timezones: ["Atlantic/Bermuda"],
      name: "Bermuda",
      country_code: "BM",
      capital: "Hamilton"
    },
    {
      timezones: ["America/La_Paz"],
      name: "Bolivia",
      country_code: "BO",
      capital: "Sucre"
    },
    {
      timezones: [
        "America/Noronha",
        "America/Belem",
        "America/Fortaleza",
        "America/Recife",
        "America/Araguaina",
        "America/Maceio",
        "America/Bahia",
        "America/Sao_Paulo",
        "America/Campo_Grande",
        "America/Cuiaba",
        "America/Santarem",
        "America/Porto_Velho",
        "America/Boa_Vista",
        "America/Manaus",
        "America/Eirunepe",
        "America/Rio_Branco"
      ],
      name: "Brazil",
      country_code: "BR",
      capital: "Brasília"
    },
    {
      timezones: ["America/Barbados"],
      name: "Barbados",
      country_code: "BB",
      capital: "Bridgetown"
    },
    {
      timezones: ["Asia/Brunei"],
      name: "Brunei",
      country_code: "BN",
      capital: "Bandar Seri Begawan"
    },
    {
      timezones: ["Asia/Thimphu"],
      name: "Bhutan",
      country_code: "BT",
      capital: "Thimphu"
    },
    {
      timezones: ["Europe/Oslo"],
      name: "Bouvet Island",
      country_code: "BV",
      capital: null
    },
    {
      timezones: ["Africa/Gaborone"],
      name: "Botswana",
      country_code: "BW",
      capital: "Gaborone"
    },
    {
      timezones: ["Africa/Bangui"],
      name: "Central African Republic",
      country_code: "CF",
      capital: "Bangui"
    },
    {
      timezones: [
        "America/St_Johns",
        "America/Halifax",
        "America/Glace_Bay",
        "America/Moncton",
        "America/Goose_Bay",
        "America/Blanc-Sablon",
        "America/Toronto",
        "America/Nipigon",
        "America/Thunder_Bay",
        "America/Iqaluit",
        "America/Pangnirtung",
        "America/Atikokan",
        "America/Winnipeg",
        "America/Rainy_River",
        "America/Resolute",
        "America/Rankin_Inlet",
        "America/Regina",
        "America/Swift_Current",
        "America/Edmonton",
        "America/Cambridge_Bay",
        "America/Yellowknife",
        "America/Inuvik",
        "America/Creston",
        "America/Dawson_Creek",
        "America/Fort_Nelson",
        "America/Vancouver",
        "America/Whitehorse",
        "America/Dawson"
      ],
      name: "Canada",
      country_code: "CA",
      capital: "Ottawa"
    },
    {
      timezones: ["Indian/Cocos"],
      name: "Cocos (Keeling) Islands",
      country_code: "CC",
      capital: "West Island"
    },
    {
      timezones: ["Europe/Zurich"],
      name: "Switzerland",
      country_code: "CH",
      capital: "Bern"
    },
    {
      timezones: ["America/Santiago", "Pacific/Easter"],
      name: "Chile",
      country_code: "CL",
      capital: "Santiago"
    },
    {
      timezones: ["Asia/Shanghai", "Asia/Urumqi"],
      name: "China",
      country_code: "CN",
      capital: "Beijing"
    },
    {
      timezones: ["Africa/Abidjan"],
      name: "Ivory Coast",
      country_code: "CI",
      capital: "Yamoussoukro"
    },
    {
      timezones: ["Africa/Douala"],
      name: "Cameroon",
      country_code: "CM",
      capital: "Yaoundé"
    },
    {
      timezones: ["Africa/Kinshasa", "Africa/Lubumbashi"],
      name: "DR Congo",
      country_code: "CD",
      capital: "Kinshasa"
    },
    {
      timezones: ["Africa/Brazzaville"],
      name: "Republic of the Congo",
      country_code: "CG",
      capital: "Brazzaville"
    },
    {
      timezones: ["Pacific/Rarotonga"],
      name: "Cook Islands",
      country_code: "CK",
      capital: "Avarua"
    },
    {
      timezones: ["America/Bogota"],
      name: "Colombia",
      country_code: "CO",
      capital: "Bogotá"
    },
    {
      timezones: ["Indian/Comoro"],
      name: "Comoros",
      country_code: "KM",
      capital: "Moroni"
    },
    {
      timezones: ["Atlantic/Cape_Verde"],
      name: "Cape Verde",
      country_code: "CV",
      capital: "Praia"
    },
    {
      timezones: ["America/Costa_Rica"],
      name: "Costa Rica",
      country_code: "CR",
      capital: "San José"
    },
    {
      timezones: ["America/Havana"],
      name: "Cuba",
      country_code: "CU",
      capital: "Havana"
    },
    {
      timezones: ["America/Curacao"],
      name: "Curaçao",
      country_code: "CW",
      capital: "Willemstad"
    },
    {
      timezones: ["Indian/Christmas"],
      name: "Christmas Island",
      country_code: "CX",
      capital: "Flying Fish Cove"
    },
    {
      timezones: ["America/Cayman"],
      name: "Cayman Islands",
      country_code: "KY",
      capital: "George Town"
    },
    {
      timezones: ["Asia/Nicosia"],
      name: "Cyprus",
      country_code: "CY",
      capital: "Nicosia"
    },
    {
      timezones: ["Europe/Prague"],
      name: "Czech Republic",
      country_code: "CZ",
      capital: "Prague"
    },
    {
      timezones: ["Europe/Berlin", "Europe/Busingen"],
      name: "Germany",
      country_code: "DE",
      capital: "Berlin"
    },
    {
      timezones: ["Africa/Djibouti"],
      name: "Djibouti",
      country_code: "DJ",
      capital: "Djibouti"
    },
    {
      timezones: ["America/Dominica"],
      name: "Dominica",
      country_code: "DM",
      capital: "Roseau"
    },
    {
      timezones: ["Europe/Copenhagen"],
      name: "Denmark",
      country_code: "DK",
      capital: "Copenhagen"
    },
    {
      timezones: ["America/Santo_Domingo"],
      name: "Dominican Republic",
      country_code: "DO",
      capital: "Santo Domingo"
    },
    {
      timezones: ["Africa/Algiers"],
      name: "Algeria",
      country_code: "DZ",
      capital: "Algiers"
    },
    {
      timezones: ["America/Guayaquil", "Pacific/Galapagos"],
      name: "Ecuador",
      country_code: "EC",
      capital: "Quito"
    },
    {
      timezones: ["Africa/Cairo"],
      name: "Egypt",
      country_code: "EG",
      capital: "Cairo"
    },
    {
      timezones: ["Africa/Asmara"],
      name: "Eritrea",
      country_code: "ER",
      capital: "Asmara"
    },
    {
      timezones: ["Africa/El_Aaiun"],
      name: "Western Sahara",
      country_code: "EH",
      capital: "El Aaiún"
    },
    {
      timezones: ["Europe/Madrid", "Africa/Ceuta", "Atlantic/Canary"],
      name: "Spain",
      country_code: "ES",
      capital: "Madrid"
    },
    {
      timezones: ["Europe/Tallinn"],
      name: "Estonia",
      country_code: "EE",
      capital: "Tallinn"
    },
    {
      timezones: ["Africa/Addis_Ababa"],
      name: "Ethiopia",
      country_code: "ET",
      capital: "Addis Ababa"
    },
    {
      timezones: ["Europe/Helsinki"],
      name: "Finland",
      country_code: "FI",
      capital: "Helsinki"
    },
    {
      timezones: ["Pacific/Fiji"],
      name: "Fiji",
      country_code: "FJ",
      capital: "Suva"
    },
    {
      timezones: ["Atlantic/Stanley"],
      name: "Falkland Islands",
      country_code: "FK",
      capital: "Stanley"
    },
    {
      timezones: ["Europe/Paris"],
      name: "France",
      country_code: "FR",
      capital: "Paris"
    },
    {
      timezones: ["Atlantic/Faroe"],
      name: "Faroe Islands",
      country_code: "FO",
      capital: "Tórshavn"
    },
    {
      timezones: ["Pacific/Chuuk", "Pacific/Pohnpei", "Pacific/Kosrae"],
      name: "Micronesia",
      country_code: "FM",
      capital: "Palikir"
    },
    {
      timezones: ["Africa/Libreville"],
      name: "Gabon",
      country_code: "GA",
      capital: "Libreville"
    },
    {
      timezones: ["Europe/London"],
      name: "United Kingdom",
      country_code: "GB",
      capital: "London"
    },
    {
      timezones: ["Asia/Tbilisi"],
      name: "Georgia",
      country_code: "GE",
      capital: "Tbilisi"
    },
    {
      timezones: ["Europe/Guernsey"],
      name: "Guernsey",
      country_code: "GG",
      capital: "St. Peter Port"
    },
    {
      timezones: ["Africa/Accra"],
      name: "Ghana",
      country_code: "GH",
      capital: "Accra"
    },
    {
      timezones: ["Europe/Gibraltar"],
      name: "Gibraltar",
      country_code: "GI",
      capital: "Gibraltar"
    },
    {
      timezones: ["Africa/Conakry"],
      name: "Guinea",
      country_code: "GN",
      capital: "Conakry"
    },
    {
      timezones: ["America/Guadeloupe"],
      name: "Guadeloupe",
      country_code: "GP",
      capital: "Basse-Terre"
    },
    {
      timezones: ["Africa/Banjul"],
      name: "Gambia",
      country_code: "GM",
      capital: "Banjul"
    },
    {
      timezones: ["Africa/Bissau"],
      name: "Guinea-Bissau",
      country_code: "GW",
      capital: "Bissau"
    },
    {
      timezones: ["Africa/Malabo"],
      name: "Equatorial Guinea",
      country_code: "GQ",
      capital: "Malabo"
    },
    {
      timezones: ["Europe/Athens"],
      name: "Greece",
      country_code: "GR",
      capital: "Athens"
    },
    {
      timezones: ["America/Grenada"],
      name: "Grenada",
      country_code: "GD",
      capital: "St. George's"
    },
    {
      timezones: [
        "America/Godthab",
        "America/Danmarkshavn",
        "America/Scoresbysund",
        "America/Thule"
      ],
      name: "Greenland",
      country_code: "GL",
      capital: "Nuuk"
    },
    {
      timezones: ["America/Guatemala"],
      name: "Guatemala",
      country_code: "GT",
      capital: "Guatemala City"
    },
    {
      timezones: ["America/Cayenne"],
      name: "French Guiana",
      country_code: "GF",
      capital: "Cayenne"
    },
    {
      timezones: ["Pacific/Guam"],
      name: "Guam",
      country_code: "GU",
      capital: "Hagåtña"
    },
    {
      timezones: ["America/Guyana"],
      name: "Guyana",
      country_code: "GY",
      capital: "Georgetown"
    },
    {
      timezones: ["Asia/Hong_Kong"],
      name: "Hong Kong",
      country_code: "HK",
      capital: "City of Victoria"
    },
    {
      timezones: ["America/Tegucigalpa"],
      name: "Honduras",
      country_code: "HN",
      capital: "Tegucigalpa"
    },
    {
      timezones: ["Europe/Zagreb"],
      name: "Croatia",
      country_code: "HR",
      capital: "Zagreb"
    },
    {
      timezones: ["America/Port-au-Prince"],
      name: "Haiti",
      country_code: "HT",
      capital: "Port-au-Prince"
    },
    {
      timezones: ["Europe/Budapest"],
      name: "Hungary",
      country_code: "HU",
      capital: "Budapest"
    },
    {
      timezones: [
        "Asia/Jakarta",
        "Asia/Pontianak",
        "Asia/Makassar",
        "Asia/Jayapura"
      ],
      name: "Indonesia",
      country_code: "ID",
      capital: "Jakarta"
    },
    {
      timezones: ["Europe/Isle_of_Man"],
      name: "Isle of Man",
      country_code: "IM",
      capital: "Douglas"
    },
    {
      timezones: ["Asia/Kolkata"],
      name: "India",
      country_code: "IN",
      capital: "New Delhi"
    },
    {
      timezones: ["Indian/Chagos"],
      name: "British Indian Ocean Territory",
      country_code: "IO",
      capital: "Diego Garcia"
    },
    {
      timezones: ["Europe/Dublin"],
      name: "Ireland",
      country_code: "IE",
      capital: "Dublin"
    },
    {
      timezones: ["Asia/Tehran"],
      name: "Iran",
      country_code: "IR",
      capital: "Tehran"
    },
    {
      timezones: ["Asia/Baghdad"],
      name: "Iraq",
      country_code: "IQ",
      capital: "Baghdad"
    },
    {
      timezones: ["Atlantic/Reykjavik"],
      name: "Iceland",
      country_code: "IS",
      capital: "Reykjavik"
    },
    {
      timezones: ["Asia/Jerusalem"],
      name: "Israel",
      country_code: "IL",
      capital: "Jerusalem"
    },
    {
      timezones: ["Europe/Rome"],
      name: "Italy",
      country_code: "IT",
      capital: "Rome"
    },
    {
      timezones: ["America/Jamaica"],
      name: "Jamaica",
      country_code: "JM",
      capital: "Kingston"
    },
    {
      timezones: ["Europe/Jersey"],
      name: "Jersey",
      country_code: "JE",
      capital: "Saint Helier"
    },
    {
      timezones: ["Asia/Amman"],
      name: "Jordan",
      country_code: "JO",
      capital: "Amman"
    },
    {
      timezones: ["Asia/Tokyo"],
      name: "Japan",
      country_code: "JP",
      capital: "Tokyo"
    },
    {
      timezones: [
        "Asia/Almaty",
        "Asia/Qyzylorda",
        "Asia/Aqtobe",
        "Asia/Aqtau",
        "Asia/Oral"
      ],
      name: "Kazakhstan",
      country_code: "KZ",
      capital: "Astana"
    },
    {
      timezones: ["Africa/Nairobi"],
      name: "Kenya",
      country_code: "KE",
      capital: "Nairobi"
    },
    {
      timezones: ["Asia/Bishkek"],
      name: "Kyrgyzstan",
      country_code: "KG",
      capital: "Bishkek"
    },
    {
      timezones: ["Asia/Phnom_Penh"],
      name: "Cambodia",
      country_code: "KH",
      capital: "Phnom Penh"
    },
    {
      timezones: ["Pacific/Tarawa", "Pacific/Enderbury", "Pacific/Kiritimati"],
      name: "Kiribati",
      country_code: "KI",
      capital: "South Tarawa"
    },
    {
      timezones: ["America/St_Kitts"],
      name: "Saint Kitts and Nevis",
      country_code: "KN",
      capital: "Basseterre"
    },
    {
      timezones: ["Asia/Seoul"],
      name: "South Korea",
      country_code: "KR",
      capital: "Seoul"
    },
    {
      timezones: ["Europe/Belgrade"],
      name: "Kosovo",
      country_code: "XK",
      capital: "Pristina"
    },
    {
      timezones: ["Asia/Kuwait"],
      name: "Kuwait",
      country_code: "KW",
      capital: "Kuwait City"
    },
    {
      timezones: ["Asia/Vientiane"],
      name: "Laos",
      country_code: "LA",
      capital: "Vientiane"
    },
    {
      timezones: ["Asia/Beirut"],
      name: "Lebanon",
      country_code: "LB",
      capital: "Beirut"
    },
    {
      timezones: ["Africa/Monrovia"],
      name: "Liberia",
      country_code: "LR",
      capital: "Monrovia"
    },
    {
      timezones: ["Africa/Tripoli"],
      name: "Libya",
      country_code: "LY",
      capital: "Tripoli"
    },
    {
      timezones: ["America/St_Lucia"],
      name: "Saint Lucia",
      country_code: "LC",
      capital: "Castries"
    },
    {
      timezones: ["Europe/Vaduz"],
      name: "Liechtenstein",
      country_code: "LI",
      capital: "Vaduz"
    },
    {
      timezones: ["Asia/Colombo"],
      name: "Sri Lanka",
      country_code: "LK",
      capital: "Colombo"
    },
    {
      timezones: ["Africa/Maseru"],
      name: "Lesotho",
      country_code: "LS",
      capital: "Maseru"
    },
    {
      timezones: ["Europe/Vilnius"],
      name: "Lithuania",
      country_code: "LT",
      capital: "Vilnius"
    },
    {
      timezones: ["Europe/Luxembourg"],
      name: "Luxembourg",
      country_code: "LU",
      capital: "Luxembourg"
    },
    {
      timezones: ["Europe/Riga"],
      name: "Latvia",
      country_code: "LV",
      capital: "Riga"
    },
    {
      timezones: ["Asia/Macau"],
      name: "Macau",
      country_code: "MO",
      capital: null
    },
    {
      timezones: ["America/Marigot"],
      name: "Saint Martin",
      country_code: "MF",
      capital: "Marigot"
    },
    {
      timezones: ["Africa/Casablanca"],
      name: "Morocco",
      country_code: "MA",
      capital: "Rabat"
    },
    {
      timezones: ["Europe/Monaco"],
      name: "Monaco",
      country_code: "MC",
      capital: "Monaco"
    },
    {
      timezones: ["Europe/Chisinau"],
      name: "Moldova",
      country_code: "MD",
      capital: "Chișinău"
    },
    {
      timezones: ["Indian/Antananarivo"],
      name: "Madagascar",
      country_code: "MG",
      capital: "Antananarivo"
    },
    {
      timezones: ["Indian/Maldives"],
      name: "Maldives",
      country_code: "MV",
      capital: "Malé"
    },
    {
      timezones: [
        "America/Mexico_City",
        "America/Cancun",
        "America/Merida",
        "America/Monterrey",
        "America/Matamoros",
        "America/Mazatlan",
        "America/Chihuahua",
        "America/Ojinaga",
        "America/Hermosillo",
        "America/Tijuana",
        "America/Bahia_Banderas"
      ],
      name: "Mexico",
      country_code: "MX",
      capital: "Mexico City"
    },
    {
      timezones: ["Pacific/Majuro", "Pacific/Kwajalein"],
      name: "Marshall Islands",
      country_code: "MH",
      capital: "Majuro"
    },
    {
      timezones: ["Europe/Skopje"],
      name: "Macedonia",
      country_code: "MK",
      capital: "Skopje"
    },
    {
      timezones: ["Africa/Bamako"],
      name: "Mali",
      country_code: "ML",
      capital: "Bamako"
    },
    {
      timezones: ["Europe/Malta"],
      name: "Malta",
      country_code: "MT",
      capital: "Valletta"
    },
    {
      timezones: ["Asia/Rangoon"],
      name: "Myanmar",
      country_code: "MM",
      capital: "Naypyidaw"
    },
    {
      timezones: ["Europe/Podgorica"],
      name: "Montenegro",
      country_code: "ME",
      capital: "Podgorica"
    },
    {
      timezones: ["Asia/Ulaanbaatar", "Asia/Hovd", "Asia/Choibalsan"],
      name: "Mongolia",
      country_code: "MN",
      capital: "Ulan Bator"
    },
    {
      timezones: ["Pacific/Saipan"],
      name: "Northern Mariana Islands",
      country_code: "MP",
      capital: "Saipan"
    },
    {
      timezones: ["Africa/Maputo"],
      name: "Mozambique",
      country_code: "MZ",
      capital: "Maputo"
    },
    {
      timezones: ["Africa/Nouakchott"],
      name: "Mauritania",
      country_code: "MR",
      capital: "Nouakchott"
    },
    {
      timezones: ["America/Montserrat"],
      name: "Montserrat",
      country_code: "MS",
      capital: "Plymouth"
    },
    {
      timezones: ["America/Martinique"],
      name: "Martinique",
      country_code: "MQ",
      capital: "Fort-de-France"
    },
    {
      timezones: ["Indian/Mauritius"],
      name: "Mauritius",
      country_code: "MU",
      capital: "Port Louis"
    },
    {
      timezones: ["Africa/Blantyre"],
      name: "Malawi",
      country_code: "MW",
      capital: "Lilongwe"
    },
    {
      timezones: ["Asia/Kuala_Lumpur", "Asia/Kuching"],
      name: "Malaysia",
      country_code: "MY",
      capital: "Kuala Lumpur"
    },
    {
      timezones: ["Indian/Mayotte"],
      name: "Mayotte",
      country_code: "YT",
      capital: "Mamoudzou"
    },
    {
      timezones: ["Africa/Windhoek"],
      name: "Namibia",
      country_code: "NA",
      capital: "Windhoek"
    },
    {
      timezones: ["Pacific/Noumea"],
      name: "New Caledonia",
      country_code: "NC",
      capital: "Nouméa"
    },
    {
      timezones: ["Africa/Niamey"],
      name: "Niger",
      country_code: "NE",
      capital: "Niamey"
    },
    {
      timezones: ["Pacific/Norfolk"],
      name: "Norfolk Island",
      country_code: "NF",
      capital: "Kingston"
    },
    {
      timezones: ["Africa/Lagos"],
      name: "Nigeria",
      country_code: "NG",
      capital: "Abuja"
    },
    {
      timezones: ["America/Managua"],
      name: "Nicaragua",
      country_code: "NI",
      capital: "Managua"
    },
    {
      timezones: ["Pacific/Niue"],
      name: "Niue",
      country_code: "NU",
      capital: "Alofi"
    },
    {
      timezones: ["Europe/Amsterdam"],
      name: "Netherlands",
      country_code: "NL",
      capital: "Amsterdam"
    },
    {
      timezones: ["Europe/Oslo"],
      name: "Norway",
      country_code: "NO",
      capital: "Oslo"
    },
    {
      timezones: ["Asia/Kathmandu"],
      name: "Nepal",
      country_code: "NP",
      capital: "Kathmandu"
    },
    {
      timezones: ["Pacific/Nauru"],
      name: "Nauru",
      country_code: "NR",
      capital: "Yaren"
    },
    {
      timezones: ["Pacific/Auckland", "Pacific/Chatham"],
      name: "New Zealand",
      country_code: "NZ",
      capital: "Wellington"
    },
    {
      timezones: ["Asia/Muscat"],
      name: "Oman",
      country_code: "OM",
      capital: "Muscat"
    },
    {
      timezones: ["Asia/Karachi"],
      name: "Pakistan",
      country_code: "PK",
      capital: "Islamabad"
    },
    {
      timezones: ["America/Panama"],
      name: "Panama",
      country_code: "PA",
      capital: "Panama City"
    },
    {
      timezones: ["Pacific/Pitcairn"],
      name: "Pitcairn Islands",
      country_code: "PN",
      capital: "Adamstown"
    },
    {
      timezones: ["America/Lima"],
      name: "Peru",
      country_code: "PE",
      capital: "Lima"
    },
    {
      timezones: ["Asia/Manila"],
      name: "Philippines",
      country_code: "PH",
      capital: "Manila"
    },
    {
      timezones: ["Pacific/Palau"],
      name: "Palau",
      country_code: "PW",
      capital: "Ngerulmud"
    },
    {
      timezones: ["Pacific/Port_Moresby", "Pacific/Bougainville"],
      name: "Papua New Guinea",
      country_code: "PG",
      capital: "Port Moresby"
    },
    {
      timezones: ["Europe/Warsaw"],
      name: "Poland",
      country_code: "PL",
      capital: "Warsaw"
    },
    {
      timezones: ["America/Puerto_Rico"],
      name: "Puerto Rico",
      country_code: "PR",
      capital: "San Juan"
    },
    {
      timezones: ["Asia/Pyongyang"],
      name: "North Korea",
      country_code: "KP",
      capital: "Pyongyang"
    },
    {
      timezones: ["Europe/Lisbon", "Atlantic/Madeira", "Atlantic/Azores"],
      name: "Portugal",
      country_code: "PT",
      capital: "Lisbon"
    },
    {
      timezones: ["America/Asuncion"],
      name: "Paraguay",
      country_code: "PY",
      capital: "Asunción"
    },
    {
      timezones: ["Asia/Gaza", "Asia/Hebron"],
      name: "Palestine",
      country_code: "PS",
      capital: "Ramallah"
    },
    {
      timezones: ["Pacific/Tahiti", "Pacific/Marquesas", "Pacific/Gambier"],
      name: "French Polynesia",
      country_code: "PF",
      capital: "Papeetē"
    },
    {
      timezones: ["Asia/Qatar"],
      name: "Qatar",
      country_code: "QA",
      capital: "Doha"
    },
    {
      timezones: ["Indian/Reunion"],
      name: "Réunion",
      country_code: "RE",
      capital: "Saint-Denis"
    },
    {
      timezones: ["Europe/Bucharest"],
      name: "Romania",
      country_code: "RO",
      capital: "Bucharest"
    },
    {
      timezones: [
        "Europe/Kaliningrad",
        "Europe/Moscow",
        "Europe/Simferopol",
        "Europe/Volgograd",
        "Europe/Kirov",
        "Europe/Astrakhan",
        "Europe/Samara",
        "Europe/Ulyanovsk",
        "Asia/Yekaterinburg",
        "Asia/Omsk",
        "Asia/Novosibirsk",
        "Asia/Barnaul",
        "Asia/Tomsk",
        "Asia/Novokuznetsk",
        "Asia/Krasnoyarsk",
        "Asia/Irkutsk",
        "Asia/Chita",
        "Asia/Yakutsk",
        "Asia/Khandyga",
        "Asia/Vladivostok",
        "Asia/Ust-Nera",
        "Asia/Magadan",
        "Asia/Sakhalin",
        "Asia/Srednekolymsk",
        "Asia/Kamchatka",
        "Asia/Anadyr"
      ],
      name: "Russia",
      country_code: "RU",
      capital: "Moscow"
    },
    {
      timezones: ["Africa/Kigali"],
      name: "Rwanda",
      country_code: "RW",
      capital: "Kigali"
    },
    {
      timezones: ["Asia/Riyadh"],
      name: "Saudi Arabia",
      country_code: "SA",
      capital: "Riyadh"
    },
    {
      timezones: ["Africa/Khartoum"],
      name: "Sudan",
      country_code: "SD",
      capital: "Khartoum"
    },
    {
      timezones: ["Africa/Dakar"],
      name: "Senegal",
      country_code: "SN",
      capital: "Dakar"
    },
    {
      timezones: ["Asia/Singapore"],
      name: "Singapore",
      country_code: "SG",
      capital: "Singapore"
    },
    {
      timezones: ["Atlantic/South_Georgia"],
      name: "South Georgia",
      country_code: "GS",
      capital: "King Edward Point"
    },
    {
      timezones: ["Arctic/Longyearbyen"],
      name: "Svalbard and Jan Mayen",
      country_code: "SJ",
      capital: "Longyearbyen"
    },
    {
      timezones: ["Pacific/Guadalcanal"],
      name: "Solomon Islands",
      country_code: "SB",
      capital: "Honiara"
    },
    {
      timezones: ["Africa/Freetown"],
      name: "Sierra Leone",
      country_code: "SL",
      capital: "Freetown"
    },
    {
      timezones: ["America/El_Salvador"],
      name: "El Salvador",
      country_code: "SV",
      capital: "San Salvador"
    },
    {
      timezones: ["Europe/San_Marino"],
      name: "San Marino",
      country_code: "SM",
      capital: "City of San Marino"
    },
    {
      timezones: ["Africa/Mogadishu"],
      name: "Somalia",
      country_code: "SO",
      capital: "Mogadishu"
    },
    {
      timezones: ["America/Miquelon"],
      name: "Saint Pierre and Miquelon",
      country_code: "PM",
      capital: "Saint-Pierre"
    },
    {
      timezones: ["Europe/Belgrade"],
      name: "Serbia",
      country_code: "RS",
      capital: "Belgrade"
    },
    {
      timezones: ["Africa/Juba"],
      name: "South Sudan",
      country_code: "SS",
      capital: "Juba"
    },
    {
      timezones: ["Africa/Sao_Tome"],
      name: "São Tomé and Príncipe",
      country_code: "ST",
      capital: "São Tomé"
    },
    {
      timezones: ["America/Paramaribo"],
      name: "Suriname",
      country_code: "SR",
      capital: "Paramaribo"
    },
    {
      timezones: ["Europe/Bratislava"],
      name: "Slovakia",
      country_code: "SK",
      capital: "Bratislava"
    },
    {
      timezones: ["Europe/Ljubljana"],
      name: "Slovenia",
      country_code: "SI",
      capital: "Ljubljana"
    },
    {
      timezones: ["Europe/Stockholm"],
      name: "Sweden",
      country_code: "SE",
      capital: "Stockholm"
    },
    {
      timezones: ["Africa/Mbabane"],
      name: "Swaziland",
      country_code: "SZ",
      capital: "Lobamba"
    },
    {
      timezones: ["America/Lower_Princes"],
      name: "Sint Maarten",
      country_code: "SX",
      capital: "Philipsburg"
    },
    {
      timezones: ["Indian/Mahe"],
      name: "Seychelles",
      country_code: "SC",
      capital: "Victoria"
    },
    {
      timezones: ["Asia/Damascus"],
      name: "Syria",
      country_code: "SY",
      capital: "Damascus"
    },
    {
      timezones: ["America/Grand_Turk"],
      name: "Turks and Caicos Islands",
      country_code: "TC",
      capital: "Cockburn Town"
    },
    {
      timezones: ["Africa/Ndjamena"],
      name: "Chad",
      country_code: "TD",
      capital: "N'Djamena"
    },
    {
      timezones: ["Africa/Lome"],
      name: "Togo",
      country_code: "TG",
      capital: "Lomé"
    },
    {
      timezones: ["Asia/Bangkok"],
      name: "Thailand",
      country_code: "TH",
      capital: "Bangkok"
    },
    {
      timezones: ["Asia/Dushanbe"],
      name: "Tajikistan",
      country_code: "TJ",
      capital: "Dushanbe"
    },
    {
      timezones: ["Pacific/Fakaofo"],
      name: "Tokelau",
      country_code: "TK",
      capital: "Fakaofo"
    },
    {
      timezones: ["Asia/Ashgabat"],
      name: "Turkmenistan",
      country_code: "TM",
      capital: "Ashgabat"
    },
    {
      timezones: ["Asia/Dili"],
      name: "Timor-Leste",
      country_code: "TL",
      capital: "Dili"
    },
    {
      timezones: ["Pacific/Tongatapu"],
      name: "Tonga",
      country_code: "TO",
      capital: "Nuku'alofa"
    },
    {
      timezones: ["America/Port_of_Spain"],
      name: "Trinidad and Tobago",
      country_code: "TT",
      capital: "Port of Spain"
    },
    {
      timezones: ["Africa/Tunis"],
      name: "Tunisia",
      country_code: "TN",
      capital: "Tunis"
    },
    {
      timezones: ["Europe/Istanbul"],
      name: "Turkey",
      country_code: "TR",
      capital: "Ankara"
    },
    {
      timezones: ["Pacific/Funafuti"],
      name: "Tuvalu",
      country_code: "TV",
      capital: "Funafuti"
    },
    {
      timezones: ["Asia/Taipei"],
      name: "Taiwan",
      country_code: "TW",
      capital: "Taipei"
    },
    {
      timezones: ["Africa/Dar_es_Salaam"],
      name: "Tanzania",
      country_code: "TZ",
      capital: "Dodoma"
    },
    {
      timezones: ["Africa/Kampala"],
      name: "Uganda",
      country_code: "UG",
      capital: "Kampala"
    },
    {
      timezones: ["Europe/Kiev", "Europe/Uzhgorod", "Europe/Zaporozhye"],
      name: "Ukraine",
      country_code: "UA",
      capital: "Kiev"
    },
    {
      timezones: ["Pacific/Johnston", "Pacific/Midway", "Pacific/Wake"],
      name: "United States Minor Outlying Islands",
      country_code: "UM",
      capital: null
    },
    {
      timezones: ["America/Montevideo"],
      name: "Uruguay",
      country_code: "UY",
      capital: "Montevideo"
    },
    {
      timezones: [
        "America/New_York",
        "America/Detroit",
        "America/Kentucky/Louisville",
        "America/Kentucky/Monticello",
        "America/Indiana/Indianapolis",
        "America/Indiana/Vincennes",
        "America/Indiana/Winamac",
        "America/Indiana/Marengo",
        "America/Indiana/Petersburg",
        "America/Indiana/Vevay",
        "America/Chicago",
        "America/Indiana/Tell_City",
        "America/Indiana/Knox",
        "America/Menominee",
        "America/North_Dakota/Center",
        "America/North_Dakota/New_Salem",
        "America/North_Dakota/Beulah",
        "America/Denver",
        "America/Boise",
        "America/Phoenix",
        "America/Los_Angeles",
        "America/Anchorage",
        "America/Juneau",
        "America/Sitka",
        "America/Metlakatla",
        "America/Yakutat",
        "America/Nome",
        "America/Adak",
        "Pacific/Honolulu"
      ],
      name: "United States",
      country_code: "US",
      capital: "Washington D.C."
    },
    {
      timezones: ["Asia/Samarkand", "Asia/Tashkent"],
      name: "Uzbekistan",
      country_code: "UZ",
      capital: "Tashkent"
    },
    {
      timezones: ["Europe/Vatican"],
      name: "Vatican City",
      country_code: "VA",
      capital: "Vatican City"
    },
    {
      timezones: ["America/St_Vincent"],
      name: "Saint Vincent and the Grenadines",
      country_code: "VC",
      capital: "Kingstown"
    },
    {
      timezones: ["America/Caracas"],
      name: "Venezuela",
      country_code: "VE",
      capital: "Caracas"
    },
    {
      timezones: ["America/Tortola"],
      name: "British Virgin Islands",
      country_code: "VG",
      capital: "Road Town"
    },
    {
      timezones: ["America/St_Thomas"],
      name: "United States Virgin Islands",
      country_code: "VI",
      capital: "Charlotte Amalie"
    },
    {
      timezones: ["Asia/Ho_Chi_Minh"],
      name: "Vietnam",
      country_code: "VN",
      capital: "Hanoi"
    },
    {
      timezones: ["Pacific/Efate"],
      name: "Vanuatu",
      country_code: "VU",
      capital: "Port Vila"
    },
    {
      timezones: ["Pacific/Wallis"],
      name: "Wallis and Futuna",
      country_code: "WF",
      capital: "Mata-Utu"
    },
    {
      timezones: ["Pacific/Apia"],
      name: "Samoa",
      country_code: "WS",
      capital: "Apia"
    },
    {
      timezones: ["Asia/Aden"],
      name: "Yemen",
      country_code: "YE",
      capital: "Sana'a"
    },
    {
      timezones: ["Africa/Johannesburg"],
      name: "South Africa",
      country_code: "ZA",
      capital: "Pretoria"
    },
    {
      timezones: ["Africa/Lusaka"],
      name: "Zambia",
      country_code: "ZM",
      capital: "Lusaka"
    },
    {
      timezones: ["Africa/Harare"],
      name: "Zimbabwe",
      country_code: "ZW",
      capital: "Harare"
    }
  ];
  
export default timeZone;
  