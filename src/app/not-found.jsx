import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        padding: '2rem'
      }}
    >
      <h1 style={{ fontSize: '2rem', margin: 0 }}>404 — 페이지를 찾을 수 없습니다</h1>
      <p style={{ opacity: 0.7, fontSize: '0.95rem' }}>
        주소가 잘못되었거나 페이지가 이동/삭제되었을 수 있습니다.
      </p>
      <Link href="/" style={{ color: '#4f46e5', textDecoration: 'underline' }}>
        홈으로 돌아가기
      </Link>
    </div>
  )
}
