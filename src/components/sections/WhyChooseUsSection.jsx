const WhyChooseUsSection = () => {
  const features = [
    {
      icon: "💰",
      title: "أسعار تنافسية",
      description: "جودة عالية بأسعار مناسبة تناسب جميع الميزانيات",
    },
    {
      icon: "⏱️",
      title: "سرعة التنفيذ",
      description: "الالتزام بالمواعيد وإنجاز نقلتك بسرعة دون تأخير",
    },
    {
      icon: "🛡️",
      title: "أمان مضمون",
      description: "فريقنا مدرب على التعامل الحذر مع العفش",
    },
    {
      icon: "👥",
      title: "فريق محترف",
      description: "خبرة طويلة في نقل العفش داخل الكويت",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-30">
        <div className="w-full  ">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ليش تختار <span className="text-secondary font-bold">نق</span>
              <span className="text-primary font-bold">لتكم</span>؟
            </h2>
            <p className="text-subtitle text-xl max-w-md mx-auto leading-relaxed">
              نحن نعرف إن النقل مش مجرد صناديق… ده ذكرياتك ومقتنياتك، وعشان كده
              نهتم بأدق التفاصيل.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mt-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full">
          <img
            src={`${import.meta.env.BASE_URL}why-choose-us.png`}
            alt="Why Choose Us"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
