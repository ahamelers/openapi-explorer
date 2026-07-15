import { css } from 'lit';

export default css`
      *:not(:defined) { display:none }

      :host {
        display:flex;
        flex-direction: column;
        width:100%;
        height:100%;
        margin:0;
        padding:0;
        overflow: hidden;
        letter-spacing:normal;
        color:var(--fg);
        background-color:var(--bg);
        font-family: var(--font-regular);
      }
      .body {
        display:flex;
        height:100%;
        width:100%;
        overflow:hidden;
      }

      a {
        text-decoration: none;
      }

      .main-content { 
        margin:0;
        padding: 0; 
        display:block;
        flex:1;
        height:100%;
        overflow-y: overlay;
        overflow-x: hidden;
        scrollbar-width: thin;
        scrollbar-color: var(--border-color) transparent;
      }

      .main-content::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      .main-content::-webkit-scrollbar-track {
        background:transparent;
      }
      .main-content::-webkit-scrollbar-thumb {
        background-color: var(--border-color);
      }

      .section-gap.section-tag {
        border-bottom:1px solid var(--border-color);
      }
      .method-section-gap {
        margin: 0;
        padding: 0 8px 0 4px;
        border-bottom: 1px solid var(--border-color);
      }
      .section-gap { 
        padding: 24px 0px 0px;
      }
      .section-tag-header {
        position:relative;
        cursor: n-resize;
        padding: 12px 0;
      }
      .collapsed .section-tag-header:hover{
        cursor: s-resize;
      }

      .section-tag-header:hover{
        background-image: linear-gradient(to right, rgba(0,0,0,0), var(--border-color), rgba(0,0,0,0));
      }

      .collapsed .section-tag-header:hover::after {
        color:var(--primary-color);
      }

      .collapsed .section-tag-body {
        display:none;
      }

      .logo {
        height:36px;
        width:36px;
        margin-left:5px; 
      }
      .only-large-screen-flex,
      .only-large-screen{
        display:none;
      }
      .header-title{
        font-size:calc(var(--font-size-regular) + 8px); 
        padding:0 8px;
      }
      .tag.title {
        margin-bottom: 1rem;
        font-weight: bold;
      }
      .header{
        background-color:var(--header-bg);
        color:var(--header-fg);
        width:100%;
      }

      input.header-input{
        background:var(--header-color-darker);
        color:var(--header-fg);
        border:1px solid var(--header-color-border);
        flex:1; 
        padding-right:24px;
        border-radius:3px;
      }
      input.header-input::placeholder {
        opacity:0.4;
      }
      input:disabled {
        cursor: not-allowed;
      }
      .loader {
        margin: 16px auto 16px auto; 
        border: 4px solid var(--bg3);
        border-radius: 50%;
        border-top: 4px solid var(--primary-color);
        width: 36px;
        height: 36px;
        animation: spin 2s linear infinite;
      }
      .expanded-endpoint-body, .expanded-endpoint-component {
        position: relative;
      }

      .divider { 
        border-top: 2px solid var(--border-color);
        margin: 24px 0;
        width:100%;
      }

      .security-tooltip {
        border: 1px solid var(--border-color);
        border-left-width: 4px;
        margin-left:2px;
      }
      .security-tooltip a {
        color: var(--fg2);
        text-decoration: none;
      }
      .tooltip-text {
        color: var(--fg2);
        background-color: var(--bg2);
        visibility: hidden;
        overflow-wrap: break-word;
      }
      .tooltip:hover,
      .tooltip:focus {
        color: var(--primary-color);
        border-color: var(--primary-color);
      }
      .tooltip-replace:hover {
        visibility: hidden;
      }
      .tooltip:hover a:hover {
        color: var(--primary-color);
      }

      .tooltip:hover .tooltip-text {
        visibility: visible;
        cursor: text;
        opacity: 1;
      }

      @media only screen and (max-width: 767.98px) {
        .section-padding {
          // margin-right: 1rem;
          margin: 1rem;
        }

        .sub-title.tag {
          margin-left: 1rem;
        }
        .section-tag-body .description {
          margin-left: 1rem;
          margin-right: 1rem;
        }
      }

      @media only screen and (min-width: 768px) {
        .nav-bar {
          width: 260px;
          display:flex;
        }
        .only-large-screen{
          display:block;
        }
        .only-large-screen-flex{
          display:flex;
        }
        .section-gap {
          padding: 24px 24px; 
        }
        .section-gap--read-mode { 
          padding: 24px 8px; 
        }
        .section-gap--focused-mode {
          padding: 1.5rem;
        }
        .endpoint-body {
          position: relative;
          padding:36px 0 48px 0;
        }
      }

      @media only screen and (min-width: 1024px) {
        .nav-bar {
          width: 330px;
          display:flex;
        }
        .section-gap--read-mode { 
          padding: 24px 24px 12px;
        }
        .main-content-inner {
          padding: 24px;
        }
      }

      .body {
        flex-direction: row-reverse;
      }
      .nav-bar-paths-under-tag .nav-bar-path,
      .nav-bar-path:hover,
      .body a {
        text-decoration: underline;
      }
      .nav-bar-paths-under-tag .nav-bar-path {
        color: var(--secondary-color)
      }
      .body a:visited {
        color: var(--purple);
      }
      .nav-bar-paths-under-tag .nav-bar-path:hover,
      .body a:hover, .body a:focus {
        color: var(--hover-color);
      }
      .nav-bar-paths-under-tag .nav-bar-path:active,
      .body a:active {
        color: var(--red);
      }
      .main-content-inner {
        padding: 2px !important;
        padding-right: 5ch !important;
      }
      @media screen and (max-width: 760px) {
        .main-content-inner {
          padding-right: 2px !important;
        }
      }
      .section-gap--focused-mode {
        padding: 5px 0 0 !important;
      }
      .sticky-scroll-element {
        z-index: 0 !important;
      }
      h1, h2, h3, h4, h5, h6 {
        color: var(--primary-color);
        font-weight: normal;
      }
      h2 {
        margin-top: calc(var(--spacing-base) * 3.75);
        margin-bottom: calc(var(--spacing-base) * 2);
        font-size: 1.65rem !important;
        line-height: 2rem;
      }
      h3 {
        margin-top: calc(var(--spacing-base) * 3.5) !important;
        margin-bottom: calc(var(--spacing-base) * 1.5);
        font-size: 1.4rem !important;
        line-height: 1.75rem;
      }
      h4 {
        margin-top: calc(var(--spacing-base) * 3);
        margin-bottom: calc(var(--spacing-base) * 1.5);
        font-size: 1.25rem !important;
        line-height: 1.5rem;
      }
      h5, h6 {
        margin-top: calc(var(--spacing-base) * 2);
        margin-bottom: var(--spacing-base);
        font-size: 1.125rem !important;
        line-height: 1.5rem;
      }
      h6 {
        font-style: italic;
      }
    `;
