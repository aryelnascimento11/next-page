import Image from 'next/image'

export default function Home() {
  return (
    <>
  <header className='bg-black top-0 fixed w-screen flex place-items-center p-6 justify-between shadow-lg rounded-bl-lg rounded-br-lg '>
    <h1 className='text-3xl font-medium text-green-500 '>Next Page</h1>
    <nav className='flex'>
      <ul className='flex'>
         <li className=' rounded-lg px-3 py-1 text-green-500  hover:bg-[rgba(252,250,250,0.2)] hover:scale-110 cursor-pointer transition'>
            <a href="#">exemplos</a>
        </li>
          <li className=' rounded-lg px-3 py-1 text-green-500 hover:bg-[rgba(255,252,252,0.2)] hover:scale-110 cursor-pointer transition'>
           <a href="#">exemplos</a>
          </li>
        <li className='rounded-lg px-3 py-1 text-green-500 hover:bg-[rgba(255,255,255,0.2)] hover:scale-110 cursor-pointer transition'>
           <a href="#">exemplos</a>
        </li>
      </ul>
      <button className='group/enter text-green-500 flex gap-2 ml-10 rounded-2xl border border-green-500 shadow-lg px-3 py-1 font-light'>Entrar</button>
    </nav>
  </header>

<>
 <section className="flex place-items-center h-[50vw] mt-5 bg-cover bg-[url('https://img.wallpapic-br.com/i6271-445-629/thumb/graficos-3d-verdes-azuis-imagem-de-fundo.jpg')]">
  <div className=' bg-gradient-to-r flex from-black to-transparent  pl-10 text-9xl text-green-500 font-bold '>
   <div className=''>
    <img className='' 
    alt="MODULO NEXT" />
    </div>
   
  </div>
 </section>
  </>
  <main className='py-6 first:mt-0 bg-green-200'>
   <section className='flex mt-5 justify-center'>
    <div className=' bg-gradient-radial  gap-10 from-green-500 to-detail w-[80%] h-[28vw] p-6 shadow-lg flex'>
      <div className='text-black flex flex-col w-[50%] justify-center'>
        <h1 className='text-5xl font-bold text-center '>Título</h1>
        <p className='text-2xl font-bold text-center'>Aqui é o Paulo meu truta!!</p>
        <p className='text-2xl font-bold text-center'>Aqui é o Paulo meu truta!!</p>
        <p className='text-2xl font-bold text-center'>Aqui é o Paulo meu truta!!</p>
      </div>
       <Image
        src={"https://imagens.mdig.com.br/thbs/45184mn.jpg"}
        width={"500"} 
        height={"200"}
        alt=""
      />  
     
    </div>
   </section>
  </main>
  <>
  <footer className='bg-black text-white flex justify-evenly py-10'>
    <div>
      <h1 className='font-bold text-3xl'>Contato</h1>
      <ol className=' text-left'>
        <li>4002-8922</li>
        <li>4002-8922</li>
        <li>4002-8922</li>
      </ol>
    </div>
    <div>
      <h1 className='font-bold text-3xl'>E-mail</h1>
      <ol className=' text-left'>
        <li>exemplo@gmail.com</li>
        <li>exemplo@gmail.com</li>
        <li>exemplo@gmail.com</li>
      </ol>
    </div>
    <div>
      <h1 className='font-bold text-3xl'>More info</h1>
      <ol className=' text-left'>
        <li>E o PIX</li>
        <li>E o PIX</li>
        <li>E o PIX</li>
      </ol>
    </div>
  </footer>
  </>

</>

  )
}
 

