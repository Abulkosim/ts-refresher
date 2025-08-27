type Includes<T extends readonly any[], U> = T extends [infer L, ...infer R]
  ? [U, L] extends [L, U]
    ? true
    : Includes<R, U>
  : false

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Santana'> // expected to be `false`