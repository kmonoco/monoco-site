export default function App() {
  const menus = ['About', 'Business', 'Why MONOCO', 'Contact'];

  const businessCards = [
    {
      title: 'Import & Sourcing',
      kor: '해외 소싱 및 수입',
      image: '/sourcing.png',
    },
    {
      title: 'Wholesale Distribution',
      kor: '도매 및 B2B 유통',
      image: '/wholesale.png',
    },
    {
      title: 'Commerce Expansion',
      kor: '온라인 커머스 확장',
      image: '/ecommerce.png',
    },
    {
      title: 'Product & Brand Planning',
      kor: '상품 기획 및 브랜드개발',
      image: '/planning.png',
    },
  ];

  const features = [
    {
      title: 'Integrated Distribution',
      desc: '수입, 도매, 온라인 판매, 상품 기획까지 하나의 흐름으로 연결합니다.',
    },
    {
      title: 'Scalable Structure',
      desc: '다양한 소비재 영역으로 확장 가능한 유통 구조를 지향합니다',
    },
    {
      title: 'Practical Execution',
      desc: '현실적인 사업 운영과 실행 중심의 유통 설계를 바탕으로 운영됩니다.',
    },
  ];

  const channels = [
    {
      name: 'MONOCO',
      role: '상위 브랜드 / 회사명',
      desc: '회사 전체를 대표하는 마스터 브랜드',
    },
    {
      name: '헬로스마일리빙',
      role: '소매 판매 채널',
      desc: '소비자 대상 온라인 판매 채널',
    },
    {
      name: '소소홈',
      role: '도매 운영 채널',
      desc: '사업자 대상 도매 운영 채널',
    },
  ];

  return (
    <div className="min-h-screen bg-[#050809] text-white font-sans">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050809]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-[20px] lg:px-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#b89363] text-2xl font-bold text-black">
              M
            </div>
            <div>
              <div className="text-3xl font-bold tracking-[0.05em]">MONOCO</div>
              <div className="text-xs uppercase tracking-[0.35em] text-white/55">
                Integrated Distribution & Commerce
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-10 text-base font-medium text-white/85 lg:flex">
            {menus.map((menu, index) => (
              <a key={index} href={['#about', '#business', '#why-monoco', '#contact'][index]} className="transition hover:text-[#d2ae80]">
                {menu}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <img
            src="/hero_bg.png"
            alt="distribution and commerce"
            className="absolute inset-0 h-full w-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/35" />
          <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-40">
            <div className="max-w-4xl">
              <div className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.28em] text-white/70">
                Official Company Page
              </div>
              <h1 className="mt-8 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
                Designing the
                <br />
                Flow of Commerce.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75 font-medium md:text-xl">
                MONOCO는 수입, 도매, 온라인 커머스, 상품 기획을 아우르는 통합 유통 전문 기업입니다.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#business" className="rounded-md bg-[#b89363] px-7 py-4 text-base font-bold text-black transition hover:opacity-90">
                  사업안내
                </a>
                <a href="#about" className="rounded-md border border-white/20 bg-white/5 px-7 py-4 text-base font-bold text-white transition hover:bg-white/10">
                  회사소개
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
          <div className="space-y-6">
            <div className="text-sm font-bold uppercase tracking-[0.28em] text-[#c8a97d]">About MONOCO</div>
            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              Designed for Scale,
              <br />
              Built for Execution
            </h2>
            <p className="max-w-xl text-base leading-8 text-white/70">
              MONOCO는 단순 판매 회사가 아니라 좋은 상품을 발굴하고, 시장에 맞게 연결하며, 유통의 흐름을 설계하고 실행하는 회사입니다.
            </p>
            <div className="rounded-xl bg-[#c7a178] p-6 text-black shadow-lg">
              <div className="text-sm font-bold uppercase tracking-[0.22em]">MONOCO = Mono + Co</div>
              <p className="mt-3 text-base font-medium leading-7 text-black/80">
                Mono는 하나의 기준, 핵심, 본질, 통합을 뜻하고, Co는 Company, Commerce, Connection, Collaboration을 담고 있습니다.
              </p>
            </div>
          </div>

          <div className="grid gap-5">
            {features.map((item) => (
              <div key={item.title} className="border border-white/10 bg-white/[0.03] p-7">
                <div className="text-2xl font-bold text-white">{item.title}</div>
                <p className="mt-4 text-base leading-8 text-white/68">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="business" className="border-t border-white/5 bg-black/20 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <div className="text-sm font-bold uppercase tracking-[0.28em] text-[#c8a97d]">Business Areas</div>
              <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                A Unified Distribution System.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {businessCards.map((card) => (
                <div key={card.title} className="group relative overflow-hidden border border-white/10">
                  <img src={card.image} alt={card.title} className="h-[320px] w-full object-cover opacity-55 transition duration-500 group-hover:scale-105 group-hover:opacity-65" />
                  <div className="absolute inset-0 bg-black/45" />
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <div className="text-2xl font-bold leading-tight text-white">{card.title}</div>
                    <div className="mt-2 text-sm text-white/75">{card.kor}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="why-monoco" className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
          <div className="overflow-hidden border border-white/10">
            <img
              src="/why_monoco.png"
              alt="product and commerce"
              className="h-full min-h-[520px] w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-sm font-bold uppercase tracking-[0.28em] text-[#c8a97d]">Why MONOCO</div>
            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
              We Design
              <br />
              Distribution Differently
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/70">
              MONOCO는 감성 쇼핑몰보다 전문적이고 확장 가능한 유통 회사 방향을 지향합니다. 국내외 소싱과 상품 기획, 채널 운영을 하나의 시스템으로 연결합니다.
            </p>

            <div className="mt-10 grid gap-8">
              <div>
                <div className="text-2xl font-bold">Trustworthy Distribution System</div>
                <p className="mt-3 text-base leading-8 text-white/68">
                  신뢰감 있는 운영 구조와 명확한 역할 분리를 기반으로 거래처와 고객이 회사의 방향을 쉽게 이해할 수 있도록 설계합니다.
                </p>
              </div>
              <div>
                <div className="text-2xl font-bold">Integrated Distribution Structure</div>
                <p className="mt-3 text-base leading-8 text-white/68">
                  단일 기능이 아니라 수입, 도매, 온라인 판매, 상품 기획이 연결된 현실적인 비즈니스 구조를 지향합니다.
                </p>
              </div>
            </div>


          </div>
        </section>

        <section id="structure" className="hidden relative overflow-hidden border-t border-white/5 py-20 lg:py-24">
          <img
            src="/brand_structure.png"
            alt="structure background"
            className="absolute inset-0 h-full w-full object-cover opacity-18"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
              <div>
                <div className="text-sm font-bold uppercase tracking-[0.28em] text-[#c8a97d]">Brand Structure</div>
                <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                  Clear roles,
                  <br />
                  one connected brand system.
                </h2>
              </div>
              <div>
                <p className="text-base leading-8 text-white/72">
                  MONOCO는 회사명과 상위 브랜드를 담당하고, 헬로스마일리빙은 소매 채널, 소소홈은 도매 채널로 운영됩니다. 필요 시 PB / OEM·ODM 상품에는 MONOCO 브랜드를 적용할 수 있습니다.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {channels.map((item) => (
                <div key={item.name} className="border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm">
                  <div className="text-xs font-bold uppercase tracking-[0.24em] text-[#c8a97d]">{item.role}</div>
                  <div className="mt-4 text-3xl font-bold">{item.name}</div>
                  <p className="mt-4 text-base leading-8 text-white/68">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/5 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative overflow-hidden border border-white/10">
              <img
                src="/contact_bg.png"
                alt="contact background"
                className="absolute inset-0 h-full w-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-black/75" />
              <div className="relative flex flex-col gap-10 px-8 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-12">
                <div className="max-w-3xl">
                  <h2 className="text-4xl font-bold leading-tight md:text-5xl">
                    Let’s build
                    <br />
                    better distribution
                  </h2>
                  <p className="mt-5 text-base font-medium leading-8 text-white/72">
                    사업 제안, 소싱, 유통, 협업 관련 문의를 받습니다.
                  </p>
                </div>
                <a href="mailto:biz.monoco@gmail.com" className="inline-flex w-fit rounded-md bg-[#c7a178] px-8 py-4 text-base font-bold text-black transition hover:opacity-90">
                  상담문의
                </a>
              </div>
            </div>

            <footer className="grid gap-10 border-x border-b border-white/10 px-8 py-12 lg:grid-cols-[1fr_1fr] lg:px-12">
              <div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#b89363] text-2xl font-bold text-black">
                    M
                  </div>
                  <div>
                    <div className="text-3xl font-bold tracking-[0.05em]">MONOCO</div>
                    <div className="text-xs uppercase tracking-[0.35em] text-white/55">
                      Integrated Distribution & Commerce
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 text-base font-medium text-white/78 md:grid-cols-2">
                <div>
                  <div className="text-sm font-bold text-[#c8a97d]">주소</div>
                  <div className="mt-2 text-white/78 leading-relaxed">경기도 고양시 덕양구 향기로 101 더케이DMC 1504호</div>
                </div>
                <div>
                  <div className="text-sm font-bold text-[#c8a97d]">이메일</div>
                  <div className="mt-2">biz.monoco@gmail.com</div>
                </div>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
