import { css } from "@emotion/react";

export const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700&family=Poppins:wght@100;200;300;400;500;600;700&display=swap");
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: "Noto Sans KR", "Poppins", "NewYork";
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
    background-color: #fcfbfa;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  button {
    border: 0 none;
    background-color: transparent;
  }

  input,
  textarea,
  button {
    -webkit-appearance: none;
    -webkit-border-radius: 0;
  }

  @font-face {
    font-family: "NewYork";
    src: url("/font/NewYork_PERSONAL_USE.otf");
  }

  .quill .ql-toolbar.ql-snow,
  .quill .ql-container.ql-snow {
    border: 1px solid #306415;
  }

  .quill .ql-toolbar.ql-snow + .ql-container.ql-snow {
    height: 400px;
  }

  .footerSlide {
    height: 32% !important;
  }

  .ReviewModal .ant-modal-footer,
  .DeleteModal .ant-modal-footer {
    display: none;
  }

  .ReviewModal .ant-modal-content {
    padding: 0 !important;
  }
  .ReviewModal .ant-modal .ant-modal-header {
    color: rgba(0, 0, 0, 0.88);
    background: #383c34;
    border-radius: 8px 8px 0 0;
    margin-bottom: 8px;
  }

  .ReviewModal .ant-modal-title {
    color: #30640a;
    font-weight: 400;
    font-size: 20px;
    word-wrap: break-word;
    text-align: left;
    padding: 15px 20px;
    font-family: "Noto Sans KR";
    border-bottom: 1px solid #e7e6e6;
    margin-bottom: 20px;
  }
`;
