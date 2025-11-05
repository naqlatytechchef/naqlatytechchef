import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-30">
        <div className="text-center md:text-right mb-12 w-full ">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-secondary font-bold">جاهز</span> تنقل بيتك
            بسهولة؟
          </h2>
          <p className="text-subtitle text-xl max-w-3xl mx-auto leading-relaxed">
            فريقنا جاهز يرد عليك 24/7 احجز موعدك أو اطلب عرض سعر مجاني دلوقتي
          </p>

          {/* Contact Info */}
          <div className="flex items-start gap-2 mt-6">
            <div className="w-15 h-15 bg-primary/10 rounded-full flex items-center justify-center">
              <FaPhone className="text-primary w-6 h-6" />
            </div>
            <div className="flex flex-col items-start justify-center">
              <a
                href="tel:+96597897008"
                className="font-bold text-lg text-black"
              >
                96597897008+
              </a>
              <p className="text-secondary text-lg">اتصل بنا</p>
            </div>
          </div>

          <div className="flex items-start gap-2 mt-6">
            <div className="w-15 h-15 bg-primary/10 rounded-full flex items-center justify-center">
              <FaMapMarkerAlt className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-bold text-lg text-black">
                15 شارع محمود رفعت, السالمية, الكويت
              </p>
              <p className="text-secondary text-lg">العنوان</p>
            </div>
          </div>

          <div className="mt-6">
            <a
              href="tel:+96597897008"
              className="inline-flex items-center justify-center gap-4 bg-primary text-white px-8 py-4 font-semibold hover:bg-primary/80 transition-colors"
            >
              <span>اتصل بنا</span>
              <FaPhone className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="w-full">
          <img
            src={`${import.meta.env.BASE_URL}contact.png`}
            alt="Contact Image"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
