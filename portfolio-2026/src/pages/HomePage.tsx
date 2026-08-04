export default function HomePage() {
    return(
        <main id="home" className='min-h-screen w-full bg-th-black flex items-center justify-center'>

            <div className="relative max-w-5xl mx-auto">

                
                    <div className="flex flex-col ">
                        {/* Card 1 */}
                        <div className="footer-divider bg-th-border h-px w-full" />
                        <div className="grid grid-cols-[0.3fr_1.7fr] gap-10">
                            
                            <div className='m-4'>
                            <div className="flex items-center justify-center">
                                <img src="src/assets/internship.jpg" alt="Description" className="w-full h-auto rounded-sm object-cover hover:scale-105 transition duration-300"/>
                            </div>
                            </div>

                            <div className='m-4'>
                                <span className="flex flex-col gap-2">
                                <span className="text-md  font-bold text-th-white">Internship</span>
                                <time className="text-sm font-medium text-th-border"> February - April 2026 </time>
                                <p className="text-sm font-medium text-justify text-th-owhite">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </span>
                                
                            </div>
                        </div>
                        
                        
                        {/* Card 2 */}
                        <div className="footer-divider bg-th-border h-px w-full" />

                        <div className="grid grid-cols-[0.3fr_1.7fr] gap-10">
                            <div className='m-4'>
                                <div className="flex items-center justify-center">
                                    <img src="src/assets/dlsl.png" alt="Description" className="w-full h-auto object-cover bg-th-white rounded-sm hover:scale-105 transition duration-300"/>
                                </div>
                            </div>

                            <div className='m-4'>
                                <span className="flex flex-col gap-2">
                                <span className="text-md uppercase tracking-widest font-bold text-th-white">Education</span>
                                <time className="text-sm font-medium text-th-border"> June 15, 2023</time>
                                <p className="text-sm font-medium text-justify text-th-owhite">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </span>
                            </div>
                        </div>

                        
                

                        <div className="footer-divider bg-th-border h-px w-full" />

                    </div>
                
            </div>
        </main>
    );
};