import React from "react";

//Component for the main footer of the page
//uses SVG symbols to draw icons related to footerlinks/ information

export default function Footer() {

    return (
    
    <div id="mainfooter">

        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
            <symbol id="BookShelf" viewBox="0 0 64 64">
                <title>BookShelf</title>

                <g xmlns="http://www.w3.org/2000/svg" transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                    <path d="M40 360 c0 -144 -2 -170 -15 -170 -9 0 -15 -9 -15 -25 0 -16 6 -25 16 -25 9 0 18 -9 21 -20 7 -26 39 -26 46 0 5 19 14 20 227 20 213 0 222 -1 227 -20 7 -26 39 -26 46 0 3 11 12 20 21 20 10 0 16 9 16 25 0 16 -6 25 -15 25 -13 0 -15 26 -15 170 l0 170 -60 0 -60 0 0 -70 0 -70 -70 0 -70 0 0 60 0 60 -40 0 c-22 0 -40 5 -40 10 0 6 -43 10 -110 10 l-110 0 0 -170z m100 -10 l0 -160 -40 0 -40 0 0 160 0 160 40 0 40 0 0 -160z m100 30 l0 -130 -40 0 -40 0 0 130 0 130 40 0 40 0 0 -130z m340 -30 l0 -160 -40 0 -40 0 0 160 0 160 40 0 40 0 0 -160z m-300 -10 c0 -93 -4 -150 -10 -150 -6 0 -10 57 -10 150 0 93 4 150 10 150 6 0 10 -57 10 -150z m40 0 c0 -93 -4 -150 -10 -150 -6 0 -10 57 -10 150 0 93 4 150 10 150 6 0 10 -57 10 -150z m80 -25 c0 -54 0 -55 -30 -55 -30 0 -30 1 -30 55 0 54 0 55 30 55 30 0 30 -1 30 -55z m80 0 c0 -54 0 -55 -30 -55 -30 0 -30 1 -30 55 0 54 0 55 30 55 30 0 30 -1 30 -55z m-80 -100 c0 -21 -5 -25 -30 -25 -25 0 -30 4 -30 25 0 21 5 25 30 25 25 0 30 -4 30 -25z m80 0 c0 -21 -5 -25 -30 -25 -25 0 -30 4 -30 25 0 21 5 25 30 25 25 0 30 -4 30 -25z m-240 -5 c0 -17 -7 -20 -40 -20 -33 0 -40 3 -40 20 0 17 7 20 40 20 33 0 40 -3 40 -20z m227 -47 c-81 -2 -213 -2 -295 0 -81 1 -14 3 148 3 162 0 229 -2 147 -3z" />
                    <path d="M74 476 c-10 -26 4 -48 28 -44 33 4 33 52 0 56 -13 2 -25 -3 -28 -12z m36 -16 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z" />
                    <path d="M70 320 l0 -90 30 0 30 0 0 90 0 90 -30 0 -30 0 0 -90z m40 0 c0 -40 -4 -70 -10 -70 -6 0 -10 30 -10 70 0 40 4 70 10 70 6 0 10 -30 10 -70z" />
                    <path d="M170 390 l0 -110 30 0 30 0 0 110 0 110 -30 0 -30 0 0 -110z m40 0 c0 -53 -4 -90 -10 -90 -6 0 -10 37 -10 90 0 53 4 90 10 90 6 0 10 -37 10 -90z" />
                    <path d="M514 476 c-10 -26 4 -48 28 -44 33 4 33 52 0 56 -13 2 -25 -3 -28 -12z m36 -16 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z" />
                    <path d="M510 320 l0 -90 30 0 30 0 0 90 0 90 -30 0 -30 0 0 -90z m40 0 c0 -40 -4 -70 -10 -70 -6 0 -10 30 -10 70 0 40 4 70 10 70 6 0 10 -30 10 -70z" />
                    <path d="M360 315 c0 -19 5 -35 10 -35 6 0 10 16 10 35 0 19 -4 35 -10 35 -5 0 -10 -16 -10 -35z" />
                    <path d="M440 315 c0 -19 5 -35 10 -35 6 0 10 16 10 35 0 19 -4 35 -10 35 -5 0 -10 -16 -10 -35z" />
                    <path d="M360 215 c0 -8 5 -15 10 -15 6 0 10 7 10 15 0 8 -4 15 -10 15 -5 0 -10 -7 -10 -15z" />
                    <path d="M440 215 c0 -8 5 -15 10 -15 6 0 10 7 10 15 0 8 -4 15 -10 15 -5 0 -10 -7 -10 -15z" />
                </g>

            </symbol>

            <symbol id="Github" viewBox="0 0 24 24">


            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/>
            </symbol>


        </svg>

        {/* //banner / title info */}

        <div className="container-fluid bg-light">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 ">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-decoration-none lh-1">
                        <svg className="bi" width="64" height="64"><use xlinkHref="#BookShelf"></use></svg>
                    </a>
                    <span className="mb-3 mb-md-0">© 2023 ThatOneGent Creations</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                   
                    <li className="ms-3"><a className="text-muted" href="https://github.com/ThatOneGent/" target="_blank"><svg className="bi" width="64" height="64"><use xlinkHref="#Github"></use></svg></a></li>
                </ul>
            </footer>
        </div>
    </div>
    )


}