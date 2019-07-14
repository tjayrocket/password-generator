# password-generator
A single page app to fix crappy passwords

Password Rules:  

1 - Must be 8 chars. If longer, awesome. If less, prompt user to make it longer or if they want me to fill in the rest.  

2 - Must have 2 upper, 2 lower, 2 numbers, and 2 SPChars minimum.  

How it works:  

Split apart string input and put it into an array of its own.  

Compare each index with the alphabet array.  

When match is found, randomly replace letter with another version of the letter - be it lc, uc, num, spchar, etc.  

Move on to the next letter, and do it again until done with user input string.  

If there aren't enough characters or it doesn't meet the criteria, add or modify the password so that it does.