import { ArrowUpRight } from "lucide-react";
export default function ProjectsPage(){
    return (
    <div className='w-full min-h-screen bg-th-black'>
        <div className='w-full max-w-4xl py-10 mx-auto'>

                <div className='justify-between flex flex-row'>
                    <div className=' text-lg tracking-wide font-bold uppercase text-th-owhite/90'>Projects</div>
                    
                    <div className=' text-lg tracking-wide font-bold uppercase text-th-owhite/90' >View All Projects</div>
                        
                
                </div>

                {/* Top Divider */}
            <div className="footer-divider bg-th-border/40 h-px w-full mt-1" />
                <div className='grid grid-cols-2 gap-10 mt-6'>
                    <div className='flex flex-col'>
                    
                        {/* Project 1 */}
                        <div className='rounded-sm border-1 border-th-white/30 bg-th-header/30 w-full h-72 items-center justify-center flex overflow-hidden'>
                            <img src="src/assets/moviedex_addmovie.png" alt="Project 1" className='w-full h-auto object-cover hover:scale-105 transition duration-300' />
                        </div>
                        
                        <span className='text-md py-3 text-th-owhite'>Project 1</span>
                        <ul className=' w-full flex flex-wrap gap-2 items-start'>
                            <li className='rounded-sm border text-sm text-th-owhite/70 items-center justify-center py-1 px-2'>React</li>
                            <li className='rounded-sm border text-sm text-th-owhite/70 items-center justify-center py-1 px-2'>TypeScript</li>
                            <li className='rounded-sm border text-sm text-th-owhite/70 items-center justify-center py-1 px-2'>Tailwind CSS</li>
                        </ul>
                        <p className='text-th-owhite/70 line-clamp-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas sunt amet officia neque 
                            aliquid alias ipsam eum sed illo nisi dolorum esse architecto perspiciatis, sequi laboriosam rerum fuga harum quam?</p>
                    
                        </div>

                        {/* Project 2 */}
                        <div className='flex flex-col gap-2'>
                        <div className='rounded-sm border-1 border-th-white/30 bg-th-header/30 w-full h-72 items-center justify-center flex overflow-hidden justify-between'>
                        <img src="src/assets/moviedex_dashboard.png" alt="Project 2" className='w-full h-auto object-cover hover:scale-105 transition duration-300' />
                        </div>

                
                        <div className='flex flex-row justify-between'>
                        <span className='text-xl font-bold text-th-owhite'>Credit Card Behavior Model</span>

                        <a href="#" className="flex items-center gap-1 text-sm text-th-owhite/70 hover:text-th-white transition duration-300" >
                        View Site
                        <ArrowUpRight size={16} />
                        </a>
                        </div>
                        <ul className=' w-full flex flex-wrap items-start gap-2 mt-2'>
                            <li className='rounded-sm border text-sm text-th-owhite/70 items-center justify-center py-1 px-2'>React</li>
                            <li className='rounded-sm border text-sm text-th-owhite/70 items-center justify-center py-1 px-2'>TypeScript</li>
                            <li className='rounded-sm border text-sm text-th-owhite/70 items-center justify-center py-1 px-2'>Tailwind CSS</li>
                        </ul>
                        <p className='text-th-owhite/70 line-clamp-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas sunt amet officia neque 
                            aliquid alias ipsam eum sed illo nisi dolorum esse architecto perspiciatis, sequi laboriosam rerum fuga harum quam?</p>

                    </div>

                        {/* Project 3 */}
                        <div className='flex flex-col mt-6'>
                        <div className='rounded-sm border border-th-white/30 bg-th-header/30 w-full h-72 items-center justify-center flex overflow-hidden'>
                        <img src="src/assets/moviedex_editmovie.png" alt="Project 3" className='w-full h-auto object-cover hover:scale-105 transition duration-300' />
                        </div>
                        
                        <span className='text-md py-3 text-th-owhite'>Project 3</span>
                        <ul className=' w-full flex flex-wrap gap-2 items-start'>
                            <li className='rounded-sm border text-sm text-th-owhite/70 items-center justify-center py-1 px-2'>React</li>
                            <li className='rounded-sm border text-sm text-th-owhite/70 items-center justify-center py-1 px-2'>TypeScript</li>
                            <li className='rounded-sm border text-sm text-th-owhite/70 items-center justify-center py-1 px-2'>Tailwind CSS</li>
                        </ul>
                        <p className='text-th-owhite/70 line-clamp-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas sunt amet officia neque 
                            aliquid alias ipsam eum sed illo nisi dolorum esse architecto perspiciatis, sequi laboriosam rerum fuga harum quam?</p>
                         
                        </div>

                        {/* Project 4 */}
                        <div className='flex flex-col mt-6'>
                        <div className='rounded-sm border border-th-white/30 bg-th-header/30 w-full h-72 items-center justify-center flex overflow-hidden'>
                        <img src="src/assets/moviedex_login.png" alt="Project 4" className='w-full h-auto object-cover hover:scale-105 transition duration-300' />
                        </div>
                        
                        <span className='text-md py-3 text-th-owhite'>Project 4</span>
                        <ul className=' w-full flex flex-wrap gap-2 items-start'>
                            <li className='rounded-sm border text-sm text-th-owhite/70 items-center justify-center py-1 px-2'>React</li>
                            <li className='rounded-sm border text-sm text-th-owhite/70 items-center justify-center py-1 px-2'>TypeScript</li>
                            <li className='rounded-sm border text-sm text-th-owhite/70 items-center justify-center py-1 px-2'>Tailwind CSS</li>
                        </ul>
                        <p className='text-th-owhite/70 line-clamp-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas sunt amet officia neque 
                            aliquid alias ipsam eum sed illo nisi dolorum esse architecto perspiciatis, sequi laboriosam rerum fuga harum quam?</p>
                         
                    </div>
                       
            </div>
             <div className="footer-divider bg-th-border/40 h-px w-full mt-6" />
        </div>
    </div>
    );
};