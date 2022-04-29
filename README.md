# JS Loop Performance Test

This is a very simple JavaScript Loop Performance test. It consists in create a huge Array using
a given length on the input "Test Array Size" - which is 500.000 by default - and then loop over
this array using the 5 JavaScript loop types available: for, for/in, for/of, while, do-while. The
test uses ES5 notation for better browser compatibility and has no dependencies.  

The results will appear in the format of title and time definition. 
The *start* label shows the time in ms that the loop started.
The *end* label shows the time in ms that loop ended.
And the *time* shows the total time the loop took to complete the operation.