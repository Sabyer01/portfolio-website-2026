export default function ProjectsPage(){
    return (
    <div className='w-full min-h-screen bg-th-black'>
        <div className='w-full max-w-4xl py-10 mx-auto'>

                <div className='justify-between flex flex-row'>
                    <div className=' py-5 text-lg tracking-[0.2em] font-bold uppercase text-th-owhite'>Projects</div>
                    
                    <div className='py-5 text-lg tracking-[0.2em] font-bold uppercase text-th-owhite' >View All Projects</div>
                        
                
                </div>

                {/* Top Divider */}
            <div className="footer-divider bg-th-border h-px w-full" />
                <div className='grid grid-cols-2 gap-10'>
                    <div className='flex flex-col mt-10'>
                    
                        {/* Project 1 */}
                        <div className='rounded-sm border-1 border-th-white/30 bg-th-header/30 w-full h-72 items-center justify-center flex'>
                            <img src="src/assets/moviedex_addmovie.png" alt="Project 1" className='w-full h-auto object-cover hover:scale-105 transition duration-300' />
                        </div>
                        
                        <span className='text-md py-3'>Project 1</span>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas sunt amet officia neque 
                            aliquid alias ipsam eum sed illo nisi dolorum esse architecto perspiciatis, sequi laboriosam rerum fuga harum quam?</p>
                    
                        </div>

                        {/* Project 2 */}
                        <div className='flex flex-col mt-10'>
                        <div className='rounded-sm border border-th-owhite bg-th-owhite w-full h-72 items-center justify-center flex'>
                        <img src="https://via.placeholder.com/400x200" alt="Project 2" className='w-full h-auto object-cover hover:scale-105 transition duration-300' />
                        </div>
                        
                        <span className='text-md py-3'>Project 2</span>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas sunt amet officia neque 
                            aliquid alias ipsam eum sed illo nisi dolorum esse architecto perspiciatis, sequi laboriosam rerum fuga harum quam?</p>
                         
                        </div>

                        {/* Project 2 */}
                        <div className='flex flex-col mt-10'>
                        <div className='rounded-sm border border-th-owhite bg-th-owhite w-full h-72 items-center justify-center flex'>
                        <img src="https://via.placeholder.com/400x200" alt="Project 2" className='w-full h-auto object-cover hover:scale-105 transition duration-300' />
                        </div>
                        
                        <span className='text-md py-3'>Project 2</span>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas sunt amet officia neque 
                            aliquid alias ipsam eum sed illo nisi dolorum esse architecto perspiciatis, sequi laboriosam rerum fuga harum quam?</p>
                         
                        </div>

                        {/* Project 2 */}
                        <div className='flex flex-col mt-10'>
                        <div className='rounded-sm border border-th-owhite bg-th-owhite w-full h-72 items-center justify-center flex'>
                        <img src="https://via.placeholder.com/400x200" alt="Project 2" className='w-full h-auto object-cover hover:scale-105 transition duration-300' />
                        </div>
                        
                        <span className='text-md py-3'>Project 2</span>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas sunt amet officia neque 
                            aliquid alias ipsam eum sed illo nisi dolorum esse architecto perspiciatis, sequi laboriosam rerum fuga harum quam?</p>
                         
                        </div>
            </div>
        </div>
    </div>
    );
};