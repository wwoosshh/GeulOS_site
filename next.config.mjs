import nextra from 'nextra'

const withNextra = nextra({
  latex: true,
  search: {
    codeblocks: false
  }
})

export default withNextra({
  reactStrictMode: true,
  // 상위 디렉터리(C:\Users\s0105)의 lockfile/node_modules 때문에 Next.js가
  // 워크스페이스 루트를 잘못 추론하던 경고를 막기 위해 이 폴더로 고정.
  outputFileTracingRoot: import.meta.dirname
})
