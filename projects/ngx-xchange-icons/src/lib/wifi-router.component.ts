import { Component } from '@angular/core';

@Component({
  selector: 'xc-icon-wifi-router',
  standalone:true,
  template: `
    <svg width="24" height="24" viewBox="0 0 24 24" undefinedxmlns="http://www.w3.org/2000/svg">
<mask id="path-1-inside-1_2239_8017" fill="white">
<path d="M8.8999 16.9962C8.70212 16.9962 8.50878 17.0549 8.34433 17.1648C8.17988 17.2746 8.05171 17.4308 7.97602 17.6135C7.90034 17.7963 7.88053 17.9973 7.91912 18.1913C7.9577 18.3853 8.05294 18.5635 8.1928 18.7033C8.33265 18.8432 8.51083 18.9384 8.70481 18.977C8.89879 19.0156 9.09986 18.9958 9.28259 18.9201C9.46531 18.8444 9.62149 18.7163 9.73137 18.5518C9.84125 18.3874 9.8999 18.194 9.8999 17.9962C9.8999 17.731 9.79455 17.4767 9.60701 17.2891C9.41947 17.1016 9.16512 16.9962 8.8999 16.9962ZM5.8999 16.9962C5.70212 16.9962 5.50878 17.0549 5.34433 17.1648C5.17988 17.2746 5.05171 17.4308 4.97602 17.6135C4.90034 17.7963 4.88053 17.9973 4.91912 18.1913C4.9577 18.3853 5.05294 18.5635 5.1928 18.7033C5.33265 18.8432 5.51083 18.9384 5.70481 18.977C5.89879 19.0156 6.09986 18.9958 6.28259 18.9201C6.46531 18.8444 6.62149 18.7163 6.73137 18.5518C6.84125 18.3874 6.8999 18.194 6.8999 17.9962C6.8999 17.731 6.79455 17.4767 6.60701 17.2891C6.41947 17.1016 6.16512 16.9962 5.8999 16.9962ZM11.8999 16.9962C11.7021 16.9962 11.5088 17.0549 11.3443 17.1648C11.1799 17.2746 11.0517 17.4308 10.976 17.6135C10.9003 17.7963 10.8805 17.9973 10.9191 18.1913C10.9577 18.3853 11.0529 18.5635 11.1928 18.7033C11.3326 18.8432 11.5108 18.9384 11.7048 18.977C11.8988 19.0156 12.0999 18.9958 12.2826 18.9201C12.4653 18.8444 12.6215 18.7163 12.7314 18.5518C12.8413 18.3874 12.8999 18.194 12.8999 17.9962C12.8999 17.731 12.7945 17.4767 12.607 17.2891C12.4195 17.1016 12.1651 16.9962 11.8999 16.9962ZM14.9999 8.49623C15.0878 8.34469 15.214 8.2189 15.3658 8.13147C15.5176 8.04403 15.6897 7.998 15.8649 7.998C16.0401 7.998 16.2122 8.04403 16.364 8.13147C16.5158 8.2189 16.642 8.34469 16.7299 8.49623C16.8618 8.72496 17.0789 8.89224 17.3336 8.96155C17.5884 9.03087 17.8603 8.9966 18.0899 8.86623C18.2079 8.80432 18.3123 8.71946 18.397 8.61664C18.4817 8.51383 18.545 8.39512 18.5832 8.2675C18.6214 8.13988 18.6337 8.00591 18.6194 7.87346C18.6051 7.74102 18.5645 7.61276 18.4999 7.49623C18.2369 7.03927 17.858 6.65971 17.4016 6.39578C16.9451 6.13186 16.4272 5.99289 15.8999 5.99289C15.3726 5.99289 14.8547 6.13186 14.3982 6.39578C13.9418 6.65971 13.5629 7.03927 13.2999 7.49623C13.2155 7.71711 13.212 7.96076 13.2902 8.18393C13.3684 8.40709 13.5231 8.59534 13.727 8.71523C13.9308 8.83512 14.1705 8.87891 14.4035 8.83882C14.6366 8.79872 14.8479 8.67734 14.9999 8.49623ZM21.9999 5.49623C21.3852 4.43312 20.5017 3.55041 19.438 2.93673C18.3743 2.32306 17.1679 2 15.9399 2C14.7119 2 13.5055 2.32306 12.4418 2.93673C11.3781 3.55041 10.4946 4.43312 9.8799 5.49623C9.81378 5.61036 9.7709 5.73645 9.75371 5.86723C9.73653 5.99801 9.74539 6.13089 9.77978 6.25823C9.81417 6.38557 9.87342 6.50485 9.9541 6.6092C10.0348 6.71355 10.1353 6.8009 10.2499 6.86623C10.3875 6.94458 10.5417 6.98913 10.6999 6.99623C10.8761 6.99693 11.0494 6.95106 11.2022 6.86325C11.3549 6.77545 11.4818 6.64884 11.5699 6.49623C12.0088 5.73619 12.6399 5.10506 13.4 4.66626C14.1601 4.22746 15.0223 3.99645 15.8999 3.99645C16.7775 3.99645 17.6397 4.22746 18.3998 4.66626C19.1599 5.10506 19.791 5.73619 20.2299 6.49623C20.2952 6.61082 20.3826 6.71135 20.4869 6.79203C20.5913 6.87272 20.7106 6.93196 20.8379 6.96635C20.9652 7.00074 21.0981 7.0096 21.2289 6.99242C21.3597 6.97524 21.4858 6.93235 21.5999 6.86623C21.717 6.80345 21.8204 6.71796 21.9041 6.61476C21.9878 6.51155 22.0501 6.39271 22.0873 6.26516C22.1246 6.13761 22.136 6.00391 22.121 5.87189C22.106 5.73987 22.0648 5.61216 21.9999 5.49623ZM17.8999 13.9962H16.8999V10.9962C16.8999 10.731 16.7945 10.4767 16.607 10.2891C16.4195 10.1016 16.1651 9.99623 15.8999 9.99623C15.6347 9.99623 15.3803 10.1016 15.1928 10.2891C15.0053 10.4767 14.8999 10.731 14.8999 10.9962V13.9962H4.8999C4.10425 13.9962 3.34119 14.3123 2.77858 14.8749C2.21597 15.4375 1.8999 16.2006 1.8999 16.9962V18.9962C1.8999 19.7919 2.21597 20.5549 2.77858 21.1176C3.34119 21.6802 4.10425 21.9962 4.8999 21.9962H17.8999C18.6956 21.9962 19.4586 21.6802 20.0212 21.1176C20.5838 20.5549 20.8999 19.7919 20.8999 18.9962V16.9962C20.8999 16.2006 20.5838 15.4375 20.0212 14.8749C19.4586 14.3123 18.6956 13.9962 17.8999 13.9962ZM18.8999 18.9962C18.8999 19.2614 18.7945 19.5158 18.607 19.7033C18.4195 19.8909 18.1651 19.9962 17.8999 19.9962H4.8999C4.63469 19.9962 4.38033 19.8909 4.1928 19.7033C4.00526 19.5158 3.8999 19.2614 3.8999 18.9962V16.9962C3.8999 16.731 4.00526 16.4767 4.1928 16.2891C4.38033 16.1016 4.63469 15.9962 4.8999 15.9962H17.8999C18.1651 15.9962 18.4195 16.1016 18.607 16.2891C18.7945 16.4767 18.8999 16.731 18.8999 16.9962V18.9962Z"/>
</mask>
<path d="M8.8999 16.9962C8.70212 16.9962 8.50878 17.0549 8.34433 17.1648C8.17988 17.2746 8.05171 17.4308 7.97602 17.6135C7.90034 17.7963 7.88053 17.9973 7.91912 18.1913C7.9577 18.3853 8.05294 18.5635 8.1928 18.7033C8.33265 18.8432 8.51083 18.9384 8.70481 18.977C8.89879 19.0156 9.09986 18.9958 9.28259 18.9201C9.46531 18.8444 9.62149 18.7163 9.73137 18.5518C9.84125 18.3874 9.8999 18.194 9.8999 17.9962C9.8999 17.731 9.79455 17.4767 9.60701 17.2891C9.41947 17.1016 9.16512 16.9962 8.8999 16.9962ZM5.8999 16.9962C5.70212 16.9962 5.50878 17.0549 5.34433 17.1648C5.17988 17.2746 5.05171 17.4308 4.97602 17.6135C4.90034 17.7963 4.88053 17.9973 4.91912 18.1913C4.9577 18.3853 5.05294 18.5635 5.1928 18.7033C5.33265 18.8432 5.51083 18.9384 5.70481 18.977C5.89879 19.0156 6.09986 18.9958 6.28259 18.9201C6.46531 18.8444 6.62149 18.7163 6.73137 18.5518C6.84125 18.3874 6.8999 18.194 6.8999 17.9962C6.8999 17.731 6.79455 17.4767 6.60701 17.2891C6.41947 17.1016 6.16512 16.9962 5.8999 16.9962ZM11.8999 16.9962C11.7021 16.9962 11.5088 17.0549 11.3443 17.1648C11.1799 17.2746 11.0517 17.4308 10.976 17.6135C10.9003 17.7963 10.8805 17.9973 10.9191 18.1913C10.9577 18.3853 11.0529 18.5635 11.1928 18.7033C11.3326 18.8432 11.5108 18.9384 11.7048 18.977C11.8988 19.0156 12.0999 18.9958 12.2826 18.9201C12.4653 18.8444 12.6215 18.7163 12.7314 18.5518C12.8413 18.3874 12.8999 18.194 12.8999 17.9962C12.8999 17.731 12.7945 17.4767 12.607 17.2891C12.4195 17.1016 12.1651 16.9962 11.8999 16.9962ZM14.9999 8.49623C15.0878 8.34469 15.214 8.2189 15.3658 8.13147C15.5176 8.04403 15.6897 7.998 15.8649 7.998C16.0401 7.998 16.2122 8.04403 16.364 8.13147C16.5158 8.2189 16.642 8.34469 16.7299 8.49623C16.8618 8.72496 17.0789 8.89224 17.3336 8.96155C17.5884 9.03087 17.8603 8.9966 18.0899 8.86623C18.2079 8.80432 18.3123 8.71946 18.397 8.61664C18.4817 8.51383 18.545 8.39512 18.5832 8.2675C18.6214 8.13988 18.6337 8.00591 18.6194 7.87346C18.6051 7.74102 18.5645 7.61276 18.4999 7.49623C18.2369 7.03927 17.858 6.65971 17.4016 6.39578C16.9451 6.13186 16.4272 5.99289 15.8999 5.99289C15.3726 5.99289 14.8547 6.13186 14.3982 6.39578C13.9418 6.65971 13.5629 7.03927 13.2999 7.49623C13.2155 7.71711 13.212 7.96076 13.2902 8.18393C13.3684 8.40709 13.5231 8.59534 13.727 8.71523C13.9308 8.83512 14.1705 8.87891 14.4035 8.83882C14.6366 8.79872 14.8479 8.67734 14.9999 8.49623ZM21.9999 5.49623C21.3852 4.43312 20.5017 3.55041 19.438 2.93673C18.3743 2.32306 17.1679 2 15.9399 2C14.7119 2 13.5055 2.32306 12.4418 2.93673C11.3781 3.55041 10.4946 4.43312 9.8799 5.49623C9.81378 5.61036 9.7709 5.73645 9.75371 5.86723C9.73653 5.99801 9.74539 6.13089 9.77978 6.25823C9.81417 6.38557 9.87342 6.50485 9.9541 6.6092C10.0348 6.71355 10.1353 6.8009 10.2499 6.86623C10.3875 6.94458 10.5417 6.98913 10.6999 6.99623C10.8761 6.99693 11.0494 6.95106 11.2022 6.86325C11.3549 6.77545 11.4818 6.64884 11.5699 6.49623C12.0088 5.73619 12.6399 5.10506 13.4 4.66626C14.1601 4.22746 15.0223 3.99645 15.8999 3.99645C16.7775 3.99645 17.6397 4.22746 18.3998 4.66626C19.1599 5.10506 19.791 5.73619 20.2299 6.49623C20.2952 6.61082 20.3826 6.71135 20.4869 6.79203C20.5913 6.87272 20.7106 6.93196 20.8379 6.96635C20.9652 7.00074 21.0981 7.0096 21.2289 6.99242C21.3597 6.97524 21.4858 6.93235 21.5999 6.86623C21.717 6.80345 21.8204 6.71796 21.9041 6.61476C21.9878 6.51155 22.0501 6.39271 22.0873 6.26516C22.1246 6.13761 22.136 6.00391 22.121 5.87189C22.106 5.73987 22.0648 5.61216 21.9999 5.49623ZM17.8999 13.9962H16.8999V10.9962C16.8999 10.731 16.7945 10.4767 16.607 10.2891C16.4195 10.1016 16.1651 9.99623 15.8999 9.99623C15.6347 9.99623 15.3803 10.1016 15.1928 10.2891C15.0053 10.4767 14.8999 10.731 14.8999 10.9962V13.9962H4.8999C4.10425 13.9962 3.34119 14.3123 2.77858 14.8749C2.21597 15.4375 1.8999 16.2006 1.8999 16.9962V18.9962C1.8999 19.7919 2.21597 20.5549 2.77858 21.1176C3.34119 21.6802 4.10425 21.9962 4.8999 21.9962H17.8999C18.6956 21.9962 19.4586 21.6802 20.0212 21.1176C20.5838 20.5549 20.8999 19.7919 20.8999 18.9962V16.9962C20.8999 16.2006 20.5838 15.4375 20.0212 14.8749C19.4586 14.3123 18.6956 13.9962 17.8999 13.9962ZM18.8999 18.9962C18.8999 19.2614 18.7945 19.5158 18.607 19.7033C18.4195 19.8909 18.1651 19.9962 17.8999 19.9962H4.8999C4.63469 19.9962 4.38033 19.8909 4.1928 19.7033C4.00526 19.5158 3.8999 19.2614 3.8999 18.9962V16.9962C3.8999 16.731 4.00526 16.4767 4.1928 16.2891C4.38033 16.1016 4.63469 15.9962 4.8999 15.9962H17.8999C18.1651 15.9962 18.4195 16.1016 18.607 16.2891C18.7945 16.4767 18.8999 16.731 18.8999 16.9962V18.9962Z"  stroke-width="2" mask="url(#path-1-inside-1_2239_8017)"/>
</svg>
`,
  styles: [
  ]
})
export class XcIconWifiRouterComponent {

}