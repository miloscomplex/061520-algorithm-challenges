# Algorithm Challenges

## Gettings Started

To work on an algorithm challenge first create a new file to build out the function / method depending on whether you're using Javascript or Ruby. You can also utilize a `repl` if you so desire: https://repl.it/

You can assume every algorithm will tell you what its function / method takes as an argument and also tells you what that function / method needs to return.

## Strategies

It's best to work on these problems with a pair programming partner. Ideally, first use pseudo-code to plan out the different steps you'll need to take in order to return the proper value. For example:

```
def is_palindrome(string)
  # downcase all letters
  # remove spaces
  # check to see if string is the same as its reverse
end
```

From there, start filling the psuedocode out with real code:

```
def is_palindrome(string)
  string.downcase
  # remove spaces
  # check to see if string is the same as its reverse
end
```

Once you've got a completed function / method, begin testing the code with different input examples to see if your input matches the examples:

```
is_palindrome("Nurses run") --> true
```

Also be sure to try things outside of the examples!

## Debugging

If something isn't working, be sure to check your assumptions. Print out or return the values your getting one at a time to make sure they align with what you're expecting:

```
def is_palindrome(string)
  string.downcase
  puts string
end

is_palindrome("SOMETHING") --> "SOMETHING"
```

It can also help to open up a `node` or `irb` session and run the commands one at a time to build the function / method one line at a time. To open up a session in the terminal, type `irb` or `node` into the console and press enter.

If something isn't returning what you expect, be sure to do a search on the internet for why! Every bug is a learning opportunity!
