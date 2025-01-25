export function re(
    strs: TemplateStringsArray,
    ...exprs: ReadonlyArray<string | RegExp>
): RegExp {
    let source = "";
    for (let i = 0; i < strs.raw.length; i++) {
        source += strs.raw[i];
        if (i < exprs.length) {
            const item = exprs[i];
            if (item instanceof RegExp) {
                source += `(?:${item.source})`;
            } else {
                source += String(item);
            }
        }
    }
    return new RegExp(source);
}
