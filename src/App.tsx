import './App.css'
import MusaAvator from './musa.jpg'

function App() {

  return (
    <>
      <div className="wrapper text-blue-300">
        <div className='flex relative'>
          <div className="w-1/4 profile p-5 fo">
            
            <div className="bg-blue-900 rounded-lg">
              
              <div className='p-5'>
                <div className="profile-content">
                  <div className="avator">
                    <div className="avator-globe"></div>
                    <div className="avator-globe-45"></div>
                    <img src={MusaAvator} className="logo react" alt="React logo" />
                  </div>
                </div>

                <div className='mt-2'>
                  <div className='text-center text-sm'>MUSA A. MTUYA</div>
                  <div className='text-center text-xs'><i>the</i> Programmer</div>
                </div>
              </div>

              <div>
                <div className='font-semibold bg-blue-400 text-blue-950 cursor-pointer pt-2 pb-2 pl-5 pr-5'>Introduction</div>
                <div className='font-semibold bg-blue-400 text-blue-950 cursor-pointer pt-2 pb-2 pl-5 pr-5'>Expertise</div>
                <div className='font-semibold bg-blue-400 text-blue-950 cursor-pointer pt-2 pb-2 pl-5 pr-5'>Project/Portfolio</div>
                <div className='font-semibold bg-blue-400 text-blue-950 cursor-pointer pt-2 pb-2 pl-5 pr-5'>Contacts</div>
              </div>

            </div>
          </div>
          
          <div className="flex-1 content p-5">
            <div className="bg-blue-900 p-5 rounded-lg">
              <div id='introduction'>
                <div id='introduction_title' className='font-semibold mb-2'>Introduction</div>
                <div className='text-opacity'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A sapiente voluptates vitae consectetur tempore neque nihil. Maxime doloribus ipsum amet. Veniam quaerat nostrum rem, aliquam similique voluptatibus sunt, quam magni blanditiis reiciendis corporis beatae consequuntur expedita voluptas eveniet impedit. Cupiditate reiciendis iusto soluta similique vitae ipsum quo, eveniet velit nihil illum! Molestias reprehenderit numquam quasi nam et, vitae hic voluptatem, repellat inventore voluptates sequi sapiente saepe tempora, dolore illo dolorem nemo natus veniam est! Fuga iste eaque sapiente cupiditate quas pariatur accusantium natus eligendi. Nesciunt saepe non aspernatur dicta ipsa cupiditate et eius temporibus perferendis, ratione expedita asperiores numquam sit?</div>
              </div>
            </div>


            <div className="bg-blue-900 p-5 rounded-lg mt-2">
              <div id='expertise'>
              <div id='expertise_title' className='font-semibold mb-2'>Expertise</div>
              <div className='text-opacity'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A sapiente voluptates vitae consectetur tempore neque nihil. Maxime doloribus ipsum amet. Veniam quaerat nostrum rem, aliquam similique voluptatibus sunt, quam magni blanditiis reiciendis corporis beatae consequuntur expedita voluptas eveniet impedit. Cupiditate reiciendis iusto soluta similique vitae ipsum quo, eveniet velit nihil illum! Molestias reprehenderit numquam quasi nam et, vitae hic voluptatem, repellat inventore voluptates sequi sapiente saepe tempora, dolore illo dolorem nemo natus veniam est! Fuga iste eaque sapiente cupiditate quas pariatur accusantium natus eligendi. Nesciunt saepe non aspernatur dicta ipsa cupiditate et eius temporibus perferendis, ratione expedita asperiores numquam sit?</div>
              </div>
            </div>


            <div className="bg-blue-900 p-5 rounded-lg mt-2">
              <div id='projectportfolio'>
              <div id='projectportfolio_title' className='font-semibold mb-2'>Project / Portfolio</div>
              <div className='text-opacity'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A sapiente voluptates vitae consectetur tempore neque nihil. Maxime doloribus ipsum amet. Veniam quaerat nostrum rem, aliquam similique voluptatibus sunt, quam magni blanditiis reiciendis corporis beatae consequuntur expedita voluptas eveniet impedit. Cupiditate reiciendis iusto soluta similique vitae ipsum quo, eveniet velit nihil illum! Molestias reprehenderit numquam quasi nam et, vitae hic voluptatem, repellat inventore voluptates sequi sapiente saepe tempora, dolore illo dolorem nemo natus veniam est! Fuga iste eaque sapiente cupiditate quas pariatur accusantium natus eligendi. Nesciunt saepe non aspernatur dicta ipsa cupiditate et eius temporibus perferendis, ratione expedita asperiores numquam sit?</div>
              </div>
            </div>


            <div className="bg-blue-900 p-5 rounded-lg mt-2">
              <div id='contacts'>
              <div id='contacts_title' className='font-semibold mb-2'>Find Me</div>
              <div className='text-opacity'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A sapiente voluptates vitae consectetur tempore neque nihil. Maxime doloribus ipsum amet. Veniam quaerat nostrum rem, aliquam similique voluptatibus sunt, quam magni blanditiis reiciendis corporis beatae consequuntur expedita voluptas eveniet impedit. Cupiditate reiciendis iusto soluta similique vitae ipsum quo, eveniet velit nihil illum! Molestias reprehenderit numquam quasi nam et, vitae hic voluptatem, repellat inventore voluptates sequi sapiente saepe tempora, dolore illo dolorem nemo natus veniam est! Fuga iste eaque sapiente cupiditate quas pariatur accusantium natus eligendi. Nesciunt saepe non aspernatur dicta ipsa cupiditate et eius temporibus perferendis, ratione expedita asperiores numquam sit?</div>
              </div>
            </div>


          </div>

        </div>
      </div>
    </>
  )
}

export default App
