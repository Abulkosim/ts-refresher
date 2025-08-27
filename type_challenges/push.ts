type Push<T extends readonly unknown[], K> = [...T, K]

type Result = Push<[1, 2], '3'> // [1, 2, '3']