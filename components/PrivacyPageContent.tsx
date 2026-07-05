import Link from "next/link";

const SECTIONS = [
  {
    title: "1. 取得する情報",
    body: (
      <>
        <p>当団体では、以下の情報を取得する場合があります。</p>
        <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-primary/70">
          <li>氏名</li>
          <li>メールアドレス</li>
          <li>お問い合わせ内容</li>
          <li>クラウドファンディング等でご提供いただく情報</li>
          <li>アクセス解析により取得される閲覧情報（Cookie等）</li>
        </ul>
      </>
    ),
  },
  {
    title: "2. 利用目的",
    body: (
      <>
        <p>取得した情報は、以下の目的で利用します。</p>
        <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-primary/70">
          <li>お問い合わせへの対応</li>
          <li>活動に関するご連絡</li>
          <li>支援者へのご案内</li>
          <li>サイト運営の改善</li>
          <li>不正利用防止</li>
          <li>法令に基づく対応</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. 個人情報の管理",
    body: (
      <p>
        取得した個人情報は適切に管理し、不正アクセス、漏えい、紛失、改ざん等の防止に努めます。
      </p>
    ),
  },
  {
    title: "4. 第三者提供",
    body: (
      <p>法令に基づく場合を除き、ご本人の同意なく第三者へ個人情報を提供することはありません。</p>
    ),
  },
  {
    title: "5. Cookie等の利用",
    body: (
      <>
        <p>本サイトでは、サービス向上やアクセス解析のためにCookie等を利用する場合があります。</p>
        <p className="mt-4">Cookieにより個人を特定する情報を取得することはありません。</p>
      </>
    ),
  },
  {
    title: "6. 外部サービスについて",
    body: (
      <>
        <p>本サイトでは、Instagram、READYFOR等の外部サービスへリンクする場合があります。</p>
        <p className="mt-4">
          リンク先サービスのプライバシーポリシーについては、それぞれの運営者の方針をご確認ください。
        </p>
      </>
    ),
  },
  {
    title: "7. 個人情報の開示・訂正・削除",
    body: (
      <p>
        ご本人から個人情報の開示・訂正・削除等のご希望があった場合は、法令に基づき適切に対応いたします。
      </p>
    ),
  },
  {
    title: "8. プライバシーポリシーの変更",
    body: (
      <>
        <p>必要に応じて本ポリシーを変更する場合があります。</p>
        <p className="mt-4">変更後の内容は、本サイトに掲載した時点で効力を生じます。</p>
      </>
    ),
  },
  {
    title: "9. お問い合わせ",
    body: (
      <p>
        個人情報の取り扱いに関するお問い合わせは、
        <Link href="/contact" className="font-medium text-primary underline-offset-4 hover:underline">
          お問い合わせページ
        </Link>
        よりご連絡ください。
      </p>
    ),
  },
] as const;

/** プライバシーポリシー — シンプルな文章ページ */
export function PrivacyPageContent() {
  return (
    <section className="section-padding bg-section-cream">
      <div className="container-main max-w-3xl">
        <header className="mb-12 md:mb-16">
          <p className="section-label">Legal</p>
          <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl">
            プライバシーポリシー
          </h1>
          <p className="mt-5 text-sm text-subtext md:text-base">最終更新日：2026年7月5日</p>
        </header>

        <p className="mb-12 text-base leading-[1.9] text-subtext md:mb-14">
          高校生ユニット Miracoi（以下「当団体」）は、利用者の皆さまの個人情報を適切に取り扱い、その保護に努めます。
        </p>

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
