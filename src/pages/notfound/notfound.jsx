import notfound from "./404.gif"

function Notfound(){

    return(
        <>
      <div className="flex items-center justify-center h-screen bg-dark text-white">
      <div className="text-center space-y-6">
        <img src={notfound} alt="404 Not Found" height={300} width={300} className="mx-auto" />
        
        {/* <h1 className="text-6xl font-bold mb-4">404</h1> */}
        <p className="text-lg mb-6">Oops! The page you're looking for doesn't exist.</p>
        <p className="mb-8">It seems you've encountered a broken link or an error. But don't worry, we’ve got you covered!</p>
        
        <a
          href="/"
          className="text-white py-2 px-6 rounded-lg text-xl hover:bg-red-500 transition duration-300"
        >
          Go to Homepage
        </a>
      </div>
    </div>  
        </>
    )
}

export default Notfound;