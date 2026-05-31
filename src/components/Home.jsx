import Link from 'next/link'
import s from './home.module.css'

const AXES = [
  {
    n: '01',
    title: '시대별',
    crit: '등장 시기 + 기술 패러다임',
    desc: '1940년대 OS 부재부터 배치·시분할·PC·네트워크를 거쳐 모바일·클라우드·AI까지 6세대.',
    href: '/classification/era'
  },
  {
    n: '02',
    title: '용도별',
    crit: '대상 환경 / 시스템',
    desc: '데스크탑 · 서버 · 모바일 · 임베디드 · 실시간 · 메인프레임 · 슈퍼컴 · 분산.',
    href: '/classification/usage'
  },
  {
    n: '03',
    title: '응용 분야별',
    crit: '산업 / 기기',
    desc: '자동차 · IoT · 게임 콘솔 · TV · 웨어러블 · 항공/방산 · 의료 · 네트워크 장비.',
    href: '/classification/application'
  },
  {
    n: '04',
    title: '구조별 (커널)',
    crit: '커널 설계 방식',
    desc: '모놀리식 · 마이크로 · 하이브리드 · 엑소 · 나노/유니커널의 성능·안전 트레이드오프.',
    href: '/classification/kernel'
  },
  {
    n: '05',
    title: '라이선스별',
    crit: '오픈소스 vs 상용',
    desc: 'GPL · BSD/MIT · Apache · 상용, 그리고 한국 정부·공공 OS(구름·하모니카).',
    href: '/classification/license'
  }
]

const STATS = [
  { num: '100%', label: 'TOP500 슈퍼컴퓨터가 Linux 계열', src: '2017–현재', href: '/classification/usage' },
  { num: '~70%', label: '전 세계 모바일 OS Android 점유', src: 'StatCounter 2025', href: '/classification/usage' },
  { num: '51%+', label: '서버 OS 시장 Linux 비중', src: '2026 추정', href: '/classification/usage' },
  { num: '6세대', label: '1940s 직접 입력 → AI-네이티브', src: '시대별 변천', href: '/classification/era' }
]

const NAV3 = [
  { title: 'OS 핵심 개념', desc: '프로세스 · 메모리 · 파일시스템 · 스케줄링 · 가상화 — 분류 이전의 기초.', href: '/concepts' },
  { title: '주요 OS 심화', desc: 'Unix·BSD 계보부터 Linux·Windows·Apple·모바일·RTOS까지 역사와 특징.', href: '/profiles' },
  { title: '참고자료', desc: 'Wikipedia · TOP500 · IBM · 산업 보고서 — 모든 통계의 출처.', href: '/references' }
]

export default function Home() {
  return (
    <div className={s.home}>
      {/* Hero */}
      <header className={`${s.hero} ${s.reveal} ${s.d1}`}>
        <p className={s.eyebrow}>Operating Systems · 분류 자료실</p>
        <h1 className={s.title}>
          운영체제, <em>다섯 관점</em>으로 읽다
        </h1>
        <p className={s.lead}>
          운영체제(OS)는 <strong>하드웨어와 응용 사이의 중간 계층</strong>으로 자원을 관리하고
          표준 인터페이스를 제공한다. 같은 OS라도 보는 관점에 따라 전혀 다르게 분류된다.
          이 자료실은 OS를 <strong>시대·용도·응용·구조·라이선스</strong> 다섯 축으로 정리하고,
          신생 분류축의 사례로 AI-네이티브 OS <strong>GeulOS</strong>를 함께 소개한다.
        </p>
        <div className={s.meta}>
          <span><b>작성</b> 2026·05</span>
          <span><b>분류축</b> 5</span>
          <span><b>핵심 절</b> 20+</span>
          <span><b>출처</b> 30+ (URL 명시)</span>
        </div>
        <div className={s.ctaRow}>
          <Link className={s.ctaPrimary} href="/classification">분류 시작하기 →</Link>
          <Link className={s.ctaGhost} href="/geulos">GeulOS 사례 보기</Link>
        </div>
      </header>

      {/* 5 axes */}
      <p className={`${s.sectionLabel} ${s.reveal} ${s.d2}`}>다섯 개의 분류축</p>
      <div className={`${s.axes} ${s.reveal} ${s.d2}`}>
        {AXES.map(a => (
          <Link key={a.n} className={s.axisCard} href={a.href}>
            <div className={s.axisNum}>{a.n}</div>
            <div className={s.axisTitle}>{a.title}</div>
            <div className={s.axisCrit}>{a.crit}</div>
            <p className={s.axisDesc}>{a.desc}</p>
          </Link>
        ))}
      </div>

      {/* stats */}
      <p className={`${s.sectionLabel} ${s.reveal} ${s.d3}`}>한눈에 보는 풍경 · 수치는 출처 페이지로</p>
      <div className={`${s.stats} ${s.reveal} ${s.d3}`}>
        {STATS.map(st => (
          <Link key={st.label} className={s.stat} href={st.href}>
            <div className={s.statNum}>{st.num}</div>
            <div className={s.statLabel}>{st.label}</div>
            <div className={s.statSrc}>{st.src}</div>
          </Link>
        ))}
      </div>

      {/* GeulOS */}
      <p className={`${s.sectionLabel} ${s.reveal} ${s.d4}`}>신생 분류축 사례</p>
      <Link href="/geulos" className={`${s.geulos} ${s.reveal} ${s.d4}`}>
        <span className={s.geulosGlyph}>◧</span>
        <span>
          <span className={s.geulosKicker}>AI-Native OS · 참조 구현</span>
          <span className={s.geulosTitle}>GeulOS — 사용자에게는 GUI, AI에게는 CLI</span>
          <span className={s.geulosBody}>
            모든 UI 요소가 1급 객체이고 모든 동작이 이벤트인 작업 환경. 사용자 클릭과 외부
            AI 호출이 <em>동일한 파이프라인·동일한 권한 검사</em>를 통과한다. 기존 5축 위에
            “AI를 1급 사용자로 다루는” 새 축이 가능한가를 묻는 사례. <span style={{ color: 'rgb(79 70 229)' }}>자세히 →</span>
          </span>
        </span>
      </Link>

      {/* more sections */}
      <p className={`${s.sectionLabel} ${s.reveal} ${s.d5}`}>더 깊이 들어가기</p>
      <div className={`${s.nav3} ${s.reveal} ${s.d5}`}>
        {NAV3.map(c => (
          <Link key={c.title} className={s.navCard} href={c.href}>
            <div className={s.navCardTitle}>{c.title} <span className={s.arrow}>→</span></div>
            <p className={s.navCardDesc}>{c.desc}</p>
          </Link>
        ))}
      </div>

      {/* how to read + principles */}
      <p className={`${s.sectionLabel} ${s.reveal} ${s.d5}`}>이 자료실을 읽는 법</p>
      <div className={`${s.twoCol} ${s.reveal} ${s.d5}`}>
        <div>
          <p className={s.noteTitle}>탐색</p>
          <ul className={s.noteList}>
            <li>좌측 사이드바로 섹션 이동, 우측 목차로 페이지 안에서 이동.</li>
            <li>우측 상단 검색은 OS 이름·분류축·GeulOS 메서드명까지 한국어로 찾는다.</li>
            <li>분류 → 개념 → 주요 OS 심화 순서로 읽으면 맥락이 이어진다.</li>
          </ul>
        </div>
        <div>
          <p className={s.noteTitle}>원칙</p>
          <ul className={s.noteList}>
            <li>객관 자료 우선 — Wikipedia·IBM·TOP500·산업 보고서 등 1차/공식 출처.</li>
            <li>모든 사실·수치는 본문에 출처 링크를 함께 단다. 변동 수치는 연도 표기.</li>
            <li>일반 OS 분류와 GeulOS 사례를 명확히 구분, 임의 해석을 섞지 않는다.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
