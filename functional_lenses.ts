// src/lib/lens.ts
export type Lens<S, A> = {
  get: (s: S) => A;
  set: (a: A, s: S) => S;
};

// Build a lens for a property on an object
export const prop =
  <S, K extends keyof S>(key: K): Lens<S, S[K]> => ({
    get: (s) => s[key],
    set: (a, s) => ({ ...s, [key]: a }),
  });

// Compose two lenses: S -> A and A -> B to get S -> B
export const compose =
  <S, A, B>(sa: Lens<S, A>, ab: Lens<A, B>): Lens<S, B> => ({
    get: (s) => ab.get(sa.get(s)),
    set: (b, s) => sa.set(ab.set(b, sa.get(s)), s),
  });

// Basic helpers
export const view = <S, A>(l: Lens<S, A>, s: S): A => l.get(s);
export const set =  <S, A>(l: Lens<S, A>, a: A, s: S): S => l.set(a, s);
export const over = <S, A>(l: Lens<S, A>, f: (a: A) => A, s: S): S =>
  l.set(f(l.get(s)), s);

// Build a path lens in one go: prop('a') ∘ prop('b') ∘ prop('c')
export const path =
  <S>() =>
  <K1 extends keyof S>(k1: K1) =>
  <K2 extends keyof S[K1]>(k2: K2) =>
  <K3 extends keyof S[K1][K2]>(k3: K3) =>
    compose(prop<S, K1>(k1), compose(prop<S[K1], K2>(k2), prop<S[K1][K2], K3>(k3)));