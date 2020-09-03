// https://coolors.co/dba506-464655-b7b6c1-d5cfe1 generated palette

export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: [0, 4, 8, 16, 32, 64, 128, 256, 512, 680],
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Roboto, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 900,
    bold: 700,
  },
  lineHeights: {
    body: 1.625,
    heading: 1.25,
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#DBA506',
    contrast: '#464655',
    secondary: '#306',
    muted: '#F2DB83',
  },
  buttons: {
    navButton: {
      boxSizing: 'content-block',
      borderRadius: 4,
      cursor: 'pointer',
      bg: 'primary',
      height: 4,
      ':disabled': {
        bg: 'muted',
        cursor: 'unset',
      },
      color: 'contrast',
      display: 'inline-flex',
      alignItems: 'center',
      fontWeight: 'bold',
      width: '90px',
      minWidth: '80px',
      textAlign: 'center',
      padding: 2,
    },
  },
  styles: {
    // li: {
    //   code: {
    //     fontFamily: 'monospace',
    //     fontSize: 'inherit',
    //   },
    // },
    // code: {
    //   fontFamily: 'monospace',
    //   fontSize: 'inherit',
    // },
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
  },
}
