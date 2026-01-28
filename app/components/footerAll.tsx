import Image from "next/image";

export default function FooterAll() {
  return (
    <div className="tamaño">
      <p className="text-sm text-white">
        &copy; 2026 Mi Aplicación. Todos los derechos reservados.
      </p>
      <Image
        src="/icon/sin_fondo.png"
        alt="Logo"
        width={80}
        height={80}
      />
    </div>
  );
}