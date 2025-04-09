function firstWord(s) {
	if (!s) return s;
	s = s.trim();
	const spaceIndex = s.indexOf(" ");
	if (spaceIndex === -1) {
		return s ;
	}
	return s.slice(0,spaceIndex)
	
  // your code here
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
