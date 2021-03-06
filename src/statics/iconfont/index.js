import { injectGlobal } from "styled-components";

injectGlobal`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1535340097437'); /* IE9*/
    src: url('./iconfont.eot?t=1535340097437#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1535340097437') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1535340097437#iconfont') format('svg'); /* iOS 4.1- */
  }
  .iconfont{
    margin-right: 5px;
    vertical-align:-1px;
    font-family:"iconfont" !important;
    font-size:20px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
`


