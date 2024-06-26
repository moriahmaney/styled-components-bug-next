'use client'

import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager, ThemeProvider} from 'styled-components'

export default function StyledComponentsRegistry({
  theme,
  children,
}: {
  theme: object,
  children: React.ReactNode
}) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })

  if (typeof window !== 'undefined') return <>{children}</>

  return (
      <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </StyleSheetManager>
  )
}
