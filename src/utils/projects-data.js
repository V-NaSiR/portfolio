export const projectList = [
  {
    id: 1,
    title: "Full Stack",
    projects: [
      {
        id: 1,
        url: "https://farda-school.ir",
        label: "مدرسه فردا",
        img: `${import.meta.env.BASE_URL}images/farda-school.webp`,
        type: "company",
        role: "Full Stack Developer",
        description:
          "وب‌سایت مدرسه با توسعه کامل بخش‌های Frontend و Backend و پیاده‌سازی پنل‌ها و قابلیت‌های مورد نیاز.",
        technologies: [
          "ASP.NET Core MVC",
          "EF Core",
          "SQL Server",
          "JavaScript",
          "jQuery",
        ],
      },
      {
        id: 2,
        url: "https://foroughdanaei.ir",
        label: "مدرسه فروغ دانایی",
        img: `${import.meta.env.BASE_URL}images/forough-danaei.png`,
        type: "company",
        role: "Full Stack Developer",
        description:
          "وب‌سایت آموزشی با توسعه و پیاده‌سازی کامل Frontend و Backend.",
        technologies: [
          "ASP.NET Core MVC",
          "EF Core",
          "SQL Server",
          "JavaScript",
          "jQuery",
        ],
      },
      {
        id: 3,
        url: "https://toosloader.ir",
        label: "طوس لودر",
        img: `${import.meta.env.BASE_URL}images/toos-loader.webp`,
        type: "company",
        role: "Full Stack Developer",
        description:
          "وب‌سایت معرفی و خدمات شرکت با پیاده‌سازی کامل بخش‌های Frontend و Backend.",
        technologies: [
          "ASP.NET Core MVC",
          "EF Core",
          "SQL Server",
          "JavaScript",
          "jQuery",
        ],
      },
      {
        id: 4,
        url: "http://centerage.iliasystem.co",
        label: "سنتراژ",
        img: `${import.meta.env.BASE_URL}images/centerage.webp`,
        type: "company",
        role: "Full Stack Developer",
        description:
          "وب‌سایت دو زبانه فارسی و انگلیسی با مدیریت محتوای مستقل برای هر زبان.",
        technologies: [
          "ASP.NET Core MVC",
          "EF Core",
          "SQL Server",
          "JavaScript",
          "jQuery",
        ],
        highlights: [
          "پشتیبانی از زبان فارسی و انگلیسی",
          "تشخیص زبان از مسیر /fa و /en",
          "دریافت داده‌های هر زبان بر اساس LanguageId",
          "ذخیره محتوای مستقل برای هر زبان در دیتابیس",
          "استفاده از جداول Resource برای عناوین و متون ثابت",
        ],
      },
      // {
      //   id: 5,
      //   url: "#",
      //   label: "Todo List",
      //   img: "",
      //   type: "personal",
      //   role: "Full Stack Developer",
      //   description:
      //     "اپلیکیشن مدیریت وظایف با امکان ایجاد، ویرایش، حذف و تغییر وضعیت وظایف بدون نیاز به بارگذاری مجدد صفحه.",
      //   technologies: [
      //     "ASP.NET Core MVC",
      //     "EF Core",
      //     "SQL Server",
      //     "JavaScript",
      //     "jQuery",
      //   ],
      //   highlights: [
      //     "ایجاد و ویرایش وظایف",
      //     "حذف وظایف",
      //     "تغییر وضعیت انجام شده",
      //     "ارسال درخواست‌ها با AJAX",
      //     "به‌روزرسانی اطلاعات بدون Reload صفحه",
      //   ],
      // },
    ],
  },
];
