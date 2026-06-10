import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "ResearchLog",
  description: "프로젝트별 학술 연구 기록 관리 도구",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
        <Script src="/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}