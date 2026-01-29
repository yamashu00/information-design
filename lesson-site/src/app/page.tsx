import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.png"
            alt="Okinawa Peace Poster Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/30 dark:bg-black/40 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-neutral-950 dark:via-transparent dark:to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6 drop-shadow-sm">
              伝える、<br className="md:hidden" />
              <span className="text-primary-600 dark:text-primary-400">平和</span>への想い。
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-200 mb-10 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
              情報デザインの力で、沖縄の心を未来へ。<br />
              修学旅行事前学習・ポスターデザインプロジェクト
            </p>
          </FadeIn>
          <FadeIn delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#curriculum"
                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-primary-500/30 active:scale-95"
              >
                授業を始める
              </Link>
              <Link
                href="#resources"
                className="px-8 py-4 bg-white/80 dark:bg-neutral-800/80 hover:bg-white dark:hover:bg-neutral-800 text-neutral-900 dark:text-white rounded-full font-semibold transition-all shadow-lg backdrop-blur-sm border border-neutral-200 dark:border-neutral-700 active:scale-95"
              >
                素材を見る
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-24 bg-neutral-50 dark:bg-neutral-950">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
                授業の流れ
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                単なる「お絵描き」ではなく、ターゲットにメッセージを届けるための「情報設計」を学びます。
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "リサーチ & コンセプト",
                desc: "沖縄戦の歴史や平和への取り組みを調査し、ポスターで「誰に」「何を」伝えたいかを明確にします。",
                color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
              },
              {
                step: "02",
                title: "ラフ案 & 構成",
                desc: "視線の動き（Zの法則など）や配色の基本を意識しながら、手書きで複数のラフ案を作成します。",
                color: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
              },
              {
                step: "03",
                title: "制作 & 仕上げ",
                desc: "選定したラフを元に、デジタルツールを使用してポスターを完成させます。余白の美学を意識しましょう。",
                color: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
              },
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="h-full p-8 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all hover:border-primary-200 dark:hover:border-primary-800 group">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${item.color}`}>
                    STEP {item.step}
                  </span>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Design Basics / Prompt Section */}
      <section id="design-basics" className="py-24 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
                  デザインのヒント
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">色は3色まで</h3>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        ベースカラー(70%)、メインカラー(25%)、アクセントカラー(5%)を目安に配色しましょう。沖縄の海（青）、平和（白・緑）、祈り（暖色）などを参考に。
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">余白を恐れない</h3>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        情報を詰め込みすぎると伝わりません。余白（ネガティブスペース）は「注目させる」ための重要な要素です。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="p-8 bg-neutral-50 dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
                  キャッチコピーの例
                </h3>
                <div className="space-y-3">
                  {[
                    "時を超えて、平和を想う旅。",
                    "青い海、白い砂、そして語り継ぐ心。",
                    "知ることから、未来は変わる。",
                    "17歳の私たちが、今考える「平和」。"
                  ].map((copy, i) => (
                    <div key={i} className="p-4 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-medium">
                      {copy}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Resources / CTA Section */}
      <section id="resources" className="py-24 bg-gradient-to-br from-primary-600 to-indigo-700 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/hero.png')] opacity-10 mix-blend-overlay bg-cover bg-center" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              さあ、制作をはじめよう。
            </h2>
            <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
              必要な素材や詳細なガイドラインは、クラスルームからダウンロードできます。<br />
              あなたの感性で、平和へのメッセージを形にしてください。
            </p>
            <button className="px-10 py-5 bg-white text-primary-700 hover:bg-neutral-100 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95">
              ガイドラインをダウンロード
            </button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
