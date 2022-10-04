import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"
const HeaderWave = (props) => (
  <Svg
    width={1000}
    height={377}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m0 665.156 67-43.763c66-43.763 200-131.289 333-87.526 133 43.763 267 218.815 400 277.166s267 0 333-29.175l67-29.176V140H0v525.156Z"
      fill="url(#a)"
      fillOpacity={0.5}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m1119 483.941-56.78-26.912c-55.94-26.912-169.503-80.735-282.22-53.823-112.717 26.911-226.282 134.558-339 170.441-112.717 35.882-226.283 0-282.218-17.941L102 537.764V161h1017v322.941Z"
      fill="url(#b)"
      fillOpacity={0.3}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m0 630.791 67-52.566c66-52.566 200-157.698 333-105.132s267 262.83 400 332.918c133 70.088 267 0 333-35.044l67-35.044V0H0v630.791Z"
      fill="url(#c)"
    />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#d" transform="matrix(.00024 0 0 .00042 0 -.362)" />
      </Pattern>
      <Pattern
        id="b"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#d" transform="matrix(.00024 0 0 .00058 0 -.688)" />
      </Pattern>
      <Pattern
        id="c"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#d" transform="matrix(.00024 0 0 .00035 0 -.218)" />
      </Pattern>
      <Image
        id="d"
        width={1000}
        height={1000}
      />
    </Defs>
  </Svg>
)
export default HeaderWave