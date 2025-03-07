import { Component } from '@angular/core';

@Component({
  selector: 'xc-icon-comment-heart',
  standalone:true,
  template: `
    <svg   viewBox="0 0 24 24" undefinedxmlns="http://www.w3.org/2000/svg" fill="none" width="100%" height="100%">
<path d="M11.9964 8.91013L11.7717 8.79493C11.2934 8.54969 10.7503 8.46059 10.2187 8.54018C9.68831 8.61959 9.19612 8.8629 8.811 9.23598C8.34448 9.70448 8.08251 10.3387 8.08251 11C8.08251 11.6625 8.34547 12.2979 8.81364 12.7667L8.81651 12.7695L8.8165 12.7696L11.6449 15.6479C11.6451 15.6481 11.6453 15.6484 11.6456 15.6486C11.6919 15.6951 11.747 15.7321 11.8076 15.7573C11.8685 15.7827 11.9339 15.7958 11.9999 15.7958C12.0659 15.7958 12.1312 15.7827 12.1922 15.7573C12.2531 15.732 12.3084 15.6948 12.3549 15.6479L12.3563 15.6464L15.1861 12.8167L11.9964 8.91013ZM11.9964 8.91013L12.2225 8.79768M11.9964 8.91013L12.2225 8.79768M12.2225 8.79768C12.705 8.55771 13.2508 8.47547 13.7825 8.5626C14.3143 8.64973 14.8053 8.90182 15.186 9.28322L15.1861 9.28333M12.2225 8.79768L15.1861 9.28333M15.1861 9.28333C15.6543 9.75208 15.9172 10.3875 15.9172 11.05C15.9172 11.7124 15.6543 12.3477 15.1863 12.8164L15.1861 9.28333ZM11.6463 14.1836L11.9999 14.5371L12.3534 14.1836L14.472 12.065C14.4723 12.0647 14.4726 12.0644 14.4729 12.0641C14.613 11.9248 14.7243 11.7593 14.8003 11.5769C14.8765 11.3941 14.9157 11.198 14.9157 11C14.9157 10.802 14.8765 10.6059 14.8003 10.4231C14.7242 10.2404 14.6127 10.0746 14.4722 9.93524C14.1912 9.65596 13.8111 9.49921 13.4149 9.49921C13.0186 9.49921 12.6384 9.65602 12.3574 9.9354L12.3549 9.9379C12.3084 9.98476 12.2531 10.022 12.1922 10.0473C12.1312 10.0727 12.0659 10.0858 11.9999 10.0858C11.9339 10.0858 11.8685 10.0727 11.8076 10.0473C11.7466 10.022 11.6913 9.98476 11.6449 9.9379L11.6449 9.93789L11.6424 9.9354C11.3613 9.65602 10.9811 9.49921 10.5849 9.49921C10.1886 9.49921 9.80841 9.65602 9.52737 9.9354C9.38696 10.0748 9.27551 10.2405 9.19943 10.4231C9.12328 10.6059 9.08407 10.802 9.08407 11C9.08407 11.198 9.12328 11.3941 9.19943 11.5769C9.27542 11.7593 9.38669 11.9248 9.52685 12.0641C9.52716 12.0644 9.52746 12.0647 9.52777 12.065L11.6463 14.1836ZM2.49987 12.0019V12C2.49987 9.48044 3.50076 7.06408 5.28235 5.28249C6.16451 4.40033 7.21178 3.70056 8.36437 3.22314C9.51697 2.74572 10.7523 2.5 11.9999 2.5C14.5194 2.5 16.9358 3.50089 18.7174 5.28249C20.499 7.06408 21.4999 9.48044 21.4999 12C21.4999 14.5196 20.499 16.9359 18.7174 18.7175C16.9358 20.4991 14.5194 21.5 11.9999 21.5H2.99987H2.98934L2.97883 21.5004C2.87983 21.5046 2.78183 21.4793 2.69726 21.4276C2.61513 21.3775 2.54928 21.3048 2.50751 21.2182C2.4719 21.1293 2.46257 21.032 2.48071 20.9378C2.49931 20.8412 2.54595 20.7523 2.61478 20.6822C2.61511 20.6819 2.61544 20.6815 2.61577 20.6812L4.61342 18.6836L4.93464 18.3623L4.64561 18.0119C3.25068 16.3205 2.49156 14.1943 2.49987 12.0019ZM11.9999 20.5H12.0003C13.9667 20.4985 15.8718 19.8152 17.3909 18.5665C18.91 17.3179 19.9492 15.5811 20.3315 13.6522C20.7137 11.7233 20.4153 9.72148 19.4871 7.98788C18.5589 6.25429 17.0584 4.89615 15.2411 4.14485C13.4239 3.39354 11.4023 3.29556 9.52093 3.8676C7.63954 4.43963 6.01468 5.64629 4.92319 7.28199C3.8317 8.91769 3.3411 10.8812 3.53499 12.8381C3.72885 14.7947 4.595 16.6235 5.98588 18.0131C6.07862 18.1067 6.13066 18.2332 6.13066 18.365C6.13066 18.4969 6.07852 18.6235 5.98561 18.7172C5.98549 18.7173 5.98538 18.7174 5.98526 18.7175L5.05631 19.6464L4.20276 20.5H5.40987H11.9999Z" />
</svg>
`,
  styles: [
  ]
})
export class XcIconCommentHeartComponent {

}
