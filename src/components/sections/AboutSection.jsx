const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start justify-between gap-30">
        <div className="text-center md:text-right md:w-1/2 w-full mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">من نحن؟</h2>
          <p className="text-subtitle max-w-3xl mx-auto leading-relaxed">
            نقلتي متخصصة في نقل العفش والتغليف في الكويت. نحن نقدم لك تجربة نقل
            سهلة وخالية من القلق مع فريق محترف وأدوات متطورة. فريقنا جاهز يخدمك
            في كل تفاصيل النقل - من أول تغليف العفش لحد ترتيبه في مكانك الجديد.
          </p>

          <div className="relative">
            <img
              src="/about-1.png"
              alt="About Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="md:w-1/2 w-full mt-12">
          {/* Right Image */}
          <div className="relative">
            <img
              src="/about-2.png"
              alt="About Image"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex items-start gap-2 p-4">
            <div className="w-full flex flex-col items-start gap-2">
              <img
                src="/logo.svg"
                alt="About Image"
                className="h-15 object-cover"
              />
              <div>
                <p className="font-semibold">نقلتي موجودة منذ</p>
                <p className="text-2xl font-bold text-primary">2007</p>
              </div>
            </div>
            <p className="text-subtitle text-xl">
              نعمل دائما على تطوير خدمات النقل بالكويت والعمل على حل المشكلات
              اللتي تواجه العملاء لضمان خدمة متميزة وآمنة لهم.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
