import { Component } from '@angular/core';

@Component({
  selector: 'xc-icon-lamp',
  standalone:true,
  template: `
    <svg width="24" height="24" viewBox="0 0 24 24" undefinedxmlns="http://www.w3.org/2000/svg">
<path d="M3.99985 11.7803C3.96673 11.9279 3.96753 12.0811 4.00217 12.2283C4.03681 12.3755 4.1044 12.513 4.19985 12.6303C4.29607 12.749 4.4182 12.8441 4.55688 12.9082C4.69556 12.9723 4.8471 13.0038 4.99985 13.0003H8.93985C8.98006 13.3321 9.0001 13.6661 8.99985 14.0003M3.99985 11.7803L16.9998 2.0003C17.231 1.99465 17.457 2.06928 17.6393 2.2115C17.8216 2.35371 17.949 2.55472 17.9998 2.7803L19.9798 11.7803C20.013 11.9279 20.0122 12.0811 19.9775 12.2283C19.9429 12.3755 19.8753 12.513 19.7798 12.6303C19.6857 12.7463 19.5668 12.8398 19.4318 12.9038C19.2969 12.9678 19.1492 13.0008 18.9998 13.0003H18.4998H17.9998V13.5003V15.0003C17.9998 15.2655 17.8945 15.5199 17.707 15.7074C17.5194 15.8949 17.2651 16.0003 16.9998 16.0003C16.7346 16.0003 16.4803 15.8949 16.2927 15.7074C16.1052 15.5199 15.9998 15.2655 15.9998 15.0003V13.5003V13.0003H15.4998H15.0598C15.0196 13.3321 14.9996 13.6661 14.9998 14.0003M3.99985 11.7803L5.99985 2.7803L3.99985 11.7803ZM8.99985 14.0003C9.00921 16.3574 8.08525 18.6223 6.42985 20.3003M8.99985 14.0003L9.49985 14.0007C9.49985 14.0003 9.49985 13.9999 9.49985 13.9995M8.99985 14.0003L9.49984 13.9983C9.49985 13.9987 9.49985 13.9991 9.49985 13.9995M6.42985 20.3003C6.29224 20.4407 6.19906 20.6185 6.16196 20.8116C6.12485 21.0046 6.14547 21.2043 6.22123 21.3857C6.29699 21.5671 6.42453 21.7221 6.58791 21.8314C6.75129 21.9408 6.94327 21.9995 7.13985 22.0003M6.42985 20.3003L6.78691 20.6503C6.78682 20.6504 6.78672 20.6505 6.78662 20.6506M6.42985 20.3003L6.78579 20.6515C6.78607 20.6512 6.78634 20.6509 6.78662 20.6506M7.13985 22.0003H16.8598M7.13985 22.0003V21.5003H7.14114M7.13985 22.0003L7.14192 21.5003C7.14166 21.5003 7.1414 21.5003 7.14114 21.5003M16.8598 22.0003C17.0564 21.9995 17.2484 21.9408 17.4118 21.8314C17.5752 21.7221 17.7027 21.5671 17.7785 21.3857C17.8542 21.2043 17.8748 21.0046 17.8377 20.8116C17.8006 20.6185 17.7075 20.4407 17.5698 20.3003M16.8598 22.0003L16.8578 21.5003C16.858 21.5003 16.8583 21.5003 16.8586 21.5003M16.8598 22.0003V21.5003H16.8586M17.5698 20.3003C15.9144 18.6223 14.9905 16.3574 14.9998 14.0003M17.5698 20.3003L17.2139 20.6515C17.2137 20.6513 17.2135 20.6511 17.2133 20.6509M17.5698 20.3003L17.2128 20.6503C17.213 20.6505 17.2132 20.6507 17.2133 20.6509M14.9998 14.0003L14.4998 14.0007C14.4998 14.0003 14.4998 13.9999 14.4998 13.9995M14.9998 14.0003L14.4999 13.9983C14.4999 13.9987 14.4998 13.9991 14.4998 13.9995M9.49985 13.9995C9.50007 13.6454 9.47882 13.2916 9.43622 12.9401L9.38291 12.5003H8.93985H4.99985V12.5002L4.98825 12.5004C4.91188 12.5022 4.83611 12.4865 4.76677 12.4544C4.69743 12.4223 4.63636 12.3748 4.58825 12.3154L4.58772 12.3148C4.53999 12.2561 4.5062 12.1874 4.48888 12.1138C4.47156 12.0401 4.47116 11.9636 4.48772 11.8898L4.48794 11.8888L6.48763 2.89015C6.48768 2.88996 6.48772 2.88976 6.48776 2.88957C6.51325 2.77702 6.57689 2.67673 6.6679 2.60575C6.75906 2.53464 6.87205 2.49732 6.98763 2.50015L6.98763 2.5003H6.99985H16.9998V2.50045L17.0121 2.50015C17.1276 2.49732 17.2406 2.53464 17.3318 2.60575C17.4227 2.67665 17.4863 2.77676 17.5118 2.88915C17.5119 2.88948 17.512 2.88982 17.5121 2.89015L14.4998 13.9995M9.49985 13.9995C9.50942 16.4879 8.53401 18.879 6.78662 20.6506M6.78662 20.6506C6.71798 20.7207 6.6715 20.8095 6.65297 20.9059C6.63442 21.0025 6.64473 21.1023 6.68261 21.193C6.72048 21.2837 6.78425 21.3612 6.86595 21.4159C6.94742 21.4704 7.04312 21.4997 7.14114 21.5003M7.14114 21.5003H16.8586M16.8586 21.5003C16.9566 21.4997 17.0523 21.4704 17.1337 21.4159C17.2154 21.3612 17.2792 21.2837 17.3171 21.193C17.355 21.1023 17.3653 21.0025 17.3467 20.9059C17.3282 20.8097 17.2818 20.721 17.2133 20.6509M17.2133 20.6509C15.4658 18.8792 14.4903 16.488 14.4998 13.9995M8.8015 19.7265L8.29498 20.5003H9.21985H14.7798H15.7047L15.1982 19.7265C14.0846 18.0253 13.4942 16.0349 13.4998 14.0017V14.0003C13.4998 13.8571 13.5107 13.7084 13.5235 13.5375L13.5241 13.5294C13.5362 13.3672 13.5498 13.184 13.5498 13.0003V12.5003H13.0498H10.9498H10.3684L10.4555 13.0752C10.4989 13.3617 10.4998 13.6637 10.4998 14.0003L10.4999 14.0017C10.5055 16.0349 9.91506 18.0253 8.8015 19.7265ZM5.73212 10.8902L5.59441 11.5003H6.21985H17.7498H18.3727L18.238 10.8922L16.688 3.8922L16.6012 3.5003H16.1998H7.79985H7.40013L7.31212 3.89021L5.73212 10.8902Z" />
</svg>
`,
  styles: [
  ]
})
export class XcIconLampComponent {

}