export const Icons = {
  logo: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <rect width="256" height="256" fill="none" />
      <line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
      <line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    </svg>
  ),
  twitter: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148a13.98 13.98 0 0 0 10.15 5.144 4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z" />
    </svg>
  ),
  gitHub: (props) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  radix: (props) => (
    <svg viewBox="0 0 25 25" fill="none" {...props}>
      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z" fill="currentcolor"></path>
      <path d="M12 0H4V8H12V0Z" fill="currentcolor"></path>
      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z" fill="currentcolor"></path>
    </svg>
  ),
  aria: (props) => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624Z" />
    </svg>
  ),
  npm: (props) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z" fill="currentColor"/>
    </svg>
  ),
  yarn: (props) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm.768 4.105c.183 0 .363.053.525.157.125.083.287.185.755 1.154.31-.088.468-.042.551-.019.204.056.366.19.463.375.477.917.542 2.553.334 3.605-.241 1.232-.755 2.029-1.131 2.576.324.329.778.899 1.117 1.825.278.774.31 1.478.273 2.015a5.51 5.51 0 0 0 .602-.329c.593-.366 1.487-.917 2.553-.931.714-.009 1.269.445 1.353 1.103a1.23 1.23 0 0 1-.945 1.362c-.649.158-.95.278-1.821.843-1.232.797-2.539 1.242-3.012 1.39a1.686 1.686 0 0 1-.704.343c-.737.181-3.266.315-3.466.315h-.046c-.783 0-1.214-.241-1.45-.491-.658.329-1.51.19-2.122-.134a1.078 1.078 0 0 1-.58-1.153 1.243 1.243 0 0 1-.153-.195c-.162-.25-.528-.936-.454-1.946.056-.723.556-1.367.88-1.71a5.522 5.522 0 0 1 .408-2.256c.306-.727.885-1.348 1.32-1.737-.32-.537-.644-1.367-.329-2.21.227-.602.412-.936.82-1.08h-.005c.199-.074.389-.153.486-.259a3.418 3.418 0 0 1 2.298-1.103c.037-.093.079-.185.125-.283.31-.658.639-1.029 1.024-1.168a.94.94 0 0 1 .328-.06zm.006.7c-.507.016-1.001 1.519-1.001 1.519s-1.27-.204-2.266.871c-.199.218-.468.334-.746.44-.079.028-.176.023-.417.672-.371.991.625 2.094.625 2.094s-1.186.839-1.626 1.881c-.486 1.144-.338 2.261-.338 2.261s-.843.732-.899 1.487c-.051.663.139 1.2.343 1.515.227.343.51.176.51.176s-.561.653-.037.931c.477.25 1.283.394 1.71-.037.31-.31.371-1.001.486-1.283.028-.065.12.111.209.199.097.093.264.195.264.195s-.755.324-.445 1.066c.102.246.468.403 1.066.398.222-.005 2.664-.139 3.313-.296.375-.088.505-.283.505-.283s1.566-.431 2.998-1.357c.917-.598 1.293-.76 2.034-.936.612-.148.57-1.098-.241-1.084-.839.009-1.575.44-2.196.825-1.163.718-1.742.672-1.742.672l-.018-.032c-.079-.13.371-1.293-.134-2.678-.547-1.515-1.413-1.881-1.344-1.997.297-.5 1.038-1.297 1.334-2.78.176-.899.13-2.377-.269-3.151-.074-.144-.732.241-.732.241s-.616-1.371-.788-1.483a.271.271 0 0 0-.157-.046z" fill="currentColor"/>
    </svg>
  ),
  pnpm: (props) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z" fill="currentColor"/>
    </svg>
  ),
  react: (props) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" fill="currentColor"/>
    </svg>
  ),
  tailwind: (props) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" fill="currentColor"/>
    </svg>
  ),
  google: (props) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
    </svg>
  ),
  apple: (props) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" fill="currentColor"/>
    </svg>
  ),
  paypal: (props) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z" fill="currentColor"/>
    </svg>
  ),
  spinner: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
  logicIcon: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="33" viewBox="0 0 35 33" fill="none" {...props}>
      <path d="M16.8959 1.03488C15.7229 0.147703 14.2484 -0.1155 12.848 0.311372L3.3756 3.19939C1.42418 3.79474 0.112305 5.58526 0.112305 7.65669V28.2327C0.112305 29.7185 0.784852 31.0791 1.95772 31.9649C3.13081 32.8522 4.60695 33.1153 6.00569 32.6885L13.0769 30.532C12.8558 29.7908 12.7437 29.0173 12.7437 28.2327V18.8882C12.7437 16.9259 13.4479 15.0518 14.7298 13.6142C15.6707 12.5552 16.8912 11.7739 18.2552 11.3567L18.7414 11.2156V4.76856C18.7414 3.28276 18.0689 1.92217 16.8958 1.03488H16.8959Z" fill="white"/>
      <path d="M34.5286 15.9996V25.3441C34.5286 27.414 33.2183 29.2062 31.2653 29.7999L21.7929 32.688C21.3541 32.8228 20.9073 32.8886 20.4652 32.8886C19.4974 32.8886 18.5502 32.5742 17.7449 31.9644C17.3771 31.6853 17.0582 31.3627 16.7961 31.0018C16.4773 30.5685 16.2388 30.0856 16.0888 29.5673C16.0872 29.5673 16.0857 29.5673 16.0841 29.5688L16.0872 29.5657C15.9657 29.1404 15.8994 28.6928 15.8994 28.2323V18.8878C15.8994 17.9282 16.1804 17.0282 16.6762 16.2804C17.1719 15.5327 17.8823 14.9359 18.7412 14.5812C18.8786 14.5251 19.0191 14.4736 19.1628 14.4305L20.3216 14.0774L28.6353 11.5423C30.0356 11.1155 31.5102 11.3787 32.6832 12.2659C33.8563 13.1532 34.5287 14.5138 34.5287 15.9996H34.5286Z" fill="white"/>
    </svg>  
  ),
  erpApp: (props) => (
    <svg width='34' height='34' viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="34" height="34" rx="6" fill="#0A5FD9"/>
      <path d="M25.8746 8.01675C25.8752 8.01842 25.8762 8.01994 25.8775 8.02123C26.2178 8.36837 26.4747 8.78805 26.6286 9.24861C26.7828 9.71003 26.8296 10.2004 26.7656 10.6825C26.7015 11.1647 26.5282 11.626 26.2589 12.0315C25.9895 12.437 25.6311 12.776 25.2108 13.023C22.1811 14.7987 18.6456 15.5213 15.1594 15.0774C11.7621 14.6448 8.75083 13.3393 6.29233 10.9692C6.22791 10.9071 6.04466 10.7592 6.04443 10.6066C6.04438 10.572 6.04857 10.5393 6.05566 10.5089C6.10318 10.3048 6.28974 10.169 6.4365 10.0195L10.1255 6.26055C10.2164 6.16798 10.3043 6.04492 10.434 6.04492C10.5587 6.04492 10.644 6.12138 10.6821 6.15944C12.1564 7.59536 13.8881 8.44057 15.9339 8.70671C18.0159 8.97756 20.1293 8.55489 21.9454 7.50443C22.5636 7.14128 23.2858 6.99422 23.9973 7.08656C24.708 7.17878 25.3675 7.50451 25.8716 8.01222C25.8729 8.01351 25.8739 8.01505 25.8746 8.01675Z" fill="white"/>
      <path d="M25.8557 8.00238C25.2554 7.40244 24.4415 7.06543 23.5929 7.06543C22.7442 7.06543 21.9303 7.40244 21.3301 8.00238L7.74603 21.5864C7.1461 22.1867 6.80908 23.0006 6.80908 23.8492C6.80908 24.6979 7.1461 25.5118 7.74603 26.112L-nan -nanL7.74603 26.112C8.0431 26.4093 8.39585 26.6452 8.78412 26.8061C9.17238 26.967 9.58855 27.0498 10.0088 27.0498C10.4291 27.0498 10.8453 26.967 11.2336 26.8061C11.6218 26.6452 11.9746 26.4093 12.2717 26.112L25.8557 12.528C26.153 12.2309 26.3888 11.8782 26.5497 11.4899C26.7107 11.1016 26.7935 10.6855 26.7935 10.2652C26.7935 9.8449 26.7107 9.42873 26.5497 9.04047C26.3888 8.6522 26.153 8.29945 25.8557 8.00238Z" fill="url(#paint0_linear_467_3871)"/>
      <path d="M7.72434 26.0947C7.38409 25.7473 7.12735 25.3271 6.97356 24.8658C6.81978 24.4044 6.77299 23.9142 6.83674 23.4321C6.9005 22.95 7.07311 22.4888 7.34152 22.0833C7.60993 21.6778 7.96709 21.3388 8.38594 21.0918C11.4062 19.3163 14.9304 18.5938 18.4055 19.0376C21.8002 19.4711 24.9605 20.9935 27.4143 23.3731C27.4975 23.4512 27.5166 23.4703 27.5166 23.5848C27.5166 23.7486 27.3453 23.854 27.2318 23.9722L23.8768 27.4685C23.8094 27.5387 23.7444 27.6114 23.6736 27.6781C23.5537 27.7912 23.3478 27.9556 23.1649 27.9556C22.8864 27.9556 22.6504 27.6895 22.4969 27.5548C21.0854 26.3151 19.5041 25.6526 17.6322 25.4083C15.5569 25.1374 13.4502 25.5601 11.6399 26.6106C11.023 26.9728 10.3028 27.1188 9.59352 27.0253C8.88425 26.9319 8.22644 26.6044 7.72434 26.0947Z" fill="url(#paint1_linear_467_3871)"/>
      <defs>
        <linearGradient id="paint0_linear_467_3871" x1="26.587" y1="9.00637" x2="7.50049" y2="26.0004" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="0.831909" stopColor="#2785FF" stop-opacity="0.79"/>
          <stop offset="1" stopColor="white" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint1_linear_467_3871" x1="7.06581" y1="23.6019" x2="33.0005" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="0.606729" stopColor="white"/>
          <stop offset="1" stopColor="#0457D1"/>
          <stop offset="1" stopColor="white"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  zaviagoApp: (props) => (
    <svg width='34' height='34' viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="34" height="34" rx="6" fill="#1964C0"/>
      <g clip-path="url(#clip0_467_3879)">
        <path d="M15.4127 7.56495L10.1089 10.5608C8.888 11.2498 8.13574 12.5243 8.13574 13.9029V19.9256C8.13574 21.3043 8.888 22.5787 10.1089 23.2677L15.4395 26.2787C16.6604 26.9684 18.1642 26.9684 19.3844 26.2787L22.7031 24.4049L15.4437 20.2608C14.2319 19.5691 13.4867 18.3001 13.4867 16.927V10.898C13.4867 9.43115 14.2875 8.23598 15.4149 7.58081C15.4451 7.56288 15.4381 7.55046 15.4127 7.56495Z" fill="url(#paint0_linear_467_3879)"/>
        <path d="M26.7361 13.8696L26.7389 19.8565C26.7389 19.8854 26.7234 19.8847 26.7234 19.8503C26.7059 18.5689 23.048 16.2516 21.7483 15.5185C21.7483 15.5185 21.1747 14.9496 20.7954 14.6192C20.4161 14.2882 20.3979 14.273 20.115 14.0896C19.8694 13.9309 19.6139 13.8068 19.45 13.7268L19.4345 13.7192C19.2712 13.6399 18.7814 13.4282 18.7814 13.4282C17.0933 12.8468 16.6035 12.7937 15.6239 13.5344C15.6239 13.5344 14.4804 14.6192 14.0448 15.5978C13.6092 16.5765 13.4987 17.4365 13.6909 17.9785C13.7007 18.0054 13.707 18.031 13.712 18.0551C14.2784 19.4592 14.6725 19.682 15.6626 20.2413C15.7358 20.2834 15.8132 20.3268 15.8941 20.373L18.3986 21.5372L23.0804 23.2034L19.2487 26.2785C18.0285 26.9682 16.524 26.9682 15.3037 26.2785L9.97248 23.2675C8.75226 22.5785 8 21.3041 8 19.9254V13.9027C8 12.5241 8.75226 11.2496 9.97248 10.5606L15.2763 7.56474C15.3023 7.55026 15.3094 7.56267 15.2791 7.5806C15.2179 7.61578 15.1567 7.66612 15.0954 7.72957L15.4747 7.51578C16.6964 6.8275 18.2016 6.82819 19.4232 7.51716L24.7601 10.5289C25.9817 11.2178 26.7354 12.4916 26.7361 13.8696Z" fill="url(#paint1_linear_467_3879)"/>
        <path d="M10.2139 23.4184L15.562 26.4487C16.7949 27.1405 18.3522 27.1267 19.5865 26.4336L24.9748 23.4067C26.2091 22.7129 26.9691 21.4329 26.9698 20.0474L26.9726 13.9977C26.9733 12.6129 26.214 11.3329 24.9811 10.6411L21.6287 8.75977L21.5858 17.0198C21.5787 18.3984 20.8194 19.6708 19.5908 20.3605L14.1962 23.3915C12.883 24.1287 11.4102 24.048 10.2547 23.4184C10.223 23.4011 10.1879 23.4039 10.2139 23.4184Z" fill="url(#paint2_linear_467_3879)"/>
      </g>
      <defs>
        <linearGradient id="paint0_linear_467_3879" x1="15.3832" y1="7.55859" x2="15.5096" y2="26.7956" gradientUnits="userSpaceOnUse">
          <stop stop-color="#AD7EE1"/>
          <stop offset="1" stop-color="#2A64BB"/>
        </linearGradient>
        <linearGradient id="paint1_linear_467_3879" x1="8" y1="10.8192" x2="27.2879" y2="22.0323" gradientUnits="userSpaceOnUse">
          <stop stop-color="white"/>
          <stop offset="1" stop-color="#7EACFF"/>
        </linearGradient>
        <linearGradient id="paint2_linear_467_3879" x1="12.8576" y1="26.9605" x2="25.6373" y2="9.73733" gradientUnits="userSpaceOnUse">
          <stop stop-color="white"/>
          <stop offset="1" stop-color="white"/>
        </linearGradient>
        <clipPath id="clip0_467_3879">
          <rect width="19" height="20" fill="white" transform="translate(8 7)"/>
        </clipPath>
      </defs>
    </svg> 
  ),
  posApp: (props) => (
    <svg width='36' height='36' viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="36" height="36" rx="7" fill="#013395"/>
      <path d="M11.8348 14.1866C11.8344 13.6954 12.2031 13.1495 12.6583 12.9671L26.7311 7.32999C27.1862 7.14765 27.5555 7.39801 27.5559 7.88917L27.5645 20.4289C27.5649 20.9201 27.2206 21.4734 26.7654 21.6557L11.6354 27.7164L11.8348 14.1866Z" fill="url(#paint0_linear_467_3889)"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5826 27.7371L11.6307 20.7927L18.9189 17.8733C19.5155 17.6343 20.3432 17.8339 20.7677 18.3191L23.7172 21.6901C24.1417 22.1753 24.0023 22.7623 23.4057 23.0013L11.605 27.7283C11.5976 27.7313 11.5901 27.7342 11.5826 27.7371Z" fill="url(#paint1_linear_467_3889)"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7484 20.7274L7.31821 22.5021C6.73255 22.7367 6.59684 23.316 7.01509 23.796L9.92104 27.131C10.3341 27.6051 11.1329 27.805 11.7167 27.584L11.7484 20.7274Z" fill="url(#paint2_linear_467_3889)"/>
      <path d="M25.2733 22.2539C25.2022 22.2583 24.5249 22.0238 24.2408 21.8607C24.1395 21.8025 23.967 21.6983 23.9045 21.6582C23.7194 21.5397 23.3848 21.2759 23.23 21.1577L23.3777 23.0132L25.2733 22.2539Z" fill="white"/>
      <path d="M11.5829 27.7375C11.1089 27.9273 10.2588 27.5722 9.86176 27.0617C10.2727 27.4266 10.9017 27.2886 11.1912 27.0443C11.7259 26.5931 11.7593 25.6156 11.7291 25.255L12.9204 27.2017C12.8837 27.2082 12.4429 27.393 11.5829 27.7375Z" fill="url(#paint3_linear_467_3889)"/>
      <defs>
        <linearGradient id="paint0_linear_467_3889" x1="26.4926" y1="7.42549" x2="20.9216" y2="31.7235" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7ABFFF"/>
          <stop offset="1" stopColor="white"/>
        </linearGradient>
        <linearGradient id="paint1_linear_467_3889" x1="26.4524" y1="7.3076" x2="20.7805" y2="31.8531" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white"/>
        </linearGradient>
        <linearGradient id="paint2_linear_467_3889" x1="8.11698" y1="23.3297" x2="10.2931" y2="27.3939" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="0.5625" stopColor="#BBD8FF"/>
          <stop offset="1" stopColor="#98C5FF"/>
        </linearGradient>
        <linearGradient id="paint3_linear_467_3889" x1="11.8269" y1="24.8363" x2="12.5333" y2="27.2052" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  rewardfulApp: (props) => (
    <svg width='36' height='36' viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="36" height="36" rx="7" fill="#FF7009"/>
      <g clip-path="url(#clip0_1300_9869)">
        <mask id="mask0_1300_9869" maskUnits="userSpaceOnUse" x="7" y="4" width="22" height="28">
          <path d="M28.9189 4L7.13672 4L7.13671 32L28.9189 32L28.9189 4Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_1300_9869)">
          <path d="M25.2159 8.65331C24.0557 8.65331 23.228 9.16782 22.4645 10.2855L20.2633 13.502L20.2633 4.32031L15.0127 4.32031L15.0127 13.502L12.8116 10.2855C12.0492 9.16782 11.2215 8.65331 10.0601 8.65331C8.30839 8.6533 7.14247 9.9693 7.13674 11.591C7.13216 12.9793 7.7753 13.8846 9.13152 14.7736L17.638 20.3503L26.1445 14.7736C27.5008 13.8846 28.1439 12.9793 28.1393 11.591C28.1348 9.96931 26.9677 8.65331 25.2159 8.65331Z" fill="white"/>
          <path d="M17.6379 21.6865C22.6937 21.6865 26.8379 25.5271 26.8265 31.0385L8.44924 31.0385C8.43892 25.5296 12.5821 21.6865 17.6379 21.6865Z" fill="white"/>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1300_9869">
          <rect width="22" height="28" fill="white" transform="translate(7 4)"/>
        </clipPath>
      </defs>
    </svg>
  ),
  untitleApp: (props) => (
    <svg width='36' height='36' viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clip-path="url(#clip0_467_3914)">
        <rect width="36" height="36" rx="7" fill="#FFF7EF"/>
        <rect x="36.2832" y="36.1895" width="18.1412" height="36.3783" rx="9.07059" transform="rotate(180 36.2832 36.1895)" fill="#3ACCFF"/>
        <rect x="18.1277" y="36.207" width="18.1084" height="36.4136" rx="8" transform="rotate(180 18.1277 36.207)" fill="#3480FE"/>
        <rect x="9.0708" y="24.3975" width="24.6038" height="18.174" transform="rotate(-90 9.0708 24.3975)" fill="#3480FE"/>
        <rect y="36.1895" width="18.1412" height="36.2824" rx="8" transform="rotate(-90 0 36.1895)" fill="#FFBB00"/>
        <ellipse cx="27.2112" cy="8.91155" rx="9.07059" ry="9.11858" fill="#FF5C00"/>
      </g>
      <defs>
        <clipPath id="clip0_467_3914">
          <rect width="36" height="36" rx="7" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  ),
  reducoedApp: (props) => (
    <svg width='36' height='36' viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="36" height="36" rx="7" fill="url(#paint0_linear_467_3921)"/>
        <path d="M17.5 8C14.785 8 12.3108 9.03047 10.4468 10.7216L15.2968 12.96C15.7106 13.151 16.161 13.2499 16.6168 13.2499H21.7C22.2799 13.2499 22.75 13.72 22.75 14.2999V22.6999C22.75 23.2798 22.2799 23.7499 21.7 23.7499H13.3C12.7201 23.7499 12.25 23.2798 12.25 22.6999V17.6167C12.25 17.1609 12.1511 16.7106 11.9601 16.2967L9.7216 11.4469C8.03047 13.3108 7 15.785 7 18.5C7 24.299 11.701 29 17.5 29C23.299 29 28 24.299 28 18.5C28 12.701 23.299 8 17.5 8Z" fill="white"/>
      <defs>
      <linearGradient id="paint0_linear_467_3921" x1="0" y1="-3" x2="34" y2="41.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF5786"/>
        <stop offset="0.583333" stopColor="#CA41C3"/>
        <stop offset="1" stopColor="#9033E5"/>
      </linearGradient>
      </defs>
    </svg>
  ),
  inbioApp: (props) => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="36" height="36" rx="7" fill="#FF4A00"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M25.0002 18.4247C25.0002 16.3446 23.2983 14.6583 21.1988 14.6583L15.7967 14.6583C15.2994 14.6583 14.8964 14.259 14.8964 13.7663C14.8964 13.2737 15.2994 12.8743 15.7967 12.8743L18.1976 12.8743L18.1976 10L15.6967 10C13.5972 10 11.8952 11.6862 11.8952 13.7663C11.8952 15.8464 13.5972 17.5326 15.6967 17.5326L21.1988 17.5326C21.6961 17.5326 22.0991 17.932 22.0991 18.4247C22.0991 18.9174 21.6961 19.3167 21.1988 19.3167L20.0984 19.3167L19.3697 20.6476L20.0984 22.191L21.1988 22.191C23.2983 22.191 25.0002 20.5048 25.0002 18.4247ZM18.1476 19.3167L15.6967 19.3167C13.5972 19.3167 11.8952 21.0029 11.8952 23.083C11.8952 25.1631 13.5972 26.8493 15.6967 26.8493L18.0976 26.8493L18.0976 23.975L15.6967 23.975C15.1994 23.975 14.7963 23.5757 14.7963 23.083C14.7963 22.5903 15.1994 22.191 15.6967 22.191L18.1476 22.191L17.5974 20.506L18.1476 19.3167Z" fill="white"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M10.959 18.4249C10.959 20.505 12.6609 22.1913 14.7604 22.1913L20.1625 22.1913C20.6598 22.1913 21.0629 22.5906 21.0629 23.0833C21.0629 23.5759 20.6598 23.9753 20.1625 23.9753L17.7616 23.9753L17.7616 26.8496L20.2626 26.8496C22.3621 26.8496 24.064 25.1634 24.064 23.0833C24.064 21.0032 22.3621 19.317 20.2626 19.317L14.7604 19.317C14.2632 19.317 13.8601 18.9176 13.8601 18.4249C13.8601 17.9323 14.2632 17.5329 14.7604 17.5329L15.8609 17.5329L16.5895 16.202L15.8609 14.6586L14.7604 14.6586C12.6609 14.6586 10.959 16.3448 10.959 18.4249ZM17.8116 17.5329L20.2626 17.5329C22.3621 17.5329 24.064 15.8467 24.064 13.7666C24.064 11.6865 22.3621 10.0003 20.2626 10.0003L17.8616 10.0003L17.8616 12.8746L20.2626 12.8746C20.7598 12.8746 21.1629 13.2739 21.1629 13.7666C21.1629 14.2593 20.7598 14.6586 20.2626 14.6586L17.8116 14.6586L18.3618 16.3436L17.8116 17.5329Z" fill="white"/>
    </svg>
  ),
  blogAndPagesApp: (props) => (
    <svg width='36' height='36' viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="36" height="36" rx="7" fill="#7000FF"/>
      <path d="M18.2416 8.56352C17.5258 8.02219 16.6261 7.8616 15.7717 8.12206L9.9919 9.88424C8.8012 10.2475 8.00073 11.34 8.00073 12.6039V25.1588C8.00073 26.0654 8.4111 26.8956 9.12675 27.4361C9.84253 27.9775 10.7432 28.138 11.5967 27.8776L15.9113 26.5617C15.7764 26.1095 15.7081 25.6376 15.7081 25.1588V19.4571C15.7081 18.2598 16.1377 17.1162 16.9199 16.239C17.494 15.5929 18.2387 15.1161 19.071 14.8616L19.3676 14.7755V10.8417C19.3676 9.93511 18.9573 9.10492 18.2415 8.56352H18.2416Z" fill="white"/>
      <path d="M29.0005 17.6953V23.397C29.0005 24.66 28.201 25.7535 27.0094 26.1158L21.2296 27.878C20.9618 27.9602 20.6892 28.0004 20.4195 28.0004C19.8289 28.0004 19.2509 27.8086 18.7596 27.4365C18.5352 27.2662 18.3406 27.0694 18.1807 26.8491C17.9861 26.5848 17.8406 26.2901 17.7491 25.9739C17.7481 25.9739 17.7472 25.9739 17.7462 25.9748L17.7481 25.9729C17.674 25.7134 17.6335 25.4403 17.6335 25.1593V19.4575C17.6335 18.8721 17.805 18.3229 18.1075 17.8666C18.41 17.4104 18.8435 17.0462 19.3675 16.8298C19.4513 16.7956 19.5371 16.7642 19.6248 16.7378L20.3318 16.5224L25.4046 14.9756C26.259 14.7151 27.1588 14.8757 27.8745 15.4171C28.5903 15.9585 29.0006 16.7887 29.0006 17.6953H29.0005Z" fill="white"/>
    </svg>
  ),
  lineCRMApp: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width='36' height='36' viewBox="0 0 36 36" fill="none" {...props}>
      <rect width="36" height="36" rx="7" fill="#3BCD76"/>
      <path d="M11 27C9.34315 27 8 25.6569 8 24V24V10.9591C8 9.87712 8.87712 9 9.95911 9V9C11.0411 9 11.9182 9.87712 11.9182 10.9591V21V21C11.9639 22.1175 12.8832 23 14.0017 23H15H19.4444C20.549 23 21.4444 23.8954 21.4444 25V25C21.4444 26.1046 20.549 27 19.4444 27H11V27Z" fill="white"/>
      <path d="M25.4443 9C27.1012 9 28.4443 10.3431 28.4443 12V12L28.4443 25.0409C28.4443 26.1229 27.5672 27 26.4852 27V27C25.4032 27 24.5261 26.1229 24.5261 25.0409L24.5261 15V15C24.4804 13.8825 23.5611 13 22.4427 13L21.4443 13L16.9999 13C15.8953 13 14.9999 12.1046 14.9999 11V11C14.9999 9.89543 15.8953 9 16.9999 9L25.4443 9V9Z" fill="white"/>
    </svg>
  ),
  appStoreApp01: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" fill="none" {...props}>
      <rect width="52" height="52" rx="7" fill="url(#paint0_linear_489_3167)"/>
      <path d="M25.5 16C22.785 16 20.3108 17.0305 18.4468 18.7216L23.2968 20.96C23.7106 21.151 24.161 21.2499 24.6168 21.2499H29.7C30.2799 21.2499 30.75 21.72 30.75 22.2999V30.6999C30.75 31.2798 30.2799 31.7499 29.7 31.7499H21.3C20.7201 31.7499 20.25 31.2798 20.25 30.6999V25.6167C20.25 25.1609 20.1511 24.7106 19.9601 24.2967L17.7216 19.4469C16.0305 21.3108 15 23.785 15 26.5C15 32.299 19.701 37 25.5 37C31.299 37 36 32.299 36 26.5C36 20.701 31.299 16 25.5 16Z" fill="white"/>
      <defs>
        <linearGradient id="paint0_linear_489_3167" x1="0" y1="-4.33333" x2="49.1111" y2="59.9444" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FF5786"/>
          <stop offset="0.583333" stop-color="#CA41C3"/>
          <stop offset="1" stop-color="#9033E5"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  appStoreApp02: (props) => (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="0.181641" y="0.681641" width="51.0545" height="51.0545" rx="8.50909" fill="#091C41"/>
      <g clip-path="url(#clip0_495_4206)">
        <path d="M22.5224 8.85396L12.6254 14.5897C10.3471 15.9087 8.94336 18.3488 8.94336 20.9882V32.5191C8.94336 35.1585 10.3471 37.5985 12.6254 38.9176L22.5723 44.6824C24.8506 46.0027 27.6568 46.0027 29.9338 44.6824L36.1265 41.0949L22.5802 33.1608C20.319 31.8364 18.9284 29.4069 18.9284 26.7781V15.2353C18.9284 12.4269 20.4228 10.1387 22.5264 8.88433C22.5829 8.85 22.5697 8.82623 22.5224 8.85396Z" fill="url(#paint0_linear_495_4206)"/>
        <path d="M43.6496 20.9246L43.6549 32.3868C43.6549 32.4422 43.626 32.4409 43.626 32.3749C43.5932 29.9216 36.7675 25.4851 34.3422 24.0816C34.3422 24.0816 33.2719 22.9923 32.5642 22.3598C31.8564 21.726 31.8222 21.697 31.2944 21.3458C30.8361 21.0421 30.3594 20.8044 30.0535 20.6512L30.0246 20.6367C29.7199 20.4849 28.806 20.0795 28.806 20.0795C25.6558 18.9664 24.7418 18.8648 22.914 20.2829C22.914 20.2829 20.7801 22.3598 19.9673 24.2334C19.1545 26.107 18.9483 27.7535 19.3068 28.7914C19.3252 28.8429 19.337 28.8917 19.3462 28.9379C20.4033 31.6262 21.1386 32.0527 22.9862 33.1235C23.1228 33.2041 23.2672 33.2872 23.4182 33.3757L28.0916 35.6045L36.8279 38.7945L29.6779 44.6821C27.4009 46.0025 24.5935 46.0025 22.3165 44.6821L12.3682 38.9173C10.0912 37.5983 8.6875 35.1582 8.6875 32.5188V20.9879C8.6875 18.3485 10.0912 15.9085 12.3682 14.5894L22.2653 8.85368C22.3139 8.82596 22.327 8.84972 22.2705 8.88405C22.1563 8.95139 22.042 9.04778 21.9278 9.16925L22.6356 8.75994C24.9152 7.4422 27.724 7.44352 30.0036 8.76258L39.9624 14.5287C42.2419 15.8477 43.6483 18.2865 43.6496 20.9246Z" fill="url(#paint1_linear_495_4206)"/>
        <path d="M12.8196 39.2052L22.7994 45.007C25.1001 46.3313 28.006 46.3049 30.3092 44.9779L40.3639 39.1828C42.6671 37.8545 44.0853 35.4039 44.0866 32.7512L44.0919 21.1689C44.0932 18.5176 42.6763 16.0669 40.3757 14.7426L34.12 11.1406L34.0399 26.9548C34.0267 29.5942 32.6099 32.0303 30.3171 33.3507L20.2507 39.1537C17.8004 40.5652 15.052 40.4107 12.8958 39.2052C12.8367 39.1722 12.7711 39.1775 12.8196 39.2052Z" fill="url(#paint2_linear_495_4206)"/>
      </g>
      <defs>
        <linearGradient id="paint0_linear_495_4206" x1="22.4673" y1="8.8418" x2="22.7156" y2="45.6719" gradientUnits="userSpaceOnUse">
          <stop stop-color="#AD7EE1"/>
          <stop offset="1" stop-color="#2A64BB"/>
        </linearGradient>
        <linearGradient id="paint1_linear_495_4206" x1="8.6875" y1="15.0845" x2="45.14" y2="35.7392" gradientUnits="userSpaceOnUse">
          <stop stop-color="#2F99FF"/>
          <stop offset="1" stop-color="#002C7D"/>
        </linearGradient>
        <linearGradient id="paint2_linear_495_4206" x1="17.7529" y1="45.9868" x2="42.3954" y2="13.6177" gradientUnits="userSpaceOnUse">
          <stop stop-color="#24A5FA"/>
          <stop offset="1" stop-color="#24A5F9"/>
        </linearGradient>
        <clipPath id="clip0_495_4206">
          <rect width="35.4545" height="38.2909" fill="white" transform="translate(8.68848 7.77246)"/>
        </clipPath>
      </defs>
    </svg>
  )
}