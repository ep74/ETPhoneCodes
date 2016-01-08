var ETPhoneCodesData = { 
// Array of country objects for the flag dropdown.
// Each contains a name, country code (ISO 3166-1 alpha-2) and dial code.
// Originally from https://github.com/mledoze/countries
// then stripped down by copying the JSON into Chrome dev tools and manipulating it
// and then using JSON.stringify to print it out as a string again and copy it here.
// Also commented some countries which we dont yet have flags for.
countries: [ {
		name: "Afghanistan",
        ca2: "af",
        "calling-code": "93"
    }, {
        name: "Albania",
        ca2: "al",
        "calling-code": "355"
    }, {
        name: "Algeria",
        ca2: "dz",
        "calling-code": "213"
    }, {
        name: "American Samoa",
        ca2: "as",
        "calling-code": "1684"
    }, {
        name: "Andorra",
        ca2: "ad",
        "calling-code": "376"
    }, {
        name: "Angola",
        ca2: "ao",
        "calling-code": "244"
    }, {
        name: "Anguilla",
        ca2: "ai",
        "calling-code": "1264"
    }, {
        name: "Antigua and Barbuda",
        ca2: "ag",
        "calling-code": "1268"
    }, {
        name: "Argentina",
        ca2: "ar",
        "calling-code": "54"
    }, {
        name: "Armenia",
        ca2: "am",
        "calling-code": "374"
    }, {
        name: "Aruba",
        ca2: "aw",
        "calling-code": "297"
    }, {
        name: "Australia",
        ca2: "au",
        "calling-code": "61"
    }, {
        name: "Austria",
        ca2: "at",
        "calling-code": "43"
    }, {
        name: "Azerbaijan",
        ca2: "az",
        "calling-code": "994"
    }, {
        name: "Bahamas",
        ca2: "bs",
        "calling-code": "1242"
    }, {
        name: "Bahrain",
        ca2: "bh",
        "calling-code": "973"
    }, {
        name: "Bangladesh",
        ca2: "bd",
        "calling-code": "880"
    }, {
        name: "Barbados",
        ca2: "bb",
        "calling-code": "1246"
    }, {
        name: "Belarus",
        ca2: "by",
        "calling-code": "375"
    }, {
        name: "Belgium",
        ca2: "be",
        "calling-code": "32",
        placeholder: "(0)2 124 34 56",
        format: "Z.CCC.CC.CC",
        numbers: 9
    }, {
        name: "Belize",
        ca2: "bz",
        "calling-code": "501"
    }, {
        name: "Benin",
        ca2: "bj",
        "calling-code": "229"
    }, {
        name: "Bermuda",
        ca2: "bm",
        "calling-code": "1441"
    }, {
        name: "Bhutan",
        ca2: "bt",
        "calling-code": "975"
    }, {
        name: "Bolivia",
        ca2: "bo",
        "calling-code": "591"
    }, {
        name: "Bosnia and Herzegovina",
        ca2: "ba",
        "calling-code": "387"
    }, {
        name: "Botswana",
        ca2: "bw",
        "calling-code": "267"
    }, {
        name: "Brazil",
        ca2: "br",
        "calling-code": "55"
    }, {
        name: "Brunei Darussalam",
        ca2: "bn",
        "calling-code": "673"
    }, {
        name: "Bulgaria",
        ca2: "bg",
        "calling-code": "359"
    }, {
        name: "Burkina Faso",
        ca2: "bf",
        "calling-code": "226"
    }, {
        name: "Burundi",
        ca2: "bi",
        "calling-code": "257"
    }, {
        name: "Cambodia",
        ca2: "kh",
        "calling-code": "855"
    }, {
        name: "Cameroon",
        ca2: "cm",
        "calling-code": "237"
    }, {
        name: "Canada",
        ca2: "ca",
        "calling-code": "1"
    }, {
        name: "Cape Verde",
        ca2: "cv",
        "calling-code": "238"
    }, {
        name: "Cayman Islands",
        ca2: "ky",
        "calling-code": "1345"
    }, {
        name: "Central African Republic",
        ca2: "cf",
        "calling-code": "236"
    }, {
        name: "Chad",
        ca2: "td",
        "calling-code": "235"
    }, {
        name: "Chile",
        ca2: "cl",
        "calling-code": "56"
    }, {
        name: "China",
        ca2: "cn",
        "calling-code": "86"
    }, {
        name: "Colombia",
        ca2: "co",
        "calling-code": "57"
    }, {
        name: "Comoros",
        ca2: "km",
        "calling-code": "269"
    }, {
        name: "Congo (DRC)",
        ca2: "cd",
        "calling-code": "243"
    }, {
        name: "Congo (Republic)",
        ca2: "cg",
        "calling-code": "242"
    }, {
        name: "Cook Islands",
        ca2: "ck",
        "calling-code": "682"
    }, {
        name: "Costa Rica",
        ca2: "cr",
        "calling-code": "506"
    }, {
        name: "Côte d'Ivoire",
        ca2: "ci",
        "calling-code": "225"
    }, {
        name: "Croatia",
        ca2: "hr",
        "calling-code": "385"
    }, {
        name: "Cuba",
        ca2: "cu",
        "calling-code": "53"
    }, {
        name: "Cyprus",
        ca2: "cy",
        "calling-code": "357"
    }, {
        name: "Czech Republic",
        ca2: "cz",
        "calling-code": "420"
    }, {
        name: "Denmark",
        ca2: "dk",
        "calling-code": "45"
    }, {
        name: "Djibouti",
        ca2: "dj",
        "calling-code": "253"
    }, {
        name: "Dominica",
        ca2: "dm",
        "calling-code": "1767"
    }, {
        name: "Dominican Republic",
        ca2: "do",
        "calling-code": "1809"
    }, {
        name: "Ecuador",
        ca2: "ec",
        "calling-code": "593"
    }, {
        name: "Egypt",
        ca2: "eg",
        "calling-code": "20"
    }, {
        name: "El Salvador",
        ca2: "sv",
        "calling-code": "503"
    }, {
        name: "Equatorial Guinea",
        ca2: "gq",
        "calling-code": "240"
    }, {
        name: "Eritrea",
        ca2: "er",
        "calling-code": "291"
    }, {
        name: "Estonia",
        ca2: "ee",
        "calling-code": "372"
    }, {
        name: "Ethiopia",
        ca2: "et",
        "calling-code": "251"
    }, {
        name: "Faroe Islands",
        ca2: "fo",
        "calling-code": "298"
    }, {
        name: "Fiji",
        ca2: "fj",
        "calling-code": "679"
    }, {
        name: "Finland",
        ca2: "fi",
        "calling-code": "358"
    }, {
        name: "France",
        ca2: "fr",
        "calling-code": "33",
        placeholder: "(0)4 50 64 08 08",
        format: "Z.CC.CC.CC.CC",
        numbers: 9
    }, {
        name: "French Polynesia",
        ca2: "pf",
        "calling-code": "689"
    }, {
        name: "Gabon",
        ca2: "ga",
        "calling-code": "241"
    }, {
        name: "Gambia",
        ca2: "gm",
        "calling-code": "220"
    }, {
        name: "Georgia",
        ca2: "ge",
        "calling-code": "995"
    }, {
        name: "Germany",
        ca2: "de",
        "calling-code": "49"
    }, {
        name: "Ghana",
        ca2: "gh",
        "calling-code": "233"
    }, {
        name: "Gibraltar",
        ca2: "gi",
        "calling-code": "350"
    }, {
        name: "Greece",
        ca2: "gr",
        "calling-code": "30"
    }, {
        name: "Greenland",
        ca2: "gl",
        "calling-code": "299"
    }, {
        name: "Grenada",
        ca2: "gd",
        "calling-code": "1473"
    }, {
        name: "Guadeloupe",
        ca2: "gp",
        "calling-code": "590",
        placeholder: "(0)590 28 39 45",
        format: "CCC.CC.CC.CC",
        numbers: 9
    }, {
        name: "Guam",
        ca2: "gu",
        "calling-code": "1671"
    }, {
        name: "Guatemala",
        ca2: "gt",
        "calling-code": "502"
    }, {
        name: "Guernsey",
        ca2: "gg",
        "calling-code": "44"
    }, {
        name: "Guinea",
        ca2: "gn",
        "calling-code": "224"
    }, {
        name: "Guinea-Bissau",
        ca2: "gw",
        "calling-code": "245"
    }, {
        name: "Guyana",
        ca2: "gy",
        "calling-code": "594",
        placeholder: "(0)594 28 39 45",
        format: "CCC.CC.CC.CC",
        numbers: 9
    }, {
        name: "Haiti",
        ca2: "ht",
        "calling-code": "509"
    }, {
        name: "Honduras",
        ca2: "hn",
        "calling-code": "504"
    }, {
        name: "Hong Kong",
        ca2: "hk",
        "calling-code": "852"
    }, {
        name: "Hungary",
        ca2: "hu",
        "calling-code": "36"
    }, {
        name: "Iceland",
        ca2: "is",
        "calling-code": "354"
    }, {
        name: "India",
        ca2: "in",
        "calling-code": "91"
    }, {
        name: "Indonesia",
        ca2: "id",
        "calling-code": "62"
    }, {
        name: "Iran",
        ca2: "ir",
        "calling-code": "98"
    }, {
        name: "Iraq",
        ca2: "iq",
        "calling-code": "964"
    }, {
        name: "Ireland",
        ca2: "ie",
        "calling-code": "353"
    }, {
        name: "Isle of Man",
        ca2: "im",
        "calling-code": "44"
    }, {
        name: "Israel",
        ca2: "il",
        "calling-code": "972"
    }, {
        name: "Italy",
        ca2: "it",
        "calling-code": "39"
    }, {
        name: "Jamaica",
        ca2: "jm",
        "calling-code": "1876"
    }, {
        name: "Japan",
        ca2: "jp",
        "calling-code": "81"
    }, {
        name: "Jersey",
        ca2: "je",
        "calling-code": "44"
    }, {
        name: "Jordan",
        ca2: "jo",
        "calling-code": "962"
    }, {
        name: "Kazakhstan",
        ca2: "kz",
        "calling-code": "7"
    }, {
        name: "Kenya",
        ca2: "ke",
        "calling-code": "254"
    }, {
        name: "Kiribati",
        ca2: "ki",
        "calling-code": "686"
    }, {
        name: "Kuwait",
        ca2: "kw",
        "calling-code": "965"
    }, {
        name: "Kyrgyzstan",
        ca2: "kg",
        "calling-code": "996"
    }, {
        name: "Laos",
        ca2: "la",
        "calling-code": "856"
    }, {
        name: "Latvia",
        ca2: "lv",
        "calling-code": "371"
    }, {
        name: "Lebanon",
        ca2: "lb",
        "calling-code": "961"
    }, {
        name: "Lesotho",
        ca2: "ls",
        "calling-code": "266"
    }, {
        name: "Liberia",
        ca2: "lr",
        "calling-code": "231"
    }, {
        name: "Libya",
        ca2: "ly",
        "calling-code": "218"
    }, {
        name: "Liechtenstein",
        ca2: "li",
        "calling-code": "423"
    }, {
        name: "Lithuania",
        ca2: "lt",
        "calling-code": "370"
    }, {
        name: "Luxembourg",
        ca2: "lu",
        "calling-code": "352"
    }, {
        name: "Macao",
        ca2: "mo",
        "calling-code": "853"
    }, {
        name: "Macedonia",
        ca2: "mk",
        "calling-code": "389"
    }, {
        name: "Madagascar",
        ca2: "mg",
        "calling-code": "261"
    }, {
        name: "Malawi",
        ca2: "mw",
        "calling-code": "265"
    }, {
        name: "Malaysia",
        ca2: "my",
        "calling-code": "60"
    }, {
        name: "Maldives",
        ca2: "mv",
        "calling-code": "960"
    }, {
        name: "Mali",
        ca2: "ml",
        "calling-code": "223"
    }, {
        name: "Malta",
        ca2: "mt",
        "calling-code": "356"
    }, {
        name: "Marshall Islands",
        ca2: "mh",
        "calling-code": "692"
    }, {
        name: "Martinique",
        ca2: "mq",
        "calling-code": "596",
        placeholder: "(0)596 28 39 45",
        format: "CCC.CC.CC.CC",
        numbers: 9
    }, {
        name: "Mauritania",
        ca2: "mr",
        "calling-code": "222"
    }, {
        name: "Mauritius",
        ca2: "mu",
        "calling-code": "230"
    }, {
        name: "Mexico",
        ca2: "mx",
        "calling-code": "52"
    }, {
        name: "Micronesia",
        ca2: "fm",
        "calling-code": "691"
    }, {
        name: "Moldova",
        ca2: "md",
        "calling-code": "373"
    }, {
        name: "Monaco",
        ca2: "mc",
        "calling-code": "377",
        placeholder: "(0)97 97 44 54",
        format: "ZC.CC.CC.CC",
        numbers: 8
    }, {
        name: "Mongolia",
        ca2: "mn",
        "calling-code": "976"
    }, {
        name: "Montenegro",
        ca2: "me",
        "calling-code": "382"
    }, {
        name: "Montserrat",
        ca2: "ms",
        "calling-code": "1664"
    }, {
        name: "Morocco",
        ca2: "ma",
        "calling-code": "212"
    }, {
        name: "Mozambique",
        ca2: "mz",
        "calling-code": "258"
    }, {
        name: "Myanmar (Burma)",
        ca2: "mm",
        "calling-code": "95"
    }, {
        name: "Namibia",
        ca2: "na",
        "calling-code": "264"
    }, {
        name: "Nauru",
        ca2: "nr",
        "calling-code": "674"
    }, {
        name: "Nepal",
        ca2: "np",
        "calling-code": "977"
    }, {
        name: "Netherlands",
        ca2: "nl",
        "calling-code": "31"
    }, {
        name: "New Caledonia",
        ca2: "nc",
        "calling-code": "687"
    }, {
        name: "New Zealand",
        ca2: "nz",
        "calling-code": "64"
    }, {
        name: "Nicaragua",
        ca2: "ni",
        "calling-code": "505"
    }, {
        name: "Niger",
        ca2: "ne",
        "calling-code": "227"
    }, {
        name: "Nigeria",
        ca2: "ng",
        "calling-code": "234"
    }, {
        name: "North Korea",
        ca2: "kp",
        "calling-code": "850"
    }, {
        name: "Norway",
        ca2: "no",
        "calling-code": "47"
    }, {
        name: "Oman",
        ca2: "om",
        "calling-code": "968"
    }, {
        name: "Pakistan",
        ca2: "pk",
        "calling-code": "92"
    }, {
        name: "Palau",
        ca2: "pw",
        "calling-code": "680"
    }, {
        name: "Palestinian Territory",
        ca2: "ps",
        "calling-code": "970"
    }, {
        name: "Panama",
        ca2: "pa",
        "calling-code": "507"
    }, {
        name: "Papua New Guinea",
        ca2: "pg",
        "calling-code": "675"
    }, {
        name: "Paraguay",
        ca2: "py",
        "calling-code": "595"
    }, {
        name: "Peru",
        ca2: "pe",
        "calling-code": "51"
    }, {
        name: "Philippines",
        ca2: "ph",
        "calling-code": "63"
    }, {
        name: "Poland",
        ca2: "pl",
        "calling-code": "48"
    }, {
        name: "Portugal",
        ca2: "pt",
        "calling-code": "351"
    }, {
        name: "Puerto Rico",
        ca2: "pr",
        "calling-code": "1787"
    }, {
        name: "Qatar",
        ca2: "qa",
        "calling-code": "974"
    }, {
        name: "Réunion",
        ca2: "re",
        "calling-code": "262",
        placeholder: "(0)262 28 39 45",
        format: "CCC.CC.CC.CC",
        numbers: 9
    }, {
        name: "Romania",
        ca2: "ro",
        "calling-code": "40"
    }, {
        name: "Russian Federation",
        ca2: "ru",
        "calling-code": "7"
    }, {
        name: "Rwanda",
        ca2: "rw",
        "calling-code": "250"
    }, {
        name: "Saint Kitts and Nevis",
        ca2: "kn",
        "calling-code": "1869"
    }, {
        name: "Saint Lucia",
        ca2: "lc",
        "calling-code": "1758"
    }, {
        name: "Saint Vincent and the Grenadines",
        ca2: "vc",
        "calling-code": "1784"
    }, {
        name: "Samoa",
        ca2: "ws",
        "calling-code": "685"
    }, {
        name: "San Marino",
        ca2: "sm",
        "calling-code": "378"
    }, {
        name: "São Tomé and Príncipe",
        ca2: "st",
        "calling-code": "239"
    }, {
        name: "Saudi Arabia",
        ca2: "sa",
        "calling-code": "966"
    }, {
        name: "Senegal",
        ca2: "sn",
        "calling-code": "221"
    }, {
        name: "Serbia",
        ca2: "rs",
        "calling-code": "381"
    }, {
        name: "Seychelles",
        ca2: "sc",
        "calling-code": "248"
    }, {
        name: "Sierra Leone",
        ca2: "sl",
        "calling-code": "232"
    }, {
        name: "Singapore",
        ca2: "sg",
        "calling-code": "65"
    }, {
        name: "Slovakia",
        ca2: "sk",
        "calling-code": "421"
    }, {
        name: "Slovenia",
        ca2: "si",
        "calling-code": "386"
    }, {
        name: "Solomon Islands",
        ca2: "sb",
        "calling-code": "677"
    }, {
        name: "Somalia",
        ca2: "so",
        "calling-code": "252"
    }, {
        name: "South Africa",
        ca2: "za",
        "calling-code": "27"
    }, {
        name: "South Korea",
        ca2: "kr",
        "calling-code": "82"
    }, {
        name: "Spain",
        ca2: "es",
        "calling-code": "34"
    }, {
        name: "Sri Lanka",
        ca2: "lk",
        "calling-code": "94"
    }, {
        name: "Sudan",
        ca2: "sd",
        "calling-code": "249"
    }, {
        name: "Suriname",
        ca2: "sr",
        "calling-code": "597"
    }, {
        name: "Swaziland",
        ca2: "sz",
        "calling-code": "268"
    }, {
        name: "Sweden",
        ca2: "se",
        "calling-code": "46"
    }, {
        name: "Switzerland",
        ca2: "ch",
        "calling-code": "41",
        placeholder: "(0)22 909 70 00",
        format: "CC.CCC.CC.CC",
        numbers: 9
    }, {
        name: "Syrian Arab Republic",
        ca2: "sy",
        "calling-code": "963"
    }, {
        name: "Taiwan, Province of China",
        ca2: "tw",
        "calling-code": "886"
    }, {
        name: "Tajikistan",
        ca2: "tj",
        "calling-code": "992"
    }, {
        name: "Tanzania",
        ca2: "tz",
        "calling-code": "255"
    }, {
        name: "Thailand",
        ca2: "th",
        "calling-code": "66"
    }, {
        name: "Timor-Leste",
        ca2: "tl",
        "calling-code": "670"
    }, {
        name: "Togo",
        ca2: "tg",
        "calling-code": "228"
    }, {
        name: "Tonga",
        ca2: "to",
        "calling-code": "676"
    }, {
        name: "Trinidad and Tobago",
        ca2: "tt",
        "calling-code": "1868"
    }, {
        name: "Tunisia",
        ca2: "tn",
        "calling-code": "216"
    }, {
        name: "Turkey",
        ca2: "tr",
        "calling-code": "90"
    }, {
        name: "Turkmenistan",
        ca2: "tm",
        "calling-code": "993"
    }, {
        name: "Turks and Caicos Islands",
        ca2: "tc",
        "calling-code": "1649"
    }, {
        name: "Tuvalu",
        ca2: "tv",
        "calling-code": "688"
    }, {
        name: "Uganda",
        ca2: "ug",
        "calling-code": "256"
    }, {
        name: "Ukraine",
        ca2: "ua",
        "calling-code": "380"
    }, {
        name: "United Arab Emirates",
        ca2: "ae",
        "calling-code": "971"
    }, {
        name: "United Kingdom",
        ca2: "gb",
        "calling-code": "44"
    }, {
        name: "United States",
        ca2: "us",
        "calling-code": "1"
    }, {
        name: "Uruguay",
        ca2: "uy",
        "calling-code": "598"
    }, {
        name: "Uzbekistan",
        ca2: "uz",
        "calling-code": "998"
    }, {
        name: "Vanuatu",
        ca2: "vu",
        "calling-code": "678"
    }, {
        name: "Vatican City",
        ca2: "va",
        "calling-code": "379"
    }, {
        name: "Venezuela",
        ca2: "ve",
        "calling-code": "58"
    }, {
        name: "Viet Nam",
        ca2: "vn",
        "calling-code": "84"
    }, {
        name: "Virgin Islands (British)",
        ca2: "vg",
        "calling-code": "1284"
    }, {
        name: "Virgin Islands (U.S.)",
        ca2: "vi",
        "calling-code": "1340"
    }, {
        name: "Western Sahara",
        ca2: "eh",
        "calling-code": "212"
    }, {
        name: "Yemen",
        ca2: "ye",
        "calling-code": "967"
    }, {
        name: "Zambia",
        ca2: "zm",
        "calling-code": "260"
    }, {
        name: "Zimbabwe",
        ca2: "zw",
        "calling-code": "263"
    } ],
// JavaScript object mapping dial code to country code.
// This is used when the user enters a number,
// to quickly look up the corresponding country code.
// Originally from http://libphonenumber.googlecode.com/svn/trunk/javascript/i18n/phonenumbers/metadata.js
// then I commented some weird 001 entries and added some 4-digit country-code
// items at the end e.g. 1246 for Barbados
    countryCodes: {
        "1": [ "us", "ca" ],
        "7": [ "ru", "kz" ],
        "20": [ "eg" ],
        "27": [ "za" ],
        "30": [ "gr" ],
        "31": [ "nl" ],
        "32": [ "be" ],
        "33": [ "fr" ],
        "34": [ "es" ],
        "36": [ "hu" ],
        "39": [ "it" ],
        "40": [ "ro" ],
        "41": [ "ch" ],
        "43": [ "at" ],
        "44": [ "gb", "gg", "im", "je" ],
        "45": [ "dk" ],
        "46": [ "se" ],
        "47": [ "no", "sj" ],
        "48": [ "pl" ],
        "49": [ "de" ],
        "51": [ "pe" ],
        "52": [ "mx" ],
        "53": [ "cu" ],
        "54": [ "ar" ],
        "55": [ "br" ],
        "56": [ "cl" ],
        "57": [ "co" ],
        "58": [ "ve" ],
        "60": [ "my" ],
        "61": [ "au", "cc", "cx" ],
        "62": [ "id" ],
        "63": [ "ph" ],
        "64": [ "nz" ],
        "65": [ "sg" ],
        "66": [ "th" ],
        "81": [ "jp" ],
        "82": [ "kr" ],
        "84": [ "vn" ],
        "86": [ "cn" ],
        "90": [ "tr" ],
        "91": [ "in" ],
        "92": [ "pk" ],
        "93": [ "af" ],
        "94": [ "lk" ],
        "95": [ "mm" ],
        "98": [ "ir" ],
        "211": [ "ss" ],
        "212": [ "ma", "eh" ],
        "213": [ "dz" ],
        "216": [ "tn" ],
        "218": [ "ly" ],
        "220": [ "gm" ],
        "221": [ "sn" ],
        "222": [ "mr" ],
        "223": [ "ml" ],
        "224": [ "gn" ],
        "225": [ "ci" ],
        "226": [ "bf" ],
        "227": [ "ne" ],
        "228": [ "tg" ],
        "229": [ "bj" ],
        "230": [ "mu" ],
        "231": [ "lr" ],
        "232": [ "sl" ],
        "233": [ "gh" ],
        "234": [ "ng" ],
        "235": [ "td" ],
        "236": [ "cf" ],
        "237": [ "cm" ],
        "238": [ "cv" ],
        "239": [ "st" ],
        "240": [ "gq" ],
        "241": [ "ga" ],
        "242": [ "cg" ],
        "243": [ "cd" ],
        "244": [ "ao" ],
        "245": [ "gw" ],
        "246": [ "io" ],
        "247": [ "ac" ],
        "248": [ "sc" ],
        "249": [ "sd" ],
        "250": [ "rw" ],
        "251": [ "et" ],
        "252": [ "so" ],
        "253": [ "dj" ],
        "254": [ "ke" ],
        "255": [ "tz" ],
        "256": [ "ug" ],
        "257": [ "bi" ],
        "258": [ "mz" ],
        "260": [ "zm" ],
        "261": [ "mg" ],
        "262": [ "re", "yt" ],
        "263": [ "zw" ],
        "264": [ "na" ],
        "265": [ "mw" ],
        "266": [ "ls" ],
        "267": [ "bw" ],
        "268": [ "sz" ],
        "269": [ "km" ],
        "290": [ "sh" ],
        "291": [ "er" ],
        "297": [ "aw" ],
        "298": [ "fo" ],
        "299": [ "gl" ],
        "350": [ "gi" ],
        "351": [ "pt" ],
        "352": [ "lu" ],
        "353": [ "ie" ],
        "354": [ "is" ],
        "355": [ "al" ],
        "356": [ "mt" ],
        "357": [ "cy" ],
        "358": [ "fi", "ax" ],
        "359": [ "bg" ],
        "370": [ "lt" ],
        "371": [ "lv" ],
        "372": [ "ee" ],
        "373": [ "md" ],
        "374": [ "am" ],
        "375": [ "by" ],
        "376": [ "ad" ],
        "377": [ "mc" ],
        "378": [ "sm" ],
        "379": [ "va" ],
        "380": [ "ua" ],
        "381": [ "rs" ],
        "382": [ "me" ],
        "385": [ "hr" ],
        "386": [ "si" ],
        "387": [ "ba" ],
        "389": [ "mk" ],
        "420": [ "cz" ],
        "421": [ "sk" ],
        "423": [ "li" ],
        "500": [ "fk" ],
        "501": [ "bz" ],
        "502": [ "gt" ],
        "503": [ "sv" ],
        "504": [ "hn" ],
        "505": [ "ni" ],
        "506": [ "cr" ],
        "507": [ "pa" ],
        "508": [ "pm" ],
        "509": [ "ht" ],
        "590": [ "gp", "bl", "mf" ],
        "591": [ "bo" ],
        "592": [ "gf" ],
        "593": [ "ec" ],
        "594": [ "gy" ],
        "595": [ "py" ],
        "596": [ "mq" ],
        "597": [ "sr" ],
        "598": [ "uy" ],
        "599": [ "cw", "bq" ],
        "670": [ "tl" ],
        "672": [ "nf" ],
        "673": [ "bn" ],
        "674": [ "nr" ],
        "675": [ "pg" ],
        "676": [ "to" ],
        "677": [ "sb" ],
        "678": [ "vu" ],
        "679": [ "fj" ],
        "680": [ "pw" ],
        "681": [ "wf" ],
        "682": [ "ck" ],
        "683": [ "nu" ],
        "685": [ "ws" ],
        "686": [ "ki" ],
        "687": [ "nc" ],
        "688": [ "tv" ],
        "689": [ "pf" ],
        "690": [ "tk" ],
        "691": [ "fm" ],
        "692": [ "mh" ],
        "850": [ "kp" ],
        "852": [ "hk" ],
        "853": [ "mo" ],
        "855": [ "kh" ],
        "856": [ "la" ],
        "880": [ "bd" ],
        "886": [ "tw" ],
        "960": [ "mv" ],
        "961": [ "lb" ],
        "962": [ "jo" ],
        "963": [ "sy" ],
        "964": [ "iq" ],
        "965": [ "kw" ],
        "966": [ "sa" ],
        "967": [ "ye" ],
        "968": [ "om" ],
        "970": [ "ps" ],
        "971": [ "ae" ],
        "972": [ "il" ],
        "973": [ "bh" ],
        "974": [ "qa" ],
        "975": [ "bt" ],
        "976": [ "mn" ],
        "977": [ "np" ],
        "992": [ "tj" ],
        "993": [ "tm" ],
        "994": [ "az" ],
        "995": [ "ge" ],
        "996": [ "kg" ],
        "998": [ "uz" ],
        "1242": [ "bs" ],
        "1246": [ "bb" ],
        "1264": [ "ai" ],
        "1268": [ "ag" ],
        "1284": [ "vg" ],
        "1340": [ "vi" ],
        "1345": [ "ky" ],
        "1441": [ "bm" ],
        "1473": [ "gd" ],
        "1649": [ "tc" ],
        "1664": [ "ms" ],
        "1671": [ "gu" ],
        "1684": [ "as" ],
        "1758": [ "lc" ],
        "1767": [ "dm" ],
        "1784": [ "vc" ],
        "1787": [ "pr" ],
        "1809": [ "do" ],
        "1868": [ "tt" ],
        "1869": [ "kn" ],
        "1876": [ "jm" ]
    }
};