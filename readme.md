# Joining Array Performance

Three ways to join an array:

~~~javascript
arr = arr.concat(other);
Array.prototype.push.apply(arr, other);
arr.push(...other); //es6 spread
~~~

The results are:

~~~shell
add 1
concat x 13,014 ops/sec ±28.20% (17 runs sampled)
prototype push x 7,894,593 ops/sec ±14.93% (70 runs sampled)
es6 spread x 1,487,987 ops/sec ±4.12% (83 runs sampled)
Fastest is prototype push

add 5
concat x 3,001 ops/sec ±123.61% (7 runs sampled)
prototype push x 1,472,618 ops/sec ±24.88% (62 runs sampled)
es6 spread x 514,753 ops/sec ±9.14% (69 runs sampled)
Fastest is prototype push

add 10
concat x 1,179 ops/sec ±124.77% (5 runs sampled)
prototype push x 788,978 ops/sec ±29.39% (48 runs sampled)
es6 spread x 254,928 ops/sec ±17.68% (63 runs sampled)
Fastest is prototype push
~~~

There is an add 10 test but I ran out of memory running it. There is enough data for a guess at a trend.