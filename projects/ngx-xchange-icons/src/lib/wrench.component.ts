import { Component } from '@angular/core';

@Component({
  selector: 'xc-icon-wrench',
  standalone:true,
  template: `
    <svg width="24" height="24" viewBox="0 0 24 24" undefinedxmlns="http://www.w3.org/2000/svg">
<path d="M21.4938 16.0686L21.3568 15.9319L16.8368 11.4219L16.6459 11.2314L16.7002 10.9673C16.7879 10.5403 16.8314 10.1054 16.83 9.66954L16.83 9.66807C16.8296 8.46277 16.5255 7.277 15.9456 6.22037C15.3657 5.16375 14.5288 4.27035 13.5122 3.62278C12.4957 2.9752 11.3323 2.59434 10.1296 2.5154C8.92685 2.43646 7.72364 2.66198 6.63117 3.17113L6.62772 3.17274L6.62771 3.17272C6.55368 3.20654 6.48902 3.25792 6.43936 3.3224C6.38969 3.38688 6.35651 3.46251 6.34271 3.54272L6.34258 3.54346C6.32884 3.62265 6.33438 3.70399 6.35875 3.78059C6.38312 3.85718 6.4256 3.92677 6.48258 3.98346L6.4831 3.98397L10.8331 8.32397L11.1875 8.67752L10.8335 9.03148L9.03351 10.8315L8.67955 11.1854L8.32599 10.8311L3.98818 6.48326C3.9313 6.42794 3.86208 6.38694 3.78621 6.36366C3.70963 6.34017 3.62854 6.33542 3.54975 6.3498L3.54224 6.35117L3.54223 6.35111C3.46252 6.36441 3.38722 6.39683 3.32278 6.4456C3.25858 6.49418 3.20706 6.55755 3.1726 6.63032C2.66214 7.72608 2.437 8.93312 2.51812 10.1392C2.59927 11.3458 2.98427 12.5122 3.63729 13.53C4.29032 14.5478 5.19016 15.3839 6.25311 15.9605C7.31606 16.5371 8.50758 16.8355 9.71682 16.8279L9.72156 16.8279C10.1575 16.8293 10.5924 16.7858 11.0194 16.6982L11.2835 16.6439L11.4739 16.8348L15.9839 21.3548L15.985 21.3558C16.0314 21.4027 16.0867 21.4399 16.1477 21.4653C16.2086 21.4907 16.2739 21.5037 16.34 21.5037C16.406 21.5037 16.4713 21.4907 16.5322 21.4653C16.5932 21.4399 16.6485 21.4027 16.695 21.3558L16.6979 21.3529C16.7447 21.3064 16.7819 21.2511 16.8073 21.1902C16.8327 21.1293 16.8458 21.0639 16.8458 20.9979C16.8458 20.9319 16.8327 20.8666 16.8073 20.8056C16.7819 20.7447 16.7447 20.6894 16.6979 20.6429L16.6964 20.6415L11.7976 15.7427C11.7974 15.7425 11.7972 15.7423 11.797 15.7421C11.7359 15.6816 11.6602 15.6378 11.5772 15.6151C11.4948 15.5926 11.4081 15.5915 11.3253 15.612C10.8029 15.7515 10.2649 15.8241 9.72425 15.8279M21.4938 16.0686L9.71995 15.3279M21.4938 16.0686C21.5266 16.1364 21.544 16.2113 21.544 16.2879C21.544 16.4216 21.4909 16.5498 21.3964 16.6444C21.3019 16.7389 21.1736 16.792 21.04 16.792C20.9063 16.792 20.778 16.7389 20.6835 16.6444L15.7847 11.7456C15.7845 11.7454 15.7843 11.7452 15.7841 11.745C15.7236 11.6839 15.6799 11.6081 15.6571 11.5252C15.6346 11.4428 15.6335 11.3561 15.654 11.2732L21.4938 16.0686ZM9.72425 15.8279C9.72398 15.8279 9.72371 15.8279 9.72344 15.8279L9.71995 15.3279M9.72425 15.8279C9.72429 15.8279 9.72433 15.8279 9.72436 15.8279L9.71995 15.3279M9.72425 15.8279C8.91038 15.8351 8.10313 15.6811 7.34901 15.375C6.59485 15.0688 5.90873 14.6164 5.33016 14.0439C4.75159 13.4714 4.29201 12.7901 3.9779 12.0392C3.66386 11.2885 3.50143 10.4831 3.49995 9.66934C3.49858 9.30662 3.52757 8.94442 3.58662 8.58653L3.74536 7.62448L4.43396 8.31483L8.35396 12.2448L8.35495 12.2458C8.40143 12.2927 8.45674 12.3299 8.51767 12.3553C8.57859 12.3807 8.64395 12.3937 8.70995 12.3937C8.77596 12.3937 8.84131 12.3807 8.90224 12.3553C8.96317 12.3299 9.01847 12.2927 9.06495 12.2458M9.71995 15.3279C8.972 15.3345 8.23014 15.1931 7.53709 14.9117C6.84405 14.6303 6.21353 14.2146 5.68184 13.6885C5.15016 13.1624 4.72783 12.5363 4.43917 11.8463C4.15052 11.1562 4.00124 10.4159 3.99995 9.66793C3.99949 9.54694 4.00268 9.42602 4.00952 9.30532L3.72595 9.02103L4.07995 8.66793L4.57328 8.74933C4.55328 8.87058 4.53735 8.99241 4.52551 9.11463L7.99995 12.5979C8.09292 12.6917 8.20352 12.7661 8.32538 12.8168C8.44724 12.8676 8.57794 12.8937 8.70995 12.8937C8.84197 12.8937 8.97267 12.8676 9.09453 12.8168C9.21639 12.7661 9.32699 12.6917 9.41995 12.5979M9.06495 12.2458L9.06474 12.246L9.41995 12.5979M9.06495 12.2458L9.41995 12.5979M9.06495 12.2458L12.2422 9.03862M9.41995 12.5979L12.6 9.38793M17.05 20.2879L12.15 15.3879C12.0275 15.2663 11.8757 15.1784 11.7092 15.1329C11.5427 15.0873 11.3673 15.0856 11.2 15.1279L17.05 20.2879ZM17.05 20.2879C17.1437 20.3809 17.2181 20.4915 17.2688 20.6134C17.3196 20.7352 17.3458 20.8659 17.3458 20.9979C17.3458 21.1299 17.3196 21.2606 17.2688 21.3825C17.2181 21.5044 17.1437 21.615 17.05 21.7079C16.957 21.8017 16.8464 21.8761 16.7245 21.9268C16.6027 21.9776 16.472 22.0037 16.34 22.0037C16.2079 22.0037 16.0772 21.9776 15.9554 21.9268C15.8335 21.8761 15.7229 21.8017 15.63 21.7079M17.05 20.2879L15.63 21.7079M15.63 21.7079L11.12 17.1879C10.6593 17.2825 10.1902 17.3294 9.71995 17.3279C8.42638 17.336 7.15177 17.0168 6.0147 16.4C4.87762 15.7832 3.91503 14.8888 3.21647 13.8C2.5179 12.7112 2.10606 11.4635 2.01924 10.1728C1.93243 8.88211 2.17348 7.59044 2.71995 6.41793C2.78886 6.27174 2.89218 6.14442 3.02106 6.04689C3.14994 5.94936 3.30053 5.88453 3.45995 5.85793C3.61754 5.82916 3.77972 5.83867 3.93287 5.88566C4.08601 5.93264 4.22562 6.01573 4.33995 6.12793L8.32681 10.124M15.63 21.7079L8.32681 10.124M8.32681 10.124L8.3264 10.1244L8.67995 10.4779L9.03391 10.1248L9.03351 10.1244L10.1264 9.03148L10.1268 9.03189L10.48 8.67793L10.1264 8.32438L10.126 8.32478L6.12995 4.33793C6.01599 4.22456 5.93103 4.08538 5.88229 3.93219C5.83355 3.779 5.82246 3.61632 5.84995 3.45793C5.87756 3.29751 5.94391 3.14625 6.04324 3.01729C6.14258 2.88833 6.27189 2.78557 6.41995 2.71793C7.58862 2.17328 8.87572 1.93202 10.1623 2.01647C11.4489 2.10092 12.6934 2.50834 13.7809 3.20107C14.8683 3.89381 15.7636 4.8495 16.3839 5.97981C17.0042 7.11013 17.3296 8.37858 17.33 9.66793C17.3315 10.1382 17.2846 10.6073 17.19 11.0679L8.32681 10.124ZM12.6 9.38793L12.2404 9.04043C12.241 9.03983 12.2416 9.03922 12.2422 9.03862M12.6 9.38793C12.7802 9.20146 12.8809 8.95227 12.8809 8.69293C12.8809 8.43359 12.7802 8.1844 12.6 7.99793M12.6 9.38793L12.2447 9.03604L12.2422 9.03862M12.2422 9.03862C12.3312 8.94558 12.3809 8.82176 12.3809 8.69293C12.3809 8.56416 12.3313 8.4404 12.2423 8.34738M12.6 7.99793L12.245 8.35012L12.2423 8.34738M12.6 7.99793L12.2404 8.34543C12.2411 8.34608 12.2417 8.34673 12.2423 8.34738M12.6 7.99793L9.71106 3.49793C9.34874 3.49713 8.98696 3.52607 8.62936 3.58447L7.67115 3.74096L8.35504 4.43012L12.2423 8.34738" />
</svg>
`,
  styles: [
  ]
})
export class XcIconWrenchComponent {

}