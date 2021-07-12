export class StringUtils {
    static helperPluralize = (count:number, noun:string, suffix = "s") =>
        ` ${noun}${count !== 1 ? suffix : ""} `;
}