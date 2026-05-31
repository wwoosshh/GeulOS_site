/* eslint-env node */
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'

export const dynamic = 'force-dynamic'

export const metadata = {
  metadataBase: new URL('https://os-wiki.vercel.app'),
  title: {
    default: '운영체제 분류와 종류 — 종합 자료실',
    template: '%s — OS Wiki'
  },
  description:
    '운영체제를 시대·용도·응용·구조·라이선스 다섯 축으로 분류하고 대표 OS를 정리한 위키. AI-네이티브 OS 사례로 GeulOS 소개.'
}

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <span style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
          <b style={{ fontSize: '1.05rem' }}>OS Wiki</b>
          <span style={{ opacity: 0.55, fontSize: '0.85rem' }}>
            운영체제 분류 · 종류 · 사례
          </span>
        </span>
      }
    />
  )
  const pageMap = await getPageMap()
  return (
    <html lang="ko" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="◧" />
      <body>
        <Layout
          navbar={navbar}
          footer={<Footer>© {new Date().getFullYear()} OS Wiki</Footer>}
          editLink={null}
          feedback={{ content: '' }}
          docsRepositoryBase="https://github.com/wwoosshh/geul_OS"
          sidebar={{ defaultMenuCollapseLevel: 1, toggleButton: true }}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
