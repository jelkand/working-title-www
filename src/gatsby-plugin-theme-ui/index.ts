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
    contrast: '#000',
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
      color: 'text',
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
    li: {
      code: {
        fontFamily: 'monospace',
        fontSize: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    // // h1: {
    // //   color: 'text',
    // //   fontFamily: 'heading',
    // //   lineHeight: 'heading',
    // //   fontWeight: 'body',
    // //   fontSize: 5,
    // // },
    // h2: {
    //   color: 'text',
    //   fontFamily: 'heading',
    //   lineHeight: 'heading',
    //   fontWeight: 'heading',
    //   fontSize: 4,
    // },
    // h3: {
    //   color: 'text',
    //   fontFamily: 'heading',
    //   lineHeight: 'heading',
    //   fontWeight: 'heading',
    //   fontSize: 3,
    // },
    // h4: {
    //   color: 'text',
    //   fontFamily: 'heading',
    //   lineHeight: 'heading',
    //   fontWeight: 'heading',
    //   fontSize: 2,
    // },
    // h5: {
    //   color: 'text',
    //   fontFamily: 'heading',
    //   lineHeight: 'heading',
    //   fontWeight: 'heading',
    //   fontSize: 1,
    // },
    // h6: {
    //   color: 'text',
    //   fontFamily: 'heading',
    //   lineHeight: 'heading',
    //   fontWeight: 'heading',
    //   fontSize: 0,
    // },
    // p: {
    //   color: 'text',
    //   fontFamily: 'body',
    //   fontWeight: 'body',
    //   lineHeight: 'body',
    //   code: {
    //     fontFamily: 'monospace',
    //     fontSize: 'inherit',
    //   },
    // },
    // a: {
    //   color: 'primary',
    // },
    // pre: {
    //   fontFamily: 'monospace',
    //   overflowX: 'auto',
    //   code: {
    //     color: 'inherit',
    //   },
    // },
    // table: {
    //   width: '100%',
    //   borderSpacing: 0,
    //   borderCollapse: 'collapse',
    // },
    // th: {
    //   textAlign: 'left',
    //   borderBottomStyle: 'solid',
    // },
    // img: {
    //   maxWidth: '100%',
    // },
  },
}
