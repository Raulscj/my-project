import { Listbox, Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { faker } from "@faker-js/faker";
import Opciones from "./Opciones";

export default function Reserver() {
  const nombre = faker.name.fullName();
  const correo = faker.internet.email();
  const numero = faker.phone.number("+###########");
  const [name, setName] = useState(nombre);
  const [email, setEmail] = useState(correo);
  const [number, setNumber] = useState(numero);

  /* Modal config*/
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  /* Envio del formulario */
  const handleSubmit = (e) => {
    e.preventDefault();
    openModal();
    console.log(name, email, number);
    setName(nombre);
    setEmail(correo);
    setNumber(numero);
  };

  return (
    <>
      <form
        className="bg-teal-800 flex flex-col items-center mx-3 px-2 py-10 mt-14"
        onSubmit={handleSubmit}
      >
        <input
          className="text-xs p-2  mx-1 my-3"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="Nombre completo"
          required
        />
        <input
          className="text-xs p-2  mx-1 my-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="@gmail.com"
          id="email"
          name="email"
          required
        />
        <input
          className="text-xs p-2  mx-1 my-3"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          type="tel"
          placeholder="0416/0412/0414"
          id="Telefono"
          name="Telefono"
          required
        />
        <Opciones />
        <button
          type="submit"
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Enviar
        </button>

        {/* MODAL */}
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Información enviada
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        ¡Para estar al tanto de nuestras promociones puedes
                        seguirnos por instagram, y participar en los live para
                        ganarte sorpresas! En la brevedad se comunicaran a tu
                        Whatsapp con los pasos a seguir para que tengas tu DT
                        soñado 😍
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        ¡Estupendo!
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </form>
    </>
  );
}
