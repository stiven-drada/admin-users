export function PascalCase (string) {
    
    let palabras = string.split(" ");
    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
    }
    let resultado = palabras.join(" ");
return resultado
}


