import React from "react";

export const IconMission: React.FC<React.HTMLAttributes<HTMLOrSVGElement>> = ({
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 40 40"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_184_1002)">
        <path
          d="M38.8825 12.9478C38.0231 12.4755 36.714 12.5705 35.8708 13.8961C35.8683 13.9001 35.8658 13.904 35.8633 13.9081L32.7286 19.0383C32.351 18.8207 31.918 18.7242 31.4775 18.7636C30.9253 18.813 30.4284 19.0722 30.0786 19.4933C29.8548 19.7626 29.1156 20.686 28.333 21.6636C27.5897 22.5921 26.8212 23.5522 26.6067 23.8104C25.8628 24.7058 24.9139 25.3943 23.9093 26.1232C22.484 27.1575 20.9252 28.2886 20.0002 30.1335C19.0753 28.2886 17.5165 27.1575 16.0912 26.1232C15.0866 25.3943 14.1377 24.7057 13.3937 23.8104C13.1794 23.5524 12.4115 22.593 11.6688 21.6653C10.8856 20.6869 10.1459 19.7627 9.92195 19.4933C9.57203 19.0722 9.07515 18.813 8.52297 18.7636C8.08219 18.7242 7.64945 18.8208 7.27188 19.0383L4.1372 13.9081C4.13477 13.904 4.13227 13.9001 4.1297 13.8961C3.28657 12.5707 1.97743 12.4753 1.11798 12.9478C0.0998598 13.5076 -0.280139 14.7567 0.234235 15.8534C0.235406 15.8559 0.236578 15.8583 0.23775 15.8608C0.457359 16.3165 0.991577 17.5911 1.61025 19.0672C2.47611 21.133 3.5536 23.704 4.46673 25.7125C5.65625 28.3292 6.18977 29.0645 8.2725 30.9575L11.0823 33.5115V33.75H10.6253C10.1938 33.75 9.84406 34.0998 9.84406 34.5313V39.2188C9.84406 39.6502 10.1938 40 10.6253 40H29.3753C29.8067 40 30.1565 39.6502 30.1565 39.2188V34.5313C30.1565 34.0998 29.8067 33.75 29.3753 33.75H28.9183V33.5115L31.7282 30.9575C33.8108 29.0645 34.3443 28.3292 35.5339 25.7125C36.447 23.7041 37.5245 21.1332 38.3903 19.0675C39.009 17.5913 39.5434 16.3165 39.7629 15.8608C39.7641 15.8583 39.7652 15.8559 39.7664 15.8534C40.2809 14.7567 39.9009 13.5076 38.8825 12.9478ZM12.3891 32.5878L9.32351 29.8013C7.40477 28.0573 6.9875 27.4819 5.88922 25.0659C4.98571 23.0786 3.91321 20.5195 3.05134 18.4633C2.40025 16.9097 1.88556 15.6817 1.64736 15.1867C1.42908 14.7174 1.68478 14.4194 1.87079 14.3172C2.18267 14.1458 2.53275 14.2998 2.80814 14.7295L6.2925 20.4321C6.22852 20.8503 6.2811 21.3697 6.535 22.0115C7.26414 23.8543 8.16805 25.6949 9.01492 27.0614C9.24219 27.4282 9.72367 27.5412 10.0905 27.3139C10.4573 27.0867 10.5704 26.6051 10.3431 26.2383C9.54297 24.9471 8.68453 23.1969 7.98797 21.4366C7.69023 20.6842 7.88797 20.5179 7.96242 20.4554C8.08258 20.3544 8.23203 20.3067 8.38391 20.32C8.51875 20.332 8.63828 20.3932 8.72039 20.492C8.93523 20.7505 9.70492 21.712 10.4492 22.6419C11.2306 23.6181 11.9687 24.5401 12.1922 24.8091C13.0615 25.8554 14.1353 26.6346 15.1737 27.3881C17.1864 28.8485 18.9256 30.1106 19.2192 33.0416V33.7502H12.6448V33.166C12.6448 32.9457 12.5519 32.7359 12.3891 32.5878ZM11.4066 35.3125H19.2191V38.4375H11.4066V35.3125ZM28.594 38.4375H20.7816V35.3125H28.594V38.4375ZM38.3533 15.1866C38.1152 15.6817 37.6004 16.9098 36.9492 18.4636C36.0874 20.5197 35.0149 23.0786 34.1115 25.0658C33.0131 27.4819 32.5959 28.0572 30.6771 29.8012L27.6116 32.5877C27.4487 32.7358 27.3559 32.9456 27.3559 33.1658V33.75H20.7817V33.041C21.0754 30.1103 22.8146 28.8482 24.8271 27.3879C25.8655 26.6344 26.9393 25.8553 27.8086 24.809C28.0323 24.5398 28.7709 23.6171 29.553 22.64C30.2968 21.7109 31.0657 20.7502 31.2804 20.4918C31.3625 20.393 31.4821 20.3319 31.6169 20.3199C31.7684 20.3062 31.9182 20.3543 32.0385 20.4554C32.1128 20.5179 32.3106 20.6841 32.0129 21.4365C31.3164 23.1969 30.4579 24.9471 29.6578 26.2383C29.4305 26.605 29.5436 27.0866 29.9103 27.3139C30.2771 27.541 30.7585 27.428 30.9859 27.0614C31.8327 25.6949 32.7365 23.8543 33.4658 22.0114C33.7197 21.3697 33.7722 20.8502 33.7082 20.4321L37.1928 14.7293C37.4681 14.2999 37.8181 14.1458 38.13 14.3172C38.316 14.4193 38.5717 14.7173 38.3533 15.1866Z"
          fill="currentColor"
        />
        <path
          d="M20.0002 14.4302C21.4953 14.4302 22.7117 13.2139 22.7117 11.7188C22.7117 10.2237 21.4954 9.00732 20.0002 9.00732C18.5051 9.00732 17.2888 10.2237 17.2888 11.7188C17.2888 13.214 18.5051 14.4302 20.0002 14.4302ZM20.0002 10.5698C20.6337 10.5698 21.1492 11.0852 21.1492 11.7188C21.1492 12.3523 20.6337 12.8677 20.0002 12.8677C19.3667 12.8677 18.8513 12.3523 18.8513 11.7188C18.8513 11.0852 19.3667 10.5698 20.0002 10.5698Z"
          fill="currentColor"
        />
        <path
          d="M9.06274 12.5H9.5972C9.97883 17.6307 14.0881 21.74 19.2189 22.1217V22.6562C19.2189 23.0877 19.5687 23.4375 20.0001 23.4375C20.4316 23.4375 20.7814 23.0877 20.7814 22.6562V22.1217C25.9122 21.74 30.0215 17.6307 30.4031 12.5H30.9376C31.369 12.5 31.7189 12.1502 31.7189 11.7187C31.7189 11.2872 31.369 10.9375 30.9376 10.9375H30.4031C30.0215 5.80671 25.9122 1.69742 20.7814 1.31578V0.781249C20.7814 0.349765 20.4315 0 20.0001 0C19.5687 0 19.2189 0.349765 19.2189 0.781249V1.3157C14.0881 1.69742 9.97891 5.80663 9.5972 10.9375H9.06274C8.63126 10.9375 8.28149 11.2872 8.28149 11.7187C8.28149 12.1502 8.63126 12.5 9.06274 12.5ZM11.1648 12.5H13.4747C13.8317 15.5005 16.2184 17.8872 19.219 18.2442V20.554C14.9502 20.1797 11.5391 16.7686 11.1648 12.5ZM20.0002 6.70944C22.7623 6.70944 25.0094 8.95654 25.0094 11.7186C25.0094 14.4807 22.7623 16.7279 20.0002 16.7279C17.2381 16.7279 14.9909 14.4808 14.9909 11.7187C14.9909 8.95662 17.2381 6.70944 20.0002 6.70944ZM20.7815 20.554V18.2442C23.7819 17.8872 26.1686 15.5004 26.5257 12.5H28.8356C28.4613 16.7686 25.0501 20.1797 20.7815 20.554ZM28.8356 10.9375H26.5257C26.1686 7.93694 23.7819 5.55022 20.7815 5.19319V2.88335C25.0501 3.25765 28.4613 6.66874 28.8356 10.9375ZM19.219 2.88335V5.19319C16.2184 5.55022 13.8317 7.93694 13.4747 10.9375H11.1648C11.5391 6.66874 14.9502 3.25765 19.219 2.88335Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_184_1002">
          <rect width={40} height={40} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const IconCustomizedLearning: React.FC<
  React.HTMLAttributes<HTMLOrSVGElement>
> = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 40 40"
      fill="none"
      {...props}
    >
      <path
        d="M36.7976 25.7818C36.7976 23.8954 35.4534 22.317 33.6725 21.9541V17.7348C33.6725 17.3504 33.4841 16.9905 33.1681 16.7715C32.8522 16.5525 32.4489 16.5024 32.0891 16.6375L29.8524 17.4762C28.3837 15.9492 26.5983 14.7991 24.6419 14.0931C26.5644 12.6686 27.813 10.3838 27.813 7.81267C27.813 3.50468 24.3083 0 20.0004 0C15.6924 0 12.1877 3.50468 12.1877 7.81267C12.1877 10.3838 13.4363 12.6686 15.3589 14.0931C13.4023 14.7992 11.6171 15.9493 10.1483 17.4762L7.91159 16.6375C7.55173 16.5024 7.14844 16.5525 6.83258 16.7715C6.51663 16.9905 6.32819 17.3504 6.32819 17.7348V21.9541C4.54729 22.317 3.20312 23.8953 3.20312 25.7818C3.20312 27.6683 4.54729 29.2466 6.32819 29.6095V34.1414C6.32819 34.6299 6.63125 35.0672 7.0886 35.2386L19.5889 39.9262C19.8525 40.0245 20.1482 40.0245 20.4118 39.9262L32.912 35.2386C33.3694 35.0672 33.6725 34.6299 33.6725 34.1414V29.6095C35.4534 29.2466 36.7976 27.6682 36.7976 25.7818ZM14.5315 7.81267C14.5315 4.79713 16.9848 2.3438 20.0004 2.3438C23.0159 2.3438 25.4692 4.79713 25.4692 7.81267C25.4692 10.8282 23.0159 13.2815 20.0004 13.2815C16.9848 13.2815 14.5315 10.8282 14.5315 7.81267ZM20.0004 15.6253C22.746 15.6253 25.3684 16.6176 27.4145 18.3905L20.0004 21.1708L12.5862 18.3905C14.6324 16.6176 17.2548 15.6253 20.0004 15.6253ZM5.54693 25.7818C5.54693 24.9202 6.24788 24.2193 7.10946 24.2193H7.89073V27.3443H7.10946C6.24788 27.3443 5.54693 26.6434 5.54693 25.7818ZM8.67199 29.6488C9.5624 29.4673 10.2345 28.6782 10.2345 27.735V23.8286C10.2345 22.8854 9.5624 22.0963 8.67199 21.9148V19.4258L18.8285 23.2345V37.138L8.67199 33.3293V29.6488ZM21.1723 37.1379V23.2345L31.3287 19.4258V21.9148C30.4383 22.0963 29.7662 22.8854 29.7662 23.8286V27.735C29.7662 28.6782 30.4383 29.4673 31.3287 29.6488V33.3292L21.1723 37.1379ZM32.8913 27.3443H32.11V24.2193H32.8913C33.7528 24.2193 34.4538 24.9202 34.4538 25.7818C34.4538 26.6434 33.7529 27.3443 32.8913 27.3443Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const IconEmbracing: React.FC<
  React.HTMLAttributes<HTMLOrSVGElement>
> = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 40 40"
      fill="none"
      {...props}
    >
      <path
        d="M29.5876 24.85C32.2751 22.2375 33.7501 18.7375 33.7501 15C33.7501 11.2625 32.0751 7.36253 29.1626 4.75003C26.2501 2.15003 22.3376 0.900028 18.4251 1.33753C12.1501 2.03753 7.07513 7.08753 6.33763 13.35C5.83763 17.65 7.31263 21.85 10.4001 24.85C11.3251 25.75 11.8626 27.0375 11.8626 28.375V30.0125H11.2376C10.5501 30.0125 9.98763 30.575 9.98763 31.2625C9.98763 31.95 10.5501 32.5125 11.2376 32.5125H13.7376V35.0125C13.7376 37.075 15.4251 38.7625 17.4876 38.7625H22.4876C24.5501 38.7625 26.2376 37.075 26.2376 35.0125V32.5125H28.7376C29.4251 32.5125 29.9876 31.95 29.9876 31.2625C29.9876 30.575 29.4251 30.0125 28.7376 30.0125H28.1126V28.375C28.1126 27.0375 28.6501 25.7625 29.5751 24.85H29.5876ZM23.7501 35C23.7501 35.6875 23.1876 36.25 22.5001 36.25H17.5001C16.8126 36.25 16.2501 35.6875 16.2501 35V32.5H23.7501V35ZM14.3751 30V28.3625C14.3751 26.3625 13.5626 24.425 12.1626 23.05C9.63763 20.5875 8.42513 17.1625 8.83763 13.6375C9.43763 8.51253 13.5876 4.38753 18.7126 3.81253C21.9751 3.45003 25.0876 4.43753 27.5126 6.60003C29.9001 8.73753 31.2626 11.7875 31.2626 14.9875C31.2626 18.1875 30.0501 20.9125 27.8626 23.05C26.4501 24.425 25.6376 26.3625 25.6376 28.3625V30H14.3876H14.3751Z"
        fill="currentColor"
      />
      <path
        d="M37.5 13.75H36.25C35.5625 13.75 35 14.3125 35 15C35 15.6875 35.5625 16.25 36.25 16.25H37.5C38.1875 16.25 38.75 15.6875 38.75 15C38.75 14.3125 38.1875 13.75 37.5 13.75Z"
        fill="currentColor"
      />
      <path
        d="M35.0008 10.0001C35.1883 10.0001 35.3758 9.96261 35.5633 9.86261L38.0633 8.61261C38.6758 8.30011 38.9258 7.55011 38.6258 6.93761C38.3258 6.32511 37.5633 6.07511 36.9508 6.37511L34.4508 7.62511C33.8383 7.93761 33.5883 8.68761 33.8883 9.30011C34.1133 9.73761 34.5508 9.98761 35.0133 9.98761L35.0008 10.0001Z"
        fill="currentColor"
      />
      <path
        d="M38.0621 21.3875L35.5621 20.1375C34.9371 19.825 34.1871 20.075 33.8871 20.7C33.5871 21.325 33.8246 22.0625 34.4496 22.375L36.9496 23.625C37.1246 23.7125 37.3246 23.7625 37.5121 23.7625C37.9746 23.7625 38.4121 23.5125 38.6371 23.075C38.9496 22.4625 38.6996 21.7125 38.0746 21.4L38.0621 21.3875Z"
        fill="currentColor"
      />
      <path
        d="M2.5 16.25H3.75C4.4375 16.25 5 15.6875 5 15C5 14.3125 4.4375 13.75 3.75 13.75H2.5C1.8125 13.75 1.25 14.3125 1.25 15C1.25 15.6875 1.8125 16.25 2.5 16.25Z"
        fill="currentColor"
      />
      <path
        d="M5.56173 7.63747L3.06173 6.38746C2.43673 6.07496 1.68673 6.32496 1.38673 6.94996C1.07423 7.56246 1.32423 8.31246 1.94923 8.62496L4.44923 9.87496C4.62423 9.96246 4.82423 10.0125 5.01173 10.0125C5.47423 10.0125 5.91173 9.76246 6.13673 9.32496C6.44923 8.71246 6.19923 7.96246 5.57423 7.64996L5.56173 7.63747Z"
        fill="currentColor"
      />
      <path
        d="M4.4381 20.1376L1.9381 21.3876C1.3256 21.7001 1.0756 22.4501 1.3756 23.0626C1.6006 23.5001 2.0381 23.7501 2.5006 23.7501C2.6881 23.7501 2.8756 23.7126 3.0631 23.6126L5.5631 22.3626C6.1756 22.0501 6.4256 21.3001 6.1256 20.6876C5.8131 20.0751 5.0631 19.8251 4.4506 20.1251L4.4381 20.1376Z"
        fill="currentColor"
      />
      <path
        d="M26.25 20.7254C26.9375 20.7254 27.5 20.1629 27.5 19.4754V10.6254C27.5 9.93792 26.9375 9.37542 26.25 9.37542H26.0375C24.05 9.37542 22.225 9.78791 20.6 10.6004L20 10.9004L19.4 10.6004C17.775 9.78791 15.95 9.36292 13.9625 9.36292H13.75C13.0625 9.36292 12.5 9.92542 12.5 10.6129V19.4629C12.5 20.1504 13.0625 20.7129 13.75 20.7129H13.9625C15.7625 20.7129 17.5375 21.2129 19.0875 22.1754L19.3375 22.3254C19.5375 22.4504 19.7625 22.5129 19.9875 22.5129C20.2125 22.5129 20.4375 22.4504 20.6375 22.3254L20.8875 22.1754C22.4375 21.2254 24.2125 20.7129 26.0125 20.7129H26.225L26.25 20.7254ZM15 11.9254C16.1875 12.0379 17.2875 12.3379 18.275 12.8379L18.75 13.0754V19.2004C17.55 18.6879 16.2875 18.3754 15 18.2629V11.9129V11.9254ZM25 18.2754C23.7125 18.3879 22.4375 18.7004 21.25 19.2129V13.0879L21.725 12.8504C22.7125 12.3504 23.8125 12.0504 25 11.9379V18.2879V18.2754Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const IconOpenBook: React.FC<React.HTMLAttributes<HTMLOrSVGElement>> = ({
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 40 40"
      fill="none"
      {...props}
    >
      <path
        d="M38.6576 8.19808L35.8537 8.19795V5.29546C35.8537 4.63095 35.3676 4.06638 34.7103 3.96806C34.5956 3.95082 31.864 3.55405 28.5747 4.15257C24.9078 4.81977 21.9834 6.46516 19.9999 8.95256C18.0164 6.46516 15.0919 4.81977 11.4251 4.15257C8.13573 3.55419 5.40416 3.95082 5.28954 3.96806C4.63231 4.06651 4.14611 4.63109 4.14611 5.29546V8.19795H1.34222C0.601075 8.19795 0 8.79902 0 9.5403V34.8338C0 35.2684 0.21037 35.6761 0.564712 35.928C0.919054 36.1798 1.37333 36.2445 1.7837 36.1014C1.88444 36.0665 11.9427 32.6338 19.4429 36.055C19.7968 36.2164 20.2032 36.2164 20.5571 36.055C28.0363 32.6435 38.1161 36.0668 38.2163 36.1014C38.3601 36.1515 38.5091 36.1762 38.6575 36.1762C38.9327 36.1762 39.205 36.0916 39.4353 35.9281C39.7896 35.6762 40 35.2686 40 34.834V9.54043C39.9999 8.79916 39.3989 8.19808 38.6576 8.19808ZM2.68457 33.0379V10.8825H4.14611V28.758C4.14611 29.148 4.31675 29.5184 4.61184 29.7734C4.90692 30.0283 5.29938 30.1427 5.6851 30.0857C5.75917 30.0749 11.5903 29.2744 15.8505 32.1973C10.6027 31.3 5.35042 32.3379 2.68457 33.0379ZM18.6577 30.9868C16.7814 29.2915 14.3373 28.1451 11.4251 27.6153C10.0237 27.3602 8.72347 27.2858 7.68374 27.2858C7.37506 27.2858 7.08927 27.2924 6.83082 27.3028V6.52805H6.83068C9.41047 6.41169 15.6861 6.68751 18.6577 11.7249V30.9868ZM21.3421 11.7251C24.3031 6.7092 30.5886 6.42085 33.1692 6.53142V27.3028C32.0402 27.2573 30.3921 27.2845 28.5747 27.6153C25.6625 28.1451 23.2185 29.2913 21.3421 30.9868V11.7251ZM24.145 32.1981C28.4057 29.2734 34.2399 30.0748 34.3126 30.0856C34.6993 30.1436 35.0915 30.0299 35.3875 29.7751C35.6835 29.52 35.8537 29.1489 35.8537 28.758V10.8827H37.3153V33.0379C34.6486 32.3377 29.3942 31.2993 24.145 32.1981Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const IconBoard: React.FC<React.HTMLAttributes<HTMLOrSVGElement>> = ({
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width='1em'
      height='1em'
      viewBox="0 0 40 40"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_178_808)">
        <path
          d="M36.3177 2.5H18.7448C16.7145 2.5 15.0626 4.15192 15.0626 6.18225V17.4551L11.7996 15.8325C11.6895 15.7776 11.5775 15.7257 11.4645 15.6766C12.4225 14.6765 13.013 13.3215 13.013 11.8307C13.013 8.76221 10.5167 6.26556 7.44812 6.26556C4.37927 6.26556 1.88293 8.76221 1.88293 11.8307C1.88293 13.4982 2.62115 14.996 3.78693 16.0168C1.64001 17.2247 0 19.581 0 22.5V26.2656C0 27.8867 1.05255 29.2664 2.51038 29.7568V36.3074C2.51038 36.9543 3.03497 37.4792 3.68225 37.4792H11.2134C11.8607 37.4792 12.3853 36.9543 12.3853 36.3074V23.1406L16.1371 25.0162C17.5729 25.7339 19.5206 25.3061 20.4013 23.6719H24.603L20.1538 35.9067C19.9326 36.5149 20.2466 37.1875 20.8548 37.4084C21.55 37.6614 22.1683 37.2253 22.3566 36.7078L27.0969 23.6719H27.9184L32.7072 36.7114C32.8891 37.2061 33.5028 37.6675 34.2114 37.4072C34.8187 37.1841 35.1306 36.5109 34.9072 35.9033L30.415 23.6719H36.3177C38.3087 23.6719 40 22.0657 40 19.9896V6.18225C40 4.10584 38.3087 2.5 36.3177 2.5ZM4.22668 11.8307C4.22668 10.0543 5.67169 8.60931 7.44781 8.60931C9.22424 8.60931 10.6693 10.0543 10.6693 11.8307C10.6693 13.6069 9.22424 15.0519 7.44781 15.0519C5.67169 15.0519 4.22668 13.6069 4.22668 11.8307ZM18.3984 22.4188C18.3954 22.4274 18.3923 22.4362 18.3896 22.4451C18.3096 22.6682 18.129 22.8561 17.9077 22.9471C17.6736 23.0423 17.4103 23.0322 17.1854 22.9199C14.957 21.8051 11.7371 20.1965 11.7371 20.1965C10.9595 19.8077 10.0415 20.3741 10.0415 21.2448V35.1355H4.85413V28.7759C4.85413 28.129 4.32922 27.6041 3.68225 27.6041C2.94403 27.6041 2.34375 27.0038 2.34375 26.2656V22.5C2.34375 19.6365 4.67529 17.3959 7.44781 17.3959H8.48328C9.2688 17.3959 10.0534 17.5803 10.7544 17.9303C10.7544 17.9303 16.5671 20.8209 18.0475 21.5582C18.3646 21.7157 18.5153 22.0856 18.3984 22.4188ZM37.6562 19.9896C37.6562 20.3476 37.5174 20.6836 37.2647 20.9363C37.016 21.1853 36.6708 21.3281 36.3177 21.3281H20.6561C20.654 21.3217 20.6525 21.3153 20.6503 21.3092L23.5587 15.4929C23.848 14.9139 23.6136 14.2102 23.0347 13.9206C22.4561 13.6313 21.752 13.8657 21.4624 14.4446L18.9819 19.4052C18.5196 19.1748 17.9822 18.9072 17.4063 18.6209V6.18225C17.4063 5.44434 18.0066 4.84375 18.7448 4.84375H36.3177C36.6708 4.84375 37.016 4.98657 37.265 5.23621C37.5174 5.48828 37.6562 5.82428 37.6562 6.18225V19.9896Z"
          fill="currentColor"
        />
        <path
          d="M33.8071 7.52039H21.2549C20.6076 7.52039 20.083 8.04498 20.083 8.69226C20.083 9.33954 20.6076 9.86414 21.2549 9.86414H33.8071C34.454 9.86414 34.9789 9.33954 34.9789 8.69226C34.9789 8.04498 34.4543 7.52039 33.8071 7.52039Z"
          fill="currentColor"
        />
        <path
          d="M33.8073 11.9141H27.531C26.884 11.9141 26.3591 12.4387 26.3591 13.0859C26.3591 13.7332 26.884 14.2578 27.531 14.2578H33.8073C34.4542 14.2578 34.9791 13.7332 34.9791 13.0859C34.9791 12.4387 34.4545 11.9141 33.8073 11.9141Z"
          fill="currentColor"
        />
        <path
          d="M33.8073 16.3077H27.531C26.884 16.3077 26.3591 16.8323 26.3591 17.4796C26.3591 18.1266 26.884 18.6515 27.531 18.6515H33.8073C34.4542 18.6515 34.9791 18.1266 34.9791 17.4796C34.9791 16.8323 34.4545 16.3077 33.8073 16.3077Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_178_808">
          <rect width={40} height={40} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
