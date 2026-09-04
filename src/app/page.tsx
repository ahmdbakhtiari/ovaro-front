import { Button, Chip, Tooltip } from '@heroui/react'
import { ShieldCheckIcon } from 'lucide-react'

export default function Page() {
  return (
    <div className="w-full ">

      {/* ==================== Hero ==================== */}
      <section className="w-full">

        {/* Badge */}
        <div>
          <Tooltip delay={0}>
            <Tooltip.Trigger aria-label="Status chip">
              <Chip color="success" className="bg-gray-100">
                <ShieldCheckIcon size={15} color="green" />

                <Chip.Label>
                  <span className="text-gray-800! text-xs font-medium sm:text-sm">
                    مجهز به هوش مصنوعی · تحلیل زنده بازار
                  </span>
                </Chip.Label>
              </Chip>
            </Tooltip.Trigger>
          </Tooltip>
        </div>


        {/* Main Title */}
        <h2
          className="
            mt-6
            text-2xl
            font-extrabold
            leading-[1.6]
            text-white

            sm:mt-7
            sm:text-3xl

            lg:mt-8
            lg:text-4xl
            lg:leading-[1.5]
          "
        >
          پیش بینی حرفه ای بازار سهام  

          <br  />

          <span className="text-sky-400">
             با استانداردهای مؤسسات مالی 
          </span>
        </h2>


        {/* Description */}
        <p
          className="
            mt-4
            w-full
            text-justify
            text-sm
            font-normal
            leading-7
            text-gray-300

            sm:mt-5
            sm:text-base
            sm:leading-8

            lg:w-1/2
          "
        >
          Ovaro Signal با استفاده از مدل‌های یادگیری ماشین تجمیعی که بر پایه
          ۱۵ سال داده از ساختار و رفتار معاملات بازار آموزش دیده‌اند،
          پیش‌بینی‌های جهت‌دار با احتمال موفقیت بالا را برای بازار سهام و
          ارزهای دیجیتال تولید می‌کند.
        </p>


        {/* Buttons */}
        <div
          className="
            mt-6
            flex
            w-full
            flex-col
            gap-3

            sm:mt-8
            sm:w-auto
            sm:flex-row
            sm:items-center
            sm:gap-4
          "
        >
          <Button
            className="
              w-full
              rounded-lg
              text-sm
              font-semibold

              sm:w-auto
            "
          >
            شروع پیش‌بینی
          </Button>

          <Button
            variant="outline"
            className="
              w-full
              rounded-lg
              text-sm
              font-medium
              text-white
              transition-all
              hover:bg-white
              hover:text-gray-700

              sm:w-auto
            "
          >
            بک‌تست مدل
          </Button>
        </div>
      </section>


      {/* ==================== Statistics ==================== */}
      <section
        className="
          mt-12
          grid
          grid-cols-1
          gap-3

          sm:mt-14
          sm:grid-cols-2
          sm:gap-4

          lg:mt-16
          lg:grid-cols-4
        "
      >

        {/* Card */}
        <div
          className="
            flex
            flex-col
            gap-1
            rounded-xl
            border
            border-[#262733]
            bg-[#13141A]
            p-4

            sm:p-5
          "
        >
          <p className="text-sm font-medium text-gray-400">
            دقت مدل
          </p>

          <p className="text-2xl font-bold text-green-500">
            74.3%
          </p>

          <p className="text-xs font-normal text-gray-500">
            روند ۹۰ روزه
          </p>
        </div>


        {/* Card */}
        <div
          className="
            flex
            flex-col
            gap-1
            rounded-xl
            border
            border-[#262733]
            bg-[#13141A]
            p-4

            sm:p-5
          "
        >
          <p className="text-sm font-medium text-gray-400">
            نرخ معاملات موفق
          </p>

          <p className="text-2xl font-bold text-green-500">
            61.8%
          </p>

          <p className="text-xs font-normal text-gray-500">
            معاملات زنده
          </p>
        </div>


        {/* Card */}
        <div
          className="
            flex
            flex-col
            gap-1
            rounded-xl
            border
            border-[#262733]
            bg-[#13141A]
            p-4

            sm:p-5
          "
        >
          <p className="text-sm font-medium text-gray-400">
            نسبت شارپ
          </p>

          <p className="text-2xl font-bold text-green-500">
            1.84
          </p>

          <p className="text-xs font-normal text-gray-500">
            سالانه‌شده
          </p>
        </div>


        {/* Card */}
        <div
          className="
            flex
            flex-col
            gap-1
            rounded-xl
            border
            border-[#262733]
            bg-[#13141A]
            p-4

            sm:p-5
          "
        >
          <p className="text-sm font-medium text-gray-400">
            حداکثر افت سرمایه
          </p>

          <p className="text-2xl font-bold text-red-500">
            -8.2%
          </p>

          <p className="text-xs font-normal text-gray-500">
            ۱۲ ماه اخیر
          </p>
        </div>

      </section>


      {/* ==================== How It Works ==================== */}
      <section className="mt-12 sm:mt-14 lg:mt-16">

        <p className="text-xl font-bold text-white sm:text-2xl">
          چگونه کار می‌کند؟
        </p>


        <div
          className="
            mt-5
            grid
            grid-cols-1
            gap-3

            sm:mt-6
            sm:grid-cols-2
            sm:gap-4

            xl:grid-cols-5
          "
        >

          {/* Card */}
          <div
            className="
              flex
              flex-col
              gap-2
              rounded-xl
              border
              border-[#262733]
              bg-[#13141A]
              p-4

              sm:p-5
            "
          >
            <p className="text-xl">📡</p>

            <p className="text-base font-semibold text-gray-200">
              داده‌های بازار
            </p>

            <p className="text-sm font-normal leading-6 text-gray-500">
              OHLCV لحظه‌ای + جریان سفارشات
            </p>
          </div>


          {/* Card */}
          <div
            className="
              flex
              flex-col
              gap-2
              rounded-xl
              border
              border-[#262733]
              bg-[#13141A]
              p-4

              sm:p-5
            "
          >
            <p className="text-xl">⚙️</p>

            <p className="text-base font-semibold text-gray-200">
              مهندسی ویژگی‌ها
            </p>

            <p className="text-sm font-normal leading-6 text-gray-500">
              ۴۷ ویژگی تکنیکال و کلان
            </p>
          </div>


          {/* Card */}
          <div
            className="
              flex
              flex-col
              gap-2
              rounded-xl
              border
              border-[#262733]
              bg-[#13141A]
              p-4

              sm:p-5
            "
          >
            <p className="text-xl">🧠</p>

            <p className="text-base font-semibold text-gray-200">
              مدل یادگیری ماشین
            </p>

            <p className="text-sm font-normal leading-6 text-gray-500">
              مدل ترکیبی گرادیان بوستینگ
            </p>
          </div>


          {/* Card */}
          <div
            className="
              flex
              flex-col
              gap-2
              rounded-xl
              border
              border-[#262733]
              bg-[#13141A]
              p-4

              sm:p-5
            "
          >
            <p className="text-xl">📊</p>

            <p className="text-base font-semibold text-gray-200">
              پیش‌بینی
            </p>

            <p className="text-sm font-normal leading-6 text-gray-500">
              جهت حرکت + امتیاز احتمال
            </p>
          </div>


          {/* Card */}
          <div
            className="
              flex
              flex-col
              gap-2
              rounded-xl
              border
              border-[#262733]
              bg-[#13141A]
              p-4

              sm:p-5
            "
          >
            <p className="text-xl">⚡</p>

            <p className="text-base font-semibold text-gray-200">
              سیگنال معاملاتی
            </p>

            <p className="text-sm font-normal leading-6 text-gray-500">
              خرید / فروش / نگهداری
            </p>
          </div>

        </div>
      </section>


      {/* ==================== Features ==================== */}
      <section
        className="
          mt-12
          grid
          grid-cols-1
          gap-3

          sm:mt-14
          sm:grid-cols-2
          sm:gap-4

          lg:mt-16
          lg:grid-cols-3
        "
      >

        {/* Card */}
        <div
          className="
            flex
            flex-col
            gap-2
            rounded-xl
            border
            border-[#262733]
            bg-[#13141A]
            p-4

            sm:p-5
          "
        >
          <p className="text-xl">🧠</p>

          <p className="text-base font-semibold text-gray-200">
            یادگیری ماشین ترکیبی
          </p>

          <p className="text-sm font-normal leading-6 text-gray-500">
            ترکیب XGBoost، LightGBM و شبکه‌های عصبی برای بیشترین پایداری
            پیش‌بینی
          </p>
        </div>


        {/* Card */}
        <div
          className="
            flex
            flex-col
            gap-2
            rounded-xl
            border
            border-[#262733]
            bg-[#13141A]
            p-4

            sm:p-5
          "
        >
          <p className="text-xl">⚡</p>

          <p className="text-base font-semibold text-gray-200">
            استنتاج لحظه‌ای
          </p>

          <p className="text-sm font-normal leading-6 text-gray-500">
            تولید سیگنال در کمتر از یک ثانیه بر اساس داده‌های لحظه‌ای بیش از
            ۵۰ دارایی
          </p>
        </div>


        {/* Card */}
        <div
          className="
            flex
            flex-col
            gap-2
            rounded-xl
            border
            border-[#262733]
            bg-[#13141A]
            p-4

            sm:p-5
          "
        >
          <p className="text-xl">🛡️</p>

          <p className="text-base font-semibold text-gray-200">
            ریسک‌محور
          </p>

          <p className="text-sm font-normal leading-6 text-gray-500">
            هر سیگنال شامل بازه اطمینان و پیشنهاد اندازه موقعیت معاملاتی است
          </p>
        </div>

      </section>

    </div>
  )
}
