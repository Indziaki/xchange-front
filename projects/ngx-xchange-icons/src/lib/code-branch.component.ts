import { Component } from '@angular/core';

@Component({
  selector: 'xc-icon-code-branch',
  standalone:true,
  template: `
    <svg width="24" height="24" viewBox="0 0 24 24" undefinedxmlns="http://www.w3.org/2000/svg">
<path d="M16.5042 11.5637L16.3115 12.0256C16.1212 12.4818 15.7999 12.8713 15.3883 13.145C14.9769 13.4185 14.4936 13.564 13.9994 13.5631H14L16.5042 11.5637ZM16.5042 11.5637L16.042 11.3714C15.5084 11.1495 15.0681 10.7496 14.7961 10.2396C14.5242 9.72967 14.4373 9.14125 14.5502 8.57446C14.6632 8.00767 14.969 7.49752 15.4157 7.13082C15.8612 6.76512 16.4193 6.5646 16.9956 6.56312C17.5822 6.57503 18.146 6.79289 18.5882 7.17865C19.0317 7.56546 19.3244 8.09628 19.415 8.6777C19.5056 9.25911 19.3883 9.85385 19.0835 10.3572C18.7788 10.8606 18.3063 11.2404 17.7491 11.4297L17.4807 11.5209L17.4212 11.7981C17.2531 12.5807 16.8218 13.2821 16.1992 13.7853C15.5766 14.2884 14.8004 14.5629 14 14.5631C14 14.5631 13.9999 14.5631 13.9999 14.5631L10 14.5631L9.99855 14.5631C9.5064 14.5646 9.02563 14.7112 8.61649 14.9847C8.20734 15.2582 7.88802 15.6464 7.69855 16.1006L7.50534 16.5638L7.96921 16.7553C8.50866 16.978 8.9532 17.3824 9.22579 17.8984C9.49837 18.4145 9.58183 19.0096 9.4617 19.5807C9.34156 20.1518 9.02541 20.6629 8.56802 21.0254C8.11063 21.3879 7.54084 21.5789 6.95738 21.5654C6.37393 21.5519 5.81359 21.3347 5.37346 20.9515C4.93333 20.5682 4.64117 20.043 4.54759 19.467C4.45401 18.8909 4.56491 18.3003 4.86109 17.7974C5.15726 17.2945 5.62004 16.9111 6.16921 16.7136L6.50001 16.5947V16.2431V7.88311V7.52956L6.16667 7.41171C5.61066 7.21513 5.14204 6.82832 4.84365 6.31964C4.54525 5.81097 4.43628 5.21318 4.53601 4.63193C4.63574 4.05069 4.93773 3.52341 5.38862 3.14329C5.83951 2.76317 6.41027 2.55469 7.00001 2.55469C7.58975 2.55469 8.1605 2.76317 8.61139 3.14329C9.06228 3.52341 9.36428 4.05069 9.464 4.63193C9.56373 5.21318 9.45476 5.81097 9.15637 6.31964C8.85797 6.82832 8.38935 7.21513 7.83334 7.41171L7.50001 7.52956V7.88311V13.6231V14.5077L8.25786 14.0515C8.7843 13.7346 9.38657 13.5659 10.001 13.5631M16.5042 11.5637L13.999 13.5631L10.001 13.5631M10.001 13.5631C10.0014 13.5631 10.0017 13.5631 10.0021 13.5631L10 13.0631V13.5631H10.001ZM7.83336 3.81591C7.58669 3.65109 7.29668 3.56311 7.00001 3.56311C6.60218 3.56311 6.22065 3.72115 5.93935 4.00245C5.65804 4.28376 5.50001 4.66529 5.50001 5.06311C5.50001 5.35979 5.58798 5.6498 5.7528 5.89647C5.91762 6.14314 6.15189 6.3354 6.42598 6.44893C6.70007 6.56247 7.00167 6.59217 7.29264 6.53429C7.58361 6.47641 7.85089 6.33355 8.06067 6.12378C8.27044 5.914 8.41331 5.64672 8.47118 5.35575C8.52906 5.06478 8.49936 4.76318 8.38583 4.48909C8.27229 4.215 8.08004 3.98073 7.83336 3.81591ZM6.16665 20.3103C6.41333 20.4751 6.70334 20.5631 7.00001 20.5631C7.39783 20.5631 7.77936 20.4051 8.06067 20.1238C8.34197 19.8425 8.50001 19.4609 8.50001 19.0631C8.50001 18.7664 8.41203 18.4764 8.24721 18.2298C8.08239 17.9831 7.84812 17.7908 7.57403 17.6773C7.29994 17.5638 6.99834 17.5341 6.70737 17.5919C6.4164 17.6498 6.14912 17.7927 5.93935 18.0025C5.72957 18.2122 5.58671 18.4795 5.52883 18.7705C5.47095 19.0615 5.50066 19.3631 5.61419 19.6371C5.72772 19.9112 5.91998 20.1455 6.16665 20.3103ZM16.1667 10.3103C16.4133 10.4751 16.7033 10.5631 17 10.5631C17.3978 10.5631 17.7794 10.4051 18.0607 10.1238C18.342 9.84247 18.5 9.46094 18.5 9.06312C18.5 8.76645 18.412 8.47643 18.2472 8.22976C18.0824 7.98308 17.8481 7.79083 17.574 7.6773C17.2999 7.56376 16.9983 7.53406 16.7074 7.59194C16.4164 7.64981 16.1491 7.79268 15.9393 8.00245C15.7296 8.21223 15.5867 8.47951 15.5288 8.77048C15.471 9.06145 15.5007 9.36305 15.6142 9.63714C15.7277 9.91123 15.92 10.1455 16.1667 10.3103Z" />
</svg>
`,
  styles: [
  ]
})
export class XcIconCodeBranchComponent {

}