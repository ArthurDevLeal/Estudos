let n = 2;
switch (typeof n) {
    case "number":
        console.log("Isso e um numero");
        break;
    case "string":
        console.log("Isso e uma string");
        break;
    case "boolean":
        console.log("Isso e um boolean");
        break;
    case "undefined":
        console.log("ele e indefinido");
        break;
    default:
        console.log("Ta achando que sou nerd? so digita numero,string ou boleano ze");
        break;
}
