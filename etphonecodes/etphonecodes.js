/*
ETPhoneCodes
version: 0.1.0
description: A javascript object for entering international telephone numbers
repository: https://github.com/EditionsTissot/ETPhoneCodes
license: GNU GENERAL PUBLIC LICENSE Version 2
author: Editions Tissot (http://www.editions-tissot.fr/)
*/

/**
 * Render the <input> for entering international telephone numbers
 * Not compatible with IE9 et -
 *
 * @param string IDNode ID name of the <input> target
 * @param string startCountryCode Country code (alpha-2 / ISO 3166-1) to load at start
 * @param array preferredCountries Array of countries code to display at the beginning of the list
 * @param bool writeCallingCodeAtStart Boolean for write or not the calling code of startCountryCode
 */
var ETPhoneCodes = function (IDNode, disablePlaceholder, startCountryCode, preferredCountries) {
	
	// Default datas (This datas can be overwritten when you call ETPhoneCodes function)
	this.IDNode = "";
	this.startCountryCodeDefault = "fr";
	this.preferredCountriesDefault = ['fr','ch','be','mc','gy','gp','mq','re'];
	this.disablePlaceholder = false;
	this.placeholderDefault = "e.g. +1 702 123 4567";
	
	// Load default data if undefined
	startCountryCode = typeof startCountryCode !== 'undefined' ? startCountryCode : this.startCountryCodeDefault;
	preferredCountries = typeof preferredCountries !== 'undefined' ? preferredCountries : this.preferredCountriesDefault;
	disablePlaceholder = typeof disablePlaceholder !== 'undefined' ? disablePlaceholder : this.disablePlaceholder;
	placeholder = typeof placeholder !== 'undefined' ? placeholder : this.placeholderDefault;
	
	// Check if IDNode is defined and not empty, if not writes error in console
	if (typeof(IDNode) == 'undefined' || IDNode == "") {
		return this.log("ETPhoneCodes - FATAL ERROR: Thank you to specify the \"IDNode\" (The name of attribute id from your <input>).", "error");
	}
	this.IDNode = IDNode;
	
	// Check if node of IDNode is good and exists, if not writes error in console
	var mainNode = document.getElementById(this.IDNode);
	if (mainNode == null) {
		return this.log("ETPhoneCodes - FATAL ERROR: The node of \"IDNode\" does not exist, thank you to specify a id of an existing <input>.", "error");
	} else if (mainNode.getAttribute("type") != "tel" && mainNode.getAttribute("type") != "text") {
		this.log("ETPhoneCodes - WARNING: The type of your <input> must be \"tel\" or \"text\".", "warning");
	}
	
	// Hide elements with class .ETPhoneCodes-hide
	var hide = document.getElementsByClassName('ETPhoneCodes-hide');
	for (var i = 0; i < hide.length; i++) {
		hide[i].style.display = "none";
	}
	
	// Builds start DOM with div
		// Builds main div (container)
		var container = document.createElement('div');
		container.className = "etphonecodes-container";
	    container.setAttribute("id", "etphonecodes-container_"+this.IDNode);
	    container.setAttribute("data-id", this.IDNode);
	    this.wrapNode(mainNode, container);
		
		// Builds other div
	    var flagDropDown = document.createElement('div');
	    flagDropDown.setAttribute("id", "etphonecodes-flag-dropdown_"+this.IDNode);
	    flagDropDown.className = 'f16 etphonecodes-flag-dropdown';
	
	    var selectedFlag = document.createElement('div');
	    selectedFlag.setAttribute("id", "etphonecodes-selected-flag_"+this.IDNode);
	    selectedFlag.className = "etphonecodes-selected-flag";
		
		//In div selected flag
	    var flagCurrent = document.createElement('div');
	    flagCurrent.className = 'flag '+startCountryCode;
		
		var callCode = document.createElement('div');
	    callCode.setAttribute("id", "etphonecodes-callcode_"+this.IDNode);
	    callCode.className = "etphonecodes-callcode";
		
	    var downArrow = document.createElement('div');
	    downArrow.className = 'etphonecodes-down-arrow';
	    
	    // Display div
	    selectedFlag.appendChild(flagCurrent);
		selectedFlag.appendChild(callCode);
		selectedFlag.appendChild(downArrow);
	    flagDropDown.appendChild(selectedFlag);
	    container.insertBefore(flagDropDown, mainNode);
    
    // Builds next DOM with list countries (ul,li)
    	// Builds ul for list
	    var countriesList = document.createElement('ul');
		countriesList.setAttribute("id", "etphonecodes-countries-list_"+this.IDNode);
		countriesList.className = 'hide etphonecodes-countries-list';
		
		var searchZone = document.createElement('input');
	    searchZone.setAttribute("id", "etphonecodes-search-zone_"+this.IDNode);
		searchZone.placeholder = "Nom du pays";
		searchZone.className = "etphonecodes-search-zone";
		countriesList.appendChild(searchZone);
		
		var supprSearchZone = document.createElement('div');
	    supprSearchZone.setAttribute("id", "etphonecodes-suppr-search-zone_"+this.IDNode);
	    supprSearchZone.className = "etphonecodes-suppr-search-zone";
		supprSearchZone.innerHTML = "X";
		countriesList.appendChild(supprSearchZone);
				
		// Builds list of preferred countries
		for (var i=0; i < preferredCountries.length; i++) {
			var data = this.getDataCountryToCA2(preferredCountries[i]);
	        var li = this.createCountryLi(data, true);
	        countriesList.appendChild(li);
		}
	
		// Builds separator between preferred countries and all countries
	    var divider = document.createElement('li');
	    divider.className = 'divider';
		countriesList.appendChild(divider);
		
		// Builds list of all countries
		for (var i=0; i < ETPhoneCodesData['countries'].length; i++) {
			var li = this.createCountryLi(ETPhoneCodesData['countries'][i], false);
			countriesList.appendChild(li);
		}
		
		// Display lists
		flagDropDown.appendChild(countriesList);
	
	// Builds end DOM with hidden input for Calling code value
	var hiddenInput1 = document.createElement('input');
    hiddenInput1.setAttribute("id", "etphonecodes-calling-code_"+this.IDNode);
    hiddenInput1.setAttribute("type", "hidden");
    hiddenInput1.setAttribute("name", IDNode+"_calling-code-value");
    container.insertBefore(hiddenInput1, mainNode);
	
	// Builds end DOM with hidden input for Phone number value
	var hiddenInput2 = document.createElement('input');
    hiddenInput2.setAttribute("id", "etphonecodes-phone-number_"+this.IDNode);
    hiddenInput2.setAttribute("type", "hidden");
    hiddenInput2.setAttribute("name", IDNode+"_phone-number-value");
    container.insertBefore(hiddenInput2, mainNode);
	
	// Builds end DOM with hidden input for value with no format
	var hiddenInput3 = document.createElement('input');
    hiddenInput3.setAttribute("id", "etphonecodes-value_"+this.IDNode);
    hiddenInput3.setAttribute("type", "hidden");
    hiddenInput3.setAttribute("name", mainNode.getAttribute("name"));
    mainNode.setAttribute("name", IDNode+"_display-value");
    container.insertBefore(hiddenInput3, mainNode);
	
	var DisplayCountryCode = document.getElementById("etphonecodes-callcode_"+this.IDNode);
	
	//Take the last value of the input mainNode
	var lastInputValue = "";
	
	// Initialize hidden input value with calling code default
    hiddenInput1.value = this.getDataCountryToCA2(startCountryCode)["calling-code"];
    
    var initCountryCode = "";
	if(mainNode.value.substr(0,2) == "00"){
		for(var i=1;i<=5;i++){
			if(ETPhoneCodesData['countryCodes'][mainNode.value.substr(2,i)]){
				initCountryCode = mainNode.value.substr(2,i);
				i = 99;
			}
		}
	}
	if(initCountryCode != ""){
		mainNode.value = mainNode.value.substr(initCountryCode.length + 2, mainNode.value.length - (initCountryCode.length + 2));
		hiddenInput1.value = initCountryCode;
		hiddenInput2.value = "0"+mainNode.value;
		startCountryCode = ETPhoneCodesData['countryCodes'][initCountryCode][0];
		flagCurrent.className = 'flag '+startCountryCode;
		ETPhoneCodes.prototype.InputFormating(mainNode, startCountryCode, IDNode);
	}
    
	
    // Initialize placeholder of mainNode
    this.changePlaceholderFromCA2(mainNode, startCountryCode, disablePlaceholder);
	
	// Write calling code
	DisplayCountryCode.innerHTML = "+" + this.getDataCountryToCA2(startCountryCode)["calling-code"];
	
	
	// Show or hide countries list when click
	document.body.onclick = function(e){
		var dataID = ETPhoneCodes.prototype.getDataID(ETPhoneCodes.prototype.getEventTarget(e));
		ETPhoneCodes.prototype.showOrHideCountriesList(e, dataID);
	};

	// Manage click in countries list (Choose a country in list)
	countriesList.onclick = function(e) {
		var target = ETPhoneCodes.prototype.getEventTarget(e);
		var dataID = ETPhoneCodes.prototype.getDataID(ETPhoneCodes.prototype.getEventTarget(e));
		if (countriesList.style.display == "block" && target.getAttribute("id") != "etphonecodes-countries-list_"+dataID && target.className != "divider" && target.getAttribute("id") != "etphonecodes-suppr-search-zone_"+dataID && target.className != "etphonecodes-search-zone") {
			if (target.parentNode == countriesList) {
				ETPhoneCodes.prototype.manageClickCountry(mainNode, target, startCountryCode,  DisplayCountryCode, dataID, disablePlaceholder);
				
			}else{
				ETPhoneCodes.prototype.manageClickCountry(mainNode, target.parentNode, startCountryCode,  DisplayCountryCode, dataID, disablePlaceholder);
			}
			lastInputValue = ETPhoneCodes.prototype.InputFormating(mainNode, startCountryCode, dataID);
		}
	};
	
	mainNode.onfocus = function(e){
		ETPhoneCodes.prototype.changePlaceholderFromCA2(mainNode, startCountryCode, true);
	};
	
	mainNode.onblur = function(e){
		var dataID = ETPhoneCodes.prototype.getDataID(ETPhoneCodes.prototype.getEventTarget(e));
		var CA2ActiveContainer = document.getElementById("etphonecodes-container_"+dataID);
		var CA2Active = CA2ActiveContainer.getElementsByClassName("country active")[0];
		if (typeof CA2Active !== "undefined") {
			CA2Active = CA2Active.getAttribute("data-country-code");
		} else {
			CA2Active = startCountryCode;
		}
		ETPhoneCodes.prototype.changePlaceholderFromCA2(mainNode, CA2Active, disablePlaceholder);
	};
	
	//empeche la saisi de tout les caractère non autorisé
	mainNode.onkeypress = function (e) {
	};
	
	
	// Manage format and limit when a key is down
	mainNode.onkeydown = function (e) {
		
		// Initialize values to check
		var dataID = ETPhoneCodes.prototype.getDataID(ETPhoneCodes.prototype.getEventTarget(e));
		var value = mainNode.value;
		var CA2ActiveContainer = document.getElementById("etphonecodes-container_"+dataID);
		var CA2Active = CA2ActiveContainer.getElementsByClassName("country active")[0];
		if (typeof CA2Active !== "undefined") {
			CA2Active = CA2Active.getAttribute("data-country-code");
		} else {
			CA2Active = startCountryCode;
		}
        
		return true;
	};
	
	
	// Check calling code, format when key is up
	mainNode.onkeyup = function (e) {
		var dataID = ETPhoneCodes.prototype.getDataID(ETPhoneCodes.prototype.getEventTarget(e));
		if(lastInputValue.trim() != mainNode.value.trim())
		{
			lastInputValue = ETPhoneCodes.prototype.InputFormating(mainNode, startCountryCode, dataID);
		}
	};
	
		
	// Manage click in suppr button (for the search zone)
	supprSearchZone.onclick = function(e) {
		search_zone.value = "";
		search_zone.onkeyup();
	};
	
	var search_zone = document.getElementById("etphonecodes-search-zone_"+this.IDNode);
	
	// Manage the search zone
	search_zone.onkeyup = function (e) {
		
		// Initialize values to check
		var container = document.getElementById("etphonecodes-container_"+IDNode);
		var value = search_zone.value;
		var allCountry = container.getElementsByClassName("country");
		
		if(value.trim() != "")
		{
			// Hide the country list
			for (var i=0; i < allCountry.length; i++) {
				allCountry[i].className = allCountry[i].className.replace("hidden","").trim() + ' hidden';
			}
		}
		
		else
		{
			// Display the country list
			for (var i=0; i < allCountry.length; i++) {
				allCountry[i].className = allCountry[i].className.replace("hidden", "").trim();
			}
		}
        
		var checkFormat = value.toUpperCase();
		checkFormat = new RegExp(checkFormat);
		
		for (var i=0; i < allCountry.length; i++) {
			//find every country coresponding with the input user
			if(checkFormat.test(allCountry[i].getElementsByClassName("country-name")[0].innerHTML.toUpperCase()))
			{
				//hide the prefered country
				if(!new RegExp("preferred").test(allCountry[i].className))
				{
					//Display searched country
					allCountry[i].className = allCountry[i].className.replace("hidden", "").trim();
				}
			}
		}
		
		return true;
	};
    
};

ETPhoneCodes.prototype.getDataID = function(elm){
	if(elm.tagName != "BODY"){ //verifie pas body
		if(elm.getAttribute('data-id') != null && elm.getAttribute('data-id') != ""){
			return elm.getAttribute('data-id');
		}else{
			return ETPhoneCodes.prototype.getDataID(elm.parentNode);
		}	
	}else{
		return "";
	}
};
	
/**
 * Write message in console
 * 
 * @param string msg Message to display
 * @param string color Model of colors to displaying message
 */
ETPhoneCodes.prototype.log = function (msg, color) {
	color = color || "black";
	bgc = "White";
	
	switch (color) {
		case "success":
			color = "Green";
			bgc = "LimeGreen";
			break;
		
		case "info":
			color = "DodgerBlue";
			bgc = "Turquoise";
			break;
		
		case "error":
			color = "Red";
			bgc = "Black";
			break;
		
		case "start":
			color = "OliveDrab";
			bgc = "PaleGreen";
			break;
		
		case "warning":
			color = "Tomato";
			bgc = "Black";
			break;
		
		case "end":
			color = "Orchid";
			bgc = "MediumVioletRed";
			break;
		
		default:
			color = color;
	}

	if (typeof msg == "object") {
		console.log(msg);
	} else if (typeof color == "object") {
		console.log("%c" + msg, "color: PowderBlue;font-weight:bold; background-color: RoyalBlue;");
		console.log(color);
	} else {
		console.log("%c" + msg, "color:" + color + ";font-weight:bold; background-color: " + bgc + ";");
	}
};


/**
 * formating all is in the input
 * 
 * @param node mainNode Input tel
 * @param string startCountryCode Default ca2
 */
ETPhoneCodes.prototype.InputFormating = function(mainNode, startCountryCode, IDNode) {
	        
	// Applies format
	//Z = 1-9
	//C = 0-9
	//. = "space"
	// Initialize values
	var value = mainNode.value;
	var previousValue = value;
	var zeroFounded = false;
	
	var encapsule = document.getElementById("etphonecodes-container_"+IDNode);

	//delete started 0
	value = value.replace(/\(0\)|^0/g,"");
	value = value.replace(/\(0/g,"");
	value = value.replace(/0\)/g,"");
	
	if(previousValue == value)
		zeroFounded = false;
	else
		zeroFounded = true;
	
	var callingCodeActive = "";
	var CA2Active = encapsule.getElementsByClassName("country active")[0];
	
	if (typeof CA2Active !== "undefined") {
		CA2Active = CA2Active.getAttribute("data-country-code");
	} else {
		CA2Active = startCountryCode;
	}
	
	var dataCountry = ETPhoneCodes.prototype.getDataCountryToCA2(CA2Active);
					
	//Vérifie le format et supprime tout les caractère non autorisé
	value = value.replace(/[^0-9]/g,"");
	
	var number_length = 10;
	
	if(typeof dataCountry["numbers"] !== 'undefined')
	{
		number_length = dataCountry["numbers"];
	}
		
	if(value.length > number_length)
	{
		value = value.substr(0,number_length);
	}
		
	var callingCodeActive = ETPhoneCodes.prototype.getDataCountryToCA2(startCountryCode)["calling-code"];

	// Check format only if calling code is correct
	if(callingCodeActive != "" && CA2Active != ""){
		// Initialize values
		var checkFormat = {Z: /[1-9]/, C: /[0-9]/};
		var valueForFormat = value.replace(/ /g, "").trim();
		var dataCountry = ETPhoneCodes.prototype.getDataCountryToCA2(CA2Active);
		var newValueWithFormat = "";
		
		// If format model exists applies
		if (typeof dataCountry['format'] !== 'undefined' && valueForFormat != "") {
			
			var j = 0;
			// On each character check if good
			for (var i=0; i < valueForFormat.length; i++) {
				
				// If the value is not longer than format model, if it's, adds character without checking				
				character = valueForFormat.substr(i,1);
				
				if (j < dataCountry['format'].length) {
					
					format = dataCountry['format'].substr(j,1);
					
					// If a space is expected, add space and go to next character
					if (format == ".") {
						newValueWithFormat += " ";
						j++;
						format = dataCountry['format'].substr(j,1);
					}
					
					// If character is good, is add
					if(checkFormat[format].test(character)){
						newValueWithFormat += ""+character;
					}else{
						// If not, if is a zero but not expected erase it
						if(!(character == "0" && format == "Z")){
							j = dataCountry['format'].length;
							newValueWithFormat += ""+character;
						}
					}
					
				}else{
					newValueWithFormat += ""+character;
				}
				
				j++;
			}
		}
		
		if(typeof dataCountry['format'] !== 'undefined')
		{
			//add the initial (0)
			if(newValueWithFormat != "")
			{
				newValueWithFormat = "(0)" + newValueWithFormat ;
			}
			else
			{
				
				if(zeroFounded == false || previousValue == "(0)" || previousValue == "(0" || previousValue == "0)")
				{
					newValueWithFormat = newValueWithFormat ;	
				}
				else
				{
					newValueWithFormat = "(0)" + newValueWithFormat ;
				}
					
			}
			
			mainNode.value = newValueWithFormat;
			value = mainNode.value;
		}
		else
		{
			var unregistedCountryValue = mainNode.value;
			
			unregistedCountryValue = unregistedCountryValue.replace(/[^0-9]/g,"");
			mainNode.value = unregistedCountryValue;
		}
		
		
	}
	
	 // Set value in hidden input with no format
	document.getElementById("etphonecodes-calling-code_"+IDNode).value = dataCountry['calling-code'];
	document.getElementById("etphonecodes-phone-number_"+IDNode).value = mainNode.value.replace("(0)","0").replace(/ /g, "").trim();
	document.getElementById("etphonecodes-value_"+IDNode).value = "00" +  dataCountry['calling-code'] + mainNode.value.replace("(0)","").replace(/ /g, "").trim();
	
	return value;
};



/**
 * Get country data with only code-alpha-2 (ca2)
 * 
 * @param string ca2 The country code-alpha-2 to get datas
 * @return array Country datas
 */
ETPhoneCodes.prototype.getDataCountryToCA2 = function (ca2) {
    var countryData = [];
    for (var i=0; i < ETPhoneCodesData['countries'].length; i++) {
        if (ETPhoneCodesData['countries'][i]["ca2"] == ca2) {
            countryData = ETPhoneCodesData['countries'][i];
            i = ETPhoneCodesData['countries'].length;
        }
    }
    return countryData;
};

/**
 * Change the placeholder of the node, with the placeholder find with ca2
 * 
 * @param node node The node target
 * @param string ca2 The country code-alpha-2 to get country placeholder
 */
ETPhoneCodes.prototype.changePlaceholderFromCA2 = function (node, ca2, disable){
	var placeholdertxt = this.getDataCountryToCA2(ca2)["placeholder"];
	if (typeof placeholdertxt == 'undefined' || placeholdertxt == "" || disable) {
		placeholdertxt = "";
	}
	node.placeholder = placeholdertxt;
};

/**
 * Display elmt between wrap
 * 
 * @param node elmt Node to insert between wrap
 * @param node wrap Parent node to insert
 */
ETPhoneCodes.prototype.wrapNode = function (elmt, wrap) {
	var parent = elmt.parentNode;
	var previous = elmt.previousSibling;
	var next = elmt.nextSibling;
	wrap.appendChild(elmt);
	if(previous == parent){
		if(next == parent){
			parent.appendChild(wrap);
		}else{
			parent.insertBefore(wrap, next);
		}
	}else{
		this.insertAfter(wrap, previous);
	}
};

/**
 * Display newNode after referenceNode
 * 
 * @param node newNode Node to insert after referenceNode
 * @param node referenceNode Node for insert newNode before
 */
ETPhoneCodes.prototype.insertAfter = function (newNode, referenceNode) {
	referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};

/**
 * Create element li with country datas
 * 
 * @param array data Country data
 * @param bool isPreferred Boolean for add class preferred
 * @return node The li buils
 */
ETPhoneCodes.prototype.createCountryLi = function (data, isPreferred) {
    var classtxt = "country";
    isPreferred = typeof isPreferred !== 'undefined' ? isPreferred : false;
    
    if (data == null) {
        return false;
    }
    
    if (isPreferred) {
        classtxt += " preferred";
    }

    var li = document.createElement('li');
    li.className = classtxt;
    li.setAttribute("data-country-code", data['ca2']);
    li.setAttribute("data-dial-code", data['calling-code']);
    var div = document.createElement('div');
    div.className = "flag "+data['ca2'];
    li.appendChild(div);
    var span = document.createElement('span');
    span.className = "country-name";
    span.innerHTML = data['name'];
    li.appendChild(span);
    span = document.createElement('span');
    span.className = "dial-code";
    span.innerHTML = "+"+data['calling-code'];
    li.appendChild(span);

    return li;
};

/**
 * Get the node target when click
 *
 * @param event e
 * @return node The node target
 */
ETPhoneCodes.prototype.getEventTarget = function (e) {
    e = e || window.event;
    return e.target || e.srcElement; 
};

/**
 * Show or Hide countries list
 * 
 * @param event e 
 */
ETPhoneCodes.prototype.showOrHideCountriesList = function (e, IDNode) {
	if(IDNode == ""){
		var lists = document.getElementsByClassName('etphonecodes-countries-list');
		for (var i=0; i < lists.length; i++) {
			lists[i].style.display = 'none';
		}
	}else{
		var target = this.getEventTarget(e);
		var countriesList = document.getElementById("etphonecodes-countries-list_"+IDNode);
		if (target.className!= 'down-arrow' && target.parentNode.getAttribute("id") != 'etphonecodes-selected-flag_'+IDNode && target.parentNode.getAttribute("id") != 'etphonecodes-flag-dropdown_'+IDNode && target.className != 'etphonecodes-search-zone' && target.getAttribute("id") != 'etphonecodes-suppr-search-zone_'+IDNode) {
	        countriesList.style.display = 'none';
	   	} else {
			if (countriesList.style.display == "block" && target.className != 'etphonecodes-search-zone' && target.getAttribute("id") != 'etphonecodes-suppr-search-zone_'+IDNode ) {
	        	countriesList.style.display = 'none';
	    	} else {
	    		var lists = document.getElementsByClassName('etphonecodes-countries-list');
				for (var i=0; i < lists.length; i++) {
					lists[i].style.display = 'none';
				}
	        	countriesList.style.display = 'block';
	    	}
	   }	
	}
};


/**
 * Change country active when click on a country to the list
 * 
 * @param node mainNode Input tel
 * @param node target Click element (country selected)
 * @param string startCountryCode Default ca2
 */
ETPhoneCodes.prototype.manageClickCountry = function (mainNode, target, startCountryCode, DisplayCountryCode, IDNode, disablePlaceholder) {
	var callingCodeActive = ETPhoneCodes.prototype.getDataCountryToCA2(startCountryCode)["calling-code"];
	var encapsule = document.getElementById("etphonecodes-container_"+IDNode);
	
	// If a country is active, remove it
	var countryActive = encapsule.getElementsByClassName("country active")[0];
	if (typeof(countryActive) !== 'undefined' ){
		callingCodeActive = countryActive.getAttribute("data-dial-code");
        countryActive.className = countryActive.className.replace(/active/g, "").trim() ;
    }
                
    // Activate country selected
    target.className += " active";
    
    // Change calling code in main input
    DisplayCountryCode.innerHTML = "+" + target.getAttribute("data-dial-code");
    
    // Change placeholder
    ETPhoneCodes.prototype.changePlaceholderFromCA2(mainNode, target.getAttribute("data-country-code"), disablePlaceholder);
    
    // Change flag active
    document.getElementById("etphonecodes-selected-flag_"+IDNode).getElementsByClassName("flag")[0].className = 'flag '+ target.getAttribute("data-country-code");
    
	//Update hidden input
	document.getElementById("etphonecodes-calling-code_"+IDNode).value = "+" + target.getAttribute("data-dial-code");
	document.getElementById("etphonecodes-value_"+IDNode).value = "+" + target.getAttribute("data-dial-code") + mainNode.value.replace(/ /g, "").trim();
		
    mainNode.focus(); 
};