import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsapp = () => {
  return (
    <a
      href="https://wa.me/96597897008"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 text-right"
    >
      <div className="-mr-2 flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-b from-green-400 to-green-600 shadow-lg shadow-green-500/40 ring-4 ring-white">
        <FaWhatsapp className="h-6 w-6 text-white" />
      </div>
      <div className="rounded-2xl bg-white px-4 py-3 shadow-lg shadow-neutral-400/20">
        <span className="block text-sm font-bold text-gray-900">
          حياكم الله
        </span>
        <span className="block text-xs font-semibold text-primary">
          اتصل بنا الآن
        </span>
      </div>
    </a>
  );
};

export default FloatingWhatsapp;
