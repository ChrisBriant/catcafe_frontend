//https://svg2jsx.com/
import React from "react";

const FloorPlan = props => {

  const bookTable = (tableNo) => {
    console.log('table clicked', tableNo);
    props.bookTable(tableNo);
  }

  return (
    <svg
      className="floorplan"
      xmlns="http://www.w3.org/2000/svg"
      width="934.887"
      height="689.171"
      version="1.1"
      viewBox="0 0 247.356 182.343"
    >
      <defs>
        <filter
          id="filter1266"
          width="1"
          height="1"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="0.001"></feGaussianBlur>
        </filter>
        <filter
          id="filter1270"
          width="1"
          height="1"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="0.001"></feGaussianBlur>
        </filter>
        <filter
          id="filter4338"
          width="1"
          height="1"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="0"></feGaussianBlur>
        </filter>
        <filter
          id="filter4342"
          width="1"
          height="1"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="0"></feGaussianBlur>
        </filter>
        <clipPath id="clipPath4358" clipPathUnits="userSpaceOnUse">
          <path
            fill="#ebd7a0"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.42"
            d="M9.772-46.916h257.135V145.19H9.772zm114.69 177.173V150.6h27.754v-20.344z"
            className="powerclip"
            filter="url(#filter4338)"
            opacity="0.997"
          ></path>
        </clipPath>
      </defs>
      <g transform="translate(-14.772 41.916)">
        <path
          fill="#fff"
          stroke="#000"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="0.943"
          d="M14.773-41.915h247.133V140.19H14.773z"
          clipPath="url(#clipPath4358)"
          filter="url(#filter4342)"
          opacity="0.997"
        ></path>
        <path
          fill="#ac9393"
          stroke="#000"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="0.42"
          d="M212.676-41.682v54.968h-.015v12.4h49.256v-12.4h-36.685v-54.968z"
          opacity="0.997"
        ></path>
        <path
          fill="#e6e6e6"
          fillOpacity="1"
          stroke="#000"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="0.475"
          d="M162.272 139.855l12.832-45.046 86.63-39.745.042 85.125z"
        ></path>
        <path
          fill="#ebd7a0"
          className={props.tables['5'].className}
          onClick={() => bookTable(5)}
          fillOpacity="1"
          stroke="#000"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="0.42"
          d="M46.168 45.761h85.962v20.344H46.168z"
          opacity="0.997"
        ></path>
        <path
          fill="#ebd7a0"
          className={props.tables['1'].className}
          onClick={() => bookTable(1)}
          fillOpacity="1"
          stroke="#000"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="0.42"
          d="M30.585-28.322h54.212v20.344H30.585z"
          filter="url(#filter1266)"
          opacity="0.997"
        ></path>
        <path
          fill="#ebd7a0"
          className={props.tables['2'].className}
          onClick={() => bookTable(2)}
          fillOpacity="1"
          stroke="#000"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="0.42"
          d="M98.878-28.322h54.212v20.344H98.878z"
          filter="url(#filter1270)"
          opacity="0.997"
        ></path>
        <g
          aria-label="Table 1 (4 pers)"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "sans-serif",
          }}
          strokeWidth="0.265"
          fontFamily="sans-serif"
          fontSize="5.644"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          textAnchor="middle"
        >
          <path
            d="M49.127-22.676h3.48v.468h-1.46v3.647h-.56v-3.647h-1.46z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M53.592-20.113q-.615 0-.852.14-.237.141-.237.48 0 .27.176.43.18.157.485.157.422 0 .676-.297.256-.3.256-.797v-.113zm1.011-.21v1.762h-.507v-.469q-.174.281-.433.416-.259.133-.634.133-.474 0-.755-.265-.278-.267-.278-.714 0-.52.347-.785.35-.265 1.042-.265h.71v-.05q0-.35-.23-.54-.23-.193-.646-.193-.264 0-.515.064-.25.063-.482.19v-.468q.278-.108.54-.16.262-.055.51-.055.67 0 1 .347.331.347.331 1.053z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M57.863-20.102q0-.56-.231-.876-.229-.32-.631-.32-.403 0-.634.32-.229.317-.229.876 0 .56.229.88.231.316.634.316.402 0 .63-.317.232-.32.232-.879zm-1.725-1.078q.16-.275.403-.407.245-.135.584-.135.562 0 .912.446.353.447.353 1.174 0 .728-.353 1.174-.35.447-.912.447-.34 0-.584-.133-.243-.135-.403-.41v.463h-.51v-4.289h.51z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M59.23-22.85h.508v4.289h-.508z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M63.439-20.231v.248h-2.332q.033.523.315.799.283.273.788.273.292 0 .565-.072.275-.072.545-.215v.48q-.272.115-.559.176-.287.06-.582.06-.738 0-1.17-.43-.43-.43-.43-1.162 0-.758.407-1.202.41-.446 1.105-.446.623 0 .984.402.364.4.364 1.089zm-.507-.15q-.006-.415-.234-.663-.226-.249-.601-.249-.425 0-.681.24-.254.24-.292.676z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M66.234-19.03h.91v-3.139l-.99.198v-.507l.984-.198h.556v3.646h.91v.469h-2.37z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M49.83-15.789q-.368.634-.548 1.254-.179.62-.179 1.257 0 .637.18 1.262.181.623.548 1.254h-.441q-.414-.647-.62-1.273-.204-.625-.204-1.243 0-.614.204-1.237.204-.623.62-1.274z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M52.416-15.135L51.01-12.94h1.406zm-.146-.486h.7v2.682h.587v.463h-.587v.97h-.554v-.97h-1.858v-.537z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M56.69-11.969v1.637h-.51v-4.26h.51v.468q.16-.276.403-.408.245-.135.584-.135.563 0 .913.447.352.446.352 1.174 0 .727-.352 1.174-.35.446-.913.446-.339 0-.584-.132-.242-.135-.402-.41zm1.726-1.077q0-.56-.231-.877-.23-.32-.632-.32t-.634.32q-.228.317-.228.877t.228.879q.232.317.634.317.403 0 .632-.317.231-.32.231-.88z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M62.423-13.176v.248h-2.331q.033.524.314.8.284.272.788.272.292 0 .565-.071.276-.072.546-.215v.48q-.273.115-.56.176-.286.06-.581.06-.739 0-1.171-.43-.43-.43-.43-1.163 0-.758.407-1.201.411-.447 1.106-.447.623 0 .984.402.363.4.363 1.09zm-.507-.149q-.005-.416-.234-.664-.226-.248-.6-.248-.425 0-.682.24-.253.24-.292.675z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M65.044-14.118q-.085-.05-.187-.072-.1-.025-.22-.025-.43 0-.662.281-.229.279-.229.802v1.626h-.51v-3.087h.51v.48q.16-.281.416-.416.257-.138.623-.138.053 0 .116.008.063.006.14.02z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M67.544-14.502v.48q-.215-.11-.446-.165-.232-.055-.48-.055-.377 0-.568.115-.187.116-.187.348 0 .176.135.278.135.1.543.19l.174.039q.54.115.766.328.229.21.229.587 0 .43-.342.68-.34.251-.935.251-.248 0-.518-.05-.267-.046-.565-.143v-.523q.281.146.554.22.273.072.54.072.359 0 .552-.121.193-.124.193-.348 0-.206-.14-.317-.139-.11-.61-.212l-.176-.041q-.472-.1-.681-.303-.21-.207-.21-.565 0-.436.309-.673.309-.237.876-.237.282 0 .53.041.248.042.457.124z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M68.437-15.789h.441q.414.65.617 1.274.207.623.207 1.237 0 .618-.207 1.243-.203.626-.617 1.273h-.44q.366-.63.545-1.254.182-.625.182-1.262t-.182-1.257q-.18-.62-.546-1.254z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
        </g>
        <path
          fill="#ebd7a0"
          className={props.tables['3'].className}
          onClick={() => bookTable(3)}
          fillOpacity="1"
          stroke="#000"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="0.42"
          d="M30.792 3.428h54.212v20.344H30.792z"
          opacity="0.997"
        ></path>
        <path
          fill="#ebd7a0"
          className={props.tables['4'].className}
          onClick={() => bookTable(4)}
          fillOpacity="1"
          stroke="#000"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="0.42"
          d="M99.085 3.428h54.212v20.344H99.085z"
          opacity="0.997"
        ></path>
        <path
          fill="#ebd7a0"
          className={props.tables['6'].className}
          onClick={() => bookTable(6)}
          fillOpacity="1"
          stroke="#000"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="0.42"
          d="M30.792 88.095h27.754v20.344H30.792z"
          opacity="0.997"
        ></path>
        <path
          fill="#ebd7a0"
          className={props.tables['7'].className}
          onClick={() => bookTable(7)}
          fillOpacity="1"
          stroke="#000"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="0.42"
          d="M73.125 88.095h27.754v20.344H73.125z"
          opacity="0.997"
        ></path>
        <path
          fill="#ebd7a0"
          className={props.tables['8'].className}
          onClick={() => bookTable(8)}
          fillOpacity="1"
          stroke="#000"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="0.42"
          d="M115.459 88.095h27.753v20.344H115.46z"
          opacity="0.997"
        ></path>
        <g
          aria-label="Table 2 (4 pers)"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "sans-serif",
          }}
          strokeWidth="0.265"
          fontFamily="sans-serif"
          fontSize="5.644"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          textAnchor="middle"
        >
          <path
            d="M118.173-23.374h3.481v.469h-1.46v3.646h-.56v-3.646h-1.46z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M122.638-20.81q-.615 0-.852.14t-.237.48q0 .27.177.43.179.157.485.157.422 0 .675-.298.256-.3.256-.796v-.113zm1.012-.21v1.761h-.508v-.468q-.173.28-.432.416-.26.132-.634.132-.474 0-.755-.264-.279-.268-.279-.714 0-.521.348-.786.35-.264 1.041-.264h.711v-.05q0-.35-.231-.54-.229-.193-.645-.193-.265 0-.515.063-.251.064-.483.19v-.468q.279-.107.54-.16.262-.055.51-.055.67 0 1 .347.332.348.332 1.053z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M126.91-20.8q0-.559-.231-.876-.23-.32-.632-.32t-.634.32q-.228.317-.228.877t.228.879q.232.317.634.317.403 0 .632-.317.231-.32.231-.88zm-1.725-1.077q.16-.276.402-.408.245-.135.584-.135.563 0 .913.447.352.446.352 1.174 0 .727-.352 1.174-.35.446-.913.446-.339 0-.584-.132-.242-.135-.402-.41v.462h-.51v-4.288h.51z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M128.277-23.547h.507v4.288h-.507z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M132.486-20.929v.248h-2.332q.033.524.314.8.284.272.788.272.292 0 .565-.071.276-.072.546-.215v.48q-.273.115-.56.176-.286.06-.581.06-.739 0-1.171-.43-.43-.43-.43-1.163 0-.758.408-1.201.41-.447 1.105-.447.623 0 .984.402.364.4.364 1.09zm-.508-.149q-.006-.416-.234-.664-.226-.248-.6-.248-.425 0-.681.24-.254.24-.293.675z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M135.663-19.727h1.943v.468h-2.612v-.468q.317-.328.862-.88.549-.553.69-.713.267-.3.371-.507.108-.21.108-.411 0-.328-.232-.535-.228-.206-.598-.206-.262 0-.554.09-.29.091-.62.276v-.562q.336-.135.629-.204.292-.069.534-.069.64 0 1.02.32t.38.854q0 .254-.096.482-.094.226-.345.535-.069.08-.438.463l-1.042 1.067z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M118.877-16.486q-.369.634-.548 1.254-.18.62-.18 1.257 0 .636.18 1.262.182.623.548 1.254h-.44q-.414-.648-.62-1.273-.205-.626-.205-1.243 0-.615.204-1.238t.62-1.273z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M121.463-15.833l-1.406 2.197h1.406zm-.146-.485h.7v2.682h.587v.463h-.587v.97h-.554v-.97h-1.858v-.538z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M125.737-12.666v1.637h-.51v-4.261h.51v.469q.16-.276.403-.408.245-.135.584-.135.562 0 .912.446.353.447.353 1.174 0 .728-.353 1.174-.35.447-.912.447-.339 0-.584-.133-.243-.135-.403-.41zm1.726-1.078q0-.56-.232-.876-.229-.32-.631-.32t-.634.32q-.229.317-.229.876 0 .56.23.88.23.316.633.316.402 0 .631-.317.232-.32.232-.879z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M131.47-13.873v.248h-2.332q.033.523.314.799.284.273.789.273.292 0 .565-.072.275-.071.545-.215v.48q-.272.116-.56.176-.286.06-.58.06-.74 0-1.172-.43-.43-.43-.43-1.162 0-.758.408-1.202.41-.446 1.105-.446.623 0 .984.402.364.4.364 1.089zm-.507-.15q-.006-.415-.234-.663-.226-.248-.601-.248-.425 0-.681.24-.254.24-.292.675z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M134.091-14.816q-.085-.05-.187-.072-.1-.024-.22-.024-.43 0-.662.28-.23.28-.23.803v1.626h-.509v-3.087h.51v.48q.16-.282.416-.417.256-.137.623-.137.052 0 .116.008.063.005.14.02z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M136.59-15.199v.48q-.214-.11-.446-.166-.231-.055-.48-.055-.377 0-.567.116-.187.116-.187.347 0 .176.135.278.135.1.543.19l.173.04q.54.115.766.327.23.21.23.587 0 .43-.343.681-.339.25-.934.25-.248 0-.518-.049-.267-.047-.565-.143v-.524q.281.146.554.22.273.072.54.072.358 0 .551-.12.193-.125.193-.348 0-.207-.14-.317-.138-.11-.61-.212l-.176-.042q-.471-.099-.68-.303-.21-.207-.21-.565 0-.435.309-.672.308-.237.876-.237.281 0 .53.041.247.041.457.124z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M137.484-16.486h.44q.414.65.618 1.273.207.623.207 1.238 0 .617-.207 1.243-.204.625-.617 1.273h-.441q.366-.631.545-1.254.182-.626.182-1.262 0-.637-.182-1.257-.179-.62-.545-1.254z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
        </g>
        <g
          aria-label="Table 3 (4 pers)"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "sans-serif",
          }}
          strokeWidth="0.265"
          fontFamily="sans-serif"
          fontSize="5.644"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          textAnchor="middle"
        >
          <path
            d="M46.965 8.836h3.48v.468h-1.46v3.647h-.56V9.304h-1.46z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M51.43 11.399q-.615 0-.852.14-.237.141-.237.48 0 .27.176.43.18.157.485.157.422 0 .676-.298.256-.3.256-.796v-.113zm1.011-.21v1.762h-.507v-.469q-.174.281-.433.416-.259.132-.634.132-.474 0-.755-.264-.278-.267-.278-.714 0-.52.347-.785.35-.265 1.042-.265h.71v-.05q0-.35-.23-.54-.23-.193-.646-.193-.264 0-.515.064-.25.063-.482.19v-.469q.278-.107.54-.16.262-.055.51-.055.67 0 1 .348.331.347.331 1.052z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M55.701 11.41q0-.56-.231-.877-.229-.32-.631-.32-.403 0-.634.32-.229.317-.229.877t.229.879q.231.317.634.317.402 0 .631-.317.231-.32.231-.88zm-1.725-1.078q.16-.275.403-.408.245-.135.584-.135.562 0 .912.447.353.446.353 1.174 0 .727-.353 1.174-.35.446-.912.446-.34 0-.584-.132-.243-.135-.403-.41v.463h-.51V8.662h.51z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M57.068 8.662h.508v4.289h-.508z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M61.277 11.28v.248h-2.332q.033.524.315.8.283.272.788.272.292 0 .565-.071.275-.072.546-.215v.48q-.273.115-.56.176-.287.06-.582.06-.738 0-1.17-.43-.43-.43-.43-1.163 0-.758.407-1.201.41-.447 1.105-.447.623 0 .984.403.364.4.364 1.088zm-.507-.149q-.006-.416-.234-.664-.226-.248-.601-.248-.425 0-.68.24-.254.24-.293.675z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M65.662 10.732q.4.085.623.355.226.27.226.667 0 .61-.42.943-.418.333-1.19.333-.259 0-.534-.052-.273-.05-.565-.152v-.537q.231.135.507.204.275.069.576.069.523 0 .796-.207.276-.207.276-.6 0-.364-.256-.568-.254-.207-.709-.207h-.48v-.458h.502q.41 0 .629-.162.217-.166.217-.474 0-.317-.226-.485-.223-.171-.642-.171-.229 0-.49.05-.262.049-.576.154v-.496q.317-.089.592-.133.279-.044.524-.044.634 0 1.003.29.37.286.37.777 0 .342-.196.579-.196.234-.557.325z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M48.566 15.723q-.37.634-.548 1.254-.18.62-.18 1.257 0 .637.18 1.262.181.623.548 1.254h-.441q-.413-.647-.62-1.273-.204-.626-.204-1.243 0-.615.204-1.238.204-.622.62-1.273z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M51.151 16.376l-1.405 2.197h1.405zm-.146-.485h.7v2.682h.587v.463h-.587v.97h-.554v-.97h-1.857v-.538z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M55.426 19.543v1.637h-.51v-4.26h.51v.468q.16-.276.402-.408.246-.135.585-.135.562 0 .912.446.353.447.353 1.174 0 .728-.353 1.174-.35.447-.912.447-.34 0-.585-.132-.242-.135-.402-.411zm1.725-1.078q0-.56-.231-.876-.23-.32-.631-.32-.403 0-.634.32-.23.317-.23.876 0 .56.23.88.231.317.634.317.402 0 .63-.317.232-.32.232-.88z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M61.159 18.336v.248h-2.332q.033.524.314.8.284.272.788.272.292 0 .565-.072.276-.071.546-.215v.48q-.273.116-.56.176-.286.061-.581.061-.739 0-1.171-.43-.43-.43-.43-1.163 0-.758.408-1.202.41-.446 1.105-.446.623 0 .984.402.364.4.364 1.089zm-.508-.149q-.005-.416-.234-.664-.226-.248-.6-.248-.425 0-.681.24-.254.24-.293.675z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M63.78 17.393q-.086-.05-.188-.071-.1-.025-.22-.025-.43 0-.662.28-.229.28-.229.803v1.626h-.51v-3.087h.51v.48q.16-.281.417-.416.256-.138.622-.138.053 0 .116.008.064.006.14.02z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M66.28 17.01v.48q-.216-.11-.447-.166-.232-.055-.48-.055-.377 0-.567.116-.188.116-.188.347 0 .177.135.279.135.099.543.19l.174.038q.54.116.766.328.229.21.229.587 0 .43-.342.681-.34.251-.934.251-.248 0-.519-.05-.267-.046-.565-.143v-.524q.282.146.554.22.273.073.54.073.359 0 .552-.122.193-.124.193-.347 0-.207-.14-.317-.139-.11-.61-.212l-.176-.041q-.472-.1-.681-.304-.21-.206-.21-.565 0-.435.31-.672.308-.237.876-.237.28 0 .529.041.248.042.457.124z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M67.172 15.723h.441q.414.65.618 1.273.206.623.206 1.238 0 .617-.206 1.243-.204.626-.618 1.273h-.44q.366-.63.545-1.254.182-.625.182-1.262t-.182-1.257q-.18-.62-.546-1.254z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
        </g>
        <g
          aria-label="Table 4 (4 pers)"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "sans-serif",
          }}
          strokeWidth="0.265"
          fontFamily="sans-serif"
          fontSize="5.644"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          textAnchor="middle"
        >
          <path
            d="M116.908 8.138h3.481v.469h-1.46v3.646h-.56V8.607h-1.46z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M121.373 10.701q-.614 0-.851.14-.237.141-.237.48 0 .27.176.43.18.158.485.158.422 0 .675-.298.257-.3.257-.797v-.113zm1.012-.21v1.762h-.507v-.468q-.174.28-.433.416-.26.132-.634.132-.474 0-.755-.265-.279-.267-.279-.713 0-.521.348-.786.35-.264 1.042-.264h.71v-.05q0-.35-.23-.54-.23-.193-.646-.193-.264 0-.515.063-.251.064-.483.19v-.468q.279-.108.54-.16.262-.055.51-.055.67 0 1.001.347.33.347.33 1.053z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M125.645 10.712q0-.56-.231-.876-.23-.32-.632-.32t-.633.32q-.23.317-.23.876 0 .56.23.88.231.317.634.317.402 0 .63-.317.232-.32.232-.88zm-1.725-1.077q.16-.276.402-.408.246-.135.585-.135.562 0 .912.446.353.447.353 1.174 0 .728-.353 1.174-.35.447-.912.447-.34 0-.585-.132-.242-.135-.402-.411v.463h-.51V7.965h.51z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M127.012 7.965h.507v4.288h-.507z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M131.22 10.583v.248h-2.331q.033.524.314.8.284.272.788.272.293 0 .565-.072.276-.071.546-.215v.48q-.273.116-.56.176-.286.061-.58.061-.74 0-1.172-.43-.43-.43-.43-1.163 0-.758.408-1.202.41-.446 1.105-.446.623 0 .984.402.364.4.364 1.089zm-.506-.149q-.006-.416-.235-.664-.226-.248-.6-.248-.425 0-.681.24-.254.24-.292.675z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M135.449 8.623l-1.406 2.197h1.406zm-.147-.485h.7v2.682h.588v.463h-.588v.97h-.553v-.97h-1.858v-.538z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M117.613 15.026q-.37.634-.549 1.254-.179.62-.179 1.256 0 .637.18 1.263.181.623.548 1.254h-.441q-.414-.648-.62-1.274-.204-.625-.204-1.243 0-.614.203-1.237.204-.623.62-1.273z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M120.198 15.679l-1.406 2.196h1.406zm-.146-.485h.7v2.681h.587v.463h-.587v.97h-.554v-.97h-1.858v-.537z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M124.472 18.846v1.637h-.51v-4.261h.51v.468q.16-.275.403-.408.245-.135.584-.135.562 0 .912.447.353.446.353 1.174t-.353 1.174q-.35.447-.912.447-.339 0-.584-.133-.243-.135-.403-.41zm1.726-1.078q0-.56-.232-.876-.229-.32-.63-.32-.403 0-.635.32-.229.316-.229.876t.23.88q.23.316.633.316.402 0 .631-.317.232-.32.232-.879z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M130.205 17.638v.248h-2.332q.034.524.315.8.284.273.788.273.292 0 .565-.072.275-.072.546-.215v.48q-.273.115-.56.176-.287.06-.581.06-.74 0-1.172-.43-.43-.43-.43-1.162 0-.758.408-1.202.41-.447 1.105-.447.623 0 .984.403.364.4.364 1.088zm-.507-.148q-.006-.417-.234-.665-.226-.248-.601-.248-.425 0-.68.24-.254.24-.293.675z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M132.826 16.696q-.085-.05-.187-.072-.1-.025-.22-.025-.43 0-.662.282-.229.278-.229.802v1.626h-.51v-3.087h.51v.48q.16-.282.416-.417.256-.138.623-.138.052 0 .116.009.063.005.14.019z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M135.326 16.313v.48q-.215-.11-.447-.166-.231-.055-.48-.055-.377 0-.567.116-.187.115-.187.347 0 .176.135.278.135.1.543.19l.173.039q.54.116.766.328.23.21.23.587 0 .43-.343.68-.339.252-.934.252-.248 0-.518-.05-.267-.047-.565-.143v-.524q.281.146.554.22.273.072.54.072.358 0 .551-.121.193-.124.193-.347 0-.207-.14-.317-.138-.11-.61-.213l-.176-.04q-.471-.1-.68-.304-.21-.207-.21-.565 0-.436.309-.673.308-.237.876-.237.281 0 .53.042.247.041.457.124z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M136.219 15.026h.44q.414.65.618 1.273.207.623.207 1.237 0 .618-.207 1.243-.204.626-.617 1.274h-.441q.366-.631.546-1.254.181-.626.181-1.263 0-.636-.181-1.256-.18-.62-.546-1.254z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
        </g>
        <g
          aria-label="Table 5 (6 pers)"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "sans-serif",
          }}
          strokeWidth="0.265"
          fontFamily="sans-serif"
          fontSize="5.644"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          textAnchor="middle"
        >
          <path
            d="M80.582 51.286h3.481v.469h-1.46V55.4h-.56v-3.646h-1.46z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M85.047 53.85q-.614 0-.851.14-.238.14-.238.48 0 .27.177.43.179.157.485.157.422 0 .675-.298.257-.3.257-.797v-.113zm1.012-.21v1.761h-.507v-.468q-.174.28-.433.416-.26.132-.634.132-.474 0-.755-.265-.279-.267-.279-.713 0-.521.348-.786.35-.264 1.041-.264h.712v-.05q0-.35-.232-.54-.229-.193-.645-.193-.265 0-.515.063-.251.064-.483.19v-.468q.279-.108.54-.16.262-.055.51-.055.67 0 1 .347.332.347.332 1.053z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M89.32 53.86q0-.559-.232-.876-.23-.32-.632-.32t-.633.32q-.23.317-.23.876 0 .56.23.88.231.317.633.317.403 0 .632-.317.231-.32.231-.88zm-1.726-1.077q.16-.276.402-.408.245-.135.584-.135.563 0 .913.446.352.447.352 1.174 0 .728-.352 1.175-.35.446-.913.446-.339 0-.584-.132-.242-.135-.402-.41v.462h-.51v-4.288h.51z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M90.686 51.113h.507V55.4h-.507z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M94.895 53.731v.248h-2.332q.033.524.314.8.284.272.788.272.293 0 .565-.072.276-.071.546-.215v.48q-.273.116-.56.176-.286.061-.58.061-.74 0-1.172-.43-.43-.43-.43-1.163 0-.758.408-1.202.41-.446 1.105-.446.623 0 .984.402.364.4.364 1.089zm-.508-.149q-.005-.416-.234-.664-.226-.248-.6-.248-.425 0-.681.24-.254.24-.293.675z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M97.598 51.286h2.186v.469h-1.676v1.009q.121-.042.243-.061.121-.022.242-.022.69 0 1.092.377.402.378.402 1.023 0 .664-.413 1.034-.414.366-1.166.366-.26 0-.53-.044-.267-.044-.553-.132v-.56q.248.135.512.201.265.067.56.067.477 0 .755-.251t.278-.681q0-.43-.278-.68-.278-.252-.755-.252-.223 0-.447.05-.22.05-.452.154z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M82.184 58.174q-.37.634-.549 1.254-.179.62-.179 1.257 0 .636.18 1.262.181.623.548 1.254h-.441q-.414-.648-.62-1.273-.204-.626-.204-1.243 0-.615.203-1.238.204-.623.62-1.273z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M84.499 60.177q-.375 0-.596.257-.217.256-.217.703 0 .443.217.702.22.257.596.257.375 0 .592-.257.22-.259.22-.702 0-.447-.22-.703-.217-.257-.592-.257zm1.105-1.744v.507q-.21-.1-.425-.152-.212-.052-.421-.052-.551 0-.844.372-.289.372-.33 1.125.162-.24.408-.367.245-.13.54-.13.62 0 .978.378.361.375.361 1.023 0 .633-.375 1.017-.374.383-.997.383-.714 0-1.092-.546-.377-.549-.377-1.588 0-.975.463-1.554.463-.582 1.243-.582.21 0 .421.042.215.041.447.124z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M89.043 61.994v1.637h-.51V59.37h.51v.468q.16-.275.403-.407.245-.136.584-.136.562 0 .912.447.353.446.353 1.174t-.353 1.174q-.35.447-.912.447-.339 0-.584-.133-.243-.135-.403-.41zm1.726-1.078q0-.56-.232-.876-.229-.32-.63-.32-.403 0-.635.32-.229.317-.229.876 0 .56.23.88.23.316.633.316.402 0 .631-.317.232-.32.232-.879z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M94.776 60.787v.248h-2.332q.034.523.315.799.284.273.788.273.292 0 .565-.072.275-.072.546-.215v.48q-.273.115-.56.176-.287.06-.581.06-.74 0-1.172-.43-.43-.43-.43-1.162 0-.758.408-1.202.41-.447 1.105-.447.623 0 .984.403.364.4.364 1.089zm-.507-.15q-.006-.415-.234-.664-.226-.248-.601-.248-.425 0-.68.24-.254.24-.293.675z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M97.397 59.844q-.085-.05-.187-.072-.1-.025-.22-.025-.43 0-.662.282-.229.278-.229.802v1.626h-.51V59.37h.51v.48q.16-.282.416-.417.256-.138.623-.138.052 0 .116.009.063.005.14.02z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M99.897 59.46v.48q-.215-.11-.447-.165-.231-.055-.48-.055-.377 0-.567.116-.187.115-.187.347 0 .176.135.278.135.1.543.19l.173.039q.54.116.766.328.23.21.23.587 0 .43-.343.68-.339.252-.934.252-.248 0-.518-.05-.267-.047-.565-.143v-.524q.281.146.554.22.273.072.54.072.358 0 .551-.121.193-.124.193-.347 0-.207-.14-.317-.138-.11-.61-.213l-.176-.04q-.471-.1-.68-.304-.21-.207-.21-.565 0-.435.309-.673.308-.237.876-.237.281 0 .53.042.247.041.457.124z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M100.79 58.174h.44q.414.65.618 1.273.207.623.207 1.238 0 .617-.207 1.243-.204.625-.617 1.273h-.441q.366-.631.546-1.254.181-.626.181-1.262 0-.637-.181-1.257-.18-.62-.546-1.254z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
        </g>
        <g
          aria-label="Table 6 (2 pers)"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "sans-serif",
          }}
          strokeWidth="0.265"
          fontFamily="sans-serif"
          fontSize="5.644"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          textAnchor="middle"
        >
          <path
            d="M34.15 92.088h3.482v.468H36.17v3.647h-.56v-3.647h-1.46z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M38.615 94.65q-.614 0-.851.142-.237.14-.237.48 0 .27.176.429.18.157.485.157.422 0 .676-.298.256-.3.256-.796v-.113zm1.012-.209v1.762h-.507v-.469q-.174.281-.433.416-.259.133-.634.133-.474 0-.755-.265-.278-.267-.278-.714 0-.52.347-.785.35-.265 1.042-.265h.71v-.05q0-.35-.23-.54-.23-.193-.646-.193-.264 0-.515.064-.25.063-.482.19v-.469q.278-.107.54-.16.262-.055.51-.055.67 0 1 .348.33.347.33 1.052z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M42.887 94.662q0-.56-.231-.876-.229-.32-.631-.32-.403 0-.634.32-.229.316-.229.876t.229.88q.231.316.634.316.402 0 .63-.317.232-.32.232-.879zm-1.725-1.078q.16-.275.402-.408.246-.135.585-.135.562 0 .912.447.353.446.353 1.174t-.353 1.174q-.35.447-.912.447-.34 0-.585-.133-.242-.135-.402-.41v.463h-.51v-4.289h.51z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M44.254 91.914h.508v4.289h-.508z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M48.463 94.532v.248H46.13q.033.524.314.8.284.273.789.273.292 0 .565-.072.275-.072.545-.215v.48q-.272.115-.56.176-.286.06-.58.06-.74 0-1.172-.43-.43-.43-.43-1.162 0-.758.408-1.202.41-.447 1.105-.447.623 0 .984.403.364.4.364 1.088zm-.507-.148q-.006-.417-.234-.665-.226-.248-.601-.248-.425 0-.681.24-.254.24-.292.675z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M52.42 93.923q-.374 0-.595.257-.217.256-.217.702 0 .444.217.703.22.257.596.257.374 0 .592-.257.22-.259.22-.703 0-.446-.22-.702-.218-.257-.592-.257zm1.106-1.744v.507q-.21-.1-.425-.152-.212-.052-.421-.052-.552 0-.844.372-.289.372-.33 1.124.162-.24.408-.366.245-.13.54-.13.62 0 .978.378.361.375.361 1.022 0 .634-.375 1.017-.374.384-.997.384-.714 0-1.092-.546-.377-.549-.377-1.588 0-.975.463-1.554.463-.582 1.243-.582.21 0 .421.042.215.041.447.124z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M35.752 98.975q-.37.634-.549 1.254-.179.62-.179 1.257 0 .637.18 1.262.181.623.548 1.254h-.441q-.413-.647-.62-1.273-.204-.626-.204-1.243 0-.615.204-1.237.204-.623.62-1.274z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M37.287 102.79h1.943v.468h-2.613v-.468q.317-.328.863-.88.548-.554.689-.713.267-.3.372-.507.108-.21.108-.411 0-.328-.232-.535-.229-.207-.598-.207-.262 0-.554.091-.29.091-.62.276v-.562q.336-.135.628-.204.292-.07.535-.07.64 0 1.02.32t.38.855q0 .254-.096.482-.094.226-.345.535-.069.08-.438.463l-1.042 1.067z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M42.612 102.795v1.637h-.51v-4.26h.51v.468q.16-.276.402-.408.245-.135.584-.135.563 0 .913.446.352.447.352 1.175 0 .727-.352 1.174-.35.446-.913.446-.339 0-.584-.132-.242-.135-.402-.41zm1.725-1.077q0-.56-.231-.877-.23-.32-.632-.32t-.633.32q-.23.317-.23.877 0 .559.23.879.231.317.633.317.403 0 .632-.317.231-.32.231-.88z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M48.344 101.588v.248h-2.331q.033.524.314.8.284.272.788.272.292 0 .565-.072.276-.071.546-.215v.48q-.273.116-.56.176-.286.061-.581.061-.739 0-1.171-.43-.43-.43-.43-1.163 0-.758.407-1.202.411-.446 1.106-.446.623 0 .984.402.363.4.363 1.089zm-.507-.149q-.005-.416-.234-.664-.226-.248-.6-.248-.425 0-.682.24-.253.24-.292.675z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M50.965 100.645q-.085-.05-.187-.071-.1-.025-.22-.025-.43 0-.662.281-.229.278-.229.802v1.626h-.51v-3.087h.51v.48q.16-.281.416-.416.257-.138.623-.138.053 0 .116.008.063.006.14.02z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M53.465 100.262v.48q-.215-.11-.446-.165-.232-.056-.48-.056-.377 0-.568.116-.187.116-.187.347 0 .177.135.279.135.099.543.19l.174.039q.54.115.766.328.229.209.229.587 0 .43-.342.68-.34.251-.935.251-.248 0-.518-.05-.267-.046-.565-.143v-.523q.281.146.554.22.273.072.54.072.359 0 .552-.122.193-.124.193-.347 0-.206-.14-.317-.139-.11-.61-.212l-.176-.041q-.472-.1-.681-.303-.21-.207-.21-.565 0-.436.31-.673.308-.237.876-.237.28 0 .529.041.248.042.457.124z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M54.358 98.975h.441q.414.65.617 1.274.207.622.207 1.237 0 .617-.207 1.243-.203.626-.617 1.273h-.44q.366-.63.545-1.254.182-.625.182-1.262t-.182-1.257q-.18-.62-.546-1.254z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
        </g>
        <g
          aria-label="Table 7 (2 pers)"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "sans-serif",
          }}
          strokeWidth="0.265"
          fontFamily="sans-serif"
          fontSize="5.644"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          textAnchor="middle"
        >

        </g>
        <g
          aria-label="Table 8 (2 pers)"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "sans-serif",
          }}
          strokeWidth="0.265"
          fontFamily="sans-serif"
          fontSize="5.644"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          textAnchor="middle"
        >
          <path
            d="M120.054 92.673h3.481v.468h-1.46v3.646h-.56v-3.646h-1.46z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M124.519 95.236q-.615 0-.852.14t-.237.48q0 .27.177.43.179.157.485.157.421 0 .675-.298.256-.3.256-.796v-.113zm1.011-.21v1.761h-.507v-.468q-.173.281-.432.416-.26.132-.634.132-.474 0-.755-.264-.279-.267-.279-.714 0-.52.347-.785.35-.265 1.042-.265h.711v-.05q0-.35-.231-.54-.229-.193-.645-.193-.265 0-.516.064-.25.063-.482.19v-.469q.279-.107.54-.16.262-.055.51-.055.67 0 1 .348.331.347.331 1.052z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M128.79 95.247q0-.56-.23-.877-.23-.32-.632-.32t-.634.32q-.228.317-.228.877t.228.879q.232.317.634.317.403 0 .631-.317.232-.32.232-.88zm-1.724-1.078q.16-.275.402-.408.245-.135.584-.135.562 0 .912.447.353.446.353 1.174 0 .727-.353 1.174-.35.446-.912.446-.339 0-.584-.132-.243-.135-.402-.41v.462h-.51V92.5h.51z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M130.158 92.499h.507v4.288h-.507z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M134.366 95.117v.248h-2.331q.033.524.314.8.284.272.788.272.292 0 .565-.071.276-.072.546-.215v.48q-.273.115-.56.176-.286.06-.581.06-.739 0-1.171-.43-.43-.43-.43-1.163 0-.758.407-1.201.411-.447 1.106-.447.623 0 .984.403.363.4.363 1.088zm-.507-.149q-.006-.416-.234-.664-.226-.248-.6-.248-.425 0-.682.24-.253.24-.292.675z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M138.255 94.833q-.397 0-.625.213-.226.212-.226.584t.226.584q.228.212.625.212t.626-.212q.229-.215.229-.584 0-.372-.23-.584-.225-.213-.625-.213zm-.557-.237q-.358-.088-.559-.333-.198-.245-.198-.598 0-.493.35-.78.352-.287.964-.287.615 0 .965.287t.35.78q0 .353-.201.598-.199.245-.554.333.402.094.625.367.226.273.226.667 0 .598-.366.918-.364.32-1.045.32-.68 0-1.047-.32-.364-.32-.364-.918 0-.394.226-.667t.628-.367zm-.203-.879q0 .32.198.5.201.178.562.178.358 0 .56-.179.204-.18.204-.499 0-.32-.204-.499-.202-.179-.56-.179-.36 0-.562.18-.198.179-.198.498z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M121.655 99.56q-.369.634-.548 1.254-.18.62-.18 1.257 0 .637.18 1.262.182.623.548 1.254h-.44q-.414-.647-.62-1.273-.205-.626-.205-1.243 0-.615.204-1.238.204-.622.62-1.273z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M123.19 103.375h1.944v.468h-2.613v-.468q.317-.328.862-.88.549-.554.69-.713.267-.3.372-.508.107-.21.107-.41 0-.328-.232-.535-.228-.207-.598-.207-.261 0-.554.091-.289.091-.62.276v-.562q.337-.135.629-.204.292-.07.534-.07.64 0 1.02.32t.38.855q0 .254-.096.482-.094.226-.345.535-.068.08-.438.463l-1.042 1.067z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M128.515 103.38v1.637h-.51v-4.26h.51v.468q.16-.276.403-.408.245-.135.584-.135.562 0 .912.446.353.447.353 1.174 0 .728-.353 1.174-.35.447-.912.447-.34 0-.584-.132-.243-.135-.403-.411zm1.726-1.078q0-.56-.232-.876-.229-.32-.631-.32t-.634.32q-.229.317-.229.876 0 .56.229.88.232.317.634.317t.631-.317q.232-.32.232-.88z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M134.248 102.173v.248h-2.332q.033.524.314.8.284.272.789.272.292 0 .565-.072.275-.071.545-.215v.48q-.272.116-.56.176-.286.06-.58.06-.74 0-1.172-.429-.43-.43-.43-1.163 0-.758.408-1.202.41-.446 1.105-.446.623 0 .984.402.364.4.364 1.089zm-.507-.149q-.006-.416-.235-.664-.226-.248-.6-.248-.425 0-.681.24-.254.24-.292.675z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M136.869 101.23q-.086-.05-.188-.071-.099-.025-.22-.025-.43 0-.661.28-.23.28-.23.803v1.626h-.51v-3.087h.51v.48q.16-.281.417-.416.256-.138.623-.138.052 0 .116.008.063.006.14.02z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M139.369 100.847v.48q-.215-.11-.447-.166-.231-.055-.48-.055-.377 0-.567.116-.188.116-.188.347 0 .177.136.279.135.099.542.19l.174.038q.54.116.766.328.229.21.229.587 0 .43-.342.681-.339.251-.934.251-.248 0-.518-.05-.268-.047-.565-.143v-.524q.28.146.554.22.273.073.54.073.358 0 .551-.122.193-.124.193-.347 0-.207-.14-.317-.138-.11-.61-.212l-.176-.041q-.471-.1-.68-.304-.21-.206-.21-.565 0-.435.309-.672.308-.237.876-.237.281 0 .53.041.247.042.457.124z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M140.262 99.56h.44q.414.65.618 1.273.207.623.207 1.238 0 .617-.207 1.243-.204.626-.617 1.273h-.441q.366-.63.545-1.254.182-.625.182-1.262t-.182-1.257q-.179-.62-.545-1.254z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
        </g>
        <g
          aria-label="BAR"
          style={{ lineHeight: "1.25" }}
          strokeWidth="0.265"
          fontFamily="sans-serif"
          fontSize="8.467"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
        >
          <path
            d="M232.413 19.564v2.261h1.34q.673 0 .995-.277.327-.28.327-.855 0-.58-.327-.852-.322-.277-.996-.277zm0-2.538v1.86h1.236q.612 0 .91-.227.301-.232.301-.703 0-.467-.302-.699-.297-.231-.91-.231zm-.835-.687h2.133q.955 0 1.472.397.516.397.516 1.129 0 .566-.264.901-.265.335-.777.418.615.132.954.554.344.417.344 1.045 0 .827-.563 1.278-.562.45-1.6.45h-2.215z"
            style={{ InkscapeFontSpecification: "sans-serif" }}
          ></path>
          <path
            d="M239.449 17.162l-1.133 3.072h2.27zm-.471-.823h.946l2.353 6.173h-.868l-.563-1.584h-2.782l-.562 1.584h-.88z"
            style={{ InkscapeFontSpecification: "sans-serif" }}
          ></path>
          <path
            d="M246.105 19.618q.269.09.52.388.257.298.513.819l.848 1.687h-.897l-.79-1.584q-.306-.62-.595-.823-.285-.202-.781-.202h-.91v2.609h-.835v-6.173h1.885q1.058 0 1.58.443.52.442.52 1.335 0 .583-.273.967-.268.385-.785.534zm-2.092-2.592v2.19h1.05q.604 0 .91-.276.31-.281.31-.823 0-.542-.31-.814-.306-.277-.91-.277z"
            style={{ InkscapeFontSpecification: "sans-serif" }}
          ></path>
        </g>
        <g transform="matrix(.56913 0 0 .62431 192.261 94.477)">
          <path
            fill="#1a1a1a"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.265"
            d="M66.768 17.688c-1.063-.074-1.504 1.246-.896 4.918a10.41 10.276 0 00-3.05 7.258 10.41 10.276 0 001.205 4.785c-4.865-3.89-12.478-6.339-19.493-6.305-9.847.048-18.512 4.986-16.738 17.69 1.183 8.465 9.355 11.97 18.123 11.931l-.35.096c7.37.553 22.819.892 24.857-.534 1.685-1.18 1.892-2.341 1.168-3.242a4.332 2.589 0 00.834-1.163l.271.009a4.332 2.589 0 004.275 2.173 4.332 2.589 0 004.332-2.588 4.332 2.589 0 00-.948-1.616c.23-.203.441-.42.625-.656 1.96-2.515-.071-8.758-1.668-12.257a10.41 10.276 0 004.326-8.323 10.41 10.276 0 00-3.05-7.258c1.094-6.597-1.208-5.585-4.397-2.588a10.41 10.276 0 00-2.962-.43 10.41 10.276 0 00-2.96.432c-1.415-1.33-2.657-2.273-3.504-2.332zm-2.935 34.887a4.332 2.589 0 00-.012.14 4.332 2.589 0 00.11.564l-1.4.186c.452-.284.886-.582 1.302-.89z"
          ></path>
          <g strokeOpacity="1" transform="translate(-7.265 .206)">
            <path
              fill="#f2f2f2"
              fillOpacity="1"
              stroke="#f2f2f2"
              strokeDasharray="none"
              strokeDashoffset="0"
              strokeMiterlimit="4"
              strokeWidth="0.276"
              d="M81.111 52.615c-.255 1.32-1.882 2.434-4.204 2.434s-4.633-1.16-4.204-2.434c.406-1.208 1.767-1.569 4.003-1.698 2.377-.138 4.829-.494 4.405 1.698z"
            ></path>
            <path
              fill="none"
              stroke="#000"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeWidth="0.265"
              d="M75.437 55.088c2.153-1.04.498-1.948.334-2.907"
            ></path>
            <path
              fill="none"
              stroke="#000"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeWidth="0.265"
              d="M78.71 55.054c1.595-.999.258-1.978.268-2.672"
            ></path>
          </g>
          <path
            fill="#1f1f1f"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.265"
            d="M37.379 49.096l.021-.035zm-2.256 6.58c-.092.12.212.139.184.064.044-.004.224-.035.152.047.048.095.198.062.248.156a.34.34 0 00.254-.02c.043.068.269-.063.191.108.139.269.473.11.685.233.327.145.632.358.993.414.401.052.755.261 1.145.356.549.153 1.087.342 1.632.505.601.094 1.186.275 1.792.336.585.076 1.17.17 1.761.19.271.009.533.103.805.08.399-.028.795-.09 1.195-.077.562.01 1.124.055 1.685.006.714-.033 1.427.037 2.141.046 2.074.05 4.148.12 6.221.168 2.548.06 5.097.093 7.646.08 1.418-.014 2.849-.007 4.245-.288.813-.163 1.625-.416 2.324-.873a3.023 3.023 0 001.287-1.682 1.432 1.432 0 00-.053-.966c-.158-.403-.48-.714-.833-.952a13.852 13.852 0 00-1.13-.741 4.003 4.003 0 00-1.397-.454 34.798 34.798 0 00-1.682-.248c-.562-.037-1.126-.024-1.688-.066-.294.033-.584-.062-.879-.046-4.387-.276-8.775-.536-13.163-.815a66.612 66.612 0 01-4.775-.474c-1.474-.196-2.946-.41-4.412-.661-1.433-.268-2.876-.712-4.297-1.041.006.66-.649-.477-.277.01m1.607.288c-.001.052.038-.042 0 0zm1.598.21c.042.019.086-.037 0 0zm-.219.005c-.016.051.043-.027 0 0zm.239.147c.136-.005-.155-.02-.002 0zm-.184.02c.058.008.058-.07 0 0zm.486.173c.046.084-.03.047-.007-.012zm1.092.186c.061-.009.038-.104 0 0zm2.598.187c.003.043.031-.029 0 0zm-.113.254c.087.062-.057.013 0 0zm.966.012c-.072.056.09-.03 0 0zm.473.049l.004-.034zm-.578-.008l.008-.014zm.064.146c-.022.028-.126-.044 0 0zm2.778.131c-.125.07.064.008 0 0zm-.104.072c-.072.056.09-.03 0 0zm18.457.881c.099.066-.123-.118-.005-.005zm-2.158.09c.056-.012.008-.075 0 0zm2.174.13c.057.064-.032-.076 0 0zm.27.142c.09.055-.089-.011 0 0zm-31.247 3.59c-.045.14.13-.028 0 0zm-.224.025l-.04-.01zm.125.037c.024.08.092-.106 0 0zm1.355.472l-.033-.029zm.711.235h-.008zm4.74 1.318c.035.147.09-.112 0 0zm7.373.018c.054.083-.12-.13-.01-.01zm-1.42.013c-.087.126.087-.15 0 0zm1.204.028c-.062.108.08-.169 0 0zm-3.077.002c.006.082-.076-.14 0 0zm.205.05c-.034.113.015-.167 0-.006zm2.256-.019c.08.072-.017.037-.013 0zm1.067.024c.097.055-.032.033-.008-.002zm-3.248.007c.04.121-.043-.022 0 0zm2.855.018c.088.134-.064-.039 0 0zm.97.035c-.01.079-.041-.112 0 0zm-1.21-.023c.071.051-.071-.01 0 0zm-3.174 0c.1.055-.04.029 0 0zm1.568.16c.026.054.048-.133.002-.002zm1.01.017c.008.072.095-.14.002-.002zm1.76.02c-.017.156.03-.174 0 0zm-4.979-.01c.01.07.067-.125 0 0zm4.598.008c.012.066.045-.108 0 0zm-.803-.002c.07-.01.076-.054 0 0zm1.268-.004l.014-.022z"
          ></path>
          <path
            fill="#fff"
            stroke="#fff"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.265"
            d="M52.092 51.686c-.101.02-.278.21-.34.068.026.112-.129.01-.06.047-.019.105-.066-.017-.051-.014-.14-.035-.21.121-.239.186-.023.065-.056.057-.103.013.067.154-.184.312-.249.134.09.156-.133.277-.267.34-.13.173-.344.285-.433.508-.14.225-.341.401-.516.598-.164.196-.156.467-.266.69-.102.254-.28.491-.267.777-.008.25-.035.497-.05.746-.01.252-.11.49-.034.733.016.123.068.293.056.378-.071.012.013.169-.052.098.052.08-.053.13.035.198 0 .048-.16.09-.04.085.09 0 .09.07.005.079-.058.1.22.12.054.17.112.001-.072.102.04.146 0 .008.106.12.027.047-.049-.004-.1 0-.018.025-.144.006.082.086.01.047.061-.01-.044.082.006.096.06.052.05-.134.012-.033-.002-.079.17-.006.039.004.082.032-.145.079-.094.101.081.093.058-.104.143-.021-.055.023-.067.067-.045.101-.081-.005.048.017.013.056.004.032.017-.003.058-.015.028.03.073-.104.046.01.092.095-.01-.12.072.002.048.032-.138.053-.014.084.075.014-.092.087.035.028.112-.059-.086.053.064.04.048.017-.05.096.028.04-.021.077.054.093.06.01.019-.055.157-.04.175-.02.035.089.111.014.15.125.137.005-.106.07.03.023.057.016.142-.016.076-.066-.018-.017.066-.135.06-.043.02-.143.107.058.184-.047-.051.05-.12.085-.104.168.039-.082.104-.066.11-.139.086.046.031.032.103.006-.052-.061.095.1.035.02.066.04.098.056.028-.01.055.007.129.071.107-.035-.005.077.102.102.035.033.055-.015.136-.051.106.049-.126-.043-.02.047.05.004.109-.054.148.067.237.109-.043-.077.01-.054.056.006.066-.052.093-.085.155-.04.046.032.109.114.091.003.076-.004.043-.149.145-.084.024-.098.042.094.1.008-.06.025-.006.107-.098.115.018-.026.199-.066.08-.008.031.029.167-.053.111.025.038-.098.086.05.152-.019.111-.042.118.103.218.039.257-.024.514.05.769.011.268-.057.547-.06.821-.073.5-.014.998.037 1.497.033.316.034.632.074.95.068a.461.461 0 00.449-.47c.06-.353.062-.721-.051-1.063-.087-.35-.284-.67-.3-1.037-.028-.304-.095-.635.06-.918.17-.327.401-.618.64-.897.217-.238.472-.435.704-.655.228-.181.507-.28.743-.45.244-.14.449-.35.714-.447.242-.051.416-.215.566-.396.075-.035.24-.187.064-.169-.09.029-.222.159-.292.03-.18.128-.361-.207-.534-.044A19.32 19.32 0 0057.913 52c-.274-.032-.567.008-.827-.087-.26-.07-.524.056-.786.01-.257-.025-.524.106-.773-.006-.167-.048-.447.074-.507-.16-.183.203-.451.014-.666-.012-.29-.01-.567.167-.862.102-.231-.15-.519-.08-.763-.006-.206.042-.4-.126-.604-.057.037-.039.059-.157-.033-.097zm-.438.103c.017.006.003-.007 0 0zm-.029.027c.028.104-.126.059 0 0zm1.654.024c-.044.035-.078-.04 0 0zm.793-.012c.107.066-.099.03 0 0zm3.432.072c.024.06.04-.122 0 0zm-3.8-.002c-.001.12-.102-.053 0 0zm-2.327.022c-.085.11.088-.046 0 0zm8.637.057c-.034.094.018.05.01-.006zm-8.678.011c-.001.071.047-.032 0 0zm8.72.024c.001.059.071-.08 0 0zm-.808.006c.027.044.017-.088 0 0zm.715.03c.051.007.029-.051 0 0zm.142-.01c-.05.106.051-.015 0 0zm-.074.02c.001.02-.131-.018-.097.08.018.166.23-.014.097-.08zm.041.112c-.054.125.166-.041.033-.025zm-9.347.121c.002.089.063-.149.004-.007zm8.978-.004c-.034.155.113-.08 0 0zm.276-.006c.002.115.04-.036 0 0zm-9.305.035c.02.079.055-.022-.004-.011zm.07 0c.041-.009-.05.057.022.026.028-.013-.028-.04-.022-.026zm.108.032c-.07.066.04.043.027-.012zm-.438.226c.026.065.041-.038 0 0zm-.031.004c-.064.115.086.082 0 0zm8.838.04c-.002.06.043-.031 0 0zm-.024.02c.006.056.039-.023 0 0zm-.127.069c-.103.056.062-.011 0 0zm-8.533.275c.044.153-.13-.067 0 0zm8.063.037c-.12.11.091.023 0 0zm-.08.012c-.009.05.037-.02 0 0zm-8.534.09c-.032.126.119-.056 0 0zm-.11.117c-.002.115.043-.023 0 0zm-.022.1c.01.062.06.005 0 0zm-.196.178c-.003.065.072-.09 0 0zm.252.076c.009.156-.114-.099 0 0zm-.322.008c-.042.09.048-.014 0 0zm.182.412c-.008.067-.05-.105 0 0zm-.07.074c.05.067-.022.047-.01-.008zm-.196.271l.006-.002zm6.648.733c.048.08-.05.003 0 0zm-6.978.232l.002-.037zm.047.016c-.108.063.106.017 0 0zm-.192.271c-.109-.028.087.102.006-.013zm7.336.102l.022-.018zm-.02.297l-.015-.016zm.243.578c.003.101.045-.075 0 0zm.096.027c-.077.09.016.008.017-.012zm-.073.1c-.089.066.018.03.016-.008zm.047.48c.02.073.036-.05 0 0zm.026.608c.067-.01.062-.07 0 0zm.095-.018c-.096.11.08-.04 0 0zm-7.521.188c.105-.012-.095-.098-.006-.01zm.097.078c-.056.13.1-.025-.023-.022zm.147-.014c-.075.056-.113-.02 0 0zm7.283.11l.002-.042zm-7.32-.01c-.027.11.01.017.076.045-.013-.008-.068-.116-.076-.045zm.644.119c-.054.119-.01-.186-.006-.03zm-.261.035c-.086-.022.08.111.03-.027.006-.035-.018.012-.03.027zm-.305-.016c.037.003-.026-.046 0 0zm.559.008c.044.112-.099.07 0 0zm-.541.043c-.06-.086-.045.155.034.043.082.009-.1-.07.04-.031-.018-.004-.093-.122-.074-.012zm.125.018c-.033.13.084-.003.003-.024l-.01-.01zm.828-.032c.098.051-.11.09.03.059.061.015-.008-.076-.03-.059zm-.018.069c-.044-.002-.01 0-.059.049.052-.055-.007.138.052.02l.023-.044c.005-.009-.013-.025-.016-.025zm-.053.043l-.025-.037-.004.011zm-.113-.084c.006.01.006-.01 0 0zm.502.074c.043.002.178.003.064-.047l-.039.029zm-.44-.006c-.001-.005-.11.023.004.025-.004.007.015-.11-.003-.025zm.342.004c.048-.032.088.093.043-.016l-.005-.007zm.418-.006c-.035.023.007-.022 0 0zm5.46.012c.015.049.022-.054 0 0zm-6.208.006c.047.037-.013-.053 0 0zm.287.054c.04-.085-.009-.094 0 0zm-.263-.003c.062.027.013-.025 0 0z"
          ></path>
          <path
            fill="#f9f9f9"
            stroke="#fff"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.265"
            d="M69.16 52.328c-.072-.077-.126.124-.193.031a.219.219 0 01-.303.008c-.013.07-.142.107-.158.02-.015.114-.173.107-.201.213.061-.066.071.11.004.045-.235.036-.16.365-.356.453.066.107-.124.205-.187.107.002.042-.066.112.002.13-.066.043.032.202-.102.157-.053.017-.04.087.014.041.091.01.03.17-.032.078-.107-.01.024.172-.091.137.029.055.167.1.08.172-.089 0 .058-.086-.051-.098-.08-.036-.223.068-.133.147.002.05-.036.18-.096.103-.06-.04-.104.027-.044.051.003.015-.054.134.02.043.064-.042.039.13.003.098-.04-.047-.05.096-.041.002-.03-.1-.13.055-.02.047-.045.04-.042.253.041.156.015.038-.004.034.03.01.09.12-.167.246-.174.277.105-.018.034.116-.012.127-.038-.028.062-.038-.03-.041-.1.011.085.081.02.146-.014.037-.043.096-.058.069.02.082-.082-.003-.094.072-.045.053-.091.097-.162.078.006.063.13.119.076.014.075.11.143-.196.217-.055-.044.03-.077.109-.139.065.031.075-.155.096-.035.152-.009-.012-.113-.053-.055.008-.014.054.063.063.024.01.033-.003.076.053.047-.008.067-.028.007.156-.04.052-.043.089-.085-.072-.08.041.058.036.104.127.028.116-.023.01-.059.027-.059.078-.042-.032.01.08-.006.002.027-.022.04-.063.065-.018-.052.025-.068.049-.002.082.075-.057.019.057.088.051-.02.09-.062-.108-.092-.033-.042.064-.092-.095-.082.015.092-.018-.003.058.064.073-.058-.072.021.087-.037.043-.026.008-.055.109.01.066-.014.05.065.053.008.084.038.023-.105.031-.015.08-.015.073-.03-.05-.075-.017.007-.024.057-.04.002-.067-.009.02-.038.093-.036-.004-.016-.033.012.012-.038-.011.02.003-.038.049-.02.08.018-.042.051.052-.002.01.003.054.047.068.088.042-.053.034.01.075-.031.1.053.013.005.08.075.025.028-.068.035.055.07 0 .012.028.057.057-.006.086.058.07-.114.005-.02-.033.01-.06-.031-.042-.055.006l-.035-.025c.015-.025-.09.042-.064-.032l-.032.035c.012.005.078.034.028.055.068-.054 0 .082.025.022l.037.017c.051.007-.04.04-.007.076-.004.071-.124-.039-.051.016-.006.037.12.076.027.006.04-.049.025.107.025-.006.058-.004.116.123.044.03-.003-.017-.112.06-.007.055.012.011-.11-.017-.001.05-.055.042-.057.064-.065.115.049-.039.011.086-.04.045.053-.004-.008.136-.037.045-.073-.018.015.06-.04.074.063-.102.09.054.007.062-.042.047.033-.077-.042-.029.077.02-.056.062.037.055-.042.025.023.07-.066.049.021.034.07.102-.012.123.075.099-.046-.08.055.02.003.011.122-.004.009.035-.031.029.043-.123-.013.017-.028.012-.028-.058-.043.004.049.026.06.026 0 .008-.06.04-.004.06.033.062-.05-.01.023-.052.006-.021.088-.045-.022.095.077.005.038-.02-.042.025.007.02 0 .059-.056.093-.057.018.004.02-.094.034-.049.008-.052-.052-.095.141-.113.082-.114.088.162-.047.037.054-.087.04.145.092.007.096-.054 0 .063.03-.019.008.005-.02-.082.095-.046.031l-.03.022c.09.004-.115.016.039.01.024.013-.123.07.004.018.036.02.072.086.006.073-.089.028.065.062-.006.111-.029.04.017.087.06.051-.046.064.065-.096.02.038.02.047-.087.038-.048.116-.032.037.065.183-.02.104-.005.017-.081-.078-.04.012-.028-.03-.008.12-.03-.016-.02.047-.06.088-.016.094-.091.008-.058.08-.014.105l.037.03-.01.033c.037-.036.022.108.068-.003.05-.003.04.11.083.132.03-.052.083.065.125-.018.034.006-.032-.051.049-.031.005-.061.06.077.08.023-.006.054-.03.105.025.043.053.004-.06-.037.01-.029.005.045.13.007.027.025-.026.08.053 0 .08.002.042-.041.006.07.076.018.056.026.087-.076.032-.074-.005.027.09-.036.055.02l.02-.044c.078.015-.154-.052-.001-.008.037.022.042.022.08.012-.036.007-.018-.095-.014-.023.01-.037.087.041.098-.024.048.015-.006.031.018.082-.001-.066.063-.08.027-.006-.11.017.114.055.037-.013.088-.004-.037-.085.052-.11.02-.042.061.039.095-.003l.033.023c-.046-.046-.048.104.006.009.05-.016-.116.058-.047.038.062.004.157.015.193-.047-.007-.051.128.085.082-.014.01.034.03-.052.028.006.11.049-.076-.023-.002.04.1.029.167-.07.244-.087-.01.074.147-.032.08.016.118-.004-.02.007.006-.064-.004-.016.08.089.025.003.042.1.15.094.24.067-.023-.11.12-.048.153-.117.08.022.15-.012.226.04.086.03.028-.073.104-.059.063-.028.156-.036.154-.126.252.149.532-.046.799-.023.207-.067.294-.378.55-.317.062.016.18-.003.131-.095.092-.07.224.03.314-.062.307-.142.49-.446.75-.65.207-.16.36-.383.415-.64.087-.345.068-.707.035-1.057-.043-.277-.224-.503-.31-.765-.025-.16.041-.397-.153-.469-.1-.21-.488-.248-.4-.544.017-.124-.004-.309-.16-.325-.055-.089-.093-.25-.23-.22-.094-.111-.187-.223-.335-.244-.263-.127-.567-.128-.828-.257-.142-.05-.286-.093-.42-.164zm-2.752 5.588c-.007-.016-.091-.01 0 0zm-.043-.268c.036-.07-.084-.028-.006-.002zm.18-.322c-.093-.023.024.063 0 0zm.166-.652c-.062.017.122-.093-.018-.038-.012.008-.036.1.018.038zm.125-.63c.038-.051-.136 0-.047-.07-.01.003-.092.07-.025.044l.04.017zm2.953-3.65l-.006.045c.013-.006.038-.073.006-.044zm-.047.044c-.05.081.096-.016 0 0zm-1.058.035c.028.09-.062-.036 0 0zm2.017.177c.018.08.053-.009-.004-.015zm-.035.024c-.01.087.036-.013 0 0zm.176.133c-.044.058.043.009.021-.008zm-.133.064c-.055.061.058-.005 0 0zm.203.027l.027-.007zm-.09-.003l-.004.044c.013-.007.032-.055.004-.044zm.143.09c.032.024.076-.078 0 0zm-.313.02c.02.068-.05-.01 0 0zm.233.028c.02.054-.048-.01 0 0zm.084.047c.048-.01.03-.093 0 0zm.021.193c.038.045-.054.004 0 0zm-3.156.008c.08.035-.067.193-.049.074.126.057-.051-.09.024-.076zm3.367.143c-.067.088.072-.031 0 0zm-.017.076c.024.121.083-.088 0 0zm.232.078c-.011.091.042-.154 0-.003zm-3.623.018c-.016.059-.041-.084 0 0zm-.217.008c-.003.075.049-.019 0 0zm.096.035c.058.041-.024.159-.035.049.002-.015.01-.056.035-.05zm.058.107c.005.074-.063-.04 0 0zm-.168.08c.103.072-.155.092-.037.026.003-.009.021-.046.037-.026zm4.045.016c0 .027.092.055.02.013-.012-.021.05-.067-.02-.013zm-.043-.004c-.053.076.045-.003 0 0zm-3.994.1c-.01.015-.026.024-.039.037-.035-.009.024-.045.04-.037zm4.063.021l.006.04c.012-.006.016-.08-.006-.04zm-.238.086c-.05.055.013-.147 0-.003zm-3.852-.01c.113-.049-.041.171-.004.027-.008.009-.025-.102.004-.027zm4.186-.008l-.022-.006zm-4.243-.002c.045.05-.048.01 0 0zm4.198.05c.03.056.034-.133 0 0zm-4.204.034c.034.098-.124-.007-.02-.01zm4.026.028c.037.068-.02.022-.014-.002zm.31.06v.045c.01 0 .027-.072 0-.045zm-4.625.035c.04.056.04-.021 0 0zm4.368.059c.006.067-.067-.084 0 0zm.173.041c.05.085-.058-.153-.001-.005zm-4.445.027c.06.058-.054.094 0 0zm4.5.012l.006.04c.016-.004.02-.06-.006-.04zm-4.605.07c.035.033.016-.05 0 0zm.043.032c-.07.048.064.044.02-.01zm.082.043c.009.078.035-.039 0 0zm-.036.03l.002-.001zm-.142.048c.044.084-.088-.015-.07.054.066-.067.038.13.09.043.122.007.07-.114-.02-.097zm.121.01c.015.022.084.011.037-.004l-.03-.002zm4.615.1c-.045.068.063-.023 0 0zm-4.56-.003c-.017.061.129-.002.029.047-.036.042-.049-.035-.03-.047zm-.344.328c.03-.014-.003-.04 0 0zm.012.026c.034-.023-.04-.024 0 0zm.004.013c.028.023.103-.043.013-.008l-.002-.011zm0 .026c-.011.078.043-.007.003-.008zm.052.105c-.01.035.033-.02 0 0zm.13.008c.012.083-.072-.036 0 0zm.036.045c.085.014-.093.044-.011.07-.072.054-.098-.085-.024-.056-.008-.014.047-.04.035-.014zm-.388.209c.057-.028-.07-.034 0 0zm.01.012c-.004.042-.108-.022-.03.021-.065.036.103.06.055-.01l-.016-.025zm-.03.048c-.045-.004-.025.023 0 0zm.03-.048c.003-.01-.024-.018 0 0zm.181.035c.033.084-.113.032-.02-.018zm-.207.045c-.06-.03-.124.074-.023.033-.043-.065.047.011-.01.02-.027.073.131-.006.058-.05l-.025-.01zm.17.058c-.007.075-.022-.102 0 0zm-.022.1c-.053.054-.022-.033 0 0zm.088.096c-.02.02-.018.074-.054.023l.025-.023c-.038-.025.037-.03.03 0zm4.96-.016l.01.039c-.022.007-.04-.05-.01-.04zm-5.15.002c.02.03-.011-.002 0 0zm.085.027c-.075.021.067.049-.041.026-.02-.022-.003-.088.04-.026zm.025.088c.02.072-.046-.053 0 0zm-.054.022c.032.028.058-.031.017.025.094.01-.066.04-.03-.025-.038.017.087.05-.032.015.062-.001-.04-.07.045-.015zm-.149.035c.031.021.03-.103 0 0zm.14.078c-.024.034-.04-.022.012-.002zm.106.018c-.008-.029-.046.095-.049.033-.04.063-.06-.055.008-.03l.031-.02zm4.912.033l.012.047c-.002.005-.052-.07-.012-.047zm-5.275.015c-.096.038.051 0 0 0zm.271.043c-.043-.04.08-.049 0 0zm4.94.016l.006.035c-.015 0-.037-.05-.006-.035zm-5.004.041l-.041-.01.014-.002zm-.043-.01c.067.007-.006.111-.025.027-.078-.006 0-.022.025-.027zm5.158.027v.049c-.014-.003-.028-.066 0-.049zm.092.118l-.018.037c.014-.002.065-.073.018-.037zm-.039.045v.048c.015-.002.027-.088 0-.048zm-5.332.029c.05.105-.027-.06-.012.004-.078.017-.019.08.047.04-.001.01-.066-.124-.035-.044zm5.24.18l.016-.034-.01-.002zm-.047.086l-.006.039c.015-.001.037-.075.006-.04zm-.187.066l.017.035c-.017.003-.055-.043-.017-.035zm.262.049l-.026.035c.016.006.076-.058.026-.035zm-.317.052c-.012.054-.111.004-.023 0zm-.19.092c-.055-.004-.013-.083 0 0zm-4.898.069l-.004-.024zm.006 0c.023.03.015-.033 0 0zm4.865.21l.004.049c.014-.003.026-.075-.004-.048zm-4.923.022c.021.038.063-.054 0 0zm4.728.078c-.031.117.084 0 .03-.021zm-.264.26l-.002.043c.009.002.036-.07.002-.043zm-.546.062c-.05-.002.024-.07 0 0zm-4.055.088h.035l-.004-.007zm3.67.05c-.007.1-.02-.161 0-.004zm-1.334.177c.069.023-.058.097-.024.031.04.005-.012-.067.024-.031zm.408.023c-.008.022-.024-.022 0 0zm-.43.01c.016.005.041-.035 0 0zm.795.031c.004.038-.092-.04-.025-.037zm-.303.018c.067.056-.043.106-.025.021-.006-.009-.005-.065.025-.021zm-.746.158c-.057.004-.015-.005.006-.025zm1.1.045c.057.006.032-.067 0 0zm.3-.016c-.027.083.039.001 0 0zm-1.064.01c-.033.025-.005-.021 0 0zm-.017.006c-.056.025-.011-.015 0 0zm.23.051c0-.001-.034-.128 0-.004zm-.094.004l-.013-.02zm-2.14.086l.025.031c-.02.08-.053-.047-.025-.031zm.58.01l-.012.043c.01-.012-.088-.082.012-.043zm-.535.04c-.017.03.075.054-.028.051l.016-.045.004-.013zm.465.003c0 .022-.02-.028 0 0zm-.586.107c.024.033.1-.054.001 0z"
          ></path>
          <path
            fill="#181818"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.265"
            d="M41.105 32.984c10.932-1.758 21.687 1.507 19.56 9.544-1.092 4.469-3.385 3.86-4.819 5.575"
          ></path>
          <path
            fill="#262626"
            fillOpacity="1"
            stroke="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.297"
            d="M45.109 33.326a24.71 24.71 0 00-4.484 1.19c-.62.21-1.184.506-1.724.822-.608.33-1.209.733-1.47 1.298-.215.447-.158.954.085 1.386.404.775 1.125 1.408 1.856 1.998.914.715 1.908 1.362 2.92 1.986 1.909 1.152 3.899 2.215 5.866 3.302.313.163.607.35.932.499.608.22 1.28.283 1.934.355 1.318-.174 2.635-.358 3.931-.618.377-.075.738-.193 1.109-.286.269-.109.653-.173.837-.332.106-.14.358-.233.487-.315.233-.001.23-.209.426-.222-.086-.21.29-.225.275-.42.059-.112.28-.077.235-.239.077.063-.019-.095.094-.046.063-.015.008-.123.127-.041-.052-.037-.138-.095-.022-.028-.058-.037-.084-.148.022-.148-.053-.034-.06-.14.04-.094-.06-.137.144.002.173-.127-.097-.057.102-.123.062-.217.123-.172.42-.42.223-.591-.08-.08.136-.05.067-.124.162.05.096-.114.03-.168.053-.024.25-.07.114-.119-.017.068-.11-.051-.051-.076-.137-.057.116-.063.044-.144.032-.047-.047-.173.079-.102-.025-.075.168-.025.059-.111-.036-.001-.137-.046-.035-.051-.124.057-.061-.107.04-.098-.085-.08.058-.105.007-.154-.058-.05-.202-.082-.076-.143-.131.015-.034-.055-.003-.015.112-.03-.16-.102.005-.11.003-.095-.163.062-.096-.062-.214-.064.123-.197.045-.272.078-.083-.055-.09-.067-.01.073-.02.029.06 0 0 .032.121-.215-.02-.044-.036.093 0-.194-.179-.04-.08.11-.09-.137-.026-.04-.118.047.083.077.024.14.014.008.05.082-.201-.048-.113-.056-.102.177-.012.18-.041.09.086-.1-.215.103-.147.078-.12-.104-.01-.155-.082.12.103-.072-.035-.041.075-.002.097-.157-.011-.03-.006.05-.1.036-.092-.02-.082-.037.075-.085-.006-.157.011-.024-.041.07-.124.089-.045.04-.076.128-.276-.077-.193-.084.015-.06-.113-.112-.043.038-.07-.02-.07.039-.13-.096.04-.196-.066-.04-.077.08-.08-.161.036-.083-.055-.023-.056.117-.221-.007-.119-.078.003.053-.102-.064-.074-.054.114-.172-.076-.017-.055.025-.05.148.005.066-.08-.098-.107-.071.129-.13.012.039-.085-.008-.096-.1-.092.043-.14.211.114.183-.08-.027-.22-.428-.033-.42-.242.019-.091.23.022.08-.084-.101-.05-.156.057-.138.09-.111.01-.094-.208.01-.102.071-.045-.137-.094.01-.113.05.007.171-.06.029-.043.026-.078-.07-.186-.096-.074-.057.12-.062-.127-.164-.024-.08.032.01.163-.101.088.03-.066.016-.144-.017-.18.065.028.277-.035.109-.058-.133.002-.347-.062-.276-.197.002.138.229-.03.051-.04-.115-.128-.194-.377-.373-.35-.063-.12-.446-.059-.307-.25-.228.056-.227-.19-.434-.216-.124-.011-.156-.18-.209-.172-.063.1-.235.112-.186-.025.019-.072.13-.216-.025-.239.033.126-.26.012-.108-.039-.02-.148-.246-.13-.321-.156-.153-.145-.48-.073-.57-.29a3.52 3.52 0 00-.745-.603c-.317-.217-.646-.428-1.02-.58-.82-.385-1.625-.792-2.471-1.138-.61-.214-1.25-.366-1.885-.52a10.21 10.21 0 00-2.128-.242c-.457-.016-.915-.01-1.373-.012l-.613.094zm-4.222 1.022c-.057.062.077-.028 0 0zm-.793.316h-.007zm13.729.5c.072.025-.084-.1 0 0zm.027.057c-.068-.068-.035-.035 0 0zm.027.156c.133.203-.25-.044 0 0zm.67.406c-.06.07.03-.136 0 0zm.078.037c-.07.074.064-.157.003-.009zm.354.244c-.074.032.08-.125 0 0zm1.531.899l.044-.008zm.224.072c.006.075.109-.1 0 0zm-.035.047c-.068.07.07-.014 0 0zm.194.121l-.04-.033zm.366.31l.032-.007zm.248.13c-.013.062.1-.085 0 0zm.486.548c-.028.082.07-.009 0 0zm.051.069l.018-.008zm-.137.113c-.071.141-.016-.138-.02-.012.041-.024.091-.071.02.012zm.228.012c-.037.135.117-.079 0 0zm.268.246c.03.163.057-.033 0 0zm.076.025c-.046.09.184-.004.024.024l-.014-.026zm-.047.176c-.018.057.116-.064 0 0zm-.046.02c.013.076-.084-.046 0 0zm.086.138c.134-.045.122.105.017.055 0 .01-.134-.125-.017-.055zm.277.002c.134.195-.195-.038 0 0zm.152.19c.055.06.004-.11 0 0zm-.285.033c.065.094-.148-.04 0 0zm.31.137h-.01zm.036.254c-.027.105.095-.06 0 0zm-.049.087c.073.078-.12.197-.038.034.003-.015.015-.039.038-.034zm.037.141c.107-.024-.018.146.025.018-.096.083-.189-.018-.031.001.015.004-.02-.037.006-.019zm.182.33c.027.06-.054.12-.066.04-.092.089-.035-.133.054-.056l.004-.023zm.346.012c.06.022-.025-.07 0 0zm-.209.056c-.026.047.018-.103 0 0zm.035.165c-.186.1.11.016 0 0zm-.116.015c-.018.084-.12-.047 0 0zm-.108.278c-.023.075-.141-.032-.007-.01l.017-.008zm.263.634c-.028.069 0 .153-.09.055.057-.02.072-.016.085-.084zm-.052.244c-.078.032-.074-.001 0 0zm.03.014c.023.034-.02-.012 0 0zm-16.959.504c-.023.078.019-.037 0 0zm12.717 3.367c.064.108-.062.006 0 0zm-.041.117c-.052.093.097-.074 0 0zm-2.919.248c-.11.12.113-.156 0 0zm.03.256l.027-.004z"
          ></path>
          <path
            fill="#262626"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeMiterlimit="4"
            strokeOpacity="0.906"
            strokeWidth="0.288"
            d="M72.555 21.23c-.258.047-.517.087-.775.133-.292.051-.59.088-.876.16-.265.07-.508.212-.774.27-.292.02-.557.154-.831.242-.265.134-.464.396-.77.445-.32.018-.473.328-.72.461-.206.1-.312.344-.563.348-.147.094-.189.299-.384.345-.18.058-.281.209-.376.354-.083.047-.201.094-.181.213-.079-.118-.104.113-.19.051-.109.172-.289.351-.336.523-.122-.007-.208.148-.133.21-.093.09-.25.053-.279.165.142.036.074.206-.049.204-.065.021.007.156-.054.085-.06.031-.048-.005-.05.063.011.09-.12.176-.062.22-.013.158-.32.125-.255.298.038.027-.075.179-.053.044-.006.078-.21.16-.055.243-.11-.007-.134.11-.06.191.02-.052.038-.114.021-.014.128.012-.045.078-.004.157-.114.008-.17.071-.159.177-.01.03-.036.143.03.104-.083.027-.137.104-.185.172.047-.088.21.188.06.09-.074.022.021.133.012.03-.011.095.02.05.05.009.016.126-.16-.005-.132.076a.13.13 0 00.014.074c.017-.083.085.053.003.035.036.094-.127.012-.016.08.08.037.039.13-.034.074.075.02-.084.145-.034.061.036.016-.094-.118-.04-.012-.057-.038-.084-.069-.055-.002-.046.044.002.017-.05.032-.006-.08-.1.103 0 .087.06.04-.2.033-.052.07-.078.053.113.067 0 .1-.068-.077.064.056-.006.063.064.057-.12-.059-.002.045.083.048-.079-.005.01.021.015.049-.111.103-.027.131-.068.054-.018.01.043.096-.106-.065 0 .048-.1.084.071.003.102.013.018.057-.053.045-.04.12-.139.058-.013 0 .108.057.01.022-.01.03-.083.078.004.115-.092-.128.186-.034.066.035-.132.014.087-.045.007.032.087-.004-.128.097.003.06.06.012-.068.04-.049.045.001.039.135-.007.05.015-.054.128.106-.06.037.069-.003.14-.222.23-.073.34-.121.064.13.027-.011.072-.103.038-.095.231-.044.345-.126.18.037.378-.048.56a4.2 4.2 0 00.042.8c.046.238.03.485.105.717.126.588.284 1.173.544 1.718.433.983 1.062 1.872 1.783 2.666.696.762 1.543 1.399 2.502 1.79 1.26.559 2.608.948 3.989 1.027a8.33 8.33 0 003.322-.482c.242-.086.592-.205.757-.301-.053-.088.039.043.066-.016.833-.355 1.613-.823 2.355-1.34.268-.187.565-.349.765-.615.204-.264.374-.554.609-.793.427-.5.864-1.019 1.078-1.65.192-.31.379-.631.452-.992.154-.495.299-.993.402-1.5-.084-.016-.04-.072.002 0 .083-.33.041-.67.013-1.002-.001-.492.105-1.004-.083-1.476-.152-.509-.342-1.01-.436-1.533-.03-.251-.076-.51-.222-.724-.233-.43-.409-.907-.778-1.244-.225-.232-.471-.45-.654-.717-.127-.216-.216-.488-.461-.6-.31-.153-.526-.436-.795-.646-.335-.282-.678-.57-1.094-.724-.585-.252-1.165-.516-1.762-.74a.399.399 0 00-.495-.135c-.322.017-.599-.182-.904-.248-.262-.096-.538-.061-.81-.065-.355-.014-.711-.063-1.068-.04-.194-.008-.38-.083-.576-.068zm-8.463 6.965c-.05.013.054.007 0 0zm.023-.222l.01-.047-.027.03zm.13-.352c.013-.004-.012-.02 0 0zm.194-.213c-.014-.065-.081.006 0 0zm9.416-6.12c.04-.014.013-.067 0 0zm1.563.189c-.07.083.069-.025 0 0zm.441.078c.096.065-.133-.117-.008-.008zm-5.707.193l.01-.002zm6.537.059c.051.097-.052-.167-.002-.012zm.235.207c.11.055-.075-.012 0 0zm-7.649.1c-.035.029-.016-.059 0 0zm-.67.288c.065.028-.084-.13-.003-.008zm.125-.025c-.005.049.094-.069 0 0zm11.342 1.353v-.02zm-13.478.02c-.085.028.088-.013 0 0zm13.402.002c-.074.079.064-.023 0 0zm-.088.033c.056.022.072-.067 0 0zm.112.035c.047.01.017-.072 0 0zm.056.04c.047.052-.022-.15 0-.005zm-13.908.494c.11.063-.102-.012 0 0zm-.11.097c.015.067-.047-.086 0 0zm14.588.024c.085.05-.14-.108-.01-.008zm-14.656.054c-.063.07.014-.085 0 0zm-.033.034c.084.078-.037.027-.027-.01zm14.756.035c-.009.06.089-.09 0 0zm.078.045l.035.011-.035-.015zm-15.115.213c.103-.003.052.104-.014.025l.002-.035zm16.039.953c.053.016.088-.075 0 0zm.066.037c-.132.104.132-.013 0 0zm.06.113c-.078.074.026.049 0 0zm.026.191c-.006.076.072-.125 0 0zm.03.373c-.015.058-.042-.078 0 0zm.31.586c-.013.104.062-.156 0 0zm-.021.08h-.008zm-17.766.079c.058-.005-.04-.019 0 0zm-.133.375c-.072.06-.037-.095 0 0zm.035.043c-.112.143-.03-.088 0 0zm-.144.105c-.008.01-.003-.008 0 0zm.011.049c-.088 0 .115-.09 0 0zm18.26.043c.061.109-.077-.169 0 0zm-18.191-.008c-.06.006.12.11-.004.021.014.124-.107-.003-.04.088-.04.025.073.011.018.057-.077.061-.046-.102-.04-.104.024-.044-.002-.166.066-.062zm-.033.078c-.018-.027-.02.014 0 0zm-.034-.047c-.006.022-.018-.02 0 0zm18.3.067c-.083.044.026.052.007-.002zm-.048.03c-.08.107.058.005 0 0zm-18.193.063c.023.027-.035.066.047.073-.053.078-.066-.094-.135-.002.026-.003.075-.121.088-.07zm18.064.098c-.012.168-.004-.178 0 0zm-18.101.014c-.068.04-.014-.082 0 0zm18.195.052c-.06.108.069-.16.003-.007zm-.095.055c.025.068-.126-.087-.007-.003zm.443.1c0 .095.023-.175.002-.013zm-.115-.05c-.088.137.112-.042 0 0zm-18.47.024c-.054.054-.014-.033 0 0zm18.585.284c.054.031-.05-.105 0 0zm.053.025h-.006zm-18.686.13c-.107.033-.005-.127 0 0zm18.633.04c-.005.078.08-.121 0 0zm-.092-.022c.068.074.053-.002 0 0zm.213.594c-.013.089.043-.168.004-.012zm-.053-.049c-.076.094.061 0 0 0zm.16.075c.015.066.044-.139.002-.003zm-.093.091c.046.018.07-.077 0 0zm-.112.133c-.09.055.076-.02 0 0zm.006.026c-.064.068.093-.037 0 0zm-.045.28c-.075.071.054.019 0 0zm-.054.7c-.035.106.024-.17 0-.008zm-.03.06c-.025.037-.052-.063 0 0zm.178.067c.056.01.042-.057 0 0zm-.137.18c.022.055-.098-.037 0 0zm.057.343c.025.069.035-.147.002-.004zm-.41.78c.027.121-.062-.16 0 0zm.013.45c-.036.073.055-.034 0 0zm-.1.436l.003-.003zm-.276.57c.072.1-.086-.16 0 0zm-.801.944c.056.096-.111-.144 0 0zm.218.19l.018-.038zm-.324-.032c.024.06-.055-.024 0 0zm.18.108c.05.027.055-.099 0 0zm-.008.113c.03.11-.013-.17 0-.008zm.106-.023l-.002-.028zm-.448.105c-.022.027-.126-.044 0 0zm-.029.307c.056.01.042-.057 0 0zm-.064.175c-.048.105.098-.155 0 0zm-.375.028c.02.131-.042-.174-.003-.01zM67.51 36.988c-.059.005-.046-.075 0 0zm.375.131c-.054.109.06-.17.004-.012zm-.828-.043c-.022.06.12-.069 0 0zm1.029.043c-.078.057.127-.128.013-.014zm-.145.106c.065.11-.058-.016 0 0zm.315.021c.01.09-.057.015-.002-.012zm-.22.102c.057.072-.074-.031 0 0zm-.122.129l.037.023-.033-.03zm.166.113h-.006zm.602.107c-.044.012-.067-.072 0 0zm-.403-.013l.01-.008zm.393.15c.013.04.062-.071 0 0zm.387.002c.044.12-.054-.037 0 0zm-.584.047c.117.036-.16-.07-.008-.004zm.367.078l-.008-.006zm-.135.033c.016.046.039-.08 0 0zm.418.192c-.026.05.051-.027 0 0zm.078.035v-.012zm6.746.09c.046.094-.005.01-.008-.004zm-.306.023c.031.08-.06-.022 0 0zm.757.002c.017.064.052-.015 0 0zm-.957.088c-.012.034.005-.154 0-.008zm.22-.008c.047.122-.07-.144 0 0zm-.308.047c.008.032-.032.078-.005-.011.008-.082.005-.021.005.01zm-5.037-.006c-.027.075.053-.038 0 0zm5.559.107c-.068.057.055.015 0 0zm.215.004l-.024-.002zm-.457.164c-.098.092.134-.11.004-.003zm-.053.07c-.087.045.047.025 0 0zm-.773.079c-.072.056.09-.03 0 0zm-2.016.068l-.012-.031zm.611.14c.067-.015.064-.058 0 0z"
          ></path>
          <path
            fill="#262626"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeMiterlimit="4"
            strokeOpacity="0.906"
            strokeWidth="0.265"
            d="M66.43 31.283a.709.283 0 01-.71.283.709.283 0 01-.708-.283.709.283 0 01.709-.284.709.283 0 01.708.284z"
          ></path>
          <path
            fill="#313131"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeMiterlimit="4"
            strokeOpacity="0.906"
            strokeWidth="0.263"
            d="M72.63 21.986c-.235.042-.472.08-.708.122-.268.047-.54.08-.802.146-.242.065-.465.194-.709.247-.267.019-.51.14-.76.222-.243.122-.425.362-.705.407-.292.016-.433.3-.66.422-.188.092-.285.315-.514.319-.135.086-.173.273-.352.315-.164.053-.258.192-.344.325-.076.042-.184.085-.166.194-.072-.108-.095.104-.174.047-.1.157-.264.321-.307.48-.112-.008-.19.134-.122.19-.085.082-.229.05-.255.152.13.033.068.188-.045.186-.06.02.006.143-.05.079-.055.028-.043-.005-.045.057.01.083-.11.161-.057.202-.012.144-.293.114-.234.272.035.025-.068.164-.048.041-.006.07-.193.147-.05.222-.1-.006-.123.1-.056.175.02-.048.036-.104.02-.013.117.011-.041.072-.004.143-.104.008-.156.066-.145.163-.009.027-.033.131.027.095-.076.025-.125.095-.17.157.044-.08.193.172.056.082-.068.021.02.123.01.03-.01.085.02.044.047.006.014.116-.147-.004-.122.07a.118.118 0 00.013.068c.016-.076.078.048.004.032.032.086-.117.011-.015.074.073.033.035.119-.032.067.07.019-.077.133-.03.056.032.014-.087-.109-.038-.011-.051-.035-.076-.063-.05-.002-.042.04.002.016-.045.029-.006-.073-.092.094 0 .08.054.036-.184.03-.048.065-.071.047.104.06 0 .09-.063-.07.059.052-.005.058.058.052-.111-.054-.002.041.075.044-.072-.005.009.02.013.044-.102.094-.025.12-.062.05-.017.008.04.087-.098-.059-.001.044-.092.077.065.003.093.012.017.052-.05.041-.038.11-.128.054-.012 0 .099.052.01.02-.01.028-.077.071.003.105-.084-.117.17-.031.06.032-.12.012.08-.041.007.03.08-.005-.117.088.003.054.054.01-.063.037-.045.041.001.036.123-.006.046.014-.05.118.096-.054.033.063-.003.128-.203.21-.067.311-.11.059.12.025-.01.066-.094.035-.087.212-.04.317-.115.164.034.345-.044.512-.016.244.008.49.039.733.042.217.028.443.095.655.116.539.26 1.074.498 1.573.398.9.973 1.714 1.633 2.44.637.698 1.412 1.28 2.29 1.64 1.153.51 2.388.867 3.651.939a7.625 7.625 0 003.041-.442c.221-.078.542-.187.693-.275-.049-.08.035.04.06-.015.763-.324 1.477-.752 2.156-1.226.245-.172.517-.32.7-.563.187-.241.343-.507.558-.726.39-.457.791-.932.987-1.51.175-.284.346-.578.413-.908.14-.453.274-.909.368-1.374-.076-.014-.036-.065.002 0 .076-.301.038-.612.012-.917 0-.45.096-.918-.076-1.351-.14-.465-.313-.923-.399-1.402-.028-.23-.07-.468-.203-.663-.213-.394-.374-.83-.713-1.14-.205-.211-.43-.41-.598-.655-.116-.198-.197-.447-.422-.55-.284-.14-.482-.398-.727-.591-.307-.258-.621-.522-1.002-.663-.536-.23-1.067-.472-1.613-.678a.365.365 0 00-.453-.123c-.295.016-.548-.166-.828-.227-.24-.088-.492-.056-.74-.06-.326-.012-.652-.057-.979-.035-.177-.008-.348-.077-.527-.063zm-7.746 6.376c-.045.01.05.006 0 0zm.022-.204l.009-.043-.025.027zm.118-.322c.012-.003-.01-.019 0 0zm.179-.195c-.013-.06-.075.005 0 0zm8.619-5.603c.036-.012.011-.06 0 0zm1.43.174c-.064.076.063-.023 0 0zm.404.071c.087.06-.122-.107-.007-.007zm-5.224.177l.009-.002zm5.984.054c.046.089-.048-.153-.003-.01zm.214.19c.101.05-.068-.011 0 0zm-7 .09c-.034.027-.016-.053 0 0zm-.614.265c.059.025-.078-.12-.004-.008zm.114-.023c-.004.044.086-.063 0 0zm10.382 1.239v-.018zm-12.338.018c-.077.025.081-.013 0 0zm12.268.001c-.068.072.059-.02 0 0zm-.08.03c.051.02.065-.06 0 0zm.102.033c.044.01.016-.066 0 0zm.052.036c.043.048-.02-.137 0-.004zm-12.731.452c.101.058-.094-.01 0 0zm-.1.09c.013.06-.044-.08 0 0zm13.353.02c.077.047-.128-.097-.01-.007zm-13.416.05c-.058.064.013-.077 0 0zm-.03.031c.076.072-.035.025-.025-.009zm13.506.032c-.008.056.082-.081 0 0zm.072.042l.032.01-.032-.014zm-13.836.194c.094-.002.048.096-.012.024l.002-.033zm14.682.873c.049.015.08-.068 0 0zm.06.034c-.121.095.121-.012 0 0zm.056.104c-.072.067.023.044 0 0zm.023.175c-.005.069.066-.115 0 0zm.027.341c-.014.053-.038-.071 0 0zm.284.537c-.012.094.057-.143 0 0zm-.02.073h-.007zm-16.261.071c.053-.004-.037-.017 0 0zm-.122.344c-.066.056-.034-.087 0 0zm.032.039c-.102.13-.028-.08 0 0zm-.132.096c-.007.009-.002-.006 0 0zm.01.045c-.08 0 .106-.083 0 0zm16.715.04c.056.099-.07-.155 0 0zm-16.652-.008c-.055.006.11.101-.003.02.012.113-.099-.003-.036.08-.037.023.066.01.016.052-.07.056-.042-.094-.038-.094.023-.041-.001-.153.061-.058zm-.03.072c-.016-.025-.018.012 0 0zm-.03-.043c-.006.02-.018-.02 0 0zm16.75.06c-.076.04.024.049.007-.001zm-.044.03c-.073.097.053.003 0 0zm-16.653.056c.02.024-.032.06.043.067-.048.071-.06-.086-.123-.002.023-.002.068-.11.08-.065zm16.535.09c-.01.154-.003-.163 0 0zm-16.569.012c-.062.038-.012-.074 0 0zm16.655.049c-.055.098.063-.147.003-.007zm-.087.05c.023.062-.116-.08-.007-.003zm.406.09c0 .088.021-.159.002-.011zm-.106-.044c-.08.124.103-.039 0 0zm-16.905.022c-.05.049-.014-.03 0 0zm17.01.259c.05.029-.044-.096 0 0zm.049.023h-.006zm-17.104.12c-.098.03-.005-.117 0 0zm17.056.036c-.005.07.074-.111 0 0zm-.084-.02c.062.068.048-.002 0 0zm.194.544c-.011.08.04-.155.004-.012zm-.048-.045c-.07.085.056-.001 0 0zm.147.068c.013.06.04-.127 0-.003zm-.086.084c.043.016.065-.07 0 0zm-.102.121c-.083.05.07-.018 0 0zm.005.024c-.058.062.085-.034 0 0zm-.04.257c-.07.064.049.017 0 0zm-.05.64c-.032.097.022-.155 0-.008zm-.028.055c-.022.034-.047-.058 0 0zm.163.061c.051.01.039-.052 0 0zm-.125.165c.02.05-.09-.034 0 0zm.052.314c.023.063.032-.134.002-.004zm-.376.714c.025.111-.056-.146 0 0zm.013.413c-.033.065.05-.032 0 0zm-.091.398l.001-.003zm-.254.522c.066.092-.079-.146 0 0zm-.733.864c.051.088-.102-.132 0 0zm.2.173l.016-.034zm-.297-.028c.022.054-.05-.022 0 0zm.165.098c.045.025.05-.09 0 0zm-.007.104c.026.1-.012-.155 0-.008zm.096-.022l-.002-.025zm-.41.097c-.02.025-.115-.04 0 0zm-.026.28c.051.01.038-.051 0 0zm-.059.161c-.044.096.09-.142 0 0zm-.343.025c.018.12-.038-.159-.003-.009zM68.013 36.41c-.053.004-.042-.069 0 0zm.343.12c-.049.1.055-.155.004-.011zm-.758-.04c-.02.056.11-.063 0 0zm.942.04c-.07.052.117-.117.012-.013zm-.132.097c.059.101-.054-.015 0 0zm.288.02c.01.081-.052.013-.002-.012zm-.202.092c.053.066-.067-.028 0 0zm-.11.118l.033.022-.03-.027zm.151.104h-.005zm.55.098c-.04.011-.06-.066 0 0zm-.368-.012l.01-.008zm.36.137c.012.038.057-.065 0 0zm.354.002c.04.11-.05-.034 0 0zm-.535.043c.107.033-.146-.064-.007-.003zm.336.072l-.007-.006zm-.123.03c.014.042.036-.073 0 0zm.383.175c-.024.047.046-.024 0 0zm.071.032v-.01zm6.175.083c.042.086-.005.01-.007-.004zm-.28.021c.028.073-.055-.02 0 0zm.693.002c.015.059.047-.014 0 0zm-.876.08c-.011.032.004-.14 0-.007zm.2-.007c.044.111-.062-.132 0 0zm-.28.043c.006.03-.03.071-.006-.01.008-.075.006-.02.006.01zm-4.611-.005c-.025.068.049-.036 0 0zm5.088.098c-.062.052.05.013 0 0zm.197.003l-.022-.001zm-.419.15c-.09.084.123-.1.005-.003zm-.048.065c-.08.04.043.022 0 0zm-.708.072c-.066.05.082-.028 0 0zm-1.845.062l-.01-.029zm.56.129c.06-.015.058-.054 0 0z"
          ></path>
          <g
            fill="#fff"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeMiterlimit="4"
            strokeOpacity="0.906"
            strokeWidth="0.265"
          >
            <path d="M70.48 30.203c-.168-.013-.271.093-.518.092-.26-.058-.515.023-.777.046-.258.064-.5.212-.75.323a.763.763 0 00-.472.518c-.037.246-.113.504-.1.744.04.234.03.566.263.684.15.179.26.39.491.5.185.144.394.267.57.363.24-.043.4.197.66.125.257.098.513.086.782.03.172-.066.411.065.52.023.044-.076.182.124.284-.025.252-.047.493-.158.761-.17.184-.014.452-.087.477-.17.212.07.126-.41.216-.182.096-.158-.03-.519.108-.421.033-.076-.18-.064.01-.11.017-.17.113-.3-.087-.362.196-.055.022-.306.092-.328-.015-.148.178-.22-.033-.347-.086-.113-.047-.245-.133-.346.03-.12-.135-.068-.125-.225-.216.182-.035-.176-.259-.076.05-.126-.05-.172-.153-.112.049-.151-.11-.256-.141-.039.025-.29-.264-.27-.428-.396.027.094-.033.188-.113.053-.114.177-.206-.208-.31.035-.038-.174-.457-.218-.553-.147-.128-.022-.173-.133-.282-.08zm-.064.035c-.009.004-.007-.018 0 0zm2.404 2.82c.024.017-.03-.025 0 0zm.034.096c.006 0-.005-.008 0 0z"></path>
            <path d="M75.992 30.217c-.245.102-.494.028-.74.111-.251-.112-.502.092-.742.078.085.174-.341.032-.393.063.01.175-.23.089-.27.3-.005.029-.048-.07-.15.025-.159.138-.437.207-.432.502.02.154-.199.041-.19.245-.073.233.125.465-.007.704.032.253-.055.443.127.644.11.213.28.288.424.414.03.234.22-.062.379.133-.195.07.236.135.255.23.267.109.348-.22.585-.074.064-.026.164.033.3-.018.109.256.42-.057.633.076.2-.22.433.108.672-.095.252-.116.492-.17.75-.228.286.044.373-.243.534-.397.2-.194.305-.456.457-.688.097-.232.09-.46.054-.709a1.465 1.465 0 00-.338-.707c-.191-.144-.36-.332-.593-.41-.292.031-.451-.116-.717-.129a.773.773 0 00-.598-.07zm-1.742.267c.073-.006-.012-.055 0 0z"></path>
            <path d="M72.916 33.393c-.208-.04-.133.197-.2.16-.103.12.045-.06-.116-.008-.178.043-.35-.245-.364.039-.14-.011-.024-.102-.138.018-.117-.03-.385-.005-.442.234-.116.087-.415.315-.224.402.21.012-.186.325.03.217.01.051.087.24.116.298.13.046.131.25.282.304.134.183.385.261.62.254.208.303.484-.15.751.034.099.064.14-.065.267-.003.122-.062.461.21.447-.047.268.068.217-.39.418-.342.033-.227.243-.11.328-.285.153.058-.075-.282.018-.236-.016-.108-.105-.104-.031-.153-.154-.135.119-.01.008-.209-.039-.075-.272.01-.134-.164.078-.038-.234.059-.1-.123.077-.164-.15.103-.04-.086a.897.897 0 00-.594-.174c-.247-.091-.483-.013-.736-.054-.004-.088-.112-.05-.166-.076zm-.871.238c-.027.13-.09-.087 0 0zm.012.004c-.022.135-.038.143 0 0z"></path>
          </g>
          <path
            fill="#fca2a2"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeMiterlimit="4"
            strokeOpacity="0.906"
            strokeWidth="0.265"
            d="M73.927 30.348a.756.945 0 01-.756.945.756.945 0 01-.756-.945.756.945 0 01.756-.945.756.945 0 01.756.945z"
          ></path>
          <g
            fillOpacity="0.896"
            stroke="none"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeMiterlimit="4"
            strokeOpacity="0.906"
            transform="matrix(.87522 0 0 .71192 28.35 14.703)"
          >
            <path
              fill="#8bfc8b"
              strokeWidth="0.265"
              d="M50.758 18.4a2.272 1.804 0 01-2.272 1.805 2.272 1.804 0 01-2.272-1.804 2.272 1.804 0 012.272-1.804 2.272 1.804 0 012.272 1.804z"
            ></path>
            <path
              fill="#b8fdb8"
              strokeWidth="0.188"
              d="M50.096 18.4a1.61 1.279 0 01-1.61 1.28 1.61 1.279 0 01-1.61-1.28 1.61 1.279 0 011.61-1.278 1.61 1.279 0 011.61 1.279z"
            ></path>
            <path
              fill="#000"
              strokeWidth="0.072"
              d="M49.104 18.4a.618.49 0 01-.618.492.618.49 0 01-.618-.491.618.49 0 01.618-.491.618.49 0 01.618.49z"
            ></path>
          </g>
          <g
            fillOpacity="0.896"
            stroke="none"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeMiterlimit="4"
            strokeOpacity="0.906"
            transform="matrix(-.87522 0 0 .71192 117.991 14.703)"
          >
            <path
              fill="#8bfc8b"
              strokeWidth="0.265"
              d="M50.758 18.4a2.272 1.804 0 01-2.272 1.805 2.272 1.804 0 01-2.272-1.804 2.272 1.804 0 012.272-1.804 2.272 1.804 0 012.272 1.804z"
            ></path>
            <path
              fill="#b8fdb8"
              strokeWidth="0.188"
              d="M50.096 18.4a1.61 1.279 0 01-1.61 1.28 1.61 1.279 0 01-1.61-1.28 1.61 1.279 0 011.61-1.278 1.61 1.279 0 011.61 1.279z"
            ></path>
            <path
              fill="#000"
              strokeWidth="0.072"
              d="M49.104 18.4a.618.49 0 01-.618.492.618.49 0 01-.618-.491.618.49 0 01.618-.491.618.49 0 01.618.49z"
            ></path>
          </g>
          <path
            fill="#f2f2f2"
            stroke="#f2f2f2"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.265"
            d="M73.3 40.414c.007.1.02-.16.001-.003zm-4.316-.031c.014-.008-.036-.032 0 0zm.006.01l.022.035c-.04-.014.018.044-.047.056.034-.07.063.045.043-.037.045.029.042.052.103.024-.013-.032.086-.092-.01-.02-.016.02-.014-.096-.054-.027.031-.07-.062.08-.053-.035l-.006-.006zm.733.037c.061.024-.027.092.013.08.018.016-.088.074-.052.035-.059.034 0-.078-.073-.037.003.02-.108-.016-.045.035-.043-.009-.02-.135-.065-.033-.031.016-.08-.02-.115.052.046.05-.078-.026-.08.026-.01-.017-.077.081-.058.002-.106-.02-.158.092-.27.086-.204.078-.418.102-.58.256-.322.2-.597.501-.707.87-.117.362-.114.748-.146 1.124-.054.861-.043 1.732.104 2.584.057.339.111.678.19 1.012.103.274.233.542.278.834.2.66.462 1.315.894 1.861.162.21.312.435.514.61.356.268.811.316 1.235.404.483.095.975.144 1.467.166.652-.067 1.276-.282 1.904-.461.348-.112.701-.234.998-.453.37-.233.75-.458 1.072-.756.506-.426.998-.867 1.496-1.301.301-.323.509-.717.734-1.093.22-.392.326-.833.419-1.269.07-.281.15-.572.096-.864-.05-.479-.131-.954-.24-1.423a9.39 9.39 0 00-.753-1.293c-.184-.19-.421-.324-.586-.535-.356-.102-.71-.217-1.08-.257a10.032 10.032 0 00-1.78-.127c-.243.027-.496-.058-.73-.002-.04.01-.1.086-.068.007.003-.039-.075-.09-.064-.02-.125.043-.263-.034-.379.036-.038.011-.177-.12-.121-.021-.042-.124-.161.03-.25.004-.286.028-.573-.018-.86-.018-.293.04-.582-.03-.875-.011-.176.005-.354.109-.519.032-.092-.004-.184.034-.248-.05-.032.134-.186-.037-.215.003-.035.001-.101.086-.08-.003-.035-.004-.115.035-.094-.016-.024.091-.088-.008-.129.062.044-.064-.061.006 0 .004.014.061-.06-.027-.02-.039-.068.05.002-.105-.087-.045-.024-.033.013-.1-.065-.07zm3.877.136c-.002-.06-.042-.056 0 0zm-4.584-.132c-.013.016-.002-.015 0 0zm.738.052c.011.023-.028-.029 0 0zm3.625.012c.012.069.032-.043 0 0zm-.072.022h-.022zm-.045.015l.03.037c.035-.006-.012-.063-.03-.037zm-3.772 0c.021.06.006.064-.037.026.045.012-.003-.052.037-.026zm.34.008c-.012.02-.014-.013 0 0zm6.951.18l-.027-.018zm.364.191c.058.046-.062-.01 0 0zm-9.547.125l-.012.047c.002.005.052-.07.012-.047zm10.103.264c-.048.023.018-.05 0 0zm-9.85.826c-.042.079.053-.153.002-.004zm-.525.398l-.03.026c.014.008.079-.04.03-.026zm11.365.25l.01.047c-.014 0-.04-.064-.01-.047zm-10.949.184l-.04-.012.007-.006zm-.476.305l.045.017c.057-.006-.035-.026-.045-.017zm.673.039c-.051.009-.043-.055 0 0zm-.492.474c-.022.06.05-.04 0 0zm11.524.137c-.034.06.052-.017 0 0zm-11.664.004l-.026.031c.015.003.08-.048.026-.031zm.5.184l-.041-.012.007-.006zm-.451.097c-.018.052.047-.017 0 0zm11.65.1l-.01.047c.014-.002.04-.064.01-.047zm-11.57.133l.003-.016zm.043.152l-.022.033c-.008.005.074-.056.022-.033zm.822.068c-.104.042.141-.085.003-.002zm-.848.364l-.023.03c.013.003.073-.047.023-.03zm.035.568l-.005.048c.015.006.03-.074.005-.048zm10.9.756l.007.035c-.014 0-.037-.046-.006-.035zm-.054.263c-.011.06.043-.035 0 0zm-.021.022c.013.047.031-.045 0 0zm-10.618.309c-.045.043.034.015.018-.006zm.282.171l-.018.036c.012 0 .061-.057.018-.036zm.193.15l.037.022c-.01.028-.08-.026-.037-.021zm-.309.09c-.026.054.053-.025 0 0zm9.774.192c.086-.006-.16-.015-.005 0zm-9.25.176c-.004.1-.02-.162 0-.003zm8.86.295c.044.019.016-.063 0 0zm-.073.205l.004.035c.015-.002.009-.073-.004-.035zm-.057.086l.035.015-.03-.021zm-.074.105v-.004zm-1.996 1.17l.045.016c.02-.026-.043-.016-.045-.016zm-5.772.104l-.001.048c.01-.004.035-.074.001-.048zm.229.062l.01.047c-.015-.001-.041-.064-.01-.047zm-.082.092l-.002-.004z"
          ></path>
          <g strokeOpacity="1">
            <path
              fill="#f2f2f2"
              fillOpacity="1"
              stroke="#f2f2f2"
              strokeDasharray="none"
              strokeDashoffset="0"
              strokeMiterlimit="4"
              strokeWidth="0.276"
              d="M81.111 52.615c-.255 1.32-1.882 2.434-4.204 2.434s-4.633-1.16-4.204-2.434c.406-1.208 1.767-1.569 4.003-1.698 2.377-.138 4.829-.494 4.405 1.698z"
            ></path>
            <path
              fill="none"
              stroke="#000"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeWidth="0.265"
              d="M75.437 55.088c2.153-1.04.498-1.948.334-2.907"
            ></path>
            <path
              fill="none"
              stroke="#000"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeWidth="0.265"
              d="M78.71 55.054c1.595-.999.258-1.978.268-2.672"
            ></path>
          </g>
          <g strokeOpacity="1">
            <path
              fill="#f2f2f2"
              fillOpacity="1"
              stroke="#f2f2f2"
              strokeDasharray="none"
              strokeDashoffset="0"
              strokeMiterlimit="4"
              strokeWidth="0.276"
              d="M81.111 52.615c-.255 1.32-1.882 2.434-4.204 2.434s-4.633-1.16-4.204-2.434c.406-1.208 1.767-1.569 4.003-1.698 2.377-.138 4.829-.494 4.405 1.698z"
            ></path>
            <path
              fill="none"
              stroke="#000"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeWidth="0.265"
              d="M75.437 55.088c2.153-1.04.498-1.948.334-2.907"
            ></path>
            <path
              fill="none"
              stroke="#000"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeWidth="0.265"
              d="M78.71 55.054c1.595-.999.258-1.978.268-2.672"
            ></path>
          </g>
          <path
            fill="#fca2a2"
            fillOpacity="1"
            stroke="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.379"
            d="M66.498 18.236c-.047.02-.07.08-.004.076.014.016.068-.019.016-.023-.006-.006.015-.064-.012-.053zm.191.034c.046.03-.04.11.028.123-.056-.043-.018.09-.078.002-.047-.012-.15.008-.121.076-.04.006-.025-.1-.045-.037.01.03.055.1 0 .117.064-.016.073.125.002.082-.021.003-.046.066-.034-.006.014-.048-.06-.019-.035.014-.02.014-.138-.024-.056.013.046.024-.034.085-.026.022-.071.043.086.08.026.136-.013.057.01.145-.063.168.051.01.056.133-.01.088.024.044-.098.053-.037.106.072.01-.071.027-.03.064.018.06-.06-.041-.015.035.054.034-.018.076-.049.038.006-.005-.116.052-.023.02-.011.06.136.004.076.07-.012-.042-.032.05-.064.019-.033-.001-.03.075-.002.037.004.013.154-.02.058.01-.038.012-.033.065-.004.092-.016-.03-.102-.032-.064.017.04.028.065.05.117.049-.026.06-.064-.058-.064.031-.024.023.055.083-.008.041-.069.028.083.009-.018.053.016.03-.071.014-.06.043-.01-.004.017-.031-.037-.016-.045-.018.048.04.05.02-.007.026-.08.03-.03.049.036.06-.029-.045.032.006-.047-.007-.041.107.006.06 0 .044.024-.045.022-.002.029-.008.107.058.01.01-.032-.026.01.076-.045.004.012.02-.033.056.007.058-.032-.015-.064-.008 0 .01-.008.079.05-.097.014.041.042.04.061-.09.033.031-.033.012-.067-.087-.015.01.016.015.092.054.021.022-.026.02-.141-.016-.05.04.009.043.067-.043.019.028-.047-.025.02.04-.03.03.02.042-.103.053.008.071.03-.036.06.033.1.044-.075-.024.072.062-.045.056.007.04.064.089.111.114-.054-.027-.093.075-.027.082l-.02.043c.018-.03-.012.06.037.063v.001l-.046.014c-.04.002.047.037-.006.052l.035.022c-.05.029.031.076-.029.106-.066.039-.035.114-.07.17.019.038.015.114.066.124-.065-.059.08-.119.078-.035.033.018-.06.056 0 .086 0 .043.022.1-.021.13.123.042.074.225.197.267-.018.083-.164.014-.164.11.1-.059.237.085.16.179.08-.047.194.043.168.132.223.055.293-.23.394-.367a.556.556 0 01.3-.263c-.036-.038-.036-.15.04-.114.199-.197.389-.428.65-.543.057-.013.131-.055.116-.127.052-.04.128.033.1.088.157-.103.357-.243.548-.138.074-.02.113-.198.2-.112.031.005.09.006.09.055.06.044.14-.154.146-.022.065.075.116-.11.2-.058.052.058.158.005.142-.065-.023.079-.183.049-.104-.025.003-.053-.098-.024-.068-.086.036-.059-.033-.076-.022-.123-.043-.045-.076-.087-.136-.084-.044-.03-.057-.126-.127-.096-.157-.147-.213-.394-.426-.48.033-.134-.15-.16-.178-.272-.248-.118-.397-.378-.661-.464a1.805 1.805 0 01-.315-.215c-.084.072-.217-.001-.303.011.081-.042-.054-.097-.094-.1-.059.007-.061-.063-.09-.077-.024.014-.005.117-.035.021-.05-.054-.1.128-.13.02.004-.068-.108.003-.087-.082-.015-.031-.056-.061-.09-.037zm-.306 3.248c-.053-.027.032.05 0 0zm.383-3.188c.04.064-.097.001-.016-.006zm-.202.024l.008-.006zm-.125.226c-.009.06.044-.028 0 0zm-.05.104l-.026.01c-.002-.006.027-.035.026-.01zm.07.029c.017.02-.029.042-.02.058-.026.031-.091 0-.04-.029.006-.026.036-.036.06-.03zm-.147.08l.016.031c.014-.008.002-.062-.016-.031zm.01.059c.051.035-.04-.075 0 0zm1.89.117c.052.059-.032-.149 0-.005zm-2.054.289c-.037.038.06.045.016.004.005-.01-.024-.028-.016-.004zm.016.363c.008-.004-.014-.007 0 0zm.043.113l-.045.012.016-.021zm-.02.108c-.036.005-.001-.126 0 0zm-.074-.035c.058-.025-.02.044-.006-.004zm.065.04c.044-.003.019.05-.026.022-.004-.004-.048-.028-.012-.014l-.003-.013zm-.079.044l-.023-.008.016-.008zm3.307.33c-.014.03.092-.033.023-.02zm-.049.101c.095.065-.092-.004 0 0zm-.24.135c-.039.038.002-.087 0 0zm.303.025c.066.024-.078-.099 0 0zm-.336.073l.002-.012zm-.791.084l-.026-.02.008-.006zm-.291.013l-.024.008c.005-.003.017-.019.024-.008zm-.397.248c.067.05-.107.061-.04.006l.019-.01zm-1.21.239c-.013.003-.028.058.007.043-.05.091-.1-.117-.008-.043zm.97.062c.027.091-.043-.005 0 0zm-1.111.174c-.033.058.053-.032 0 0zm.064.049l-.004-.002zm-.016.015c-.073-.008-.007.128.032.063.002-.007.003-.092-.032-.063zm.792.018l.003.033c-.016-.002-.032-.041-.003-.033zm-.774.125l-.016.035c.039.044.077-.096.016-.035zm.08.031l-.008-.004zm.518.084c.025.049-.049-.02 0 0zm-.574.051c-.077.02.051.025.015-.014zm.445.002c.086.057-.086.174-.106.07.035-.021.055-.084.106-.07zm-.479.03c-.047.074.067-.038 0 0zm.063.107l-.022.04c.036.073.092-.101.022-.04zm.148.03c-.028.056.05-.027 0 0zm-.023.08c-.063.06.06-.026 0 0zm.035.046c-.06.008.012.099.039.053-.02.063.044-.033.002-.004.007-.02-.015-.079-.041-.049z"
          ></path>
          <path
            fill="#fca2a2"
            fillOpacity="1"
            stroke="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.379"
            d="M79.799 18.053c-.037-.012-.023.06.008.043.031.026-.025.068-.051.045-.184.021-.363.064-.543.105.02.028-.037.075-.049.035-.005.036-.058-.001-.064.032-.003-.035-.046.005-.024.019-.014.003-.052.026-.031.047-.017.021-.05-.012-.063.017-.01-.037-.06.037-.017.026-.021.03-.078.002-.086.045a3.107 3.107 0 00-.56.256c.01.01.06-.01.027.017 0 .006-.008.056-.028.031-.008.032-.06-.012-.027-.021-.04-.005-.003.065-.041.057-.002.026-.058.032-.049-.002.005-.035-.041-.006-.027.013-.06-.001-.076.1-.14.076a.06.06 0 01-.026.065c.029-.012.023.057 0 .033-.047.007.06.091-.037.006-.034-.012.008.036-.022.033v.03l.018.021c-.013.022-.065-.036-.047.016l-.033-.036c-.025-.016-.036.037-.012.042-.006.018-.011.065.021.066-.027-.002-.018.057-.05.031.049.01-.006.101-.034.057-.032-.01-.076.022-.06.058-.028-.027-.062.02-.037.043-.01.032-.082.01-.063.055l-.716.83c.038-.014.083-.053.126-.025.014-.027.077-.036.077.004l.03.021c.02-.028.046.014.063.014l-.017.004.035.011c.014-.042.077.032.082-.02.006-.033.044-.004.06-.024l.006.015c-.019-.034.007-.104.053-.082-.011.035.06.018.035-.006l.018-.02c-.013-.011-.048.025-.033-.013.035.014.084-.09.035.013.007 0 .053.025.023.038.006.025-.024.054-.049.039-.009.02.033.03.03.006.018.012.049-.012.056.017.008-.036.053.026.063-.01-.021.045.071 0 .025-.007-.002-.037.06-.012.053.015l.046.014c.013-.01.026-.037.048-.03-.035-.012.042-.068.013-.029-.013.025.034.018.026-.002-.004.033.055-.017.033.022l-.023.004c.028-.007.007.046.039.031.025-.002-.01.051.02.008.003-.04.05.056.019-.012l.02.033.01.034-.022-.022-.022.022.026-.006c-.007.021.014.053.039.04l-.008.026c.03.004.003-.041.033-.041-.042-.018.034-.048.016-.004-.026-.005.035.012.013.033-.011.024-.077-.003-.047.047.036.047.059-.019.069-.045l.002.028c-.037.025.034.077.047.033l-.026-.024c-.01-.025.02-.01.02-.023.028-.004.065.064.004-.021-.014-.016.013-.054-.016-.067l.01-.006.027.014c-.03.02.075.007.02.039-.01.013.033.042-.006.01-.007.026.007.105.047.068l.013.004c.007-.029.028.057.043-.004v.012l-.039.02c.004-.042-.066 0-.023.011-.02.022 0 .078.03.05l.01-.02c.036.03.025-.048.054-.04v-.017c.015.013.02.035.025.054-.031-.004-.04.042-.01.05.021.035.049-.03.078-.009-.02.037.005-.011.02-.002.02-.009.07.007.047.037.02.005.05.051.07.02.032-.001.077.002.086.04l.03.015-.032.033c.13.037.253.097.345.2.018.01.046.007.042.042.066.123.204.197.275.32.033.022.09.012.102.059l.037-.004c.004.023-.046.079.017.049l.032.012c-.01.023-.068.024-.043.058.015 0 .074-.032.078.006-.021.011.015.05.015.016.015-.034.054.015.041.037.087.171.184.337.303.488l-.03.028c0 .027.056-.015.042.023.04.033.094-.038.064-.074.007-.061.024-.122.02-.184l.043-.021c-.004-.037.046-.07.074-.04.017-.01.006-.06-.018-.037L80 21.604c-.03-.047.098-.005.025-.038-.047-.02.042-.085.041-.03-.005.004.004.062.024.032l-.016-.029c-.002-.025.048.006.02-.023-.02-.006-.019-.046-.045-.032l-.024-.023c-.004-.016.04-.016.012-.03.048-.035.07-.096.072-.154-.039.044-.057-.082-.006-.052.006.036.046-.029.012-.02.004-.026-.036-.028-.049-.014.015-.012-.004-.063.03-.043.018-.034.053.048.062.004l.043-.02c.033 0 .008-.045-.014-.036-.008-.028-.054-.03-.044-.067-.003-.013-.038-.036-.043-.01.007-.039.079-.04.066-.085-.01.011-.042-.016-.018-.02.002-.029-.062.02-.007-.023.024-.016.054-.03.084-.022l.005-.023c.03.008.018-.041.047-.037l-.02-.016c-.017.027-.037-.04-.052-.01-.001-.027.046-.04.024-.068l.02-.018-.02-.039.005-.004-.007-.043c-.039.003.004-.068.021-.033.018.007.04-.04.008-.023.002-.025.033-.036.053-.026 0-.032-.093-.01-.018-.031.017.048.072-.037.024-.037-.028-.023.039-.039.015-.06-.011-.015-.029-.05-.004-.063 0-.068.033-.129.063-.188-.006-.032-.065-.07-.024-.1.023-.026.006-.068-.023-.081-.013-.032.04-.067.006-.092-.046-.084.057-.163.027-.248.04-.054-.144-.04-.014-.051.05 0-.003-.08.045-.078-.01-.095-.048-.182-.078-.272l.028-.005c-.04-.006-.06-.08-.014-.09-.008-.03-.069.025-.04-.022-.015-.025-.01-.065.018-.08-.01-.016-.046-.018-.046.006-.057-.003-.016-.076-.036-.107-.02-.17-.069-.334-.11-.498-.016.033-.086.006-.058-.028-.034.004.01-.045-.017-.05.044-.023.038-.118-.022-.106-.02-.017.008-.072-.03-.066-.007-.054-.08-.094-.124-.059-.02-.006-.006-.06-.035-.033-.036.023-.009-.053-.043-.037zm-2.4 2.191l-.012.026c-.011-.036-.056-.004-.053.021-.032-.01.008.03.02.016.026 0 .084-.037.044-.063zm1.769-1.922l.002.006-.03-.021zm-.928.407l-.002.013h.03c.007-.015-.02-.022-.028-.013zm-.97 1.4c.003.04-.066.043-.053.084-.028.014-.042-.05-.008-.043-.025-.032.04-.05.06-.041zm.06.025c.045.008-.03.08-.023.032-.003-.007.004-.05.023-.032zm-.053.05l.006.009-.029.002c-.013-.016.019-.017.023-.012zm.457.003c.033.013-.038.04-.017.01l.004-.012zm.174.002l.006.027c-.014.002-.035-.038-.006-.027zm-.474.018c-.032.026.043.013.01-.002zm.326.027l-.018.016.028.013c-.037 0 .01.058.015.02.012-.021-.03-.041-.004-.057l-.008-.006zm-.227.002c-.032.022.053.025.024-.002zm.547.113h-.017l.003-.013zm.121-.011c.016.013.041.018.012.04-.03.025.007-.03-.02-.033l-.015.008c-.017-.016.016-.022.023-.016zm2.067.246l.007.023c.02 0 .01-.037-.007-.023zm-.016.056c0 .004.059-.001.03-.02l-.012-.003zm-.002.168l-.02.016c0-.008.01-.024.02-.016zm-.094.127c-.031.011.008-.036 0 0z"
          ></path>
          <g
            fill="#000"
            fillRule="nonzero"
            stroke="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.265"
          >
            <path d="M71.528 31.367l.075-.109a2.672 2.672 0 00-1.046-.425 3.902 3.902 0 00-1.02-.032c-.327.027-.701.085-.993.12-.437.055-.736.067-.992.046.272.022.538.029.997.007.3-.015.666-.04.994-.04.348 0 .664.029.969.107.408.104.709.276.941.436l.075-.11z"></path>
            <path d="M70.693 32.737l.084-.102c-.245-.2-.58-.402-1-.493a2.712 2.712 0 00-.94-.024c-.303.04-.626.117-.893.173-.394.083-.657.116-.893.112.252.005.483-.008.902-.06.276-.035.595-.081.895-.093.313-.012.598.014.877.098.372.112.658.307.884.492l.084-.103z"></path>
          </g>
          <g
            fill="#000"
            fillRule="nonzero"
            stroke="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.265"
          >
            <path d="M71.06 32.102l.075-.109a3.467 3.467 0 00-1.206-.526 4.131 4.131 0 00-1.156-.08c-.386.023-.773.085-1.115.14-.503.081-.806.126-1.108.141.255-.013.654-.046 1.115-.09.347-.032.731-.064 1.11-.059.39.006.75.052 1.101.154.47.136.832.348 1.11.539l.074-.11z"></path>
            <g>
              <path d="M71.528 31.367l.075-.109a2.672 2.672 0 00-1.046-.425 3.902 3.902 0 00-1.02-.032c-.327.027-.701.085-.993.12-.437.055-.736.067-.992.046.272.022.538.029.997.007.3-.015.666-.04.994-.04.348 0 .664.029.969.107.408.104.709.276.941.436l.075-.11z"></path>
              <path d="M70.693 32.737l.084-.102c-.245-.2-.58-.402-1-.493a2.712 2.712 0 00-.94-.024c-.303.04-.626.117-.893.173-.394.083-.657.116-.893.112.252.005.483-.008.902-.06.276-.035.595-.081.895-.093.313-.012.598.014.877.098.372.112.658.307.884.492l.084-.103z"></path>
            </g>
          </g>
          <g
            fill="#000"
            fillRule="nonzero"
            stroke="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.265"
            transform="matrix(-1 0 0 1 145.712 .118)"
          >
            <path d="M71.06 32.102l.075-.109a3.467 3.467 0 00-1.206-.526 4.131 4.131 0 00-1.156-.08c-.386.023-.773.085-1.115.14-.503.081-.806.126-1.108.141.255-.013.654-.046 1.115-.09.347-.032.731-.064 1.11-.059.39.006.75.052 1.101.154.47.136.832.348 1.11.539l.074-.11z"></path>
            <g>
              <path d="M71.528 31.367l.075-.109a2.672 2.672 0 00-1.046-.425 3.902 3.902 0 00-1.02-.032c-.327.027-.701.085-.993.12-.437.055-.736.067-.992.046.272.022.538.029.997.007.3-.015.666-.04.994-.04.348 0 .664.029.969.107.408.104.709.276.941.436l.075-.11z"></path>
              <path d="M70.693 32.737l.084-.102c-.245-.2-.58-.402-1-.493a2.712 2.712 0 00-.94-.024c-.303.04-.626.117-.893.173-.394.083-.657.116-.893.112.252.005.483-.008.902-.06.276-.035.595-.081.895-.093.313-.012.598.014.877.098.372.112.658.307.884.492l.084-.103z"></path>
            </g>
          </g>
        </g>
        <g
          strokeWidth="0.265"
          aria-label="CAT PLAY AREA"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'Fredoka One'",
            WebkitTextAlign: "center",
            textAlign: "center",
          }}
          fontFamily="sans-serif"
          fontSize="8.467"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          textAnchor="middle"
          transform="translate(-.373 3.569)"
        >
          <path
            d="M215.134 79.83v.881q-.422-.393-.901-.587-.476-.194-1.013-.194-1.059 0-1.62.649-.563.645-.563 1.869 0 1.22.562 1.868.562.645 1.62.645.538 0 1.014-.194.48-.195.9-.587v.872q-.437.298-.93.447-.487.148-1.033.148-1.401 0-2.207-.855-.807-.86-.807-2.344 0-1.489.807-2.345.806-.86 2.207-.86.554 0 1.042.15.492.144.922.438z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M218.487 80.178l-1.133 3.072h2.27zm-.472-.823h.947l2.352 6.172h-.868l-.562-1.583h-2.782l-.562 1.583h-.881z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M220.703 79.355h5.221v.703h-2.191v5.47h-.84v-5.47h-2.19z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M230.257 80.041v2.32h1.05q.582 0 .9-.302.32-.302.32-.86 0-.554-.32-.856-.318-.302-.9-.302zm-.836-.686h1.886q1.037 0 1.566.471.534.468.534 1.373 0 .914-.534 1.38-.529.468-1.566.468h-1.05v2.48h-.836z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M234.527 79.355h.835v5.47h3.006v.702h-3.84z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M241.501 80.178l-1.132 3.072h2.27zm-.471-.823h.947l2.352 6.172h-.868l-.562-1.583h-2.783l-.562 1.583h-.88z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M243.725 79.355h.898l1.711 2.539 1.7-2.539h.896l-2.183 3.233v2.94h-.839v-2.94z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M220.783 91.144l-1.133 3.072h2.27zm-.471-.823h.947l2.352 6.172h-.868l-.562-1.583h-2.783l-.562 1.583h-.88z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M227.44 93.6q.268.09.52.388.256.298.513.819l.847 1.686h-.897l-.79-1.583q-.306-.62-.595-.823-.285-.202-.781-.202h-.91v2.608h-.835v-6.172h1.885q1.059 0 1.58.443.52.442.52 1.335 0 .583-.272.967-.27.385-.786.534zm-2.093-2.593V93.2h1.05q.604 0 .91-.277.31-.282.31-.823 0-.542-.31-.815-.306-.277-.91-.277z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M230.395 90.321h3.903v.703h-3.068v1.827h2.94v.703h-2.94v2.237h3.142v.702h-3.977z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M237.807 91.144l-1.132 3.072h2.27zm-.47-.823h.946l2.352 6.172h-.868l-.562-1.583h-2.782l-.563 1.583h-.88z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
        </g>
        <g
          aria-label="Table 7 (2 pers)"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "sans-serif",
          }}
          strokeWidth="0.265"
          fontFamily="sans-serif"
          fontSize="5.644"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          textAnchor="middle"
        >
          <path
            d="M77.205 92.774h3.48v.468h-1.46v3.647h-.56v-3.647h-1.46z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M81.67 95.337q-.615 0-.852.14-.237.141-.237.48 0 .27.176.43.18.157.485.157.422 0 .676-.298.256-.3.256-.796v-.113zm1.011-.21v1.762h-.507v-.469q-.174.281-.433.416-.259.133-.634.133-.474 0-.755-.265-.278-.267-.278-.714 0-.52.347-.785.35-.265 1.042-.265h.71v-.05q0-.35-.23-.54-.23-.193-.645-.193-.265 0-.516.064-.25.063-.482.19v-.469q.278-.107.54-.16.262-.055.51-.055.67 0 1 .348.331.347.331 1.052z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M85.942 95.348q0-.56-.232-.876-.229-.32-.631-.32-.403 0-.634.32-.229.316-.229.876t.229.88q.231.316.634.316.402 0 .631-.317.232-.32.232-.879zm-1.726-1.078q.16-.275.403-.408.245-.135.584-.135.562 0 .912.447.353.446.353 1.174t-.353 1.174q-.35.447-.912.447-.34 0-.584-.133-.243-.135-.403-.41v.463h-.51V92.6h.51z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M87.309 92.6h.507v4.289h-.507z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M91.517 95.218v.248h-2.332q.033.524.315.8.283.273.788.273.292 0 .565-.072.275-.072.546-.215v.48q-.273.115-.56.176-.287.06-.581.06-.74 0-1.172-.43-.43-.43-.43-1.162 0-.758.408-1.202.41-.447 1.105-.447.623 0 .984.403.364.4.364 1.088zm-.507-.148q-.006-.417-.234-.665-.226-.248-.601-.248-.425 0-.68.24-.254.24-.293.675z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M94.075 92.774h2.646v.237l-1.494 3.878h-.582l1.406-3.647h-1.976z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M78.806 99.661q-.37.634-.548 1.254-.18.62-.18 1.257 0 .637.18 1.262.181.623.548 1.254h-.44q-.414-.647-.621-1.273-.204-.626-.204-1.243 0-.615.204-1.237.204-.623.62-1.274z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M80.341 103.476h1.943v.468h-2.613v-.468q.317-.328.863-.88.549-.554.69-.713.266-.3.371-.507.108-.21.108-.411 0-.328-.232-.535-.229-.207-.598-.207-.262 0-.554.091-.29.091-.62.276v-.562q.336-.135.628-.204.293-.07.535-.07.64 0 1.02.32t.38.855q0 .254-.096.482-.094.226-.345.535-.069.08-.438.463l-1.042 1.067z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M85.666 103.481v1.637h-.51v-4.26h.51v.468q.16-.276.402-.408.246-.135.585-.135.562 0 .912.446.353.447.353 1.175 0 .727-.353 1.174-.35.446-.912.446-.34 0-.585-.132-.242-.135-.402-.41zm1.725-1.077q0-.56-.231-.877-.23-.32-.631-.32-.403 0-.634.32-.23.317-.23.877 0 .559.23.879.231.317.634.317.402 0 .63-.317.232-.32.232-.88z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M91.399 102.274v.248h-2.332q.033.524.314.8.284.272.788.272.292 0 .565-.072.276-.071.546-.215v.48q-.273.116-.56.176-.286.061-.581.061-.739 0-1.171-.43-.43-.43-.43-1.163 0-.758.408-1.202.41-.446 1.105-.446.623 0 .984.402.364.4.364 1.089zm-.508-.149q-.005-.416-.234-.664-.226-.248-.6-.248-.425 0-.681.24-.254.24-.293.675z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M94.02 101.331q-.086-.05-.188-.071-.1-.025-.22-.025-.43 0-.662.281-.229.278-.229.802v1.626h-.51v-3.087h.51v.48q.16-.281.417-.416.256-.138.622-.138.053 0 .116.008.064.006.14.02z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M96.52 100.948v.48q-.216-.11-.447-.165-.232-.056-.48-.056-.377 0-.567.116-.188.116-.188.347 0 .177.135.279.135.099.543.19l.174.039q.54.115.766.328.229.209.229.587 0 .43-.342.68-.34.251-.934.251-.248 0-.519-.05-.267-.046-.565-.143v-.523q.282.146.554.22.273.072.54.072.359 0 .552-.122.193-.124.193-.347 0-.207-.14-.317-.139-.11-.61-.212l-.176-.041q-.472-.1-.681-.303-.21-.207-.21-.565 0-.436.31-.673.308-.237.876-.237.28 0 .529.041.248.042.457.124z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
          <path
            d="M97.412 99.661h.441q.414.65.618 1.274.206.622.206 1.237 0 .617-.206 1.243-.204.626-.618 1.273h-.44q.366-.63.545-1.254.182-.625.182-1.262t-.182-1.257q-.18-.62-.546-1.254z"
            style={{
              InkscapeFontSpecification: "sans-serif",
              WebkitTextAlign: "center",
              textAlign: "center",
            }}
          ></path>
        </g>
        <path
          fill="none"
          stroke="#000"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="0.42"
          d="M124.518 140.063l-.056-9.806"
        ></path>
        <path
          fill="none"
          stroke="#000"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="0.42"
          d="M152.272 140.063l-.056-9.806"
        ></path>
        <path
          fill="none"
          stroke="#000"
          strokeDasharray="3.175, 3.175"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="0.265"
          d="M124.518 140.063h27.754"
        ></path>
      </g>
    </svg>
  );
}

export default FloorPlan;
