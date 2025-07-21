import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import clsx from "clsx";
import { useQuery } from "@tanstack/react-query";

export default function IndexPage() {
  //Todo lo que necesitas en ferretería, plomería, eléctrico y más

  const API_URL = import.meta.env.VITE_API_URL;

  async function fetchData() {
    const res = await fetch(`${API_URL}/promos`);
    return res.json();
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ["promos"],
    queryFn: fetchData,
    staleTime: 1000 * 60 * 60, // 1 hora frescos
    gcTime: 1000 * 60 * 60 * 24, // 24 horas en caché
  });

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 bg-fondo-ferre bg-cover bg-center">
        <div className="inline-block max-w-lg text-center justify-center py-12">
          <span className={title({ color: "yellow" })}>Todo lo&nbsp;</span>
          <span className={title({ color: "violet" })}>necesario&nbsp;</span>
          <br />
          <span className={title({ color: "yellow" })}>
            en ferretería, plomería, eléctricos y más
          </span>
        </div>

        <div className="flex gap-3">
          <Link
            className={clsx(
              buttonStyles({
                radius: "full",
                variant: "shadow",
              }),
              "bg-orange-700 text-white"
            )}
            href="/contacto"
          >
            Contacto
          </Link>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <span className={clsx(title(), "text-center mb-6")}>
          Promociones disponibles&nbsp;
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-center">
          {isLoading && <p>Cargando...</p>}
          {data?.length > 0 &&
            data?.map((promo: any) => (
              <img src={promo.url} key={promo.public_id} className="md:h-3/4" />
            ))}
        </div>
        {isError && (
          <p className="text-center">
            Informacion no disponible por el momento, entra a nuestro facebook
            para ver promociones.
          </p>
        )}
      </section>
    </DefaultLayout>
  );
}
