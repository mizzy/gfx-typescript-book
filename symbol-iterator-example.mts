class MyList<T> {
    [Symbol.iterator](): Iterator<T> {
        throw new Error("実装は省略");
    }
}
