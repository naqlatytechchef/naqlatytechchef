import { FaPhone, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-paragraph text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          {/* Logo and Description */}
          <div>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
              className="flex items-center justify-start gap-2 text-gray-700 hover:text-primary transition-colors font-bold text-2xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-secondary font-bold">نق</span>
                <span className="text-primary font-bold">لتكم</span>
              </h2>
              <img
                src={`${import.meta.env.BASE_URL}logo.svg`}
                alt="نقلتكم"
                className="h-20"
              />
            </a>
            <p>نعتني بعفشك كأنه عفشنا</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("home");
                  }}
                >
                  الرئيسية
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("about");
                  }}
                >
                  من نحن
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("services");
                  }}
                >
                  خدماتنا
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("testimonials");
                  }}
                >
                  آراء العملاء
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
            <div className="space-y-3">
              <a href="tel:+96597897008" className="flex items-center gap-2">
                <FaPhone className="w-5 h-5 text-primary" />
                <span>96597897008+</span>
              </a>
            </div>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-secondary hover:bg-secondary flex items-center justify-center transition-colors"
              >
                <FaFacebook className="text-white w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-secondary hover:bg-secondary flex items-center justify-center transition-colors"
              >
                <FaInstagram className="text-white w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-secondary hover:bg-secondary flex items-center justify-center transition-colors"
              >
                <FaWhatsapp className="text-white w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center py-4">
          <p>
            جميع الحقوق محفوظة{" "}
            <span className="text-secondary font-bold">نق</span>
            <span className="text-primary font-bold">لتكم</span> © 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
