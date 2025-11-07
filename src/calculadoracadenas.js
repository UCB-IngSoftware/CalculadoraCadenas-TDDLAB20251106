export default function sumarCadena(cadena) {
  if (cadena === "") {
    return 0;
  }
  const numeros = cadena.split(",");
  let resultado = 0;
  for (const numero of numeros) {
    if (numero < 1000) {
      resultado += Number.parseInt(numero);
    }
  }
  return resultado;
}
