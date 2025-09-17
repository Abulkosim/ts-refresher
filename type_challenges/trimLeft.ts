
type TrimLeft<T> = T extends ` ${infer R}` ? TrimLeft<R> : T;

type trimmed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '

