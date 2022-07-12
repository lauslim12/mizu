/**
 * Generates a glass icon to be clicked with the aim of incrementing the amount of glasses drunk. We
 * intentionally use it like this to prevent any dependencies (especially with icon libraries), as this
 * is only a small project after all.
 *
 * For the real icon in SVG, you can use `FaWineGlassAlt` from `react-icons/fa`.
 *
 * @link {https://github.com/FortAwesome/Font-Awesome}
 * @link {https://github.com/FortAwesome/Font-Awesome/blob/6.x/js-packages/@fortawesome/free-solid-svg-icons/faWineGlassAlt.js}
 * @returns Gear icon for this settings.
 */
export const GlassIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 288 512"
    height="4.5rem"
    width="4.5rem"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M216 464h-40V346.81c68.47-15.89 118.05-79.91 111.4-154.16l-15.95-178.1C270.71 6.31 263.9 0 255.74 0H32.26c-8.15 0-14.97 6.31-15.7 14.55L.6 192.66C-6.05 266.91 43.53 330.93 112 346.82V464H72c-22.09 0-40 17.91-40 40 0 4.42 3.58 8 8 8h208c4.42 0 8-3.58 8-8 0-22.09-17.91-40-40-40zM61.75 48h164.5l7.17 80H54.58l7.17-80z"></path>
  </svg>
);

/**
 * Generates a gear icon which is identical with VSCode's gear icon. We intentionally
 * use it like this to prevent any dependencies (especially with icon libraries), as this
 * is only a small project after all.
 *
 * For the real icon in SVG, you can use `VscSettingsGear` from `react-icons/vsc`.
 *
 * @link {https://github.com/microsoft/vscode-codicons/tree/main}
 * @link {https://raw.githubusercontent.com/microsoft/vscode-codicons/main/src/icons/settings-gear.svg}
 * @returns Gear icon for this settings.
 */
export const SettingsGearIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.85 8.75l4.15.83v4.84l-4.15.83 2.35 3.52-3.43 3.43-3.52-2.35-.83 4.15H9.58l-.83-4.15-3.52 2.35-3.43-3.43 2.35-3.52L0 14.42V9.58l4.15-.83L1.8 5.23 5.23 1.8l3.52 2.35L9.58 0h4.84l.83 4.15 3.52-2.35 3.43 3.43-2.35 3.52zm-1.57 5.07l4-.81v-2l-4-.81-.54-1.3 2.29-3.43-1.43-1.43-3.43 2.29-1.3-.54-.81-4h-2l-.81 4-1.3.54-3.43-2.29-1.43 1.43L6.38 8.9l-.54 1.3-4 .81v2l4 .81.54 1.3-2.29 3.43 1.43 1.43 3.43-2.29 1.3.54.81 4h2l.81-4 1.3-.54 3.43 2.29 1.43-1.43-2.29-3.43.54-1.3zm-8.186-4.672A3.43 3.43 0 0 1 12 8.57 3.44 3.44 0 0 1 15.43 12a3.43 3.43 0 1 1-5.336-2.852zm.956 4.274c.281.188.612.288.95.288A1.7 1.7 0 0 0 13.71 12a1.71 1.71 0 1 0-2.66 1.422z"
    ></path>
  </svg>
);
