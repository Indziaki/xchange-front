import { Component } from '@angular/core';

@Component({
  selector: 'xc-icon-image-resize-landscape',
  standalone:true,
  template: `
    <svg width="24" height="24" viewBox="0 0 24 24" undefinedxmlns="http://www.w3.org/2000/svg">
<mask id="path-1-inside-1_2239_7665" fill="white">
<path d="M13 11.0013H2.00005C1.73483 11.0013 1.48048 11.1066 1.29294 11.2941C1.10541 11.4817 1.00005 11.736 1.00005 12.0013V21.0013C1.00005 21.2665 1.10541 21.5208 1.29294 21.7084C1.48048 21.8959 1.73483 22.0013 2.00005 22.0013H12.86C12.91 22.0013 12.95 22.0013 13 22.0013C13.2653 22.0013 13.5196 21.8959 13.7072 21.7084C13.8947 21.5208 14 21.2665 14 21.0013V12.0013C14 11.736 13.8947 11.4817 13.7072 11.2941C13.5196 11.1066 13.2653 11.0013 13 11.0013ZM7.44005 20.0013L9.37005 18.0713C9.39742 18.03 9.43456 17.9962 9.47819 17.9727C9.52181 17.9493 9.57054 17.9371 9.62005 17.9371C9.66956 17.9371 9.71829 17.9493 9.76191 17.9727C9.80553 17.9962 9.84268 18.03 9.87005 18.0713L11.79 20.0013H7.44005ZM12 17.3813L11.28 16.6713C10.8316 16.2428 10.2353 16.0036 9.61505 16.0036C8.99482 16.0036 8.39846 16.2428 7.95005 16.6713L4.61005 20.0013H3.00005V13.0013H12V17.3813ZM2.00005 4.11125C2.17359 4.11122 2.34414 4.06603 2.49493 3.98012C2.64571 3.8942 2.77154 3.77053 2.86005 3.62125C2.98721 3.43981 3.05372 3.22279 3.05005 3.00125C3.05022 2.86561 3.02279 2.73136 2.96944 2.60666C2.91609 2.48195 2.83793 2.36941 2.73971 2.27586C2.64149 2.18232 2.52526 2.10974 2.39811 2.06253C2.27095 2.01532 2.13552 1.99447 2.00005 2.00125C1.73483 2.00125 1.48048 2.10661 1.29294 2.29414C1.10541 2.48168 1.00005 2.73603 1.00005 3.00125V3.10125C0.998728 3.23341 1.02362 3.36452 1.07328 3.48701C1.12294 3.60949 1.19639 3.72091 1.28938 3.81483C1.38237 3.90875 1.49306 3.98331 1.61504 4.03419C1.73702 4.08506 1.86788 4.11126 2.00005 4.11125ZM9.91005 4.00125H10.1C10.3653 4.00125 10.6196 3.89589 10.8072 3.70836C10.9947 3.52082 11.1 3.26647 11.1 3.00125C11.1 2.73603 10.9947 2.48168 10.8072 2.29414C10.6196 2.10661 10.3653 2.00125 10.1 2.00125H9.91005C9.64483 2.00125 9.39048 2.10661 9.20294 2.29414C9.01541 2.48168 8.91005 2.73603 8.91005 3.00125C8.91005 3.26647 9.01541 3.52082 9.20294 3.70836C9.39048 3.89589 9.64483 4.00125 9.91005 4.00125ZM2.00005 8.78125C2.26527 8.78125 2.51962 8.67589 2.70716 8.48836C2.89469 8.30082 3.00005 8.04647 3.00005 7.78125V7.56125C3.00005 7.29603 2.89469 7.04168 2.70716 6.85414C2.51962 6.66661 2.26527 6.56125 2.00005 6.56125C1.73483 6.56125 1.48048 6.66661 1.29294 6.85414C1.10541 7.04168 1.00005 7.29603 1.00005 7.56125V7.78125C1.00005 8.04647 1.10541 8.30082 1.29294 8.48836C1.48048 8.67589 1.73483 8.78125 2.00005 8.78125ZM14.09 2.00125H13.9C13.6348 2.00125 13.3805 2.10661 13.1929 2.29414C13.0054 2.48168 12.9 2.73603 12.9 3.00125C12.9 3.26647 13.0054 3.52082 13.1929 3.70836C13.3805 3.89589 13.6348 4.00125 13.9 4.00125H14.09C14.3553 4.00125 14.6096 3.89589 14.7972 3.70836C14.9847 3.52082 15.09 3.26647 15.09 3.00125C15.09 2.73603 14.9847 2.48168 14.7972 2.29414C14.6096 2.10661 14.3553 2.00125 14.09 2.00125ZM5.91005 4.00125H6.10005C6.36527 4.00125 6.61962 3.89589 6.80716 3.70836C6.99469 3.52082 7.10005 3.26647 7.10005 3.00125C7.10005 2.73603 6.99469 2.48168 6.80716 2.29414C6.61962 2.10661 6.36527 2.00125 6.10005 2.00125H5.91005C5.64483 2.00125 5.39048 2.10661 5.20294 2.29414C5.01541 2.48168 4.91005 2.73603 4.91005 3.00125C4.91005 3.26647 5.01541 3.52082 5.20294 3.70836C5.39048 3.89589 5.64483 4.00125 5.91005 4.00125ZM22 6.40125C21.7348 6.40125 21.4805 6.50661 21.2929 6.69414C21.1054 6.88168 21 7.13603 21 7.40125V7.61125C21 7.87647 21.1054 8.13082 21.2929 8.31836C21.4805 8.50589 21.7348 8.61125 22 8.61125C22.2653 8.61125 22.5196 8.50589 22.7072 8.31836C22.8947 8.13082 23 7.87647 23 7.61125V7.40125C23 7.13603 22.8947 6.88168 22.7072 6.69414C22.5196 6.50661 22.2653 6.40125 22 6.40125ZM17.1201 20.0013H16.88C16.6148 20.0013 16.3605 20.1066 16.1729 20.2941C15.9854 20.4817 15.88 20.736 15.88 21.0013C15.88 21.2665 15.9854 21.5208 16.1729 21.7084C16.3605 21.8959 16.6148 22.0013 16.88 22.0013H17.1201C17.3853 22.0013 17.6396 21.8959 17.8272 21.7084C18.0147 21.5208 18.1201 21.2665 18.1201 21.0013C18.1201 20.736 18.0147 20.4817 17.8272 20.2941C17.6396 20.1066 17.3853 20.0013 17.1201 20.0013ZM21.9 2.00125C21.6525 2.02612 21.4232 2.14237 21.2567 2.32727C21.0903 2.51218 20.9988 2.75248 21 3.00125C21.0024 3.14686 21.0365 3.2902 21.1 3.42125C21.1921 3.6188 21.3463 3.78085 21.5389 3.88274C21.7316 3.98463 21.9523 4.02077 22.1674 3.98568C22.3825 3.95058 22.5803 3.84616 22.7306 3.68831C22.8809 3.53046 22.9755 3.32783 23 3.11125V3.00125C22.9773 2.7263 22.8511 2.47021 22.647 2.28463C22.4428 2.09905 22.1759 1.99778 21.9 2.00125ZM22 10.9013C21.7348 10.9013 21.4805 11.0066 21.2929 11.1941C21.1054 11.3817 21 11.636 21 11.9013V12.1213C21 12.3865 21.1054 12.6408 21.2929 12.8284C21.4805 13.0159 21.7348 13.1213 22 13.1213C22.2653 13.1213 22.5196 13.0159 22.7072 12.8284C22.8947 12.6408 23 12.3865 23 12.1213V11.9013C23 11.636 22.8947 11.3817 22.7072 11.1941C22.5196 11.0066 22.2653 10.9013 22 10.9013ZM18.09 2.00125H17.9C17.6348 2.00125 17.3805 2.10661 17.1929 2.29414C17.0054 2.48168 16.9 2.73603 16.9 3.00125C16.9 3.26647 17.0054 3.52082 17.1929 3.70836C17.3805 3.89589 17.6348 4.00125 17.9 4.00125H18.09C18.3553 4.00125 18.6096 3.89589 18.7972 3.70836C18.9847 3.52082 19.09 3.26647 19.09 3.00125C19.09 2.73603 18.9847 2.48168 18.7972 2.29414C18.6096 2.10661 18.3553 2.00125 18.09 2.00125ZM22 20.0013C21.8466 20.001 21.6954 20.0388 21.56 20.1113C21.3933 20.193 21.2525 20.3195 21.1536 20.4767C21.0547 20.6339 21.0015 20.8155 21 21.0013C21 21.2665 21.1054 21.5208 21.2929 21.7084C21.4805 21.8959 21.7348 22.0013 22 22.0013C22.275 21.9785 22.5311 21.8523 22.7167 21.6482C22.9023 21.444 23.0035 21.1771 23 20.9013C22.9752 20.6537 22.8589 20.4244 22.674 20.2579C22.4891 20.0915 22.2488 20 22 20.0013ZM22 15.4413C21.7348 15.4413 21.4805 15.5466 21.2929 15.7341C21.1054 15.9217 21 16.176 21 16.4413V16.6613C21 16.9265 21.1054 17.1808 21.2929 17.3684C21.4805 17.5559 21.7348 17.6613 22 17.6613C22.2653 17.6613 22.5196 17.5559 22.7072 17.3684C22.8947 17.1808 23 16.9265 23 16.6613V16.4013C23 16.136 22.8947 15.8817 22.7072 15.6941C22.5196 15.5066 22.2653 15.4013 22 15.4013V15.4413Z"/>
</mask>
<path d="M13 11.0013H2.00005C1.73483 11.0013 1.48048 11.1066 1.29294 11.2941C1.10541 11.4817 1.00005 11.736 1.00005 12.0013V21.0013C1.00005 21.2665 1.10541 21.5208 1.29294 21.7084C1.48048 21.8959 1.73483 22.0013 2.00005 22.0013H12.86C12.91 22.0013 12.95 22.0013 13 22.0013C13.2653 22.0013 13.5196 21.8959 13.7072 21.7084C13.8947 21.5208 14 21.2665 14 21.0013V12.0013C14 11.736 13.8947 11.4817 13.7072 11.2941C13.5196 11.1066 13.2653 11.0013 13 11.0013ZM7.44005 20.0013L9.37005 18.0713C9.39742 18.03 9.43456 17.9962 9.47819 17.9727C9.52181 17.9493 9.57054 17.9371 9.62005 17.9371C9.66956 17.9371 9.71829 17.9493 9.76191 17.9727C9.80553 17.9962 9.84268 18.03 9.87005 18.0713L11.79 20.0013H7.44005ZM12 17.3813L11.28 16.6713C10.8316 16.2428 10.2353 16.0036 9.61505 16.0036C8.99482 16.0036 8.39846 16.2428 7.95005 16.6713L4.61005 20.0013H3.00005V13.0013H12V17.3813ZM2.00005 4.11125C2.17359 4.11122 2.34414 4.06603 2.49493 3.98012C2.64571 3.8942 2.77154 3.77053 2.86005 3.62125C2.98721 3.43981 3.05372 3.22279 3.05005 3.00125C3.05022 2.86561 3.02279 2.73136 2.96944 2.60666C2.91609 2.48195 2.83793 2.36941 2.73971 2.27586C2.64149 2.18232 2.52526 2.10974 2.39811 2.06253C2.27095 2.01532 2.13552 1.99447 2.00005 2.00125C1.73483 2.00125 1.48048 2.10661 1.29294 2.29414C1.10541 2.48168 1.00005 2.73603 1.00005 3.00125V3.10125C0.998728 3.23341 1.02362 3.36452 1.07328 3.48701C1.12294 3.60949 1.19639 3.72091 1.28938 3.81483C1.38237 3.90875 1.49306 3.98331 1.61504 4.03419C1.73702 4.08506 1.86788 4.11126 2.00005 4.11125ZM9.91005 4.00125H10.1C10.3653 4.00125 10.6196 3.89589 10.8072 3.70836C10.9947 3.52082 11.1 3.26647 11.1 3.00125C11.1 2.73603 10.9947 2.48168 10.8072 2.29414C10.6196 2.10661 10.3653 2.00125 10.1 2.00125H9.91005C9.64483 2.00125 9.39048 2.10661 9.20294 2.29414C9.01541 2.48168 8.91005 2.73603 8.91005 3.00125C8.91005 3.26647 9.01541 3.52082 9.20294 3.70836C9.39048 3.89589 9.64483 4.00125 9.91005 4.00125ZM2.00005 8.78125C2.26527 8.78125 2.51962 8.67589 2.70716 8.48836C2.89469 8.30082 3.00005 8.04647 3.00005 7.78125V7.56125C3.00005 7.29603 2.89469 7.04168 2.70716 6.85414C2.51962 6.66661 2.26527 6.56125 2.00005 6.56125C1.73483 6.56125 1.48048 6.66661 1.29294 6.85414C1.10541 7.04168 1.00005 7.29603 1.00005 7.56125V7.78125C1.00005 8.04647 1.10541 8.30082 1.29294 8.48836C1.48048 8.67589 1.73483 8.78125 2.00005 8.78125ZM14.09 2.00125H13.9C13.6348 2.00125 13.3805 2.10661 13.1929 2.29414C13.0054 2.48168 12.9 2.73603 12.9 3.00125C12.9 3.26647 13.0054 3.52082 13.1929 3.70836C13.3805 3.89589 13.6348 4.00125 13.9 4.00125H14.09C14.3553 4.00125 14.6096 3.89589 14.7972 3.70836C14.9847 3.52082 15.09 3.26647 15.09 3.00125C15.09 2.73603 14.9847 2.48168 14.7972 2.29414C14.6096 2.10661 14.3553 2.00125 14.09 2.00125ZM5.91005 4.00125H6.10005C6.36527 4.00125 6.61962 3.89589 6.80716 3.70836C6.99469 3.52082 7.10005 3.26647 7.10005 3.00125C7.10005 2.73603 6.99469 2.48168 6.80716 2.29414C6.61962 2.10661 6.36527 2.00125 6.10005 2.00125H5.91005C5.64483 2.00125 5.39048 2.10661 5.20294 2.29414C5.01541 2.48168 4.91005 2.73603 4.91005 3.00125C4.91005 3.26647 5.01541 3.52082 5.20294 3.70836C5.39048 3.89589 5.64483 4.00125 5.91005 4.00125ZM22 6.40125C21.7348 6.40125 21.4805 6.50661 21.2929 6.69414C21.1054 6.88168 21 7.13603 21 7.40125V7.61125C21 7.87647 21.1054 8.13082 21.2929 8.31836C21.4805 8.50589 21.7348 8.61125 22 8.61125C22.2653 8.61125 22.5196 8.50589 22.7072 8.31836C22.8947 8.13082 23 7.87647 23 7.61125V7.40125C23 7.13603 22.8947 6.88168 22.7072 6.69414C22.5196 6.50661 22.2653 6.40125 22 6.40125ZM17.1201 20.0013H16.88C16.6148 20.0013 16.3605 20.1066 16.1729 20.2941C15.9854 20.4817 15.88 20.736 15.88 21.0013C15.88 21.2665 15.9854 21.5208 16.1729 21.7084C16.3605 21.8959 16.6148 22.0013 16.88 22.0013H17.1201C17.3853 22.0013 17.6396 21.8959 17.8272 21.7084C18.0147 21.5208 18.1201 21.2665 18.1201 21.0013C18.1201 20.736 18.0147 20.4817 17.8272 20.2941C17.6396 20.1066 17.3853 20.0013 17.1201 20.0013ZM21.9 2.00125C21.6525 2.02612 21.4232 2.14237 21.2567 2.32727C21.0903 2.51218 20.9988 2.75248 21 3.00125C21.0024 3.14686 21.0365 3.2902 21.1 3.42125C21.1921 3.6188 21.3463 3.78085 21.5389 3.88274C21.7316 3.98463 21.9523 4.02077 22.1674 3.98568C22.3825 3.95058 22.5803 3.84616 22.7306 3.68831C22.8809 3.53046 22.9755 3.32783 23 3.11125V3.00125C22.9773 2.7263 22.8511 2.47021 22.647 2.28463C22.4428 2.09905 22.1759 1.99778 21.9 2.00125ZM22 10.9013C21.7348 10.9013 21.4805 11.0066 21.2929 11.1941C21.1054 11.3817 21 11.636 21 11.9013V12.1213C21 12.3865 21.1054 12.6408 21.2929 12.8284C21.4805 13.0159 21.7348 13.1213 22 13.1213C22.2653 13.1213 22.5196 13.0159 22.7072 12.8284C22.8947 12.6408 23 12.3865 23 12.1213V11.9013C23 11.636 22.8947 11.3817 22.7072 11.1941C22.5196 11.0066 22.2653 10.9013 22 10.9013ZM18.09 2.00125H17.9C17.6348 2.00125 17.3805 2.10661 17.1929 2.29414C17.0054 2.48168 16.9 2.73603 16.9 3.00125C16.9 3.26647 17.0054 3.52082 17.1929 3.70836C17.3805 3.89589 17.6348 4.00125 17.9 4.00125H18.09C18.3553 4.00125 18.6096 3.89589 18.7972 3.70836C18.9847 3.52082 19.09 3.26647 19.09 3.00125C19.09 2.73603 18.9847 2.48168 18.7972 2.29414C18.6096 2.10661 18.3553 2.00125 18.09 2.00125ZM22 20.0013C21.8466 20.001 21.6954 20.0388 21.56 20.1113C21.3933 20.193 21.2525 20.3195 21.1536 20.4767C21.0547 20.6339 21.0015 20.8155 21 21.0013C21 21.2665 21.1054 21.5208 21.2929 21.7084C21.4805 21.8959 21.7348 22.0013 22 22.0013C22.275 21.9785 22.5311 21.8523 22.7167 21.6482C22.9023 21.444 23.0035 21.1771 23 20.9013C22.9752 20.6537 22.8589 20.4244 22.674 20.2579C22.4891 20.0915 22.2488 20 22 20.0013ZM22 15.4413C21.7348 15.4413 21.4805 15.5466 21.2929 15.7341C21.1054 15.9217 21 16.176 21 16.4413V16.6613C21 16.9265 21.1054 17.1808 21.2929 17.3684C21.4805 17.5559 21.7348 17.6613 22 17.6613C22.2653 17.6613 22.5196 17.5559 22.7072 17.3684C22.8947 17.1808 23 16.9265 23 16.6613V16.4013C23 16.136 22.8947 15.8817 22.7072 15.6941C22.5196 15.5066 22.2653 15.4013 22 15.4013V15.4413Z"  stroke-width="2" mask="url(#path-1-inside-1_2239_7665)"/>
</svg>
`,
  styles: [
  ]
})
export class XcIconImageResizeLandscapeComponent {

}