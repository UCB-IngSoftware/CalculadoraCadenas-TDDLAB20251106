export default function sumarCadena(cadena) {
  if (cadena === "") {
    return 0;
  }
  let numeros = cadena.split(",");
  if (numeros.length > 1) {
    return parseInt(numeros[0]) + parseInt(numeros[1]);
  }
  return parseInt(cadena);
}
