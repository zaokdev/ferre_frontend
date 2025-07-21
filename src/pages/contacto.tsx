import { subtitle, title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import clsx from "clsx";

const Contacto = () => {
  return (
    <DefaultLayout>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className="p-4 md:p-8 h-fit dark:bg-gray-900 rounded-xl">
          <span className={clsx(subtitle())}>Nos encontramos en...</span>
          <p className="mb-4">
            Calle 20 #192 Col. Centro <br />
            Ciudad del Carmen, Campeche
          </p>
          <iframe
            className="w-full rounded-xl hover:shadow-md hover:shadow-white transition-shadow"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d472.5642362350478!2d-91.8388713!3d18.6409219!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85f1a82454cf9bb5%3A0x9859d7537b9b655e!2sLa%20Ferreteria%20Del%20Mercado!5e0!3m2!1sen!2smx!4v1752886418891!5m2!1sen!2smx"
            loading="lazy"
          ></iframe>
        </div>
        <div>
          <form
            className="dark:bg-gray-900 p-4 md:p-8 rounded-xl bg-gray-200"
            action="https://api.web3forms.com/submit"
            method="POST"
            id="form"
          >
            <div className="py-6">
              <span className={clsx(title(), "text-orange-600")}>
                Cotizaciones
              </span>
              <span className={clsx(subtitle())}>
                ¿Necesitas una cotización por correo? Nosotros te la
                proporcionamos.
              </span>
            </div>

            <input
              type="hidden"
              name="access_key"
              value="YOUR_ACCESS_KEY_HERE"
            />
            <input
              type="hidden"
              name="subject"
              value="New Submission from Web3Forms"
            />
            <input
              type="checkbox"
              name="botcheck"
              id="botcheck"
              style={{ display: "none" }}
            />

            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm text-gray-400"
              >
                Nombre
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Nombre"
                required
                className="w-full px-3 py-2 h-12 rounded-sm placeholder-gray-500 text-gray-900 bg-gray-100 text-sm focus:outline-none"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm text-gray-400"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="123@company.com"
                required
                className="w-full px-3 py-2 h-12 rounded-sm placeholder-gray-500 text-gray-900 bg-gray-100 text-sm focus:outline-none"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm text-gray-400"
              >
                Numero celular
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="123456789"
                required
                className="w-full px-3 py-2 h-12 rounded-sm placeholder-gray-500 text-gray-900 bg-gray-100 text-sm focus:outline-none"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm text-gray-400"
              >
                Mensaje
              </label>
              <textarea
                rows={5}
                name="message"
                id="message"
                placeholder="Escriba su mensaje..."
                required
                className="w-full px-3 py-2 rounded-sm placeholder-gray-500 text-gray-900 bg-gray-100 text-sm focus:outline-none"
              ></textarea>
            </div>

            <div className="mb-6">
              <button
                type="submit"
                className="w-full bg-orange-600 inline-block text-white no-underline hover:cursor-pointer hover:bg-orange-800 transition-all hover:text-indigo-100 py-4 px-4 rounded-xl focus:outline-none"
              >
                Enviar
              </button>
            </div>

            <p className="text-base text-center text-gray-400" id="result"></p>
          </form>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Contacto;
