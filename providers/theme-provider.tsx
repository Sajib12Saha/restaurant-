"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Prevents rendering mismatches by ensuring the theme is only applied after mount
  if (!mounted) {
    return <>{children}</>; // Render children without wrapping in ThemeProvider on SSR
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
