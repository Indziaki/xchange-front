import { Component } from '@angular/core';

@Component({
  selector: 'xc-icon-link-add',
  standalone:true,
  template: `
    <svg width="24" height="24" viewBox="0 0 24 24" undefinedxmlns="http://www.w3.org/2000/svg">
<path d="M9.18194 14.8188L9.18194 14.8187C9.13507 14.7723 9.09788 14.717 9.07249 14.656C9.04711 14.5951 9.03404 14.5297 9.03404 14.4637C9.03404 14.3977 9.04711 14.3324 9.07249 14.2715C9.09788 14.2105 9.13507 14.1552 9.18194 14.1087L9.18339 14.1073L14.1034 9.1873C14.1979 9.09276 14.3261 9.03965 14.4598 9.03965C14.5935 9.03965 14.7217 9.09276 14.8163 9.1873C14.9108 9.28183 14.9639 9.41005 14.9639 9.54374C14.9639 9.67744 14.9108 9.80565 14.8163 9.90019L9.89773 14.8188C9.89753 14.8189 9.89734 14.8191 9.89714 14.8193C9.85054 14.8654 9.79535 14.9019 9.73468 14.9266C9.67376 14.9515 9.60853 14.9641 9.54273 14.9638L9.54273 14.9637L9.53695 14.9638C9.47114 14.9641 9.40591 14.9515 9.34499 14.9266C9.28407 14.9018 9.22866 14.8651 9.18194 14.8188ZM8.82984 13.7537C8.73611 13.8467 8.66171 13.9573 8.61095 14.0792C8.56018 14.201 8.53404 14.3317 8.53404 14.4637C8.53404 14.5958 8.56018 14.7265 8.61095 14.8483C8.66171 14.9702 8.73611 15.0808 8.82984 15.1737C8.92328 15.2664 9.03409 15.3397 9.15593 15.3895C9.27777 15.4393 9.40823 15.4645 9.53984 15.4637L8.82984 13.7537ZM19.4998 18.0037V18.5037H19.9998H20.9998C21.1324 18.5037 21.2596 18.5564 21.3534 18.6502C21.4472 18.744 21.4998 18.8711 21.4998 19.0037C21.4998 19.1364 21.4472 19.2635 21.3534 19.3573C21.2596 19.4511 21.1324 19.5037 20.9998 19.5037H19.9998H19.4998V20.0037V21.0037C19.4998 21.1364 19.4472 21.2635 19.3534 21.3573C19.2596 21.4511 19.1324 21.5037 18.9998 21.5037C18.8672 21.5037 18.74 21.4511 18.6463 21.3573C18.5525 21.2635 18.4998 21.1364 18.4998 21.0037V20.0037V19.5037H17.9998H16.9998C16.8672 19.5037 16.7401 19.4511 16.6463 19.3573C16.5525 19.2635 16.4998 19.1364 16.4998 19.0037C16.4998 18.8711 16.5525 18.744 16.6463 18.6502C16.74 18.5564 16.8672 18.5037 16.9998 18.5037H17.9998H18.4998V18.0037V17.0037C18.4998 16.8711 18.5525 16.744 18.6463 16.6502C18.74 16.5564 18.8672 16.5037 18.9998 16.5037C19.1324 16.5037 19.2596 16.5564 19.3534 16.6502C19.4472 16.744 19.4998 16.8711 19.4998 17.0037V18.0037ZM16.4558 13.1806L16.4548 13.1816C16.4084 13.2285 16.3531 13.2657 16.2921 13.2911C16.2312 13.3165 16.1658 13.3295 16.0998 13.3295C16.0338 13.3295 15.9685 13.3165 15.9075 13.2911C15.8466 13.2657 15.7913 13.2285 15.7448 13.1816L15.7419 13.1787C15.6951 13.1323 15.6579 13.077 15.6325 13.016C15.6071 12.9551 15.594 12.8898 15.594 12.8237C15.594 12.7577 15.6071 12.6924 15.6325 12.6315C15.6579 12.5705 15.6951 12.5152 15.7419 12.4687L15.7434 12.4673L19.6212 8.58943C19.6216 8.58905 19.622 8.58867 19.6224 8.58829C19.9005 8.31321 20.1214 7.98573 20.2722 7.62477C20.4232 7.26331 20.5009 6.87547 20.5009 6.48374C20.5009 6.09201 20.4232 5.70417 20.2722 5.34271C20.1214 4.98187 19.9007 4.65449 19.6227 4.37946C19.347 4.1031 19.0196 3.88378 18.6591 3.73404C18.298 3.58405 17.9109 3.50684 17.5198 3.50684C17.1288 3.50684 16.7417 3.58405 16.3806 3.73405C16.0197 3.88394 15.6919 4.10358 15.4161 4.38037C15.4159 4.38054 15.4158 4.38072 15.4156 4.38089L11.5363 8.26019C11.4895 8.307 11.4339 8.34413 11.3727 8.36946C11.3116 8.3948 11.246 8.40783 11.1798 8.40783C11.1136 8.40783 11.0481 8.3948 10.9869 8.36946C10.9258 8.34413 10.8702 8.307 10.8234 8.26019C10.7766 8.21338 10.7394 8.15781 10.7141 8.09665C10.6888 8.03549 10.6757 7.96994 10.6757 7.90374C10.6757 7.83755 10.6888 7.772 10.7141 7.71083C10.7394 7.64971 10.7765 7.59417 10.8233 7.54737C10.8233 7.54735 10.8234 7.54732 10.8234 7.5473L14.7055 3.67521C15.4604 2.98511 16.4522 2.61205 17.475 2.63371C18.5012 2.65543 19.4793 3.07276 20.205 3.79853C20.9308 4.5243 21.3481 5.5024 21.3699 6.52857C21.3915 7.55143 21.0185 8.5432 20.3284 9.29814L16.4558 13.1806ZM8.58409 19.6266L12.4634 15.7473C12.5579 15.6528 12.6861 15.5997 12.8198 15.5997C12.9535 15.5997 13.0817 15.6528 13.1763 15.7473C13.2708 15.8418 13.3239 15.9701 13.3239 16.1037C13.3239 16.2374 13.2708 16.3657 13.1763 16.4602L9.29423 20.3323C8.53929 21.0224 7.54752 21.3954 6.52467 21.3738C5.4985 21.3521 4.5204 20.9347 3.79462 20.209C3.06885 19.4832 2.65152 18.5051 2.6298 17.4789C2.60814 16.4561 2.9812 15.4643 3.67131 14.7094L7.54339 10.8273C7.54342 10.8273 7.54344 10.8272 7.54347 10.8272C7.638 10.7327 7.76618 10.6797 7.89984 10.6797C8.03353 10.6797 8.16175 10.7328 8.25628 10.8273C8.35082 10.9218 8.40393 11.0501 8.40393 11.1837C8.40393 11.3174 8.35082 11.4457 8.25628 11.5402L4.37843 15.4181C4.37805 15.4184 4.37767 15.4188 4.3773 15.4192C4.09916 15.6943 3.8783 16.0217 3.7275 16.3827C3.5765 16.7442 3.49874 17.132 3.49874 17.5237C3.49874 17.9155 3.5765 18.3033 3.7275 18.6648C3.87825 19.0256 4.099 19.353 4.377 19.628C4.65265 19.9044 4.98008 20.1237 5.34056 20.2734C5.70166 20.4234 6.08882 20.5006 6.47984 20.5006C6.87085 20.5006 7.25801 20.4234 7.61912 20.2734C7.97991 20.1236 8.30759 19.904 8.58339 19.6273C8.5834 19.6273 8.58342 19.6273 8.58343 19.6273C8.58365 19.627 8.58387 19.6268 8.58409 19.6266Z" />
</svg>
`,
  styles: [
  ]
})
export class XcIconLinkAddComponent {

}