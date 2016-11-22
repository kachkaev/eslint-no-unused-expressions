import injectGlobal from 'styled-components';

// OK (with brackets)
injectGlobal([`
  body {
    color: #000,
  }
`]);

// causes eslint error (no brackets)
injectGlobal`
  body {
    background: #f00,
  }
`;
