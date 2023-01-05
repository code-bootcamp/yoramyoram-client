declare const window: typeof globalThis & {
  kakao: any;
};

export const makeMap = (x: any, y: any) => {
  const container = document.getElementById("map");

  const options = {
    center: new window.kakao.maps.LatLng(x, y),
    level: 3,
  };

  const map = new window.kakao.maps.Map(container, options);

  const geocoder = new window.kakao.maps.services.Geocoder();

  const marker = new window.kakao.maps.Marker({
    position: map.getCenter(),
  });

  marker.setMap(map);

  geocoder.coord2RegionCode(x, y, function (result: any, status: any) {
    // 정상적으로 검색이 완료됐으면
    if (status === window.kakao.maps.services.Status.OK) {
      const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

      // 결과값으로 받은 위치를 마커로 표시합니다
      const marker = new window.kakao.maps.Marker({
        map,
        position: coords,
      });

      map.setCenter(coords);
    }
  });
};

// import Head from "next/head";
// import { useEffect } from "react";
// import * as mq from "../../../commons/styles/mediaQueries";
// import { KakaoMapWrapper } from "./kakaoMap.styles";

// declare const window: typeof globalThis & {
//   kakao: any;
// };

// export default function KakaoMapPage() {
//   useEffect(() => {
//     const script = document.createElement("script"); // <script></script>
//     script.src =
//       "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=970dde8de2e190016127944a08aacc10";
//     document.head.appendChild(script);

//     script.onload = () => {
//       window.kakao.maps.load(function () {
//         const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
//         const options = {
//           // 지도를 생성할 때 필요한 기본 옵션
//           center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
//           level: 3, // 지도의 레벨(확대, 축소 정도)
//         };

//         const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
//         // console.log(map);

//         // 마커가 표시될 위치입니다
//         const markerPosition = new window.kakao.maps.LatLng(
//           33.450701,
//           126.570667
//         );

//         // 마커를 생성합니다
//         const marker = new window.kakao.maps.Marker({
//           position: markerPosition,
//         });

//         // 마커가 지도 위에 표시되도록 설정합니다
//         marker.setMap(map);
//       });
//     };
//   }, []);

//   useEffect(() => {});

//   return (
//     <>
//       <KakaoMapWrapper id="map"></KakaoMapWrapper>
//     </>
//   );
// }
