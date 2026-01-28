export const colorOpacity = (color: string, opacity: number) => {
  const opacityHex = Math.round(opacity * 255)
    .toString(16)
    .padStart(2, "0"); // si la el numero dado es de un solo digito, 
    // se le agrega un 0 al inicio, y ya que para agregar opacidad se necesita dos esto permite que no haya error.
  return `${color}${opacityHex}`;
};