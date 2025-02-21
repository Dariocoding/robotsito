"use client";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen bg-black relative before:opacity-50 before:bg-black before:absolute before:inset-0 before:bg-[url('/bg.jpeg')] before:bg-cover before:bg-center before:bg-no-repeat">
      <div className="p-4">
        <div className="relative w-80 bg-white rounded-[25px] shadow-xl flex flex-col items-center p-5">
          <img
            src="/logo.jpeg"
            alt="Logo"
            className="w-20 h-20 mb-4 rounded-lg"
          />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Robot de Asistencia
          </h1>
          <p className="text-sm text-gray-600 mb-4">
            Tu ayudante en emergencias
          </p>
          <div className="w-11/12 rounded-2xl flex flex-col justify-center items-center text-white text-lg font-bold p-5">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 496.8 496.8"
              xmlSpace="preserve"
            >
              <path
                style={{ fill: "#f97906" }}
                d="M456,496.4v-57.6c0-44-35.2-78.4-79.2-78.4H119.2c-44,0-79.2,33.6-79.2,78.4v57.6H456z"
              />
              <polyline
                style={{ fill: "#e57200" }}
                points="40,440.4 40,496.4 456,496.4 456,440.4 "
              />
              <ellipse
                style={{ fill: "#f4ba38" }}
                cx={248}
                cy="374.8"
                rx="59.2"
                ry="52.8"
              />
              <path
                style={{ fill: "#5b5b5b" }}
                d="M312,356.4c0,34.4-28,60-62.4,60h-4c-34.4,0-62.4-25.6-62.4-60V326c0-34.4,28-62.4,62.4-62.4h4
c34.4,0,62.4,28,62.4,62.4V356.4z"
              />
              <path
                style={{ fill: "#3f3f3f" }}
                d="M248.8,261.2L248.8,261.2c34.4,0,63.2,28,63.2,62.4v33.6c0,34.4-28,60-62.4,60l0,0"
              />
              <path
                style={{ fill: "#ffcc4d" }}
                d="M112,68.4c0,2.4-1.6,4-4,4l0,0c-2.4,0-4-1.6-4-4v-64c0-2.4,1.6-4,4-4l0,0c2.4,0,4,1.6,4,4V68.4z"
              />
              <path
                style={{ fill: "#f4ba38" }}
                d="M108,0.4L108,0.4c3.2,0,4,0.8,4,4v58.4c0,3.2-1.6,4.8-4.8,4.8l0,0"
              />
              <rect
                x={96}
                y="56.4"
                style={{ fill: "#f29130" }}
                width={24}
                height={32}
              />
              <polyline
                style={{ fill: "#f97906" }}
                points="96,56.4 120,56.4 120,88.4 "
              />
              <path
                style={{ fill: "#0b6382" }}
                d="M136,135.6c0,9.6-7.2,16.8-16.8,16.8H96.8c-9.6,0-16.8-7.2-16.8-16.8V97.2c0-9.6,7.2-16.8,16.8-16.8
h22.4c9.6,0,16.8,7.2,16.8,16.8V135.6z"
              />
              <path
                style={{ fill: "#00233f" }}
                d="M96,80.4h23.2c9.6,0,16.8,7.2,16.8,16.8V134c0,9.6-8.8,18.4-17.6,18.4H96"
              />
              <path
                style={{ fill: "#0b6382" }}
                d="M408,135.6c0,9.6-7.2,16.8-16.8,16.8h-22.4c-9.6,0-16.8-7.2-16.8-16.8V97.2c0-9.6,7.2-16.8,16.8-16.8
h22.4c9.6,0,16.8,7.2,16.8,16.8V135.6z"
              />
              <path
                style={{ fill: "#00233f" }}
                d="M376,80.4h16c9.6,0,16,8,16,17.6v36c0,9.6-6.4,18.4-16,18.4h-16"
              />
              <path
                style={{ fill: "#f97906" }}
                d="M496,240.4c0,44.8-19.2,80-64,80H64c-44.8,0-64-34.4-64-80v-65.6C0,130,35.2,96.4,80.8,96.4H416
c44.8,0,80.8,33.6,80.8,79.2v64.8H496z"
              />
              <path
                style={{ fill: "#f29130" }}
                d="M496,240.4c0,44.8-19.2,80-64,80H64c-44.8,0-64-34.4-64-80v-65.6C0,130,35.2,96.4,80.8,96.4H416
c44.8,0,80.8,33.6,80.8,79.2v64.8H496z"
              />
              <path
                style={{ fill: "#f97906" }}
                d="M496,176.4v64c0,44.8-19.2,80-64,80H64c-44.8,0-64-34.4-64-80v-64"
              />
              <path
                style={{ fill: "#e57200" }}
                d="M496,239.6c0,44.8-19.2,80.8-64,80.8H64c-44.8,0-64-36-64-81.6"
              />
              <circle style={{ fill: "#0b6382" }} cx={108} cy={206} r="81.6" />
              <circle
                style={{ opacity: "0.2", fill: "#727272" }}
                cx={108}
                cy="214.8"
                r="81.6"
              />
              <path
                style={{ fill: "#00233f" }}
                d="M108,124.4c44.8,0,81.6,36.8,81.6,81.6s-36.8,81.6-81.6,81.6"
              />
              <g>
                <circle
                  style={{ fill: "#fffaf5" }}
                  cx={108}
                  cy={206}
                  r="55.2"
                />
                <circle
                  style={{ fill: "#fffaf5" }}
                  cx={108}
                  cy={206}
                  r="55.2"
                />
              </g>
              <path
                style={{ fill: "#efebe8" }}
                d="M69.6,166.8c21.6-21.6,56.8-21.6,78.4,0s21.6,56.8,0,78.4"
              />
              <g>
                <path
                  style={{ fill: "#cccac8" }}
                  d="M108,165.2c29.6,0,53.6,14.4,55.2,44c0-0.8,0-2.4,0-3.2c0-30.4-24.8-55.2-55.2-55.2
  S52.8,175.6,52.8,206c0,0.8,0,2.4,0,3.2C55.2,180.4,79.2,165.2,108,165.2z"
                />
                <circle
                  style={{ fill: "#cccac8" }}
                  cx="91.2"
                  cy="137.2"
                  r="3.2"
                />
                <circle
                  style={{ fill: "#cccac8" }}
                  cx={108}
                  cy="137.2"
                  r="3.2"
                />
                <circle
                  style={{ fill: "#cccac8" }}
                  cx="125.6"
                  cy="137.2"
                  r="3.2"
                />
              </g>
              <path
                style={{ fill: "#727272" }}
                d="M119.2,206c0,5.6-4.8,10.4-10.4,10.4s-10.4-4.8-10.4-10.4c0-5.6,4.8-10.4,10.4-10.4
S119.2,200.4,119.2,206z"
              />
              <path
                style={{ fill: "#3f3f3f" }}
                d="M108,195.6c5.6,0,10.4,4.8,10.4,10.4c0,5.6-4.8,10.4-10.4,10.4"
              />
              <g>
                <circle style={{ fill: "#fffaf5" }} cx={104} cy={202} r="3.2" />
                <circle
                  style={{ fill: "#fffaf5" }}
                  cx="112.8"
                  cy="210.8"
                  r="1.6"
                />
              </g>
              <circle
                style={{ fill: "#0b6382" }}
                cx="382.4"
                cy={206}
                r="81.6"
              />
              <circle
                style={{ opacity: "0.2", fill: "#727272" }}
                cx="382.4"
                cy="214.8"
                r="81.6"
              />
              <path
                style={{ fill: "#00233f" }}
                d="M382.4,124.4c44.8,0,81.6,36.8,81.6,81.6s-36.8,81.6-81.6,81.6"
              />
              <g>
                <circle
                  style={{ fill: "#fffaf5" }}
                  cx="382.4"
                  cy={206}
                  r="55.2"
                />
                <circle
                  style={{ fill: "#fffaf5" }}
                  cx="382.4"
                  cy={206}
                  r="55.2"
                />
              </g>
              <path
                style={{ fill: "#efebe8" }}
                d="M343.2,166.8c21.6-21.6,56.8-21.6,78.4,0s21.6,56.8,0,78.4"
              />
              <g>
                <path
                  style={{ fill: "#cccac8" }}
                  d="M382.4,165.2c29.6,0,53.6,14.4,55.2,44c0-0.8,0-2.4,0-3.2c0-30.4-24.8-55.2-55.2-55.2
  s-55.2,24.8-55.2,55.2c0,0.8,0,2.4,0,3.2C328.8,180.4,352.8,165.2,382.4,165.2z"
                />
                <circle
                  style={{ fill: "#cccac8" }}
                  cx="365.6"
                  cy="137.2"
                  r="3.2"
                />
                <circle
                  style={{ fill: "#cccac8" }}
                  cx="382.4"
                  cy="137.2"
                  r="3.2"
                />
                <circle
                  style={{ fill: "#cccac8" }}
                  cx="399.2"
                  cy="137.2"
                  r="3.2"
                />
              </g>
              <path
                style={{ fill: "#727272" }}
                d="M392.8,206c0,5.6-4.8,10.4-10.4,10.4S372,211.6,372,206c0-5.6,4.8-10.4,10.4-10.4
C388,195.6,392.8,200.4,392.8,206z"
              />
              <path
                style={{ fill: "#3f3f3f" }}
                d="M382.4,195.6c5.6,0,10.4,4.8,10.4,10.4c0,5.6-4.8,10.4-10.4,10.4"
              />
              <g>
                <circle
                  style={{ fill: "#fffaf5" }}
                  cx="378.4"
                  cy={202}
                  r="3.2"
                />
                <circle
                  style={{ fill: "#fffaf5" }}
                  cx="386.4"
                  cy="210.8"
                  r="1.6"
                />
              </g>
              <path
                style={{ fill: "#ffcc4d" }}
                d="M102.4,105.2L102.4,105.2c0-4,3.2-8.8,7.2-8.8h277.6c4,0,7.2,4,7.2,8l0,0"
              />
              <path
                style={{ opacity: "0.2", fill: "#727272" }}
                d="M295.2,280.4c0,9.6,0.8,16-8.8,16h-77.6
c-9.6,0-8.8-6.4-8.8-16l0,0c0-9.6,7.2-16,16.8-16h61.6C288,264.4,295.2,270.8,295.2,280.4L295.2,280.4z"
              />
              <path
                style={{ fill: "#ffe650" }}
                d="M295.2,272.4c0,9.6,0.8,16-8.8,16h-77.6c-9.6,0-8.8-6.4-8.8-16l0,0c0-9.6,7.2-16,16.8-16h61.6
C288,256.4,295.2,262.8,295.2,272.4L295.2,272.4z"
              />
              <path
                style={{ fill: "#ffc200" }}
                d="M295.2,272.4L295.2,272.4c0,9.6,0.8,16-8.8,16h-77.6c-9.6,0-8.8-7.2-8.8-16l0,0"
              />
              <polygon
                style={{ fill: "#ffed94" }}
                points="192,93.2 248,83.6 304,93.2 304,121.2 248,155.6 192,121.2 "
              />
              <polygon
                style={{ fill: "#ffcc4d" }}
                points="192,93.2 248,108.4 304,93.2 304,121.2 248,155.6 192,121.2 "
              />
              <polyline
                style={{ fill: "#f4ba38" }}
                points="248,108.4 304,93.2 304,121.2 248,155.6 "
              />
              <rect
                x="104.8"
                y="66.8"
                style={{ fill: "#ffcc4d" }}
                width={8}
                height={8}
              />
              <g>
                <rect
                  x={104}
                  y="9.2"
                  style={{ fill: "#ffed94" }}
                  width={8}
                  height="2.4"
                />
                <rect
                  x={104}
                  y="19.6"
                  style={{ fill: "#ffed94" }}
                  width={8}
                  height="2.4"
                />
                <rect
                  x={104}
                  y="29.2"
                  style={{ fill: "#ffed94" }}
                  width={8}
                  height="2.4"
                />
                <rect
                  x={104}
                  y="39.6"
                  style={{ fill: "#ffed94" }}
                  width={8}
                  height="2.4"
                />
                <rect
                  x={104}
                  y={50}
                  style={{ fill: "#ffed94" }}
                  width={8}
                  height="2.4"
                />
              </g>
              <g>
                <rect
                  x={184}
                  y="336.4"
                  style={{ fill: "#686868" }}
                  width={128}
                  height={8}
                />
                <rect
                  x={184}
                  y="352.4"
                  style={{ fill: "#686868" }}
                  width={128}
                  height={8}
                />
              </g>
              <rect
                x={80}
                y="416.4"
                style={{ fill: "#a0d827" }}
                width={32}
                height={32}
              />
              <polygon
                style={{ fill: "#cff23b" }}
                points="104,434 80,445.2 80,416.4 104,416.4 "
              />
              <rect
                x={120}
                y="416.4"
                style={{ fill: "#e2336d" }}
                width={32}
                height={32}
              />
              <polygon
                style={{ fill: "#f45683" }}
                points="144,434 120,445.2 120,416.4 144,416.4 "
              />
              <g>
                <path
                  style={{ fill: "#ffcc4d" }}
                  d="M404,444.4c0,2.4-1.6,4-4,4h-54.4c-2.4,0-4-1.6-4-4l0,0c0-2.4,1.6-4,4-4H400
  C402.4,440.4,404,442,404,444.4L404,444.4z"
                />
                <path
                  style={{ fill: "#ffcc4d" }}
                  d="M404,420.4c0,2.4-1.6,4-4,4h-54.4c-2.4,0-4-1.6-4-4l0,0c0-2.4,1.6-4,4-4H400
  C402.4,416.4,404,418,404,420.4L404,420.4z"
                />
                <path
                  style={{ fill: "#ffcc4d" }}
                  d="M404,468.4c0,2.4-1.6,4-4,4h-54.4c-2.4,0-4-1.6-4-4l0,0c0-2.4,1.6-4,4-4H400
  C402.4,464.4,404,466,404,468.4L404,468.4z"
                />
              </g>
              <path
                style={{ fill: "#ffc200" }}
                d="M248.8,240.4c0,0.8-0.8,2.4-2.4,2.4l0,0c-0.8,0-2.4-0.8-2.4-2.4V134.8c0-0.8,0.8-2.4,2.4-2.4l0,0
c0.8,0,2.4,0.8,2.4,2.4V240.4z"
              />
            </svg>
          </div>
          <div className="mt-5 flex flex-col gap-3 w-full">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg w-full flex items-center justify-center gap-2 transition-colors"
              onClick={() => (window.location.href = "tel:911")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              Llamar a Bomberos
            </button>
            <button
              className="bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg w-full flex items-center justify-center gap-2 transition-colors"
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/search/hospital",
                  "_blank"
                )
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
              Buscar Hospitales Cercanos
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg w-full flex items-center justify-center gap-2 transition-colors"
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/search/bombero",
                  "_blank"
                )
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
              Buscar Bomberos Cercanos
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg w-full flex items-center justify-center gap-2 transition-colors"
              onClick={() =>
                window.open(
                  "https://www.youtube.com/results?search_query=primeros+auxilios",
                  "_blank"
                )
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                  clipRule="evenodd"
                />
              </svg>
              Ver Primeros Auxilios
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
