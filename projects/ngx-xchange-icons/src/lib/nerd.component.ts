import { Component } from '@angular/core';

@Component({
  selector: 'xc-icon-nerd',
  standalone:true,
  template: `
    <svg width="24" height="24" viewBox="0 0 24 24" undefinedxmlns="http://www.w3.org/2000/svg">
<path d="M20.94 8.76143L21.2446 8.65098H21.4101L20.9396 8.82017C21.4089 10.1254 21.5868 11.5175 21.4606 12.8988C21.3345 14.2801 20.9074 15.617 20.2094 16.8156C19.5114 18.0142 18.5594 19.0455 17.4203 19.8368C16.2812 20.6282 14.9826 21.1606 13.6157 21.3965C12.2489 21.6324 10.847 21.5661 9.50851 21.2024C8.17002 20.8386 6.92743 20.1861 5.86803 19.2908C4.80863 18.3955 3.95813 17.2791 3.37628 16.02C2.79443 14.7609 2.49535 13.3897 2.50006 12.0027L2.50006 12.0019C2.50205 10.9579 2.67852 9.92145 3.02219 8.93556L3.03564 8.89699L3.04265 8.85674C3.04864 8.82234 3.05974 8.78903 3.07559 8.75792L3.08886 8.73186L3.09901 8.70443C3.7742 6.87896 4.99379 5.30492 6.59281 4.19525C8.19183 3.08558 10.0931 2.49383 12.0394 2.50005C13.9857 2.50627 15.8832 3.11015 17.4751 4.23002C19.067 5.34988 20.2765 6.93168 20.94 8.76143ZM12.0006 3.50098L11.9995 3.50098C10.509 3.50251 9.04499 3.89598 7.75449 4.64194C6.46399 5.38789 5.39234 6.46009 4.64704 7.75098L4.21403 8.50098H5.08006H6.28006H6.50114L6.64991 8.33744C6.89771 8.06506 7.20263 7.85077 7.54286 7.70991C7.8831 7.56905 8.25025 7.5051 8.61807 7.52261C8.9859 7.54013 9.34531 7.63868 9.67062 7.81124C9.99593 7.98379 10.2791 8.22608 10.4999 8.52078L10.7285 8.82594L11.0833 8.68618C11.3757 8.57102 11.686 8.50837 12.0001 8.50109C12.3141 8.50837 12.6245 8.57102 12.9168 8.68618L13.2716 8.82594L13.5002 8.52078C13.721 8.22608 14.0042 7.98379 14.3295 7.81124C14.6548 7.63868 15.0142 7.54013 15.382 7.52261C15.7499 7.5051 16.117 7.56905 16.4573 7.70991C16.7975 7.85077 17.1024 8.06506 17.3502 8.33744L17.499 8.50098H17.7201H18.9201H19.7861L19.3531 7.75098C18.6078 6.46009 17.5361 5.38789 16.2456 4.64194C14.9551 3.89598 13.4912 3.50251 12.0006 3.50098ZM3.50007 11.9977H3.50006V12.001C3.50006 14.2553 4.39559 16.4173 5.98965 18.0114C7.58371 19.6054 9.74572 20.501 12.0001 20.501C14.2544 20.501 16.4164 19.6054 18.0105 18.0114C19.6045 16.4173 20.5001 14.2553 20.5001 12.001L20.5 11.9977C20.4953 11.2819 20.4027 10.5695 20.2243 9.87632L20.1276 9.50098H19.7401H18.5001H17.9848L18.0003 10.016C18.0202 10.6791 17.7758 11.3229 17.321 11.8059C16.8662 12.2888 16.2382 12.5713 15.5751 12.5912C14.912 12.6111 14.2681 12.3668 13.7852 11.9119C13.3022 11.4571 13.0197 10.8291 12.9998 10.166L12.9915 9.88735L12.7501 9.74796C12.522 9.61631 12.2634 9.547 12.0001 9.547C11.7368 9.547 11.4781 9.61631 11.2501 9.74796L11.0086 9.88735L11.0003 10.166C10.9804 10.8291 10.6979 11.4571 10.2149 11.9119C9.732 12.3668 9.08815 12.6111 8.42505 12.5912C7.76195 12.5713 7.13391 12.2888 6.67909 11.8059C6.22428 11.3229 5.97994 10.6791 5.99983 10.016L6.01528 9.50098H5.50006H4.26006H3.87247L3.77585 9.87632C3.5974 10.5695 3.50478 11.2819 3.50007 11.9977ZM14.6739 14.6202L14.6739 14.6203L14.6797 14.6155C14.7819 14.5305 14.9137 14.4896 15.0461 14.5018C15.1116 14.5079 15.1753 14.5268 15.2336 14.5574C15.2918 14.5881 15.3435 14.63 15.3855 14.6806C15.4705 14.7828 15.5114 14.9146 15.4992 15.047C15.487 15.1794 15.4227 15.3015 15.3205 15.3865L15.3196 15.3871C14.3882 16.1647 13.2134 16.5906 12.0001 16.5906C10.7867 16.5906 9.61191 16.1647 8.68048 15.3871L8.67966 15.3865C8.57742 15.3015 8.51313 15.1794 8.50093 15.047C8.48872 14.9146 8.5296 14.7828 8.61458 14.6806C8.69955 14.5783 8.82166 14.514 8.95404 14.5018C9.08642 14.4896 9.21822 14.5305 9.32046 14.6155L9.32042 14.6155L9.32623 14.6202C10.0836 15.2309 11.0272 15.5639 12.0001 15.5639C12.9729 15.5639 13.9165 15.2309 14.6739 14.6202ZM16.7473 10.8343C16.9121 10.5877 17.0001 10.2976 17.0001 10.001C17.0001 9.60315 16.842 9.22162 16.5607 8.94032C16.2794 8.65901 15.8979 8.50098 15.5001 8.50098C15.2034 8.50098 14.9134 8.58895 14.6667 8.75377C14.42 8.91859 14.2278 9.15286 14.1142 9.42695C14.0007 9.70104 13.971 10.0026 14.0289 10.2936C14.0868 10.5846 14.2296 10.8519 14.4394 11.0616C14.6492 11.2714 14.9164 11.4143 15.2074 11.4722C15.4984 11.53 15.8 11.5003 16.0741 11.3868C16.3482 11.2733 16.5824 11.081 16.7473 10.8343ZM9.74726 10.8343C9.91208 10.5877 10.0001 10.2976 10.0001 10.001C10.0001 9.60315 9.84202 9.22162 9.56072 8.94032C9.27941 8.65901 8.89788 8.50098 8.50006 8.50098C8.20339 8.50098 7.91338 8.58895 7.6667 8.75377C7.42003 8.91859 7.22777 9.15286 7.11424 9.42695C7.00071 9.70104 6.971 10.0026 7.02888 10.2936C7.08676 10.5846 7.22962 10.8519 7.4394 11.0616C7.64918 11.2714 7.91645 11.4143 8.20742 11.4722C8.49839 11.53 8.79999 11.5003 9.07408 11.3868C9.34817 11.2733 9.58244 11.081 9.74726 10.8343Z" />
</svg>
`,
  styles: [
  ]
})
export class XcIconNerdComponent {

}