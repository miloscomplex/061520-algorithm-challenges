# Clock Angle Checker

Create a function / method that, when given a time of day in a 12 hour format returns the angle between the big hand and the small hand on a clock as an integer.

For example:

```
clockAngle("12:30") --> 180

clockAngle("3:20") --> 30
```

Assume the big hand remains steady and only changes at the top of the hour (in other words, at 12:30 the big hand is still at 0 degrees on the clock face).

The angle ought to be the smaller angle between the two hands.

## Bonus

As a bonus, assume the big hand continues to move forward each minute so at 12:30 it'll be between the 12 and the 1:

```
clockAngle("12:30") --> 165

clockAngle("3:20") --> 20
```

If you get decimals, round to the nearest degree.
