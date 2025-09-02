type Arr = ['1', '2', '3']

type TupleToUnion<A extends any[]> = A[number]

type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'