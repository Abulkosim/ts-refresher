type ExampleType = Promise<Promise<Promise<string>>>

type MyAwaited<T> = T extends PromiseLike<infer U> ? MyAwaited<U> : T;
type Result = MyAwaited<ExampleType> // string