var rangeExtraction = function(numberList)
{
	// Declare return variable
	let output = "";

	// Make a copy of the input array
	let list = numberList.concat();

	// Initialize our variables to hold the first value and length of range.
	// TODO: Change array-based code to discrete values
	let first, last, length;

	// Declare variable to hold current separator. Setting it to an empty
	// string allows us to skip a check later to see if the length of the
	// consec array is equal to 1
	let sep = "";

	// Iterate over list
	for (let value of list)
	{

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
			// (three or more) and assign the separator accordingly. We can't just
			// check to see if it's equal to 2 because a length of one requries a
			// a zero-length string for the separator.
			sep = (length > 1 && length < 3) ? "," : "-";
			
			// We may need first and/or last to be empty strings depending on where
			// we are in the loop: first run both are undefined, single non-
			// consecutive number means last will be undefined, last run first will
			// be undefined.
			output += "," + (first || "") + sep + (last || "");

			// Reinitialize first with the current value from list.
			first = value;

			// Reset last to undefined
			last = void 0;

			// Set length to 1
			length = 1;

			// Reset sep to an empty string
			sep = "";
		}
	}

	// Return the formatted range string.
	return output;
}
