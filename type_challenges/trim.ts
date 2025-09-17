type TrimRight<T> = T extends `${infer R} ` ? TrimRight<R> : T;

type Trim<T> = T extends ` ${infer R}` ? Trim<R> : TrimRight<T>;



type trimm = Trim<'   Hello World  '> // expected to be 'Hello World'