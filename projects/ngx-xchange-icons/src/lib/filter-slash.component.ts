import { Component } from '@angular/core';

@Component({
  selector: 'xc-icon-filter-slash',
  standalone:true,
  template: `
    <svg width="24" height="24" viewBox="0 0 24 24" undefinedxmlns="http://www.w3.org/2000/svg">
<path d="M6.65389 7.35288L6.94374 7.64273L8.50374 9.20273L9.35729 10.0563H8.15019H6.00019H5.50019V9.55628V8.77797V8.77628H6.00019C5.99898 8.61933 6.04639 8.46585 6.13592 8.33693C6.22545 8.20801 6.3527 8.10997 6.50019 8.05628L6.65389 7.35288ZM6.65389 7.35288L6.31283 7.58025L6.26642 7.6112L6.65389 7.35288ZM12.2202 18.8173V16.7763C12.2209 16.6447 12.1957 16.5142 12.146 16.3924C12.0962 16.2705 12.0229 16.1597 11.9302 16.0663L12.2202 18.8173ZM12.2202 18.8173L11.9966 18.9291L12.2202 19.3763H12.7202V19.1263L13.7802 18.5963L12.2202 18.8173ZM20.0002 10.0563H20.5002V9.55628V8.77628C20.5002 8.4368 20.3653 8.11123 20.1253 7.87118C19.8852 7.63113 19.5597 7.49628 19.2202 7.49628H12.6602C12.5276 7.49628 12.4004 7.4436 12.3066 7.34983C12.2129 7.25606 12.1602 7.12889 12.1602 6.99628C12.1602 6.86367 12.2129 6.73649 12.3066 6.64273C12.4004 6.54896 12.5276 6.49628 12.6602 6.49628H19.2193C19.5211 6.49746 19.8197 6.55829 20.098 6.67528C20.3765 6.79239 20.629 6.96344 20.8411 7.17859C21.0532 7.39375 21.2207 7.64874 21.3338 7.92889C21.4469 8.20903 21.5035 8.50879 21.5002 8.8109L21.5002 8.8109V8.81628V9.8077C21.4894 10.1052 21.4152 10.3969 21.2826 10.6635L21.2302 10.7687V10.879C21.1316 11.0841 20.9988 11.2711 20.8373 11.4321L20.8366 11.4327L18.9566 13.3127L18.9552 13.3142C18.9087 13.361 18.8534 13.3982 18.7925 13.4236C18.7315 13.449 18.6662 13.4621 18.6002 13.4621C18.5342 13.4621 18.4688 13.449 18.4079 13.4236C18.347 13.3982 18.2917 13.361 18.2452 13.3142L18.2423 13.3113C18.1954 13.2648 18.1582 13.2095 18.1328 13.1486C18.1075 13.0876 18.0944 13.0223 18.0944 12.9563C18.0944 12.8903 18.1075 12.8249 18.1328 12.764C18.1582 12.7032 18.1952 12.648 18.2419 12.6016C18.2421 12.6015 18.2422 12.6014 18.2423 12.6013L18.9412 11.9124L19.8097 11.0563H18.5902H16.2202C16.0876 11.0563 15.9604 11.0036 15.8666 10.9098C15.7729 10.8161 15.7202 10.6889 15.7202 10.5563C15.7202 10.4237 15.7729 10.2965 15.8666 10.2027C15.9604 10.109 16.0876 10.0563 16.2202 10.0563H20.0002ZM10.1902 17.1463V20.9963C10.1898 21.1662 10.2328 21.3335 10.3151 21.4822C10.3973 21.6309 10.5161 21.7562 10.6602 21.8463C10.8193 21.9449 11.003 21.9969 11.1902 21.9963C11.3467 21.9953 11.5009 21.9577 11.6402 21.8863L10.1902 17.1463ZM11.4122 21.4413C11.3428 21.4768 11.2661 21.4957 11.1881 21.4963C11.0949 21.4965 11.0036 21.4707 10.9243 21.4217C10.8527 21.3768 10.7936 21.3143 10.7526 21.2402C10.7115 21.1659 10.69 21.0823 10.6902 20.9973V20.9963V17.1463V16.9389L10.5434 16.7924L5.13544 11.3944C4.97343 11.2288 4.83995 11.0378 4.74019 10.8292V10.7674L4.6949 10.6684C4.56687 10.3884 4.50047 10.0841 4.50019 9.77628C4.50019 9.77625 4.50019 9.77622 4.50019 9.77619C4.50019 9.77609 4.50019 9.776 4.50019 9.7759L4.50019 8.77628L4.50018 8.7743C4.49877 8.4184 4.58257 8.06733 4.74457 7.75043C4.90658 7.43353 5.14208 7.16001 5.43139 6.95273L5.91134 6.60886L5.49312 6.19211L2.64374 3.35273C2.64366 3.35265 2.64358 3.35257 2.6435 3.35249C2.54911 3.25798 2.49609 3.12986 2.49609 2.99628C2.49609 2.86259 2.5492 2.73437 2.64374 2.63983C2.69055 2.59302 2.74612 2.55589 2.80728 2.53056C2.86844 2.50523 2.93399 2.49219 3.00019 2.49219C3.06638 2.49219 3.13193 2.50523 3.19309 2.53056C3.25415 2.55585 3.30963 2.5929 3.35639 2.63959C3.35647 2.63967 3.35655 2.63975 3.35663 2.63983L21.326 20.6692L21.3281 20.6713C21.3749 20.7178 21.4121 20.7731 21.4375 20.834C21.4629 20.8949 21.476 20.9603 21.476 21.0263C21.476 21.0923 21.4629 21.1576 21.4375 21.2186C21.4121 21.2795 21.375 21.3348 21.3281 21.3813L21.3252 21.3842C21.2787 21.431 21.2234 21.4682 21.1625 21.4936C21.1015 21.519 21.0362 21.5321 20.9702 21.5321C20.9042 21.5321 20.8388 21.519 20.7779 21.4936C20.717 21.4682 20.6617 21.431 20.6152 21.3842L20.6141 21.3831L16.1041 16.8631L15.2502 16.0073V17.2163V19.2153C15.2498 19.3074 15.224 19.3977 15.1755 19.4761C15.1271 19.5544 15.058 19.6179 14.9759 19.6594C14.9756 19.6595 14.9754 19.6596 14.9752 19.6598L11.4166 21.4391L11.4166 21.439L11.4122 21.4413ZM14.2802 16.7763L14.2802 16.7734C14.2798 16.7076 14.2924 16.6424 14.3173 16.5814C14.3416 16.5219 14.3772 16.4676 14.4221 16.4215L14.7177 16.1358L15.0833 15.7823L14.7237 15.4227L10.5037 11.2027L10.3573 11.0563H10.1502H7.41019H6.20119L7.05702 11.9102L11.5752 16.4184C11.5755 16.4186 11.5757 16.4189 11.576 16.4192C11.6219 16.4657 11.6583 16.5209 11.6831 16.5814C11.708 16.6424 11.7206 16.7076 11.7202 16.7734H11.7202V16.7763V19.3763V20.1853L12.4438 19.8235L14.0038 19.0435L14.2802 18.9053V18.5963L14.2802 16.7763Z" />
</svg>
`,
  styles: [
  ]
})
export class XcIconFilterSlashComponent {

}