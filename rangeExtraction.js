var rangeExtraction = function(sortedSetArray)
{
	// Declare return variable
	let output = "";

	// Make a copy of the input array
	let list = sortedSetArray.concat();

	// Initialize our variables to hold the first value and length of range.
	let first, last, length = 0;

	// Declare variable to hold current separator. Setting it to an empty
	// string allows us to skip a check later to see if length is equal to 1
	let sep = "";

	// Iterate over list
	for (let count = 0; count <= list.length; count++)
	{
		// Set current value from array.
		let value = list[count];

		// If the current value is one greater than the last value
		if (value === last + 1)
		{
			// Set the last variable to value and increment length
			last = value;
			length++;
		}
		// Otherwise if not consecutive
		else
		{
			// Figure out whether we have two consecutive numbers or a true range
			// (three or more) and assign the separator accordingly.
			if (length === 2) sep = ",";
			if (length > 2) sep = "-";
			
			// We may need first and/or last to be empty strings depending on where
			// we are in the loop: first run both are undefined, single non-
			// consecutive number means last will be equal to first, last run first
			// will be undefined.
			output += (output ? "," : "") + (first || "") + sep;
			output += (last !== first ? last || "" : "");

			// Reinitialize first and last with the current value from list.
			first = last = value;

			// Set length to 1
			length = 1;

			// Reset sep to an empty string
			sep = "";
		}
	}

	// Return the formatted range string.
	return output;
}
