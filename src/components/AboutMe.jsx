import { Element } from "react-scroll";

const AboutMe = () => {
  return (
    <Element name="about">
      <section className="content secondary-bg">
        <div className="container">
          <div className="content-box col-lg-8 col-md-10 col-12 mx-auto">
            <h2 className="section-title text-center mb-3">درباره من</h2>
            <p>
              من نصیر نمائی هستم، توسعه‌دهنده Full Stack با تمرکز بر ساخت
              وب‌اپلیکیشن‌های مدرن و مقیاس‌پذیر. مسیر برنامه‌نویسی را با توسعه
              Frontend شروع کردم و به مرور با توسعه Backend و طراحی API، به سمت
              توسعه Full Stack حرکت کردم. در حال حاضر با تکنولوژی‌هایی مانند{" "}
              <span style={{ unicodeBidi: "plaintext" }}>
                JavaScript، React، Next.js، C# و ASP.NET Core
              </span>{" "}
              کار می‌کنم و به طراحی و پیاده‌سازی کامل یک محصول، از رابط کاربری
              تا منطق سمت سرور، علاقه‌مندم.
            </p>
            <p>
              یادگیری مداوم و عمیق‌تر شدن در مهندسی نرم‌افزار بخش مهمی از مسیر
              حرفه‌ای من است و در ادامه مسیرم، تمرکز خود را بر رشد در حوزه‌های
              Full Stack Development، Software Engineering و AI Engineering قرار
              داده‌ام.
            </p>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default AboutMe;
