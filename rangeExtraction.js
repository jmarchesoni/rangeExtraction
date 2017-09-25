var rangeExtraction = function(numberList)
{
	// Declare return variable
	let output = "";

	// Make a copy of the input array
	let list = numberList.concat();

	// Initialize our temporary array to hold consecutive values
	// We initialize with the first element of the list array to avoid the extra
	// loop required to check whether the consec array contains a value to
	// compare against on the first loop iteration.
	let consec = [list.shift()];

	// Iterate over list
	for (let value of list)
	{
		// Declare variable to hold current separator. Setting it to an empty
		// string allows us to skip a check later to see if the length of the
		// consec array is equal to 1
		let sep = "";

		// If the current value is one greater than the last value in consec
		if (value === consec[consec.length - 1] + 1)
		{
			// Add the current value to consec
			consec.push(value);
		}
		// Otherwise if not consecutive
		else
		{
			// Figure out whether we have two consecutive numbers or a true range
			// (three or more) and assign the separator accordingly.
			if (consec.length === 2) sep = ",";
			if (consec.length > 2) sep = "-";

			// If the consec array only contains one element, the expression that
			// retrieves the second element when there's more than one will return
			// undefined, which will be cast to an empty string during the
			// concatenation.
			output += "," + consec[0] + sep + consec[consec.length - 1];

			// Reinitialize the consec array with the current value from list.
			consec = [value];
		}
	}

	// Return the formatted range string.
	return output;
}
