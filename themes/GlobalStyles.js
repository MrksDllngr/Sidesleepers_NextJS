import { createGlobalStyle} from "styled-components"




export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'Poppins-ExtraLight';
    src: local('Poppins-ExtraLight'), url(/fonts/Poppins-ExtraLight.ttf) format('truetype');
  }

  @font-face {
    font-family: 'Poppins-SemiBold';
    src: local('Poppins-SemiBold'), url(/fonts/Poppins-SemiBold.ttf) format('truetype');
  }

  @font-face {
    font-family: 'LeckerliOne-Regular';
    src: local('LeckerliOne-Regular'), url(/fonts/LeckerliOne-Regular.ttf) format('truetype');
  }
  @font-face {
    font-family: 'Cookie-Regular';
    src: local('Cookie-Regular'), url(/fonts/Cookie-Regular.ttf) format('truetype');
  }

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body, html {
    font-family: ${props => props.theme.fonts.funny};
    height:100%;
}

h1{
  font-family:${props => props.theme.fonts.main2};
  font-size:2.875rem;
  text-align:center;
}

h2{
  font-family:${props=>props.theme.fonts.main1};
  font-size: 2rem;
  text-align:center;
}

h3{
  font-family:${props=>props.theme.fonts.funny};
  letter-spacing:1.5px;
}

p{
  font-family:${props=>props.theme.fonts.main1};
  font-size: 1rem;
  text-align:center;
}

button{
  font-family:${props=>props.theme.fonts.main2};
  border: none;
&:focus, &:active{
   border:none;
   outline:none;
 }
}


.image-gallery-icon {
  color: #fff;
  transition: all .2s ease-out;
  appearance: none;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  outline: none;
  position: absolute;
  z-index: 4;
  filter: drop-shadow(0 2px 2px #1a1a1a); }
  @media (min-width: 768px) {
    .image-gallery-icon:hover {
      color: #337ab7; }
      .image-gallery-icon:hover .image-gallery-svg {
        transform: scale(1.1); } }
  .image-gallery-icon:focus {
    outline: 2px solid #337ab7; }

.image-gallery-using-mouse .image-gallery-icon:focus {
  outline: none; }

.image-gallery-fullscreen-button,
.image-gallery-play-button {
  bottom: 0;
  padding: 20px; }
  .image-gallery-fullscreen-button .image-gallery-svg,
  .image-gallery-play-button .image-gallery-svg {
    height: 36px;
    width: 36px; }
  @media (max-width: 768px) {
    .image-gallery-fullscreen-button,
    .image-gallery-play-button {
      padding: 15px; }
      .image-gallery-fullscreen-button .image-gallery-svg,
      .image-gallery-play-button .image-gallery-svg {
        height: 24px;
        width: 24px; } }
  @media (max-width: 480px) {
    .image-gallery-fullscreen-button,
    .image-gallery-play-button {
      padding: 10px; }
      .image-gallery-fullscreen-button .image-gallery-svg,
      .image-gallery-play-button .image-gallery-svg {
        height: 16px;
        width: 16px; } }

.image-gallery-fullscreen-button {
  right: 0; }

.image-gallery-play-button {
  left: 0; }

.image-gallery-left-nav,
.image-gallery-right-nav {
  padding: 50px 10px;
  top: 50%;
  transform: translateY(-50%); }
  .image-gallery-left-nav .image-gallery-svg,
  .image-gallery-right-nav .image-gallery-svg {
    height: 120px;
    width: 60px; }
  @media (max-width: 768px) {
    .image-gallery-left-nav .image-gallery-svg,
    .image-gallery-right-nav .image-gallery-svg {
      height: 72px;
      width: 36px; } }
  @media (max-width: 480px) {
    .image-gallery-left-nav .image-gallery-svg,
    .image-gallery-right-nav .image-gallery-svg {
      height: 48px;
      width: 24px; } }
  .image-gallery-left-nav[disabled],
  .image-gallery-right-nav[disabled] {
    cursor: disabled;
    opacity: .6;
    pointer-events: none; }

.image-gallery-left-nav {
  left: 0; }

.image-gallery-right-nav {
  right: 0; }

.image-gallery {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  position: relative; }
  .image-gallery.fullscreen-modal {
    background: #000;
    bottom: 0;
    height: 100%;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 5; }
    .image-gallery.fullscreen-modal .image-gallery-content {
      top: 50%;
      transform: translateY(-50%); }

.image-gallery-content {
  position: relative;
  line-height: 0;
  top: 0; }
  .image-gallery-content.fullscreen {
    background: #000; }
  .image-gallery-content .image-gallery-slide .image-gallery-image {
    max-height: calc(100vh - 80px); }
  .image-gallery-content.left .image-gallery-slide .image-gallery-image, .image-gallery-content.right .image-gallery-slide .image-gallery-image {
    max-height: 100vh; }

.image-gallery-slide-wrapper {
  position: relative; }
  .image-gallery-slide-wrapper.left, .image-gallery-slide-wrapper.right {
    display: inline-block;
    width: calc(100% - 110px); }
    @media (max-width: 768px) {
      .image-gallery-slide-wrapper.left, .image-gallery-slide-wrapper.right {
        width: calc(100% - 87px); } }
  .image-gallery-slide-wrapper.image-gallery-rtl {
    direction: rtl; }

.image-gallery-slides {
  line-height: 0;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
  text-align: center; }

.image-gallery-slide {
  left: 0;
  position: absolute;
  top: 0;
  width: 100%; }
  .image-gallery-slide.center {
    position: relative; }
  .image-gallery-slide .image-gallery-image {
    width: 100%;
    object-fit: contain; }
  .image-gallery-slide .image-gallery-description {
    background: rgba(0, 0, 0, 0.4);
    bottom: 70px;
    color: #fff;
    left: 0;
    line-height: 1;
    padding: 10px 20px;
    position: absolute;
    white-space: normal; }
    @media (max-width: 768px) {
      .image-gallery-slide .image-gallery-description {
        bottom: 45px;
        font-size: .8em;
        padding: 8px 15px; } }

.image-gallery-bullets {
  bottom: 20px;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  width: 80%;
  z-index: 4; }
  .image-gallery-bullets .image-gallery-bullets-container {
    margin: 0;
    padding: 0;
    text-align: center; }
  .image-gallery-bullets .image-gallery-bullet {
    appearance: none;
    background-color: transparent;
    border: 1px solid #fff;
    border-radius: 50%;
    box-shadow: 0 1px 0 #1a1a1a;
    cursor: pointer;
    display: inline-block;
    margin: 0 5px;
    outline: none;
    padding: 5px;
    transition: background .2s ease-out; }
    @media (max-width: 768px) {
      .image-gallery-bullets .image-gallery-bullet {
        margin: 0 3px;
        padding: 3px; } }
    @media (max-width: 480px) {
      .image-gallery-bullets .image-gallery-bullet {
        padding: 2.7px; } }
    .image-gallery-bullets .image-gallery-bullet:focus, .image-gallery-bullets .image-gallery-bullet:hover {
      background: #337ab7;
      transform: scale(1.1); }
    .image-gallery-bullets .image-gallery-bullet.active {
      background: #fff; }

.image-gallery-thumbnails-wrapper {
  position: relative; }
  .image-gallery-thumbnails-wrapper.thumbnails-wrapper-rtl {
    direction: rtl; }
  .image-gallery-thumbnails-wrapper.left, .image-gallery-thumbnails-wrapper.right {
    display: inline-block;
    vertical-align: top;
    width: 100px; }
    @media (max-width: 768px) {
      .image-gallery-thumbnails-wrapper.left, .image-gallery-thumbnails-wrapper.right {
        width: 81px; } }
    .image-gallery-thumbnails-wrapper.left .image-gallery-thumbnails, .image-gallery-thumbnails-wrapper.right .image-gallery-thumbnails {
      height: 100%;
      width: 100%;
      left: 0;
      padding: 0;
      position: absolute;
      top: 0; }
      .image-gallery-thumbnails-wrapper.left .image-gallery-thumbnails .image-gallery-thumbnail, .image-gallery-thumbnails-wrapper.right .image-gallery-thumbnails .image-gallery-thumbnail {
        display: block;
        margin-right: 0;
        padding: 0; }
        .image-gallery-thumbnails-wrapper.left .image-gallery-thumbnails .image-gallery-thumbnail + .image-gallery-thumbnail, .image-gallery-thumbnails-wrapper.right .image-gallery-thumbnails .image-gallery-thumbnail + .image-gallery-thumbnail {
          margin-left: 0;
          margin-top: 2px; }
  .image-gallery-thumbnails-wrapper.left, .image-gallery-thumbnails-wrapper.right {
    margin: 0 5px; }
    @media (max-width: 768px) {
      .image-gallery-thumbnails-wrapper.left, .image-gallery-thumbnails-wrapper.right {
        margin: 0 3px; } }

.image-gallery-thumbnails {
  overflow: hidden;
  padding: 5px 0; }
  @media (max-width: 768px) {
    .image-gallery-thumbnails {
      padding: 3px 0; } }
  .image-gallery-thumbnails .image-gallery-thumbnails-container {
    cursor: pointer;
    text-align: center;
    transition: transform .45s ease-out;
    white-space: nowrap; }

.image-gallery-thumbnail {
  display: inline-block;
  border: 4px solid transparent;
  transition: border .3s ease-out;
  width: 100px;
  background: transparent;
  padding: 0; }
  @media (max-width: 768px) {
    .image-gallery-thumbnail {
      border: 3px solid transparent;
      width: 81px; } }
  .image-gallery-thumbnail + .image-gallery-thumbnail {
    margin-left: 2px; }
  .image-gallery-thumbnail .image-gallery-thumbnail-inner {
    position: relative; }
  .image-gallery-thumbnail .image-gallery-thumbnail-image {
    vertical-align: middle;
    width: 100%;
    line-height: 0; }
  .image-gallery-thumbnail.active, .image-gallery-thumbnail:hover, .image-gallery-thumbnail:focus {
    outline: none;
    border: 4px solid #337ab7; }
    @media (max-width: 768px) {
      .image-gallery-thumbnail.active, .image-gallery-thumbnail:hover, .image-gallery-thumbnail:focus {
        border: 3px solid #337ab7; } }

.image-gallery-thumbnail-label {
  box-sizing: border-box;
  color: white;
  font-size: 1em;
  left: 0;
  line-height: 1em;
  padding: 5%;
  position: absolute;
  top: 50%;
  text-shadow: 1px 1px 0 black;
  transform: translateY(-50%);
  white-space: normal;
  width: 100%; }
  @media (max-width: 768px) {
    .image-gallery-thumbnail-label {
      font-size: .8em;
      line-height: .8em; } }

.image-gallery-index {
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  line-height: 1;
  padding: 10px 20px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 4; }
  @media (max-width: 768px) {
    .image-gallery-index {
      font-size: .8em;
      padding: 5px 10px; } }




`
