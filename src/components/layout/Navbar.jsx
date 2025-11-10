import { useState } from "react";
import { FaPhone, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
              className="flex items-center justify-center gap-2 text-gray-700 hover:text-primary transition-colors font-bold text-2xl"
            >
              <h2 className="text-2xl md:text-3xl font-bold">
                <span className="text-secondary font-bold">نق</span>
                <span className="text-primary font-bold">لتكم</span>
              </h2>
              <img
                src={`${import.meta.env.BASE_URL}logo.svg`}
                alt="نقلتكم"
                className="h-15"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
              className="text-gray-700 hover:text-primary transition-colors font-bold"
            >
              الرئيسية
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
              className="text-gray-700 hover:text-primary transition-colors font-bold"
            >
              من نحن
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("services");
              }}
              className="text-gray-700 hover:text-primary transition-colors font-bold"
            >
              خدماتنا
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="text-gray-700 hover:text-primary transition-colors font-bold"
            >
              تواصل معنا
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4 text-primary cursor-pointer hover:text-primary/80 transition-colors">
            <div className="w-10 h-10 bg-primary/80 rounded-full flex items-center justify-center">
              <FaPhone className="text-white w-5 h-5" />
            </div>
            <div className="flex flex-col items-start justify-center">
              <a href="tel:+96597897008" className="font-bold  text-black">
                96597897008+
              </a>
              <p className="text-primary text-sm">اتصل بنا</p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden text-gray-700 hover:text-primary"
          >
            <HiMenu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Off-canvas Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          <div className="fixed right-0 top-0 h-full w-full bg-white shadow-xl transform transition-transform">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <img
                  src={`${import.meta.env.BASE_URL}logo.svg`}
                  alt="نقلتكم"
                  className="h-20"
                />
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <HiX className="w-6 h-6" />
                </button>
              </div>

              <div className="text-right mb-12 w-full ">
                <h2 className="text-2xl font-bold mb-4">
                  <span className="text-secondary font-bold">جاهز</span> تنقل
                  بيتك بسهولة؟
                </h2>
                <p className="text-subtitle text-lg max-w-3xl mx-auto leading-relaxed">
                  فريقنا جاهز يرد عليك 24/7 احجز موعدك أو اطلب عرض سعر مجاني
                  دلوقتي
                </p>

                {/* Contact Info */}
                <a
                  href="tel:+96597897008"
                  className="flex items-start gap-2 mt-6"
                >
                  <div className="w-15 h-15 bg-primary/10 rounded-full flex items-center justify-center">
                    <FaPhone className="text-primary w-6 h-6" />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <span className="font-bold text-md text-black">
                      96597897008+
                    </span>
                    <p className="text-secondary text-md">اتصل بنا</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/96597897008"
                  className="flex items-start gap-2 mt-6"
                >
                  <div className="w-15 h-15 bg-primary/10 rounded-full flex items-center justify-center">
                    <FaWhatsapp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="font-bold text-md text-black">
                      96597897008+
                    </span>
                    <p className="text-secondary text-md">تواصل واتساب</p>
                  </div>
                </a>
              </div>

              <div className="flex gap-3 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-primary hover:bg-primary flex items-center justify-center transition-colors"
                >
                  <FaFacebook className="text-primary w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-primary hover:bg-primary flex items-center justify-center transition-colors"
                >
                  <FaInstagram className="text-primary w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-primary hover:bg-primary flex items-center justify-center transition-colors"
                >
                  <FaWhatsapp className="text-primary w-5 h-5" />
                </a>
              </div>

              <button className="mt-6 w-full bg-primary text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 space-x-reverse hover:bg-blue-600 transition-colors">
                <FaPhone className="w-5 h-5" />
                <span>اتصل بنا</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
