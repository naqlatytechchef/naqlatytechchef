import { FaPhone, FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 ">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <span className="text-secondary font-bold">جاهز</span> تنقل بيتك
          بسهولة؟
        </h2>
        <p className="text-subtitle text-xl max-w-3xl mx-auto leading-relaxed mb-6">
          فريقنا جاهز يرد عليك 24/7 احجز موعدك أو اطلب عرض سعر مجاني دلوقتي
        </p>

        {/* Contact Info */}
        <div className="flex items-center justify-center space-x-10">
          <a
            href="https://wa.me/96597897008"
            className="font-bold text-lg text-black flex flex-col items-center justify-center gap-4 bg-primary/10 rounded-lg p-4 w-52"
          >
            <div className="w-15 h-15 bg-primary rounded-full flex items-center justify-center">
              <FaWhatsapp className="w-6 h-6 text-white" />
            </div>
            {/* <span>96597897008+</span> */}
            <p className="text-primary text-lg">تواصل واتساب</p>
          </a>

          <a
            href="tel:+96597897008"
            className="font-bold text-lg text-black flex flex-col items-center justify-center gap-4 bg-primary/10 rounded-lg p-4 w-52"
          >
            <div className="w-15 h-15 bg-primary rounded-full flex items-center justify-center">
              <FaPhone className="w-6 h-6 text-white" />
            </div>
            {/* <span>96597897008+</span> */}
            <p className="text-primary text-lg">اتصل بنا</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
