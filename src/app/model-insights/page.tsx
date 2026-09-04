
'use client'

import { useMemo, useState } from 'react'
import { Check, Circle } from 'lucide-react'

const models = [
  {
    name: 'XGB Ensemble v3.2',
    family: 'XGBoost',
    features: 47,
    trained: '2024-11-28',
    accuracy: '74.3%',
    status: 'active',
  },
  {
    name: 'LightGBM v2.1',
    family: 'LightGBM',
    features: 42,
    trained: '2024-09-14',
    accuracy: '71.8%',
    status: 'standby',
  },
  {
    name: 'Neural Net v1.4',
    family: 'LSTM + FC',
    features: 38,
    trained: '2024-07-02',
    accuracy: '69.2%',
    status: 'standby',
  },
]

const features = [
  ['MACD Signal', 18.6],
  ['RSI 14', 16.2],
  ['Volume Ratio', 14.1],
  ['EMA Crossover', 12.8],
  ['Price Momentum', 11.5],
  ['Bollinger Band', 9.8],
  ['ATR', 8.9],
  ['OBV', 8.1],
]

export default function Page() {
  const [activeModel, setActiveModel] = useState(models[0].name)
  const [query] = useState('')

  const filteredModels = useMemo(
    () =>
      models.filter((model) =>
        model.name.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  )

  return (
    <main
      className="
        min-h-screen
        bg-[#090a0d]
        px-4
        py-6
        text-[#eef2f8]

        sm:px-6
        sm:py-7

        lg:px-7
        lg:py-[30px]
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[964px]
          mt-16
          lg:mt-0
        "
      >

        {/* ==================== سربرگ ==================== */}

        <header className="mb-5 sm:mb-6">
          <h1
            className="
              m-0
              text-[30px]
              font-bold
              leading-[1.2]
              tracking-[-0.02em]
              text-[#f2f5fa]
              mb-2
              sm:text-[40px]
            "
          >
            مخزن مدل‌ها
          </h1>

          <p
            className="
              mt-1.5
              text-xs
              text-[#61708a]
              mb-8
              sm:text-sm
            "
          >
            مدیریت و مقایسه مدل‌های پیش‌بینی
          </p>
        </header>


        {/* ==================== مدل‌ها ==================== */}

        <div
          className="
            grid
            gap-3.5
          "
          aria-label="مدل‌های پیش‌بینی"
        >
          {filteredModels.map((model) => {
            const isActive = model.name === activeModel

            return (
              <article
                key={model.name}
                className={`
                  flex
                  min-h-[96px]
                  flex-col
                  gap-5
                  rounded-[13px]
                  border
                  bg-[#14151b]
                  p-4
                  transition-colors

                  sm:p-5

                  lg:flex-row
                  lg:items-center
                  lg:justify-between
                  lg:gap-5
                  lg:px-[22px]
                  lg:py-5

                  ${isActive
                    ? 'border-[#145139]'
                    : 'border-[#242731]'
                  }
                `}
              >

                {/* اطلاعات مدل */}

                <div className="min-w-0">
                  <div
                    className="
                      flex
                      flex-wrap
                      items-center
                      gap-2.5
                    "
                  >
                    <h2
                      className="
                        m-0
                        text-sm
                        font-semibold
                        text-[#eef2f8]

                        sm:text-base
                      "
                    >
                      {model.name}
                    </h2>

                    {/* وضعیت */}

                    <span
                      className={`
                        inline-flex
                        shrink-0
                        items-center
                        gap-1
                        rounded-full
                        px-2
                        py-[3px]
                        text-[11px]

                        sm:text-xs

                        ${isActive
                          ? 'bg-[#092c1e] text-[#16d47b]'
                          : 'bg-[#1e222c] text-[#66748a]'
                        }
                      `}
                    >
                      {isActive ? (
                        <Check
                          size={11}
                          strokeWidth={3}
                        />
                      ) : (
                        <Circle size={8} />
                      )}

                      {isActive ? 'فعال' : 'آماده‌به‌کار'}
                    </span>
                  </div>

                  <p
                    className="
                      mt-1.5
                      text-xs
                      text-[#60708b]
                      sm:text-[13px]
                    "
                  >
                    {model.family} · {model.features} ویژگی ·
                    آموزش‌دیده در {model.trained}
                  </p>
                </div>


                {/* اقدامات */}

                <div
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-2

                    sm:justify-end
                    sm:gap-2.5

                    lg:w-auto
                    lg:shrink-0
                  "
                >

                  {/* دقت */}

                  <div
                    className="
                      flex
                      min-w-[65px]
                      flex-col
                      gap-1
                      text-left

                      sm:min-w-[72px]
                      sm:text-right
                    "
                  >
                    <strong
                      className="
                        text-lg
                        font-bold
                        tracking-[-0.02em]
                        text-[#00e17a]

                        sm:text-[19px]
                      "
                    >
                      {model.accuracy}
                    </strong>

                    <span
                      className="
                        text-[11px]
                        text-[#60708b]

                        sm:text-[13px]
                      "
                    >
                      دقت
                    </span>
                  </div>


                  {/* جزئیات */}

                  <button
                    className="
                      rounded-[9px]
                      border-0
                      bg-[#20232d]
                      px-3
                      py-2
                      text-xs
                      text-[#aab5c9]
                      transition
                      duration-200
                      hover:brightness-125

                      sm:px-3.5
                      sm:text-[13px]
                    "
                    type="button"
                    onClick={() =>
                      window.alert(`جزئیات مدل ${model.name}`)
                    }
                  >
                    جزئیات
                  </button>


                  {/* فعال‌سازی */}

                  {!isActive && (
                    <button
                      className="
                        rounded-[9px]
                        border
                        border-[#294275]
                        bg-[#151d32]
                        px-3
                        py-2
                        text-xs
                        text-[#4c7eff]
                        transition
                        duration-200
                        hover:brightness-125

                        sm:px-3.5
                        sm:text-[13px]
                      "
                      type="button"
                      onClick={() =>
                        setActiveModel(model.name)
                      }
                    >
                      فعال‌سازی
                    </button>
                  )}

                </div>
              </article>
            )
          })}
        </div>


        {/* ==================== اهمیت ویژگی‌ها ==================== */}

        <section
          className="
            mt-5
            rounded-[13px]
            border
            border-[#242731]
            bg-[#14151b]
            px-4
            py-5

            sm:mt-6
            sm:px-5
            sm:py-[23px]

            lg:px-[22px]
            lg:pb-[21px]
          "
          aria-labelledby="importance-title"
        >

          <h2
            id="importance-title"
            className="
              m-0
              text-sm
              font-semibold
              text-[#eef2f8]

              sm:text-base
            "
          >
            مدل فعال · اهمیت ویژگی‌ها
          </h2>


          {/* فهرست ویژگی‌ها */}

          <div
            className="
              mt-5
              grid
              gap-3
            "
          >
            {features.map(([label, value]) => (
              <div
                className="
                  grid
                  grid-cols-[minmax(90px,112px)_1fr_42px]
                  items-center
                  gap-2

                  sm:grid-cols-[150px_1fr_48px]
                  sm:gap-2.5

                  lg:grid-cols-[170px_1fr_48px]
                "
                key={label as string}
              >

                {/* نام ویژگی */}

                <span
                  className="
                    min-w-0
                    truncate
                    font-mono
                    text-[10px]
                    text-[#9cacbf]

                    sm:text-[13px]
                  "
                >
                  {label}
                </span>


                {/* نوار میزان اهمیت */}

                <div
                  className="
                    h-2
                    overflow-hidden
                    rounded-full
                    bg-[#20222b]

                    sm:h-[9px]
                  "
                >
                  <div
                    className="
                      h-full
                      rounded-full
                      bg-[#4d72d9]
                    "
                    style={{
                      width: `${value}%`,
                    }}
                  />
                </div>


                {/* مقدار */}

                <span
                  className="
                    text-right
                    font-mono
                    text-[10px]
                    text-[#667590]

                    sm:text-[13px]
                  "
                >
                  {value}%
                </span>

              </div>
            ))}
          </div>

        </section>

      </div>
    </main>
  )
}
