import { Car } from "lucide-react";

export default function NavBar() {
  return (
    <>
      <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Car className="w-6 h-6 text-blue-800" />
              </div>
              <h1 className="text-4xl font-bold">AutoMax</h1>
            </div>
            <p className="text-xl text-blue-100 mb-2">
              Tu concesionario de confianza desde 1995
            </p>
            <p className="text-blue-200">
              Especialistas en venta, compra y servicio de vehículos
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
