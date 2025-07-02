import localFont from 'next/font/local'

// RST Reactor - Complete family with all widths and weights
// Following Next.js font optimization best practices with CSS variables
export const rstReactor = localFont({
  src: [
    // Normal width variants
    {
      path: '../public/fonts/RST-Reactor-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/RST-Reactor-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/RST-Reactor-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    // Condensed variants - for UI, navigation, compact text
    {
      path: '../public/fonts/RST-Reactor-Condensed-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/RST-Reactor-Condensed-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    // Expanded variants - for impact, headings
    {
      path: '../public/fonts/RST-Reactor-Expanded-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    // Extra Expanded variants - for maximum impact
    {
      path: '../public/fonts/RST-Reactor-ExtraExpanded-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-rst-reactor',
  display: 'swap',
})

// Export font variable for easy use in CSS
export const reactorVariable = rstReactor.variable 