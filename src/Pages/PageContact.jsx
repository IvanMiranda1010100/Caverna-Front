import React, { useState } from "react";
import {HeaderComponent} from "@Components/Navegation/Header";
import { FooterComponent } from "@Components/Footer";
import ThemeToggleButton from "@Components/Light-Dark/Theme";

export const PageContactMail = () => {
  const [formData, setFormData] = useState({
    email: "",
    nombre: "",
    comentarios: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.nombre || !formData.comentarios) {
      setResponseMessage("Por favor, complete todos los campos");
      setIsSuccess(false);
      return;
    }
  
    setLoading(true);
    try {
      const response = await fetch("https://cavernaserver-production.up.railway.app/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        setResponseMessage("Correo enviado con éxito");
        setIsSuccess(true);
        setFormData({
          email: "",
          nombre: "",
          comentarios: "",
        });
      } else {
        setResponseMessage(result.message || "Error al enviar el correo");
        setIsSuccess(false);
      }
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
      setResponseMessage("Error al enviar el correo");
      setIsSuccess(false);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <>
      <HeaderComponent />
      <ThemeToggleButton />
      <div className="min-h-screen bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 dark:from-gray-800 dark:via-gray-900 dark:to-black flex items-center justify-center px-4 md:px-0">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg md:max-w-xl lg:max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">
            Solicitar un Comic/Libro
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-2 text-lg mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-800 focus:ring-0"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="nombre"
              >
                Nombre del Libro
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="p-2 text-lg mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-800 focus:ring-0"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="comentarios"
              >
                Comentarios (Sobre la web Caverna)
              </label>
              <textarea
                id="comentarios"
                name="comentarios"
                value={formData.comentarios}
                onChange={handleChange}
                rows="4"
                className="p-2 text-lg mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-800 focus:ring-0"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400 focus:outline-none"
                disabled={loading}
              >
                {loading ? "Enviando..." : "Enviar Solicitud"}
              </button>
            </div>
          </form>

          {responseMessage && (
            <div
            className={`fixed z-[999] transition-all top-4 right-4 p-4 ${
              isSuccess ? "bg-green-600" : "bg-red-500"
            } text-white rounded-lg shadow-lg`}
            >
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  viewBox="0 0 24 24"
                  height="24"
                  fill="none"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    fillRule="evenodd"
                    fill="#fff"
                    d="m12 1c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm4.768 9.14c.0878-.1004.1546-.21726.1966-.34383.0419-.12657.0581-.26026.0477-.39319-.0105-.13293-.0475-.26242-.1087-.38085-.0613-.11844-.1456-.22342-.2481-.30879-.1024-.08536-.2209-.14938-.3484-.18828s-.2616-.0519-.3942-.03823c-.1327.01366-.2612.05372-.3782.1178-.1169.06409-.2198.15091-.3027.25537l-4.3 5.159-2.225-2.226c-.1886-.1822-.4412-.283-.7034-.2807s-.51301.1075-.69842.2929-.29058.4362-.29285.6984c-.00228.2622.09851.5148.28067.7034l3 3c.0983.0982.2159.1748.3454.2251.1295.0502.2681.0729.4069.0665.1387-.0063.2747-.0414.3991-.1032.1244-.0617.2347-.1487.3236-.2554z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>{responseMessage}</span>
                <button
                  onClick={() => setResponseMessage("")}
                  className="ml-4 text-white hover:text-gray-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    viewBox="0 0 20 20"
                    height="20"
                  >
                    <path
                      fill="#fff"
                      d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <FooterComponent />
    </>
  );
};
