declare module '*.svg' {
  import type { FC, SVGProps } from 'react'

  export const ReactComponent: FC<SVGProps<SVGElement>>
  const content: FC<SVGProps<SVGElement>>
  export default content
}
