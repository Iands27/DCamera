const Footer = () => {
  return (
    <div className="footer bg-white shadow mt-20" id="social">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p className="py-4">
          &copy; Copyright by <span className="font-bold">Ian/Dastin</span>  
        </p>        
        <div className="social-footer flex items-center gap-7">
          <i className="ri-facebook-circle-fill text-2xl"><a href=""></a></i>
          <i className="ri-instagram-fill text-2xl"></i>
        </div>
      </div>
    </div>
  )
}

export default Footer