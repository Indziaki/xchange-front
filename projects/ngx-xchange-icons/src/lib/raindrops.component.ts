import { Component } from '@angular/core';

@Component({
  selector: 'xc-icon-raindrops',
  standalone:true,
  template: `
    <svg width="24" height="24" viewBox="0 0 24 24" undefinedxmlns="http://www.w3.org/2000/svg">
<path d="M6.78 2.58575L6.77993 2.58586L6.78962 2.5921L6.78966 2.59212C6.79013 2.59243 6.79408 2.59501 6.80198 2.60035C6.81007 2.60583 6.82121 2.61346 6.8352 2.62325C6.86318 2.64281 6.90195 2.67051 6.94992 2.70614C7.0459 2.77741 7.17799 2.87981 7.3338 3.0115C7.64602 3.27539 8.04984 3.65381 8.44854 4.13179C9.25063 5.09334 10 6.41807 10 8.00151C10 8.92976 9.63125 9.82 8.97487 10.4764C8.3185 11.1328 7.42826 11.5015 6.5 11.5015C5.57174 11.5015 4.6815 11.1328 4.02513 10.4764C3.36875 9.82 3 8.92976 3 8.00151C3 6.43905 3.74841 5.11681 4.55204 4.14984C5.32683 3.21756 6.1176 2.65831 6.22251 2.58412C6.22295 2.58381 6.22338 2.58351 6.2238 2.58321C6.30566 2.52896 6.40172 2.5 6.5 2.5C6.5998 2.5 6.69732 2.52987 6.78 2.58575ZM4.00224 7.95426L4 7.97783V8.00151C4 8.66455 4.26339 9.30043 4.73223 9.76927C5.20107 10.2381 5.83696 10.5015 6.5 10.5015C7.16304 10.5015 7.79893 10.2381 8.26777 9.76927C8.73661 9.30043 9 8.66455 9 8.00151V7.97881L8.99794 7.95621C8.9261 7.16639 8.69548 6.39921 8.31993 5.70069C7.94438 5.00216 7.43162 4.38667 6.81242 3.89113L6.49875 3.6401L6.18606 3.89235C5.56964 4.38963 5.05889 5.00515 4.68386 5.70272C4.30882 6.40029 4.07707 7.16581 4.00224 7.95426ZM17.78 2.58575L17.7799 2.58586L17.7896 2.5921C17.7895 2.592 17.7934 2.59454 17.802 2.60035C17.8101 2.60583 17.8212 2.61346 17.8352 2.62325C17.8632 2.64281 17.9019 2.67051 17.9499 2.70614C18.0459 2.77741 18.178 2.87982 18.3338 3.0115C18.646 3.27539 19.0498 3.65381 19.4485 4.13179C20.2506 5.09334 21 6.41807 21 8.00151C21 8.92976 20.6313 9.82 19.9749 10.4764C19.3185 11.1328 18.4283 11.5015 17.5 11.5015C16.5717 11.5015 15.6815 11.1328 15.0251 10.4764C14.3687 9.82 14 8.92977 14 8.00151C14 6.43905 14.7484 5.11681 15.552 4.14984C16.3268 3.21756 17.1176 2.65831 17.2225 2.58412C17.223 2.58381 17.2234 2.5835 17.2238 2.58321C17.3057 2.52896 17.4017 2.5 17.5 2.5C17.5998 2.5 17.6973 2.52987 17.78 2.58575ZM15.0022 7.95426L15 7.97783V8.00151C15 8.66455 15.2634 9.30043 15.7322 9.76927C16.2011 10.2381 16.837 10.5015 17.5 10.5015C18.163 10.5015 18.7989 10.2381 19.2678 9.76927C19.7366 9.30043 20 8.66455 20 8.00151V7.97881L19.9979 7.95621C19.9261 7.16639 19.6955 6.39921 19.3199 5.70069C18.9444 5.00216 18.4316 4.38667 17.8124 3.89113L17.4987 3.6401L17.1861 3.89235C16.5696 4.38963 16.0589 5.00515 15.6839 5.70272C15.3088 6.40029 15.0771 7.16581 15.0022 7.95426ZM12.78 12.5858L12.7799 12.5859L12.7896 12.5921L12.7896 12.5921C12.79 12.5923 12.7939 12.5949 12.802 12.6004C12.8101 12.6058 12.8212 12.6135 12.8352 12.6232C12.8632 12.6428 12.9019 12.6705 12.9499 12.7061C13.0459 12.7774 13.178 12.8798 13.3338 13.0115C13.646 13.2754 14.0498 13.6538 14.4485 14.1318C15.2506 15.0933 16 16.4181 16 18.0015C16 18.9298 15.6313 19.82 14.9749 20.4764C14.3185 21.1328 13.4283 21.5015 12.5 21.5015C11.5717 21.5015 10.6815 21.1328 10.0251 20.4764C9.36875 19.82 9 18.9298 9 18.0015C9 16.439 9.74841 15.1168 10.552 14.1498C11.3268 13.2176 12.1176 12.6583 12.2225 12.5841C12.2229 12.5838 12.2234 12.5835 12.2238 12.5832C12.3057 12.529 12.4017 12.5 12.5 12.5C12.5998 12.5 12.6973 12.5299 12.78 12.5858ZM10.0022 17.9543L10 17.9778V18.0015C10 18.6645 10.2634 19.3004 10.7322 19.7693C11.2011 20.2381 11.837 20.5015 12.5 20.5015C13.163 20.5015 13.7989 20.2381 14.2678 19.7693C14.7366 19.3004 15 18.6645 15 18.0015V17.9788L14.9979 17.9562C14.9261 17.1664 14.6955 16.3992 14.3199 15.7007C13.9444 15.0022 13.4316 14.3867 12.8124 13.8911L12.4987 13.6401L12.1861 13.8924C11.5696 14.3896 11.0589 15.0052 10.6839 15.7027C10.3088 16.4003 10.0771 17.1658 10.0022 17.9543Z" />
</svg>
`,
  styles: [
  ]
})
export class XcIconRaindropsComponent {

}