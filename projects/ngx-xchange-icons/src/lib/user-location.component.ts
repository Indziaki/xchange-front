import { Component } from '@angular/core';

@Component({
  selector: 'xc-icon-user-location',
  standalone:true,
  template: `
    <svg width="24" height="24" viewBox="0 0 24 24" undefinedxmlns="http://www.w3.org/2000/svg">
<path d="M14.0854 10.5684L13.7662 11.0077L14.2303 11.2896C14.6243 11.5289 14.9759 11.8319 15.2707 12.1863C15.327 12.259 15.3622 12.3459 15.3723 12.4374C15.3826 12.5305 15.3665 12.6247 15.3258 12.7092C15.2851 12.7936 15.2215 12.865 15.1423 12.915C15.0632 12.965 14.9717 12.9917 14.8782 12.9923C14.8035 12.9925 14.7297 12.976 14.6622 12.944C14.5956 12.9124 14.5368 12.8665 14.49 12.8095C14.1996 12.4415 13.83 12.1436 13.4086 11.9381C12.9859 11.7319 12.522 11.6239 12.0516 11.6223L12.0481 11.6223C11.5778 11.6239 11.1139 11.7319 10.6911 11.9381C10.2684 12.1443 9.89775 12.4434 9.60692 12.8131L9.6069 12.8131L9.60429 12.8165C9.56172 12.8715 9.50871 12.9177 9.4483 12.9523C9.38788 12.9869 9.32125 13.0092 9.2522 13.0181C9.18315 13.0269 9.11303 13.0221 9.04585 13.0038C8.97868 12.9856 8.91575 12.9542 8.86067 12.9117C8.8056 12.8691 8.75944 12.8161 8.72485 12.7557C8.69026 12.6953 8.6679 12.6286 8.65906 12.5596C8.65022 12.4905 8.65507 12.4204 8.67333 12.3532C8.69116 12.2876 8.72145 12.2261 8.76252 12.1719C9.04472 11.8244 9.38105 11.5245 9.7586 11.2839L10.2067 10.9983L9.89441 10.5684C9.61369 10.182 9.4453 9.72542 9.40785 9.24926C9.37041 8.77309 9.46536 8.29584 9.68222 7.87027C9.89908 7.4447 10.2294 7.08739 10.6367 6.83783C11.0439 6.58827 11.5122 6.45619 11.9899 6.45619C12.4675 6.45619 12.9359 6.58827 13.3431 6.83783C13.7504 7.08739 14.0807 7.4447 14.2975 7.87027C14.5144 8.29584 14.6094 8.77309 14.5719 9.24926C14.5345 9.72542 14.3661 10.182 14.0854 10.5684ZM19.9622 9.68009L19.9623 9.68105C20.0775 10.8568 19.9296 12.0436 19.5293 13.1551C19.1289 14.2666 18.4862 15.2751 17.6477 16.1074L17.6453 16.1097L12.3653 21.4197L12.3649 21.4202C12.3184 21.467 12.2631 21.5042 12.2022 21.5296C12.1412 21.555 12.0759 21.5681 12.0099 21.5681C11.9439 21.5681 11.8785 21.555 11.8176 21.5296C11.7567 21.5042 11.7014 21.467 11.6549 21.4202L11.6538 21.419L6.35377 16.109L6.35211 16.1074C5.51357 15.2751 4.87082 14.2666 4.47047 13.1551C4.07015 12.0437 3.92224 10.857 4.03747 9.68133C4.1551 8.49703 4.53355 7.35347 5.14563 6.3328C5.75761 5.3123 6.58794 4.43997 7.57702 3.77843C8.72804 3.01501 10.0571 2.5626 11.4348 2.46522C12.8129 2.36783 14.1927 2.62894 15.4398 3.22314C16.687 3.81734 17.759 4.72437 18.5515 5.85592C19.344 6.98746 19.83 8.30495 19.9622 9.68009ZM11.6463 20.0058L11.9999 20.3594L12.3534 20.0058L16.9533 15.4059C16.9533 15.4059 16.9534 15.4059 16.9534 15.4058C17.6865 14.6733 18.2475 13.7869 18.5958 12.8109C18.9441 11.8348 19.071 10.7936 18.9674 9.76244C18.8634 8.72358 18.5305 7.72064 17.9928 6.82569C17.4551 5.93074 16.7259 5.16599 15.8575 4.58638L15.8565 4.58578C14.7136 3.82655 13.372 3.42156 11.9999 3.42156C10.6278 3.42156 9.28615 3.82655 8.14322 4.58578L8.14215 4.58649C7.2711 5.16835 6.54024 5.93649 6.00239 6.83538C5.46458 7.73421 5.13321 8.74132 5.03223 9.78388C4.93187 10.8115 5.06042 11.8486 5.40864 12.8206C5.75689 13.7928 6.31618 14.6756 7.04632 15.4058L7.04633 15.4058L11.6463 20.0058ZM11.1226 10.3678C11.3826 10.5401 11.6876 10.6321 11.9995 10.6323C12.2134 10.6324 12.425 10.5894 12.6218 10.5059C12.8186 10.4224 12.9966 10.3 13.145 10.1461C13.2934 9.99225 13.4093 9.81001 13.4857 9.61031C13.5621 9.41062 13.5974 9.19757 13.5895 8.98391C13.5781 8.67218 13.4752 8.3707 13.2937 8.11702C13.1122 7.86333 12.86 7.66864 12.5687 7.5572C12.2773 7.44575 11.9596 7.42247 11.6551 7.49025C11.3506 7.55803 11.0728 7.71389 10.8562 7.9384C10.6397 8.16291 10.4939 8.44617 10.4372 8.7529C10.3804 9.05964 10.4151 9.37629 10.537 9.66344C10.6588 9.95059 10.8625 10.1956 11.1226 10.3678Z" />
</svg>
`,
  styles: [
  ]
})
export class XcIconUserLocationComponent {

}