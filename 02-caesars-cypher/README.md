# Caesar's Cipher

Create a function / method that when given a string containing only letters, returns a string where all of its characters are shifted in the alphabet by 3 letters. If a letter would go past "z", it wraps back around to the beginning of the alphabet. Examples:

```
cipher("a") --> "d"
cipher("bad") --> "edg"
cipher("zap") --> "cds"
```

Non-letter characters remain in place:

```
cipher("123 sesame street!") --> "123 vhvdph vwuhhw!"
```

You can assume all characters are downcased however as a stretch feature, preserve letter casing:

```
cipher("AbC") --> "DeF"
```

BONUS: Create a reverse cipher as well:

```
reverseCipher("123 vhvdph vwuhhw!") --> "123 sesame street!"
```

If you're interested, check out the historical cipher here: https://en.wikipedia.org/wiki/Caesar_cipher
