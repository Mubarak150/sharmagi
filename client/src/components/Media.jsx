import gmail from '/gmail-icon.svg'; 

export default function Media () {
    return (
        <div className="media contents">
                    <a href='https://www.linkedin.com/in/#' className="hidden md:flex gap-2 p-3 justify-center items-center group">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path className='fill-primary' d="M22.23 0H1.77C.792 0 0 .775 0 1.733v20.534C0 23.225.792 24 1.77 24h20.46C23.208 24 24 23.225 24 22.267V1.733C24 .775 23.208 0 22.23 0zM7.12 20.452H3.556V8.979H7.12v11.473zM5.34 7.533c-1.139 0-1.865-.758-1.865-1.712 0-.972.743-1.713 1.898-1.713s1.864.741 1.888 1.713c0 .954-.725 1.712-1.888 1.712zm14.641 12.92h-3.564v-6.373c0-1.601-.573-2.692-2.007-2.692-1.096 0-1.747.74-2.035 1.454-.104.251-.129.6-.129.948v6.663H8.688c.047-10.807 0-11.473 0-11.473h3.563v1.63c.473-.728 1.319-1.767 3.207-1.767 2.341 0 4.097 1.529 4.097 4.818v6.792z"/>
                        </svg>
                        <p className="">Linked In</p>
                    </a>

                    <a href='#' className="flex gap-2  p-3 justify-center items-center group">
                    <img src="/fb.svg" alt="" className="h-6" />
                        <p className="opacity-0 hidden group-hover:opacity-100 group-hover:inline">Face Book</p>
                    </a>

                    <a href='https://wa.me/# ' className="flex gap-2  p-3 justify-center items-center group">
                        <svg fill="#47484b" height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 308 308" xml:space="preserve" stroke="#47484b" stroke-width="0.0030800000000000003">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                            <g id="SVGRepo_iconCarrier"> <g id="XMLID_468_"> <path id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"/> <path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"/> </g> </g>
                        </svg>
                        <p className="opacity-0 hidden group-hover:opacity-100 group-hover:inline">Whats App</p>
                    </a>

                    <a href='https://wa.me/+923473788815/?text=Hello Mubarak! I came across your Portfolio and i would like to discuss ... ' className="flex gap-2  p-3 justify-center items-center group">
                        <img src={gmail} alt="" className="" />
                        <p className="opacity-0 hidden group-hover:opacity-100 group-hover:inline">Gmail</p>
                    </a>
                    
                </div>
    )
}