import { Component } from '@angular/core';

@Component({
  selector: 'xc-icon-brain',
  standalone:true,
  template: `
    <svg width="24" height="24" viewBox="0 0 24 24" undefinedxmlns="http://www.w3.org/2000/svg">
<mask id="path-1-inside-1_2239_7347" fill="white">
<path d="M22 10.9977C22.0028 10.2929 21.8193 9.59983 21.4681 8.98872C21.1169 8.37761 20.6104 7.87015 20 7.51774C20.015 7.34473 20.015 7.17074 20 6.99774C20 6.20209 19.6839 5.43902 19.1213 4.87642C18.5587 4.31381 17.7956 3.99774 17 3.99774H16.82C16.6535 3.53605 16.3762 3.12227 16.0125 2.79268C15.6488 2.4631 15.2099 2.22777 14.7341 2.10734C14.2583 1.98691 13.7602 1.98505 13.2835 2.10194C12.8068 2.21882 12.3661 2.45087 12 2.77774C11.6339 2.45087 11.1931 2.21882 10.7165 2.10194C10.2398 1.98505 9.7417 1.98691 9.2659 2.10734C8.7901 2.22777 8.35112 2.4631 7.98744 2.79268C7.62377 3.12227 7.34651 3.53605 7.17998 3.99774H6.99998C6.20433 3.99774 5.44127 4.31381 4.87866 4.87642C4.31605 5.43902 3.99998 6.20209 3.99998 6.99774C3.98493 7.17074 3.98493 7.34473 3.99998 7.51774C3.43244 7.83853 2.95192 8.29318 2.60022 8.84211C2.24853 9.39104 2.03634 10.0176 1.98212 10.6673C1.9279 11.3169 2.03329 11.97 2.28912 12.5697C2.54496 13.1693 2.94347 13.6973 3.44998 14.1077C3.12226 14.719 2.9591 15.405 2.97653 16.0983C2.99396 16.7917 3.19138 17.4686 3.54941 18.0626C3.90744 18.6567 4.41377 19.1474 5.01871 19.4866C5.62366 19.8259 6.30642 20.002 6.99998 19.9977H7.17998C7.34651 20.4594 7.62377 20.8732 7.98744 21.2028C8.35112 21.5324 8.7901 21.7677 9.2659 21.8881C9.7417 22.0086 10.2398 22.0104 10.7165 21.8935C11.1931 21.7767 11.6339 21.5446 12 21.2177C12.3661 21.5446 12.8068 21.7767 13.2835 21.8935C13.7602 22.0104 14.2583 22.0086 14.7341 21.8881C15.2099 21.7677 15.6488 21.5324 16.0125 21.2028C16.3762 20.8732 16.6535 20.4594 16.82 19.9977H17C17.6893 19.9934 18.3658 19.811 18.9639 19.4681C19.5619 19.1253 20.0613 18.6338 20.4134 18.0412C20.7655 17.4486 20.9586 16.775 20.9737 16.0858C20.9889 15.3967 20.8257 14.7153 20.5 14.1077C20.9664 13.7343 21.3433 13.2611 21.6028 12.7229C21.8624 12.1847 21.9981 11.5952 22 10.9977ZM11 8.54774C10.7822 8.42316 10.5548 8.31616 10.32 8.22774C10.068 8.14287 9.79268 8.16156 9.55451 8.27971C9.31634 8.39786 9.13485 8.60578 9.04998 8.85774C8.96512 9.10969 8.98381 9.38504 9.10196 9.62321C9.22011 9.86138 9.42803 10.0429 9.67998 10.1277C10.0649 10.2669 10.3979 10.5208 10.634 10.8552C10.87 11.1896 10.9978 11.5884 11 11.9977V13.5477C10.7822 13.4232 10.5548 13.3162 10.32 13.2277C10.068 13.1429 9.79268 13.1616 9.55451 13.2797C9.31634 13.3979 9.13485 13.6058 9.04998 13.8577C8.96512 14.1097 8.98381 14.385 9.10196 14.6232C9.22011 14.8614 9.42803 15.0429 9.67998 15.1277C10.0649 15.2669 10.3979 15.5208 10.634 15.8552C10.87 16.1896 10.9978 16.5884 11 16.9977V18.9977C11 19.263 10.8946 19.5173 10.7071 19.7048C10.5196 19.8924 10.2652 19.9977 9.99998 19.9977C9.80652 19.9965 9.61757 19.9391 9.45605 19.8326C9.29453 19.7261 9.16737 19.5751 9.08998 19.3977C9.25766 19.2993 9.41807 19.1891 9.56998 19.0677C9.6711 18.9837 9.75468 18.8806 9.81593 18.7642C9.87719 18.6479 9.91493 18.5206 9.92701 18.3897C9.93908 18.2587 9.92524 18.1267 9.88629 18.0011C9.84734 17.8755 9.78403 17.7589 9.69998 17.6577C9.61594 17.5566 9.5128 17.473 9.39645 17.4118C9.28011 17.3505 9.15284 17.3128 9.02191 17.3007C8.89098 17.2886 8.75895 17.3025 8.63337 17.3414C8.50778 17.3804 8.3911 17.4437 8.28998 17.5277C7.92891 17.8317 7.47197 17.9982 6.99998 17.9977C6.46955 17.9977 5.96084 17.787 5.58577 17.4119C5.2107 17.0369 4.99998 16.5282 4.99998 15.9977C5.00477 15.6213 5.11569 15.2539 5.31998 14.9377C5.54441 14.978 5.77198 14.9981 5.99998 14.9977C6.2652 14.9977 6.51955 14.8924 6.70709 14.7048C6.89463 14.5173 6.99998 14.263 6.99998 13.9977C6.99998 13.7325 6.89463 13.4782 6.70709 13.2906C6.51955 13.1031 6.2652 12.9977 5.99998 12.9977C5.76377 12.9991 5.52951 12.955 5.30998 12.8677C4.95033 12.738 4.63539 12.5079 4.40247 12.2047C4.16956 11.9015 4.02843 11.5379 3.99581 11.157C3.96319 10.7761 4.04044 10.3938 4.21841 10.0554C4.39639 9.71699 4.66762 9.43671 4.99998 9.24774C5.14208 9.37847 5.29609 9.49565 5.45998 9.59774C5.69072 9.73034 5.96469 9.76586 6.22161 9.69647C6.47854 9.62708 6.69738 9.45847 6.82998 9.22774C6.96259 8.997 6.99811 8.72303 6.92872 8.46611C6.85933 8.20918 6.69072 7.99034 6.45998 7.85774C6.31921 7.78008 6.20181 7.66613 6.11998 7.52774C6.02753 7.36718 5.98571 7.18246 5.99998 6.99774C5.99998 6.73252 6.10534 6.47817 6.29288 6.29063C6.48041 6.10309 6.73477 5.99774 6.99998 5.99774C7.06965 5.98802 7.14032 5.98802 7.20998 5.99774C7.26292 6.15841 7.32639 6.31541 7.39998 6.46774C7.46531 6.58232 7.55267 6.68285 7.65702 6.76354C7.76136 6.84422 7.88064 6.90347 8.00798 6.93786C8.13532 6.97225 8.26821 6.98111 8.39899 6.96392C8.52976 6.94674 8.65585 6.90385 8.76998 6.83774C8.99169 6.70434 9.15306 6.49021 9.22019 6.24033C9.28733 5.99045 9.25499 5.72427 9.12998 5.49774C9.04608 5.34434 9.00142 5.17257 8.99998 4.99774C8.99998 4.73252 9.10534 4.47817 9.29288 4.29063C9.48041 4.10309 9.73477 3.99774 9.99998 3.99774C10.2652 3.99774 10.5196 4.10309 10.7071 4.29063C10.8946 4.47817 11 4.73252 11 4.99774V8.54774ZM18.69 12.8677C18.4705 12.955 18.2362 12.9991 18 12.9977C17.7348 12.9977 17.4804 13.1031 17.2929 13.2906C17.1053 13.4782 17 13.7325 17 13.9977C17 14.263 17.1053 14.5173 17.2929 14.7048C17.4804 14.8924 17.7348 14.9977 18 14.9977C18.228 14.9981 18.4556 14.978 18.68 14.9377C18.8843 15.2539 18.9952 15.6213 19 15.9977C19 16.5282 18.7893 17.0369 18.4142 17.4119C18.0391 17.787 17.5304 17.9977 17 17.9977C16.528 17.9982 16.0711 17.8317 15.71 17.5277C15.5058 17.358 15.2425 17.2763 14.9781 17.3007C14.7136 17.3251 14.4697 17.4535 14.3 17.6577C14.1302 17.862 14.0486 18.1252 14.073 18.3897C14.0973 18.6541 14.2258 18.898 14.43 19.0677C14.5819 19.1891 14.7423 19.2993 14.91 19.3977C14.8326 19.5751 14.7054 19.7261 14.5439 19.8326C14.3824 19.9391 14.1935 19.9965 14 19.9977C13.7348 19.9977 13.4804 19.8924 13.2929 19.7048C13.1053 19.5173 13 19.263 13 18.9977V16.9977C13.0022 16.5884 13.13 16.1896 13.366 15.8552C13.6021 15.5208 13.935 15.2669 14.32 15.1277C14.5719 15.0429 14.7799 14.8614 14.898 14.6232C15.0162 14.385 15.0349 14.1097 14.95 13.8577C14.8651 13.6058 14.6836 13.3979 14.4455 13.2797C14.2073 13.1616 13.9319 13.1429 13.68 13.2277C13.4452 13.3162 13.2178 13.4232 13 13.5477V11.9977C13.0022 11.5884 13.13 11.1896 13.366 10.8552C13.6021 10.5208 13.935 10.2669 14.32 10.1277C14.5719 10.0429 14.7799 9.86138 14.898 9.62321C15.0162 9.38504 15.0349 9.10969 14.95 8.85774C14.8651 8.60578 14.6836 8.39786 14.4455 8.27971C14.2073 8.16156 13.9319 8.14287 13.68 8.22774C13.4452 8.31616 13.2178 8.42316 13 8.54774V4.99774C13 4.73252 13.1053 4.47817 13.2929 4.29063C13.4804 4.10309 13.7348 3.99774 14 3.99774C14.2652 3.99774 14.5196 4.10309 14.7071 4.29063C14.8946 4.47817 15 4.73252 15 4.99774C14.9986 5.17257 14.9539 5.34434 14.87 5.49774C14.8035 5.61127 14.76 5.73683 14.7421 5.8672C14.7242 5.99757 14.7322 6.13019 14.7656 6.25747C14.799 6.38474 14.8573 6.50416 14.937 6.60888C15.0167 6.71361 15.1162 6.80157 15.23 6.86774C15.3441 6.93385 15.4702 6.97674 15.601 6.99392C15.7318 7.01111 15.8646 7.00225 15.992 6.96786C16.1193 6.93347 16.2386 6.87422 16.343 6.79354C16.4473 6.71285 16.5347 6.61232 16.6 6.49774C16.6748 6.33568 16.7383 6.16861 16.79 5.99774C16.8596 5.98802 16.9303 5.98802 17 5.99774C17.2652 5.99774 17.5196 6.10309 17.7071 6.29063C17.8946 6.47817 18 6.73252 18 6.99774C17.9985 7.19377 17.9393 7.38503 17.83 7.54774C17.7482 7.6775 17.6346 7.78421 17.5 7.85774C17.2692 7.99034 17.1006 8.20918 17.0312 8.46611C16.9619 8.72303 16.9974 8.997 17.13 9.22774C17.2626 9.45847 17.4814 9.62708 17.7384 9.69647C17.9953 9.76586 18.2692 9.73034 18.5 9.59774C18.6795 9.50064 18.8473 9.3832 19 9.24774C19.3335 9.43337 19.6069 9.71056 19.7879 10.0466C19.969 10.3826 20.0501 10.7634 20.0217 11.144C19.9933 11.5246 19.8566 11.8892 19.6277 12.1946C19.3988 12.5001 19.0873 12.7336 18.73 12.8677H18.69Z"/>
</mask>
<path d="M22 10.9977C22.0028 10.2929 21.8193 9.59983 21.4681 8.98872C21.1169 8.37761 20.6104 7.87015 20 7.51774C20.015 7.34473 20.015 7.17074 20 6.99774C20 6.20209 19.6839 5.43902 19.1213 4.87642C18.5587 4.31381 17.7956 3.99774 17 3.99774H16.82C16.6535 3.53605 16.3762 3.12227 16.0125 2.79268C15.6488 2.4631 15.2099 2.22777 14.7341 2.10734C14.2583 1.98691 13.7602 1.98505 13.2835 2.10194C12.8068 2.21882 12.3661 2.45087 12 2.77774C11.6339 2.45087 11.1931 2.21882 10.7165 2.10194C10.2398 1.98505 9.7417 1.98691 9.2659 2.10734C8.7901 2.22777 8.35112 2.4631 7.98744 2.79268C7.62377 3.12227 7.34651 3.53605 7.17998 3.99774H6.99998C6.20433 3.99774 5.44127 4.31381 4.87866 4.87642C4.31605 5.43902 3.99998 6.20209 3.99998 6.99774C3.98493 7.17074 3.98493 7.34473 3.99998 7.51774C3.43244 7.83853 2.95192 8.29318 2.60022 8.84211C2.24853 9.39104 2.03634 10.0176 1.98212 10.6673C1.9279 11.3169 2.03329 11.97 2.28912 12.5697C2.54496 13.1693 2.94347 13.6973 3.44998 14.1077C3.12226 14.719 2.9591 15.405 2.97653 16.0983C2.99396 16.7917 3.19138 17.4686 3.54941 18.0626C3.90744 18.6567 4.41377 19.1474 5.01871 19.4866C5.62366 19.8259 6.30642 20.002 6.99998 19.9977H7.17998C7.34651 20.4594 7.62377 20.8732 7.98744 21.2028C8.35112 21.5324 8.7901 21.7677 9.2659 21.8881C9.7417 22.0086 10.2398 22.0104 10.7165 21.8935C11.1931 21.7767 11.6339 21.5446 12 21.2177C12.3661 21.5446 12.8068 21.7767 13.2835 21.8935C13.7602 22.0104 14.2583 22.0086 14.7341 21.8881C15.2099 21.7677 15.6488 21.5324 16.0125 21.2028C16.3762 20.8732 16.6535 20.4594 16.82 19.9977H17C17.6893 19.9934 18.3658 19.811 18.9639 19.4681C19.5619 19.1253 20.0613 18.6338 20.4134 18.0412C20.7655 17.4486 20.9586 16.775 20.9737 16.0858C20.9889 15.3967 20.8257 14.7153 20.5 14.1077C20.9664 13.7343 21.3433 13.2611 21.6028 12.7229C21.8624 12.1847 21.9981 11.5952 22 10.9977ZM11 8.54774C10.7822 8.42316 10.5548 8.31616 10.32 8.22774C10.068 8.14287 9.79268 8.16156 9.55451 8.27971C9.31634 8.39786 9.13485 8.60578 9.04998 8.85774C8.96512 9.10969 8.98381 9.38504 9.10196 9.62321C9.22011 9.86138 9.42803 10.0429 9.67998 10.1277C10.0649 10.2669 10.3979 10.5208 10.634 10.8552C10.87 11.1896 10.9978 11.5884 11 11.9977V13.5477C10.7822 13.4232 10.5548 13.3162 10.32 13.2277C10.068 13.1429 9.79268 13.1616 9.55451 13.2797C9.31634 13.3979 9.13485 13.6058 9.04998 13.8577C8.96512 14.1097 8.98381 14.385 9.10196 14.6232C9.22011 14.8614 9.42803 15.0429 9.67998 15.1277C10.0649 15.2669 10.3979 15.5208 10.634 15.8552C10.87 16.1896 10.9978 16.5884 11 16.9977V18.9977C11 19.263 10.8946 19.5173 10.7071 19.7048C10.5196 19.8924 10.2652 19.9977 9.99998 19.9977C9.80652 19.9965 9.61757 19.9391 9.45605 19.8326C9.29453 19.7261 9.16737 19.5751 9.08998 19.3977C9.25766 19.2993 9.41807 19.1891 9.56998 19.0677C9.6711 18.9837 9.75468 18.8806 9.81593 18.7642C9.87719 18.6479 9.91493 18.5206 9.92701 18.3897C9.93908 18.2587 9.92524 18.1267 9.88629 18.0011C9.84734 17.8755 9.78403 17.7589 9.69998 17.6577C9.61594 17.5566 9.5128 17.473 9.39645 17.4118C9.28011 17.3505 9.15284 17.3128 9.02191 17.3007C8.89098 17.2886 8.75895 17.3025 8.63337 17.3414C8.50778 17.3804 8.3911 17.4437 8.28998 17.5277C7.92891 17.8317 7.47197 17.9982 6.99998 17.9977C6.46955 17.9977 5.96084 17.787 5.58577 17.4119C5.2107 17.0369 4.99998 16.5282 4.99998 15.9977C5.00477 15.6213 5.11569 15.2539 5.31998 14.9377C5.54441 14.978 5.77198 14.9981 5.99998 14.9977C6.2652 14.9977 6.51955 14.8924 6.70709 14.7048C6.89463 14.5173 6.99998 14.263 6.99998 13.9977C6.99998 13.7325 6.89463 13.4782 6.70709 13.2906C6.51955 13.1031 6.2652 12.9977 5.99998 12.9977C5.76377 12.9991 5.52951 12.955 5.30998 12.8677C4.95033 12.738 4.63539 12.5079 4.40247 12.2047C4.16956 11.9015 4.02843 11.5379 3.99581 11.157C3.96319 10.7761 4.04044 10.3938 4.21841 10.0554C4.39639 9.71699 4.66762 9.43671 4.99998 9.24774C5.14208 9.37847 5.29609 9.49565 5.45998 9.59774C5.69072 9.73034 5.96469 9.76586 6.22161 9.69647C6.47854 9.62708 6.69738 9.45847 6.82998 9.22774C6.96259 8.997 6.99811 8.72303 6.92872 8.46611C6.85933 8.20918 6.69072 7.99034 6.45998 7.85774C6.31921 7.78008 6.20181 7.66613 6.11998 7.52774C6.02753 7.36718 5.98571 7.18246 5.99998 6.99774C5.99998 6.73252 6.10534 6.47817 6.29288 6.29063C6.48041 6.10309 6.73477 5.99774 6.99998 5.99774C7.06965 5.98802 7.14032 5.98802 7.20998 5.99774C7.26292 6.15841 7.32639 6.31541 7.39998 6.46774C7.46531 6.58232 7.55267 6.68285 7.65702 6.76354C7.76136 6.84422 7.88064 6.90347 8.00798 6.93786C8.13532 6.97225 8.26821 6.98111 8.39899 6.96392C8.52976 6.94674 8.65585 6.90385 8.76998 6.83774C8.99169 6.70434 9.15306 6.49021 9.22019 6.24033C9.28733 5.99045 9.25499 5.72427 9.12998 5.49774C9.04608 5.34434 9.00142 5.17257 8.99998 4.99774C8.99998 4.73252 9.10534 4.47817 9.29288 4.29063C9.48041 4.10309 9.73477 3.99774 9.99998 3.99774C10.2652 3.99774 10.5196 4.10309 10.7071 4.29063C10.8946 4.47817 11 4.73252 11 4.99774V8.54774ZM18.69 12.8677C18.4705 12.955 18.2362 12.9991 18 12.9977C17.7348 12.9977 17.4804 13.1031 17.2929 13.2906C17.1053 13.4782 17 13.7325 17 13.9977C17 14.263 17.1053 14.5173 17.2929 14.7048C17.4804 14.8924 17.7348 14.9977 18 14.9977C18.228 14.9981 18.4556 14.978 18.68 14.9377C18.8843 15.2539 18.9952 15.6213 19 15.9977C19 16.5282 18.7893 17.0369 18.4142 17.4119C18.0391 17.787 17.5304 17.9977 17 17.9977C16.528 17.9982 16.0711 17.8317 15.71 17.5277C15.5058 17.358 15.2425 17.2763 14.9781 17.3007C14.7136 17.3251 14.4697 17.4535 14.3 17.6577C14.1302 17.862 14.0486 18.1252 14.073 18.3897C14.0973 18.6541 14.2258 18.898 14.43 19.0677C14.5819 19.1891 14.7423 19.2993 14.91 19.3977C14.8326 19.5751 14.7054 19.7261 14.5439 19.8326C14.3824 19.9391 14.1935 19.9965 14 19.9977C13.7348 19.9977 13.4804 19.8924 13.2929 19.7048C13.1053 19.5173 13 19.263 13 18.9977V16.9977C13.0022 16.5884 13.13 16.1896 13.366 15.8552C13.6021 15.5208 13.935 15.2669 14.32 15.1277C14.5719 15.0429 14.7799 14.8614 14.898 14.6232C15.0162 14.385 15.0349 14.1097 14.95 13.8577C14.8651 13.6058 14.6836 13.3979 14.4455 13.2797C14.2073 13.1616 13.9319 13.1429 13.68 13.2277C13.4452 13.3162 13.2178 13.4232 13 13.5477V11.9977C13.0022 11.5884 13.13 11.1896 13.366 10.8552C13.6021 10.5208 13.935 10.2669 14.32 10.1277C14.5719 10.0429 14.7799 9.86138 14.898 9.62321C15.0162 9.38504 15.0349 9.10969 14.95 8.85774C14.8651 8.60578 14.6836 8.39786 14.4455 8.27971C14.2073 8.16156 13.9319 8.14287 13.68 8.22774C13.4452 8.31616 13.2178 8.42316 13 8.54774V4.99774C13 4.73252 13.1053 4.47817 13.2929 4.29063C13.4804 4.10309 13.7348 3.99774 14 3.99774C14.2652 3.99774 14.5196 4.10309 14.7071 4.29063C14.8946 4.47817 15 4.73252 15 4.99774C14.9986 5.17257 14.9539 5.34434 14.87 5.49774C14.8035 5.61127 14.76 5.73683 14.7421 5.8672C14.7242 5.99757 14.7322 6.13019 14.7656 6.25747C14.799 6.38474 14.8573 6.50416 14.937 6.60888C15.0167 6.71361 15.1162 6.80157 15.23 6.86774C15.3441 6.93385 15.4702 6.97674 15.601 6.99392C15.7318 7.01111 15.8646 7.00225 15.992 6.96786C16.1193 6.93347 16.2386 6.87422 16.343 6.79354C16.4473 6.71285 16.5347 6.61232 16.6 6.49774C16.6748 6.33568 16.7383 6.16861 16.79 5.99774C16.8596 5.98802 16.9303 5.98802 17 5.99774C17.2652 5.99774 17.5196 6.10309 17.7071 6.29063C17.8946 6.47817 18 6.73252 18 6.99774C17.9985 7.19377 17.9393 7.38503 17.83 7.54774C17.7482 7.6775 17.6346 7.78421 17.5 7.85774C17.2692 7.99034 17.1006 8.20918 17.0312 8.46611C16.9619 8.72303 16.9974 8.997 17.13 9.22774C17.2626 9.45847 17.4814 9.62708 17.7384 9.69647C17.9953 9.76586 18.2692 9.73034 18.5 9.59774C18.6795 9.50064 18.8473 9.3832 19 9.24774C19.3335 9.43337 19.6069 9.71056 19.7879 10.0466C19.969 10.3826 20.0501 10.7634 20.0217 11.144C19.9933 11.5246 19.8566 11.8892 19.6277 12.1946C19.3988 12.5001 19.0873 12.7336 18.73 12.8677H18.69Z"  stroke-width="2" mask="url(#path-1-inside-1_2239_7347)"/>
</svg>
`,
  styles: [
  ]
})
export class XcIconBrainComponent {

}