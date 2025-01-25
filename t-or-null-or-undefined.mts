function f(optionalStr: string | null | undefined) {
    if (optionalStr == null) {
        console.log("null or undefined");
    } else {
        console.log(optionalStr);
    }
}

f(null)
f(undefined)
f("a")
