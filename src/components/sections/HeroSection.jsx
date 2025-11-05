import { FaPhone } from "react-icons/fa";

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-16 md:pt-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-right">
            <p className="text-primary font-bold mb-4">
              نقلتي… راحتك تبدأ من أول خطوة نقل
            </p>
            <h1 className="text-3xl md:text-4xl  font-bold mb-6 leading-tight">
              تنقل بيتك؟ خليها سهلة مع{" "}
              <span className="text-secondary font-bold">نق</span>
              <span className="text-primary font-bold">لتي</span>
            </h1>
            <p className="text-subtitle mb-8 leading-relaxed">
              أفضل خدمة نقل عفش بالكويت - تغليف أمن نقل سريع، وفريق محترف يحافظ
              على ممتلكاتك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="tel:+96597897008"
                className="bg-primary text-white px-8 py-3 font-semibold flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors"
              >
                <span>اتصل الآن</span>
                <FaPhone className="w-5 h-5" />
              </a>
              <button
                onClick={() => scrollToSection("about")}
                className="border-2 border-primary text-primary px-8 py-3 font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                من نحن
              </button>
            </div>
          </div>

          {/* Right Images */}
          <img
            src="/hero.png"
            alt="Hero Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
