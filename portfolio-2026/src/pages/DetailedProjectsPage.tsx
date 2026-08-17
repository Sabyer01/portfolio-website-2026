export default function AllProjects() {
    return (
        <div className="w-full min-h-screen bg-th-black">
            <div className="w-full max-w-4xl py-10 mx-auto">

                <div className="justify-between flex flex-row">
                    <span className="py-2 text-md text-var[mute] font-bold text-th-owhite">
                        Back
                    </span>
                    
                </div>

                <div className="footer-divider bg-th-border h-px w-full" />
                <div className='max-w-4xl h-108 mx-auto border border-th-white/30 bg-th-header/30 rounded-sm flex justify-center items-center mt-6'>
                    <img className='w-full h-full object-contain' src="src/assets/internship.jpg" alt="Project 1" />
                </div>

                <div className='py-3'>
                    {/* Title */}
                    <span className='font-medium text-th-owhite text-xl text-justify'> HomeSense: An IOT-Based Household Electricity Monitoring System 
                        with Bill Prediction using Linear Regression and Recommendation System </span>
                    
                    
                    {/* Tech Stack and Date*/}
                        <div className='flex flex-row'>
                        <section className='mt-3 flex flex-wrap gap-3'>
                            
                            <span className='rounded-sm border max-w-xs  bg-transparent px-3 py-1.5 font-normal 
                                text-[13px] text-th-lgray hover:border-th-border hover:text-th-owhite'> February - April 2026</span>

                                <div className='footer-divider bg-th-border w-px h-full' />

                                <span className='rounded-sm border max-w-xs  bg-transparent px-3 py-1.5 font-normal 
                                text-[13px] text-th-lgray hover:border-th-border hover:text-th-owhite'> React</span>
                            <span className='rounded-sm border max-w-xs  bg-transparent px-3 py-1.5 font-normal 
                                text-[13px] text-th-lgray hover:border-th-border hover:text-th-owhite'> TypeScript</span>
                            <span className='rounded-sm border max-w-xs  bg-transparent px-3 py-1.5 font-normal 
                                text-[13px] text-th-lgray hover:border-th-border hover:text-th-owhite'> Tailwind CSS</span>
                        </section>

                        </div>
                        
                    {/* Descrip */}
                    <div className='mt-3'>
                    <h1 className='text-th-owhite text-md font-semibold mb-2'>Description</h1>
                    <p className='text-th-lgray/80 text-justify text-sm'> A mobile app that reads data from smart plugs — outlet adapters that measure 
                        each appliance's consumption to give households real-time, appliance-level insight into their electricity 
                        use, predicting monthly bills with machine learning and recommending simple ways to cut costs.</p>
                    </div>

                    <div className='mt-3'>
                    <h1 className='text-th-owhite text-md font-semibold mb-2'>Contributions</h1>
                    <span className='px-5 flex flex-col gap-2 text-sm'>
                    <li className='text-th-lgray/80 text-justify'> Developed the frontend of the mobile application using React Native and TypeScript, ensuring a responsive and user-friendly interface.</li>
                    <li className='text-th-lgray/80 text-justify'> Implemented the bill prediction feature using linear regression, allowing users to forecast their monthly electricity expenses based on historical data.</li>
                    <li className='text-th-lgray/80 text-justify'> Integrated a recommendation system that provides users with actionable insights to reduce energy consumption and lower their electricity bills.</li>
                    <li className='text-th-lgray/80 text-justify'> Collaborated with the backend team to ensure seamless data flow between the mobile app and the smart plug devices, enhancing real-time monitoring capabilities.</li>
                    </span>
                    </div>

                </div>
                


            <div className='mt-3 footer-divider bg-th-border h-px w-full' />

            <div className='mt-3'>
                <span className='text-th-owhite text-md font-semibold mb-2'>Other Projects</span>

                <div className='grid grid-cols-2 gap-10 mt-3'>
                    <div className='flex flex-col'>
                        
                        <div className='rounded-sm border-1 border-th-white/30 bg-th-header/30 w-full h-35 items-center justify-center flex'>
                            <div className='grid grid-cols-[0.3fr_0.7fr] justify-center items-center h-full w-full p-3 gap-2'>
                            <img src="src/assets/moviedex_addmovie.png" alt="Project 1" className='w-full h-full rounded-sm object-cover hover:scale-105 transition duration-300' />
                            
                            <section className='flex flex-col text-left items-start space-y-1.5'>
                                <h1 className='text-th-owhite text-md font-semibold'> HomeSense</h1>
                                <p className='text-th-lgray/80 text-justify text-sm'> Full-Stack </p>
                                <p className='text-th-lgray/80 text-sm text-justify line-clamp-3'> lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
                                lorem ipsum dolor sit amet, consectetur adipiscing elit lorem lorem ipsum dolor sit amet, consectetur adipiscing elit lorem</p>
                            </section>
                            </div>
                            
                        </div>
                        
                    </div>

                    <div className='rounded-sm border-1 border-th-white/30 bg-th-header/30 w-full h-35 items-center justify-center flex'>
                            <div className='grid grid-cols-[0.3fr_0.7fr] justify-center items-center h-full w-full p-3 gap-2'>
                            <img src="src/assets/moviedex_addmovie.png" alt="Project 1" className='w-full h-full rounded-sm object-cover hover:scale-105 transition duration-300' />
                            
                            <section className='flex flex-col text-left items-start space-y-1.5'>
                                <h1 className='text-th-owhite text-md font-semibold'> HomeSense</h1>
                                <p className='text-th-lgray/80 text-justify text-sm'> Full-Stack </p>
                                <p className='text-th-lgray/80 text-sm text-justify line-clamp-3'> lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
                                lorem ipsum dolor sit amet, consectetur adipiscing elit lorem lorem ipsum dolor sit amet, consectetur adipiscing elit lorem</p>
                            </section>
                            </div>
                            
                        </div>

                </div>

            
            
            </div>

        
        </div>
        </div>

    );
};