import { Component } from '@angular/core';

@Component({
  selector: 'xc-icon-thunderstorm-sun',
  standalone:true,
  template: `
    <svg width="24" height="24" viewBox="0 0 24 24" undefinedxmlns="http://www.w3.org/2000/svg">
<mask id="path-1-inside-1_2239_7923" fill="white">
<path d="M11.5799 16.5H10.3199L11.1799 15C11.2523 14.8862 11.3009 14.7589 11.3228 14.6258C11.3446 14.4927 11.3394 14.3566 11.3073 14.2256C11.2752 14.0946 11.217 13.9715 11.136 13.8636C11.0551 13.7557 10.9532 13.6652 10.8365 13.5978C10.7197 13.5303 10.5905 13.4871 10.4566 13.4708C10.3227 13.4546 10.1869 13.4655 10.0574 13.5031C9.92787 13.5407 9.80728 13.6041 9.70289 13.6895C9.59849 13.7749 9.51245 13.8805 9.44993 14L7.71993 17C7.63242 17.1516 7.58622 17.3235 7.58595 17.4985C7.58568 17.6735 7.63136 17.8456 7.71842 17.9974C7.80547 18.1492 7.93086 18.2756 8.08204 18.3638C8.23322 18.452 8.40491 18.4989 8.57993 18.5H9.84993L8.99993 20C8.86733 20.2307 8.83181 20.5047 8.9012 20.7616C8.97059 21.0186 9.1392 21.2374 9.36993 21.37C9.60067 21.5026 9.87464 21.5381 10.1316 21.4687C10.3885 21.3993 10.6073 21.2307 10.7399 21L12.4699 18C12.5577 17.848 12.6039 17.6755 12.6039 17.5C12.6039 17.3245 12.5577 17.152 12.4699 17C12.3802 16.8444 12.2501 16.7159 12.0935 16.6279C11.9369 16.5399 11.7595 16.4957 11.5799 16.5ZM20.9999 7.5H20.1999C20.0965 7.05129 19.9209 6.62237 19.6799 6.23L20.2399 5.67C20.4038 5.4787 20.4894 5.23262 20.4796 4.98095C20.4699 4.72927 20.3656 4.49053 20.1875 4.31244C20.0094 4.13434 19.7707 4.03001 19.519 4.02029C19.2673 4.01057 19.0212 4.09617 18.8299 4.26L18.2699 4.82C17.8776 4.57901 17.4486 4.40339 16.9999 4.3V3.5C16.9999 3.23478 16.8946 2.98043 16.707 2.79289C16.5195 2.60536 16.2652 2.5 15.9999 2.5C15.7347 2.5 15.4804 2.60536 15.2928 2.79289C15.1053 2.98043 14.9999 3.23478 14.9999 3.5V4.3C14.5512 4.40339 14.1223 4.57901 13.7299 4.82L13.1699 4.26C12.9786 4.09617 12.7326 4.01057 12.4809 4.02029C12.2292 4.03001 11.9905 4.13434 11.8124 4.31244C11.6343 4.49053 11.5299 4.72927 11.5202 4.98095C11.5105 5.23262 11.5961 5.4787 11.7599 5.67L12.3199 6.24C12.2299 6.39 12.1599 6.56 12.0799 6.72C11.5658 6.57486 11.0342 6.50084 10.4999 6.5C9.05879 6.49918 7.6655 7.0171 6.5748 7.95906C5.48411 8.90102 4.7689 10.2041 4.55993 11.63C3.85164 11.824 3.22259 12.2364 2.7623 12.8086C2.30202 13.3808 2.03396 14.0837 1.99629 14.8171C1.95863 15.5505 2.15327 16.2771 2.55251 16.8934C2.95175 17.5098 3.53524 17.9845 4.21993 18.25C4.34419 18.309 4.47929 18.3418 4.61679 18.3463C4.75429 18.3507 4.89123 18.3267 5.01904 18.2758C5.14685 18.2249 5.26278 18.1482 5.35959 18.0505C5.4564 17.9527 5.532 17.8361 5.58166 17.7078C5.63133 17.5795 5.65398 17.4423 5.64822 17.3049C5.64245 17.1674 5.60839 17.0326 5.54815 16.9089C5.48792 16.7853 5.40282 16.6753 5.29816 16.586C5.19351 16.4967 5.07156 16.43 4.93993 16.39C4.61777 16.2593 4.35101 16.0208 4.18524 15.7152C4.01948 15.4096 3.965 15.056 4.03114 14.7146C4.09727 14.3733 4.27991 14.0656 4.54782 13.8441C4.81573 13.6225 5.15228 13.5009 5.49993 13.5C5.76515 13.5 6.0195 13.3946 6.20704 13.2071C6.39458 13.0196 6.49993 12.7652 6.49993 12.5C6.50422 11.5557 6.84246 10.6434 7.45477 9.92447C8.06709 9.20558 8.91399 8.72651 9.84559 8.57204C10.7772 8.41757 11.7334 8.59767 12.545 9.08047C13.3565 9.56326 13.9711 10.3176 14.2799 11.21C14.3371 11.3818 14.4398 11.5349 14.5772 11.6529C14.7146 11.7709 14.8814 11.8494 15.0599 11.88C15.5773 11.9716 16.0486 12.2354 16.3972 12.6286C16.7458 13.0218 16.9512 13.5213 16.9802 14.0459C17.0091 14.5706 16.8599 15.0896 16.5567 15.5188C16.2535 15.9479 15.8141 16.262 15.3099 16.41C15.0447 16.4458 14.8046 16.5855 14.6424 16.7984C14.4801 17.0112 14.4091 17.2798 14.4449 17.545C14.4807 17.8102 14.6204 18.0503 14.8333 18.2126C15.0461 18.3748 15.3147 18.4458 15.5799 18.41C15.6693 18.4246 15.7605 18.4246 15.8499 18.41C16.4305 18.2488 16.9707 17.9674 17.4356 17.5839C17.9004 17.2005 18.2795 16.7237 18.5482 16.1844C18.8169 15.6451 18.9693 15.0553 18.9954 14.4533C19.0215 13.8513 18.9209 13.2506 18.6999 12.69L18.8299 12.82C19.0162 13.0047 19.2676 13.1089 19.5299 13.11C19.6615 13.1108 19.792 13.0855 19.9138 13.0358C20.0357 12.986 20.1465 12.9127 20.2399 12.82C20.4262 12.6326 20.5307 12.3792 20.5307 12.115C20.5307 11.8508 20.4262 11.5974 20.2399 11.41L19.6799 10.85C19.9291 10.433 20.105 9.97641 20.1999 9.5H20.9999C21.2652 9.5 21.5195 9.39464 21.707 9.20711C21.8946 9.01957 21.9999 8.76522 21.9999 8.5C21.9999 8.23478 21.8946 7.98043 21.707 7.79289C21.5195 7.60536 21.2652 7.5 20.9999 7.5ZM17.6599 10.15C17.4831 10.3179 17.2806 10.4563 17.0599 10.56C16.7354 10.3233 16.3784 10.1346 15.9999 10C15.5405 8.99676 14.8183 8.13641 13.9099 7.51C14.0214 7.2517 14.1771 7.01482 14.3699 6.81C14.819 6.39464 15.4082 6.16393 16.0199 6.16393C16.6316 6.16393 17.2209 6.39464 17.6699 6.81C18.0988 7.2522 18.3386 7.844 18.3386 8.46C18.3386 9.076 18.0988 9.6678 17.6699 10.11L17.6599 10.15Z"/>
</mask>
<path d="M11.5799 16.5H10.3199L11.1799 15C11.2523 14.8862 11.3009 14.7589 11.3228 14.6258C11.3446 14.4927 11.3394 14.3566 11.3073 14.2256C11.2752 14.0946 11.217 13.9715 11.136 13.8636C11.0551 13.7557 10.9532 13.6652 10.8365 13.5978C10.7197 13.5303 10.5905 13.4871 10.4566 13.4708C10.3227 13.4546 10.1869 13.4655 10.0574 13.5031C9.92787 13.5407 9.80728 13.6041 9.70289 13.6895C9.59849 13.7749 9.51245 13.8805 9.44993 14L7.71993 17C7.63242 17.1516 7.58622 17.3235 7.58595 17.4985C7.58568 17.6735 7.63136 17.8456 7.71842 17.9974C7.80547 18.1492 7.93086 18.2756 8.08204 18.3638C8.23322 18.452 8.40491 18.4989 8.57993 18.5H9.84993L8.99993 20C8.86733 20.2307 8.83181 20.5047 8.9012 20.7616C8.97059 21.0186 9.1392 21.2374 9.36993 21.37C9.60067 21.5026 9.87464 21.5381 10.1316 21.4687C10.3885 21.3993 10.6073 21.2307 10.7399 21L12.4699 18C12.5577 17.848 12.6039 17.6755 12.6039 17.5C12.6039 17.3245 12.5577 17.152 12.4699 17C12.3802 16.8444 12.2501 16.7159 12.0935 16.6279C11.9369 16.5399 11.7595 16.4957 11.5799 16.5ZM20.9999 7.5H20.1999C20.0965 7.05129 19.9209 6.62237 19.6799 6.23L20.2399 5.67C20.4038 5.4787 20.4894 5.23262 20.4796 4.98095C20.4699 4.72927 20.3656 4.49053 20.1875 4.31244C20.0094 4.13434 19.7707 4.03001 19.519 4.02029C19.2673 4.01057 19.0212 4.09617 18.8299 4.26L18.2699 4.82C17.8776 4.57901 17.4486 4.40339 16.9999 4.3V3.5C16.9999 3.23478 16.8946 2.98043 16.707 2.79289C16.5195 2.60536 16.2652 2.5 15.9999 2.5C15.7347 2.5 15.4804 2.60536 15.2928 2.79289C15.1053 2.98043 14.9999 3.23478 14.9999 3.5V4.3C14.5512 4.40339 14.1223 4.57901 13.7299 4.82L13.1699 4.26C12.9786 4.09617 12.7326 4.01057 12.4809 4.02029C12.2292 4.03001 11.9905 4.13434 11.8124 4.31244C11.6343 4.49053 11.5299 4.72927 11.5202 4.98095C11.5105 5.23262 11.5961 5.4787 11.7599 5.67L12.3199 6.24C12.2299 6.39 12.1599 6.56 12.0799 6.72C11.5658 6.57486 11.0342 6.50084 10.4999 6.5C9.05879 6.49918 7.6655 7.0171 6.5748 7.95906C5.48411 8.90102 4.7689 10.2041 4.55993 11.63C3.85164 11.824 3.22259 12.2364 2.7623 12.8086C2.30202 13.3808 2.03396 14.0837 1.99629 14.8171C1.95863 15.5505 2.15327 16.2771 2.55251 16.8934C2.95175 17.5098 3.53524 17.9845 4.21993 18.25C4.34419 18.309 4.47929 18.3418 4.61679 18.3463C4.75429 18.3507 4.89123 18.3267 5.01904 18.2758C5.14685 18.2249 5.26278 18.1482 5.35959 18.0505C5.4564 17.9527 5.532 17.8361 5.58166 17.7078C5.63133 17.5795 5.65398 17.4423 5.64822 17.3049C5.64245 17.1674 5.60839 17.0326 5.54815 16.9089C5.48792 16.7853 5.40282 16.6753 5.29816 16.586C5.19351 16.4967 5.07156 16.43 4.93993 16.39C4.61777 16.2593 4.35101 16.0208 4.18524 15.7152C4.01948 15.4096 3.965 15.056 4.03114 14.7146C4.09727 14.3733 4.27991 14.0656 4.54782 13.8441C4.81573 13.6225 5.15228 13.5009 5.49993 13.5C5.76515 13.5 6.0195 13.3946 6.20704 13.2071C6.39458 13.0196 6.49993 12.7652 6.49993 12.5C6.50422 11.5557 6.84246 10.6434 7.45477 9.92447C8.06709 9.20558 8.91399 8.72651 9.84559 8.57204C10.7772 8.41757 11.7334 8.59767 12.545 9.08047C13.3565 9.56326 13.9711 10.3176 14.2799 11.21C14.3371 11.3818 14.4398 11.5349 14.5772 11.6529C14.7146 11.7709 14.8814 11.8494 15.0599 11.88C15.5773 11.9716 16.0486 12.2354 16.3972 12.6286C16.7458 13.0218 16.9512 13.5213 16.9802 14.0459C17.0091 14.5706 16.8599 15.0896 16.5567 15.5188C16.2535 15.9479 15.8141 16.262 15.3099 16.41C15.0447 16.4458 14.8046 16.5855 14.6424 16.7984C14.4801 17.0112 14.4091 17.2798 14.4449 17.545C14.4807 17.8102 14.6204 18.0503 14.8333 18.2126C15.0461 18.3748 15.3147 18.4458 15.5799 18.41C15.6693 18.4246 15.7605 18.4246 15.8499 18.41C16.4305 18.2488 16.9707 17.9674 17.4356 17.5839C17.9004 17.2005 18.2795 16.7237 18.5482 16.1844C18.8169 15.6451 18.9693 15.0553 18.9954 14.4533C19.0215 13.8513 18.9209 13.2506 18.6999 12.69L18.8299 12.82C19.0162 13.0047 19.2676 13.1089 19.5299 13.11C19.6615 13.1108 19.792 13.0855 19.9138 13.0358C20.0357 12.986 20.1465 12.9127 20.2399 12.82C20.4262 12.6326 20.5307 12.3792 20.5307 12.115C20.5307 11.8508 20.4262 11.5974 20.2399 11.41L19.6799 10.85C19.9291 10.433 20.105 9.97641 20.1999 9.5H20.9999C21.2652 9.5 21.5195 9.39464 21.707 9.20711C21.8946 9.01957 21.9999 8.76522 21.9999 8.5C21.9999 8.23478 21.8946 7.98043 21.707 7.79289C21.5195 7.60536 21.2652 7.5 20.9999 7.5ZM17.6599 10.15C17.4831 10.3179 17.2806 10.4563 17.0599 10.56C16.7354 10.3233 16.3784 10.1346 15.9999 10C15.5405 8.99676 14.8183 8.13641 13.9099 7.51C14.0214 7.2517 14.1771 7.01482 14.3699 6.81C14.819 6.39464 15.4082 6.16393 16.0199 6.16393C16.6316 6.16393 17.2209 6.39464 17.6699 6.81C18.0988 7.2522 18.3386 7.844 18.3386 8.46C18.3386 9.076 18.0988 9.6678 17.6699 10.11L17.6599 10.15Z"  stroke-width="2" mask="url(#path-1-inside-1_2239_7923)"/>
</svg>
`,
  styles: [
  ]
})
export class XcIconThunderstormSunComponent {

}