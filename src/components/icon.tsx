import React from 'react'

import cx from '@/libs/variance'

export type IconProps = React.JSX.IntrinsicElements['svg'] & {
    icon:
        | 'pause'
        | 'resume'
        | 'drop'
        | 'number'
        | 'boolean'
        | 'link'
        | 'check'
        | 'github'
        | 'sun'
        | 'moon'
        | 'diamond'
        | 'club'
        | 'heart'
        | 'spade'
}

export default function Icon({ icon, className, ...props }: IconProps) {
    switch (icon) {
        case 'pause':
            return (
                <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                    className={cx('fill-current', className)}
                >
                    <path
                        d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5523 2 13 2.44772 13 3V12C13 12.5523 12.5523 13 12 13H3C2.44772 13 2 12.5523 2 12V3ZM12 3H3V12H12V3Z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    />
                </svg>
            )
        case 'resume':
            return (
                <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                    className={cx('fill-current', className)}
                >
                    <path
                        d="M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    ></path>
                </svg>
            )
        case 'drop':
            return (
                <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                    className={cx('fill-current', className)}
                >
                    <path
                        d="M7.5 1.5C4.5 4.25 3 6.5 3 9C3 11.4853 5.01472 13.5 7.5 13.5C9.98528 13.5 12 11.4853 12 9C12 6.5 10.5 4.25 7.5 1.5ZM11 9C11 7.11203 9.97315 5.27195 7.5 2.87357C5.02686 5.27195 4 7.11203 4 9C4 10.933 5.567 12.5 7.5 12.5C9.433 12.5 11 10.933 11 9Z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    ></path>
                </svg>
            )
        case 'number':
            return (
                <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                    className={cx('fill-current', className)}
                >
                    <path
                        d="M11 1.5C11 1.22386 10.7761 1 10.5 1C10.2239 1 10 1.22386 10 1.5V4H5V1.5C5 1.22386 4.77614 1 4.5 1C4.22386 1 4 1.22386 4 1.5V4H1.5C1.22386 4 1 4.22386 1 4.5C1 4.77614 1.22386 5 1.5 5H4V10H1.5C1.22386 10 1 10.2239 1 10.5C1 10.7761 1.22386 11 1.5 11H4V13.5C4 13.7761 4.22386 14 4.5 14C4.77614 14 5 13.7761 5 13.5V11H10V13.5C10 13.7761 10.2239 14 10.5 14C10.7761 14 11 13.7761 11 13.5V11H13.5C13.7761 11 14 10.7761 14 10.5C14 10.2239 13.7761 10 13.5 10H11V5H13.5C13.7761 5 14 4.77614 14 4.5C14 4.22386 13.7761 4 13.5 4H11V1.5ZM10 10V5H5V10H10Z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    ></path>
                </svg>
            )
        case 'boolean':
            return (
                <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                    className={cx('fill-current', className)}
                >
                    <path
                        d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM7.49988 1.82689C4.36688 1.8269 1.82707 4.36672 1.82707 7.49972C1.82707 10.6327 4.36688 13.1725 7.49988 13.1726V1.82689Z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    ></path>
                </svg>
            )
        case 'link':
            return (
                <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                    className={cx('fill-current', className)}
                >
                    <path
                        d="M8.51194 3.00541C9.18829 2.54594 10.0435 2.53694 10.6788 2.95419C10.8231 3.04893 10.9771 3.1993 11.389 3.61119C11.8009 4.02307 11.9513 4.17714 12.046 4.32141C12.4633 4.95675 12.4543 5.81192 11.9948 6.48827C11.8899 6.64264 11.7276 6.80811 11.3006 7.23511L10.6819 7.85383C10.4867 8.04909 10.4867 8.36567 10.6819 8.56093C10.8772 8.7562 11.1938 8.7562 11.389 8.56093L12.0077 7.94221L12.0507 7.89929C12.4203 7.52976 12.6568 7.2933 12.822 7.0502C13.4972 6.05623 13.5321 4.76252 12.8819 3.77248C12.7233 3.53102 12.4922 3.30001 12.1408 2.94871L12.0961 2.90408L12.0515 2.85942C11.7002 2.508 11.4692 2.27689 11.2277 2.11832C10.2377 1.46813 8.94398 1.50299 7.95001 2.17822C7.70691 2.34336 7.47044 2.57991 7.1009 2.94955L7.058 2.99247L6.43928 3.61119C6.24401 3.80645 6.24401 4.12303 6.43928 4.31829C6.63454 4.51355 6.95112 4.51355 7.14638 4.31829L7.7651 3.69957C8.1921 3.27257 8.35757 3.11027 8.51194 3.00541ZM4.31796 7.14672C4.51322 6.95146 4.51322 6.63487 4.31796 6.43961C4.12269 6.24435 3.80611 6.24435 3.61085 6.43961L2.99213 7.05833L2.94922 7.10124C2.57957 7.47077 2.34303 7.70724 2.17788 7.95035C1.50265 8.94432 1.4678 10.238 2.11799 11.2281C2.27656 11.4695 2.50766 11.7005 2.8591 12.0518L2.90374 12.0965L2.94837 12.1411C3.29967 12.4925 3.53068 12.7237 3.77214 12.8822C4.76219 13.5324 6.05589 13.4976 7.04986 12.8223C7.29296 12.6572 7.52943 12.4206 7.89896 12.051L7.89897 12.051L7.94188 12.0081L8.5606 11.3894C8.75586 11.1941 8.75586 10.8775 8.5606 10.6823C8.36533 10.487 8.04875 10.487 7.85349 10.6823L7.23477 11.301C6.80777 11.728 6.6423 11.8903 6.48794 11.9951C5.81158 12.4546 4.95642 12.4636 4.32107 12.0464C4.17681 11.9516 4.02274 11.8012 3.61085 11.3894C3.19896 10.9775 3.0486 10.8234 2.95385 10.6791C2.53661 10.0438 2.54561 9.18863 3.00507 8.51227C3.10993 8.35791 3.27224 8.19244 3.69924 7.76544L4.31796 7.14672ZM9.62172 6.08558C9.81698 5.89032 9.81698 5.57373 9.62172 5.37847C9.42646 5.18321 9.10988 5.18321 8.91461 5.37847L5.37908 8.91401C5.18382 9.10927 5.18382 9.42585 5.37908 9.62111C5.57434 9.81637 5.89092 9.81637 6.08619 9.62111L9.62172 6.08558Z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    ></path>
                </svg>
            )
        case 'check':
            return (
                <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                    className={cx('fill-current', className)}
                >
                    <path
                        d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    ></path>
                </svg>
            )
        case 'github':
            return (
                <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                    className={cx('fill-current', className)}
                >
                    <path
                        d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    ></path>
                </svg>
            )
        case 'sun':
            return (
                <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                    className={cx('fill-current', className)}
                >
                    <path
                        d="M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386 0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276 4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967 2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7 2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867 4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967 12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144 12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772 4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986 12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938 10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    ></path>
                </svg>
            )
        case 'moon':
            return (
                <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                    className={cx('fill-current', className)}
                >
                    <path
                        d="M2.89998 0.499976C2.89998 0.279062 2.72089 0.0999756 2.49998 0.0999756C2.27906 0.0999756 2.09998 0.279062 2.09998 0.499976V1.09998H1.49998C1.27906 1.09998 1.09998 1.27906 1.09998 1.49998C1.09998 1.72089 1.27906 1.89998 1.49998 1.89998H2.09998V2.49998C2.09998 2.72089 2.27906 2.89998 2.49998 2.89998C2.72089 2.89998 2.89998 2.72089 2.89998 2.49998V1.89998H3.49998C3.72089 1.89998 3.89998 1.72089 3.89998 1.49998C3.89998 1.27906 3.72089 1.09998 3.49998 1.09998H2.89998V0.499976ZM5.89998 3.49998C5.89998 3.27906 5.72089 3.09998 5.49998 3.09998C5.27906 3.09998 5.09998 3.27906 5.09998 3.49998V4.09998H4.49998C4.27906 4.09998 4.09998 4.27906 4.09998 4.49998C4.09998 4.72089 4.27906 4.89998 4.49998 4.89998H5.09998V5.49998C5.09998 5.72089 5.27906 5.89998 5.49998 5.89998C5.72089 5.89998 5.89998 5.72089 5.89998 5.49998V4.89998H6.49998C6.72089 4.89998 6.89998 4.72089 6.89998 4.49998C6.89998 4.27906 6.72089 4.09998 6.49998 4.09998H5.89998V3.49998ZM1.89998 6.49998C1.89998 6.27906 1.72089 6.09998 1.49998 6.09998C1.27906 6.09998 1.09998 6.27906 1.09998 6.49998V7.09998H0.499976C0.279062 7.09998 0.0999756 7.27906 0.0999756 7.49998C0.0999756 7.72089 0.279062 7.89998 0.499976 7.89998H1.09998V8.49998C1.09998 8.72089 1.27906 8.89997 1.49998 8.89997C1.72089 8.89997 1.89998 8.72089 1.89998 8.49998V7.89998H2.49998C2.72089 7.89998 2.89998 7.72089 2.89998 7.49998C2.89998 7.27906 2.72089 7.09998 2.49998 7.09998H1.89998V6.49998ZM8.54406 0.98184L8.24618 0.941586C8.03275 0.917676 7.90692 1.1655 8.02936 1.34194C8.17013 1.54479 8.29981 1.75592 8.41754 1.97445C8.91878 2.90485 9.20322 3.96932 9.20322 5.10022C9.20322 8.37201 6.82247 11.0878 3.69887 11.6097C3.45736 11.65 3.20988 11.6772 2.96008 11.6906C2.74563 11.702 2.62729 11.9535 2.77721 12.1072C2.84551 12.1773 2.91535 12.2458 2.98667 12.3128L3.05883 12.3795L3.31883 12.6045L3.50684 12.7532L3.62796 12.8433L3.81491 12.9742L3.99079 13.089C4.11175 13.1651 4.23536 13.2375 4.36157 13.3059L4.62496 13.4412L4.88553 13.5607L5.18837 13.6828L5.43169 13.7686C5.56564 13.8128 5.70149 13.8529 5.83857 13.8885C5.94262 13.9155 6.04767 13.9401 6.15405 13.9622C6.27993 13.9883 6.40713 14.0109 6.53544 14.0298L6.85241 14.0685L7.11934 14.0892C7.24637 14.0965 7.37436 14.1002 7.50322 14.1002C11.1483 14.1002 14.1032 11.1453 14.1032 7.50023C14.1032 7.25044 14.0893 7.00389 14.0623 6.76131L14.0255 6.48407C13.991 6.26083 13.9453 6.04129 13.8891 5.82642C13.8213 5.56709 13.7382 5.31398 13.6409 5.06881L13.5279 4.80132L13.4507 4.63542L13.3766 4.48666C13.2178 4.17773 13.0353 3.88295 12.8312 3.60423L12.6782 3.40352L12.4793 3.16432L12.3157 2.98361L12.1961 2.85951L12.0355 2.70246L11.8134 2.50184L11.4925 2.24191L11.2483 2.06498L10.9562 1.87446L10.6346 1.68894L10.3073 1.52378L10.1938 1.47176L9.95488 1.3706L9.67791 1.2669L9.42566 1.1846L9.10075 1.09489L8.83599 1.03486L8.54406 0.98184ZM10.4032 5.30023C10.4032 4.27588 10.2002 3.29829 9.83244 2.40604C11.7623 3.28995 13.1032 5.23862 13.1032 7.50023C13.1032 10.593 10.596 13.1002 7.50322 13.1002C6.63646 13.1002 5.81597 12.9036 5.08355 12.5522C6.5419 12.0941 7.81081 11.2082 8.74322 10.0416C8.87963 10.2284 9.10028 10.3497 9.34928 10.3497C9.76349 10.3497 10.0993 10.0139 10.0993 9.59971C10.0993 9.24256 9.84965 8.94373 9.51535 8.86816C9.57741 8.75165 9.63653 8.63334 9.6926 8.51332C9.88358 8.63163 10.1088 8.69993 10.35 8.69993C11.0403 8.69993 11.6 8.14028 11.6 7.44993C11.6 6.75976 11.0406 6.20024 10.3505 6.19993C10.3853 5.90487 10.4032 5.60464 10.4032 5.30023Z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    ></path>
                </svg>
            )
        case 'diamond':
            return (
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                    className={cx('stroke-current', className)}
                >
                    <path
                        d="M1.80002 6.86667C1.65065 7.01589 1.53216 7.19308 1.45132 7.38812C1.37047 7.58315 1.32886 7.79221 1.32886 8.00334C1.32886 8.21447 1.37047 8.42353 1.45132 8.61857C1.53216 8.8136 1.65065 8.99079 1.80002 9.14001L6.86002 14.2C7.00924 14.3494 7.18643 14.4679 7.38146 14.5487C7.5765 14.6296 7.78556 14.6712 7.99669 14.6712C8.20782 14.6712 8.41688 14.6296 8.61191 14.5487C8.80695 14.4679 8.98414 14.3494 9.13335 14.2L14.1934 9.14001C14.3427 8.99079 14.4612 8.8136 14.5421 8.61857C14.6229 8.42353 14.6645 8.21447 14.6645 8.00334C14.6645 7.79221 14.6229 7.58315 14.5421 7.38812C14.4612 7.19308 14.3427 7.01589 14.1934 6.86667L9.13335 1.80667C8.98414 1.65731 8.80695 1.53881 8.61191 1.45797C8.41688 1.37712 8.20782 1.33551 7.99669 1.33551C7.78556 1.33551 7.5765 1.37712 7.38146 1.45797C7.18643 1.53881 7.00924 1.65731 6.86002 1.80667L1.80002 6.86667Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        case 'club':
            return (
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                    className={cx('stroke-current', className)}
                >
                    <path
                        d="M11.52 6.03336C11.6794 5.4869 11.7094 4.91083 11.6075 4.35078C11.5057 3.79073 11.2749 3.26208 10.9334 2.80669C10.5918 2.35131 10.1489 1.9817 9.63981 1.72713C9.13067 1.47256 8.56926 1.34003 8.00002 1.34003C7.43079 1.34003 6.86938 1.47256 6.36024 1.72713C5.8511 1.9817 5.40823 2.35131 5.06669 2.80669C4.72515 3.26208 4.49433 3.79073 4.3925 4.35078C4.29067 4.91083 4.32064 5.4869 4.48002 6.03336C3.87868 6.1198 3.30824 6.35431 2.81997 6.71581C2.3317 7.0773 1.94091 7.55446 1.68271 8.10438C1.42451 8.65431 1.307 9.25978 1.34074 9.86636C1.37448 10.473 1.55842 11.0616 1.87602 11.5795C2.19361 12.0974 2.63492 12.5283 3.16027 12.8334C3.68561 13.1385 4.27854 13.3083 4.88576 13.3276C5.49299 13.3468 6.09547 13.2148 6.63906 12.9435C7.18265 12.6722 7.65031 12.2701 8.00002 11.7734C8.34885 12.2715 8.8161 12.6751 9.35969 12.9477C9.90329 13.2203 10.5062 13.3535 11.114 13.3351C11.7219 13.3168 12.3156 13.1476 12.8418 12.8427C13.368 12.5378 13.8101 12.1068 14.1282 11.5886C14.4464 11.0703 14.6307 10.4811 14.6645 9.87389C14.6983 9.26669 14.5805 8.66063 14.3218 8.11028C14.0631 7.55992 13.6716 7.08255 13.1825 6.72116C12.6934 6.35976 12.1221 6.12569 11.52 6.04003V6.03336Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        case 'heart':
            return (
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                    className={cx('stroke-current', className)}
                >
                    <path
                        d="M12.6667 9.33333C13.66 8.36 14.6667 7.19333 14.6667 5.66667C14.6667 4.69421 14.2804 3.76158 13.5928 3.07394C12.9051 2.38631 11.9725 2 11 2C9.82671 2 9.00004 2.33333 8.00004 3.33333C7.00004 2.33333 6.17337 2 5.00004 2C4.02758 2 3.09495 2.38631 2.40732 3.07394C1.71968 3.76158 1.33337 4.69421 1.33337 5.66667C1.33337 7.2 2.33337 8.36667 3.33337 9.33333L8.00004 14L12.6667 9.33333Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        case 'spade':
            return (
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                    className={cx('stroke-current', className)}
                >
                    <path
                        d="M3.33329 6.66667C2.33996 7.64 1.33329 8.80667 1.33329 10.3333C1.33329 11.3058 1.7196 12.2384 2.40724 12.9261C3.09487 13.6137 4.0275 14 4.99996 14C6.17329 14 6.99996 13.6667 7.99996 12.6667C8.99996 13.6667 9.82663 14 11 14C11.9724 14 12.9051 13.6137 13.5927 12.9261C14.2803 12.2384 14.6666 11.3058 14.6666 10.3333C14.6666 8.8 13.6666 7.63333 12.6666 6.66667L7.99996 2L3.33329 6.66667Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
    }
}