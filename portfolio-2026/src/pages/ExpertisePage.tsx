export default function ExpertisePage(){
    return (
        <div className='w-full min-h-screen bg-th-black'>
            <div className='w-full max-w-4xl py-10 mx-auto'>
                <div className='items-left justify-center text-lg tracking-wide font-bold uppercase text-th-owhite/90'>Expertise</div>
                
                {/* Top Divider */}
                <div className="footer-divider bg-th-border/40 h-px w-full mt-1" />

                <div className='py-6 tracking-wide'>
                    <div className='text-sm font-semibold uppercase text-th-owhite tracking-wide'> Frontend</div>
                    <section className='flex flex-wrap gap-3 py-2'>
                        <span className='rounded-sm border   bg-transparent justify-center  items-center px-3 py-1.5  
                        text-[13px] text-th-lgray hover:border-th-border hover:text-th-owhite'>JavaScript</span>
                        <span className='rounded-sm border   bg-transparent px-3 py-1.5  
                        text-[13px] text-th-lgray hover:border-th-border hover:text-th-owhite'>TypeScript</span>
                        <span className='rounded-sm border  bg-transparent px-3 py-1.5  
                        text-[13px] text-th-lgray hover:border-th-border hover:text-th-owhite'>React</span>
                        <span className='rounded-sm border  bg-transparent px-3 py-1.5 
                        text-[13px] text-th-lgray hover:border-th-border hover:text-th-owhite'>React Native</span>
                        <span className='rounded-sm border bg-transparent px-3 py-1.5 
                        text-[13px] text-th-lgray hover:border-th-border hover:text-th-owhite'>Vite</span>
                        <span className='rounded-sm border   bg-transparent px-3 py-1.5  
                        text-[13px] text-th-lgray hover:border-th-border hover:text-th-owhite'>Tailwind CSS</span>
                    </section>
            

                    <div className='text-sm font-semibold uppercase tracking-wide text-th-owhite mt-6'> Backend</div>
                    <section className='flex flex-wrap gap-3 py-2'>
                        <span className='rounded-sm border   bg-transparent px-3 py-1.5  
                        text-[13px] text-th-lgray hover:border-th-border hover:text-th-owhite'>Python</span>
                        <span className='rounded-sm border   bg-transparent px-3 py-1.5 
                        text-[13px] text-th-lgray hover:border-th-border hover:text-th-owhite'>Node.js</span>
                        <span className='rounded-sm border   bg-transparent px-3 py-1.5 
                        text-[13px] text-th-lgray hover:border-th-border hover:text-th-owhite'>FastAPI</span>
                        <span className='rounded-sm border   bg-transparent px-3 py-1.5 
                        text-[13px] text-th-lgray hover:border-th-border hover:text-th-owhite'>Flask</span>
                        <span className='rounded-sm border  bg-transparent px-3 py-1.5  
                        text-[13px] text-th-lgray hover:border-th-border hover:text-th-owhite'>Laravel</span>
                    </section>

                    <div className='text-sm font-semibold uppercase tracking-wide text-th-owhite mt-6'>Database</div>
                    <section className='flex flex-wrap gap-3 py-2'>
                        <span className='rounded-sm border  bg-transparent px-3 py-1.5 
                        text-[13px] text-th-lgray hover:border-th-border hover:text-th-owhite'>MongoDB</span>
                        <span className='rounded-sm border bg-transparent px-3 py-1.5 
                        text-[13px] text-th-lgray hover:border-th-border hover:text-th-owhite'>MySQL</span>
                        <span className='rounded-sm border  bg-transparent px-3 py-1.5 
                        text-[13px] text-th-lgray hover:border-th-border hover:text-th-owhite'>MariaDB</span>
                    </section>

                    <div className='text-sm font-semibold uppercase tracking-wide text-th-owhite mt-6'>AI & Machine Learning</div>
                    <section className='flex flex-wrap gap-3 py-2'>
                        <span className='rounded-sm border   bg-transparent px-3 py-1.5 
                        text-[13px] text-th-lgray hover:border-th-border hover:text-th-owhite'>NumPy</span>
                        <span className='rounded-sm border  bg-transparent px-3 py-1.5 
                        text-[13px] text-th-lgray hover:border-th-border hover:text-th-owhite'>Pandas</span>
                        <span className='rounded-sm border  bg-transparent px-3 py-1.5 
                        text-[13px] text-th-lgray hover:border-th-border hover:text-th-owhite'>Scikit-learn</span>
                        <span className='rounded-sm border  bg-transparent px-3 py-1.5 
                        text-[13px] text-th-lgray hover:border-th-border hover:text-th-owhite'>TensorFlow</span>
                        <span className='rounded-sm border   bg-transparent px-3 py-1.5 
                        text-[13px] text-th-lgray hover:border-th-border hover:text-th-owhite'>Keras</span>
                        <span className='rounded-sm border  bg-transparent px-3 py-1.5 
                        text-[13px] text-th-lgray hover:border-th-border hover:text-th-owhite'>PyTorch</span>
                        <span className='rounded-sm border   bg-transparent px-3 py-1.5 
                        text-[13px] text-th-lgray hover:border-th-border hover:text-th-owhite'>Ollama</span>
                    </section>

                    <div className='text-sm font-semibold uppercase tracking-wide text-th-owhite mt-6'>Developer Tools</div>
                    <section className='flex flex-wrap gap-3 py-2'>
                        <span className='rounded-sm border  bg-transparent px-3 py-1.5 
                        text-[13px] text-th-lgray hover:border-th-border hover:text-th-owhite'>Git</span>
                        <span className='rounded-sm border bg-transparent px-3 py-1.5 
                        text-[13px] text-th-lgray hover:border-th-border hover:text-th-owhite'>GitHub</span>
                        <span className='rounded-sm border   bg-transparent px-3 py-1.5 
                        text-[13px] text-th-lgray hover:border-th-border hover:text-th-owhite'>Figma</span>
                        <span className='rounded-sm border   bg-transparent px-3 py-1.5  
                        text-[13px] text-th-lgray hover:border-th-border hover:text-th-owhite'>Postman</span>
                        <span className='rounded-sm border   bg-transparent px-3 py-1.5 
                        text-[13px] text-th-lgray hover:border-th-border hover:text-th-owhite'>Vercel</span>
                        <span className='rounded-sm border  bg-transparent px-3 py-1.5 
                        text-[13px] text-th-lgray hover:border-th-border hover:text-th-owhite'>Render</span>
                        <span className='rounded-sm border  bg-transparent px-3 py-1.5 
                        text-[13px] text-th-lgray hover:border-th-border hover:text-th-owhite'>Railway</span>
                        <span className='rounded-sm border bg-transparent px-3 py-1.5
                        text-[13px] text-th-lgray hover:border-th-border hover:text-th-owhite'>Render</span>
                    </section>

                    <div className="footer-divider bg-th-border/40 h-px w-full mt-6" />
                </div>

              

                
            </div>
        </div>
    );
};