import { FaPhone } from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      icon: "🚚",
      title: "نقل العفش المنزلي",
      description:
        "نقل آمن وسريع داخل جميع مناطق الكويت مع التغليف والحماية الكاملة للعفش",
    },
    {
      icon: "📦",
      title: "التغليف الاحترافي",
      description:
        "استخدام مواد تغليف عالية الجودة لحماية العفش من أي خدوش أو أضرار أثناء النقل",
    },
    {
      icon: "🔧",
      title: "فك وتركيب الأثاث",
      description:
        "فنيون متخصصون في فك وتركيب أثاث غرف النوم والمطابخ والمكاتب",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            خدماتنا اللي تريح{" "}
            <span className="text-secondary font-bold">بالك</span>
          </h2>
          <p className="text-subtitle text-xl max-w-3xl mx-auto leading-relaxed">
            فريق نقلتكم جاهز يخدمك في كل تفاصيل النقل - من أول تغليف العفش لحد
            ترتيبه في مكانك الجديد
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-2xl shadow-primary/20 rounded-lg p-6 hover:shadow-primary/40 transition-colors"
            >
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-4xl">{service.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">
                {service.title}
              </h3>
              <p className="text-subtitle text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="tel:+96597897008"
            className="bg-primary text-white px-8 py-3 font-semibold flex items-center justify-center gap-2 hover:bg-primary/80 transition-colors"
          >
            <span>احجز الآن</span>
            <FaPhone className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
