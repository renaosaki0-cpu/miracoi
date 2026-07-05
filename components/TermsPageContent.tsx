import Link from "next/link";

const SECTIONS = [
  {
    title: "1. 適用",
    body: (
      <p>
        本規約は、高校生ユニット Miracoi（以下「当団体」）が運営するウェブサイトの利用条件を定めるものです。本サイトをご利用いただく場合は、本規約に同意したものとみなします。
      </p>
    ),
  },
  {
    title: "2. 本サイトについて",
    body: (
      <>
        <p>
          本サイトは、Miracoiの活動紹介、プロジェクト情報、クラウドファンディングの案内、活動報告等を目的として運営しています。
        </p>
        <p className="mt-4">掲載内容は予告なく変更・更新・削除する場合があります。</p>
      </>
    ),
  },
  {
    title: "3. 禁止事項",
    body: (
      <ul className="list-disc space-y-2 pl-5 marker:text-primary/70">
        <li>法令または公序良俗に反する行為</li>
        <li>当団体または第三者の権利を侵害する行為</li>
        <li>本サイトの運営を妨害する行為</li>
        <li>虚偽の情報を送信する行為</li>
        <li>不正アクセスやシステムへの攻撃行為</li>
        <li>その他、当団体が不適切と判断する行為</li>
      </ul>
    ),
  },
  {
    title: "4. 著作権",
    body: (
      <>
        <p>
          本サイトに掲載されている文章、写真、動画、ロゴ、デザイン等の著作権は、当団体または正当な権利者に帰属します。
        </p>
        <p className="mt-4">無断転載・複製・改変・再配布は禁止します。</p>
      </>
    ),
  },
  {
    title: "5. 免責事項",
    body: (
      <>
        <p>
          当団体は、本サイトに掲載する情報について正確性・最新性の確保に努めますが、その内容を保証するものではありません。
        </p>
        <p className="mt-4">
          本サイトの利用により生じた損害について、故意または重大な過失がある場合を除き責任を負いません。
        </p>
        <p className="mt-4">また、本サイトの運営を予告なく停止・変更・終了する場合があります。</p>
      </>
    ),
  },
  {
    title: "6. 外部サービスへのリンク",
    body: (
      <>
        <p>本サイトにはREADYFORやInstagramなど外部サイトへのリンクが含まれる場合があります。</p>
        <p className="mt-4">リンク先サイトの内容やサービスについて、当団体は責任を負いません。</p>
      </>
    ),
  },
  {
    title: "7. お問い合わせ",
    body: (
      <p>
        本サイトに関するお問い合わせは、
        <Link href="/contact" className="font-medium text-primary underline-offset-4 hover:underline">
          お問い合わせページ
        </Link>
        よりご連絡ください。
      </p>
    ),
  },
  {
    title: "8. 規約の変更",
    body: (
      <>
        <p>当団体は必要に応じて本規約を変更することがあります。</p>
        <p className="mt-4">変更後の規約は、本サイトへ掲載した時点で効力を生じます。</p>
      </>
    ),
  },
  {
    title: "9. 準拠法",
    body: <p>本規約は日本法に準拠し、日本法に基づいて解釈されます。</p>,
  },
] as const;

/** 利用規約 — シンプルな文章ページ */
export function TermsPageContent() {
  return (
    <section className="section-padding bg-section-cream">
      <div className="container-main max-w-3xl">
        <header className="mb-12 md:mb-16">
          <p className="section-label">Legal</p>
          <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl">利用規約</h1>
          <p className="mt-5 text-sm text-subtext md:text-base">最終更新日：2026年7月5日</p>
        </header>

        <article className="space-y-12 md:space-y-14">
          {SECTIONS.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-bold tracking-tight text-text md:text-xl">{section.title}</h2>
              <div className="mt-4 text-base leading-[1.9] text-subtext md:mt-5">{section.body}</div>
            </section>
          ))}
        </article>
      </div>
    </section>
  );
}
