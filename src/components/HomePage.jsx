import img from "../assets/images/retro-camera-removebg.png";
import images from "../assets/images/freepik-export-20240912221127NI4p.png";

import camera1 from "../assets/images/r5.png";
import camera2 from "../assets/images/r100.png";
import camera3 from "../assets/images/5d.png";
import camera4 from "../assets/images/200d.png";
import camera5 from "../assets/images/powershot-sx740-hs.png";
import camera6 from "../assets/images/powershot-v10.png";

const HomePage = () => {
  return (
    <div className="homepage pb-10">
      <div className="container mx-auto px-4">
        <div className="introduction grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
          <div className="box">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7 "> 
              Mengenal apa itu <span className="font-bold text-red-800 underline">Kamera</span> 
            </h1>
            <p className="text-base/8 mb-7">Kamera atau tustel adalah alat yang digunakan untuk mengambil dan menyimpan gambar dan video, baik secara digital melalui sensor gambar elektronik, atau secara kimia melalui bahan peka cahaya seperti film gulung.</p>
            <a href="#" className="bg-red-800 hover:bg-red-900 transition-all py-2 px-4 text-white shadow rounded-full">
              Sejarah <i className="ri-eye-line ms-1"></i></a>
          </div>
          <div className="box">
            <img src={img} alt="img" className="md:w-full w-[400px] mx-auto md:m-0" />
          </div>
        </div>
        <div className="history grid md:grid-cols-2 grid-cols-1 items-center gap-20 md:pt-20 pt-32" id="history">
          <div className="box md:order-1 order-2">
            <img src={images} alt="test" className="lg:w-[500px] w-[400px] md:m-0 mx-auto" />
          </div>
          <div className="box md:order-2 order-1">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7 "> 
            Sejarah <span className="font-bold text-red-800 underline">Kamera</span>
            </h1>
            <p className="text-base/loose">Kamera berawal dari "kamera obscura" (abad ke-5 SM). Pada "1839", muncul "Daguerreotype", teknik foto pertama. Kamera "Kodak" (1888) membuat fotografi lebih mudah, dan kamera "35mm Leica" (1925) menjadi standar portabel. "Polaroid" memperkenalkan kamera instan pada "1948", lalu "kamera digital" berkembang di "1980-an" dan kini ada di smartphone.</p>
          </div>
        </div>
        
        <div className="camera pt-32" id="camera">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">Kamera</h1>
          <p className="text-center">Beberapa kamera.</p>
          <div className="camera-box pt-12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box p-2 bg-white shadow">
              <img src={camera1} alt="gambar" />
              <h3 className="text-xl font-bold mt-6 mb-2">EOS R5 Mark II</h3>
              <p className="text-base/loose">EOS R5 Mark II telah menetapkan tolok ukur baru untuk videografi dan fotografi, dengan banyak fitur AF baru yang dimungkinkan oleh Accelerated Capture System yang baru. Perekaman 8K 60p RAW dan 4K 120p dalam kamera dengan Canon Log 2 & 3 mendefinisikan ulang alur kerja bagi para profesional.</p>
            </div>
            <div className="box p-2 bg-white shadow">
              <img src={camera2} alt="gambar" />
              <h3 className="text-xl font-bold mt-6 mb-2">EOS R100</h3>
              <p className="text-base/loose">Canon EOS R100 adalah kamera paling ringkas dan ringan* dalam sistem R. Dengan burst rate hingga 6,5 bingkai per detik (frames per second) dan resolusi 24,1 megapiksel, Anda dapat mengabadikan gambar yang serba-indah. Kemampuan EOS R100 yang ringan untuk merekam video dalam 4K 25p atau HD 120p, lebih meleluasakan untuk mengekspresikan kreativitas.</p>
            </div>
            <div className="box p-2 bg-white shadow">
              <img src={camera3} alt="gambar" />
              <h3 className="text-xl font-bold mt-6 mb-2">EOS 5D Mark IV</h3>
              <p className="text-base/loose">Sebagai generasi ke-4 dari kamera EOS full-frame Canon paling laris, EOS 5D Mark IV semakin matang dan memiliki peningkatan besar yang layak dibanggakan. Sensor CMOS full-frame 30.4 megapiksel yang dilengkapi dengan Dual Pixel CMOS AF. AF berkecepatan tinggi dan memiliki presisi tinggi yang bukan hanya untuk memotret tetapi juga untuk pembuatan film 4K yang memungkinkan pembuatan film profesional. Dengan fleksibilitas yang dimilikinya, apa pun subjeknya, DSLR canggih ini mampu menuangkan gagasan kreatif para fotografer profesional menjadi karya yang mengagumkan.</p>
            </div>
            <div className="box p-2 bg-white shadow">
              <img src={camera4} alt="gambar" />
              <h3 className="text-xl font-bold mt-6 mb-2">EOS 200D II</h3>
              <p className="text-base/loose">EOS 200D II adalah DSLR Canon paling ringan yang dilengkapi layar LCD Touch Screen Vari-angle. Beratnya tidak melebihi berat dari sebotol air*, kamera ini pas dibawa menggunakan tas dan siap menemanimu memotret setiap hari. Bodi kamera yang mungil ini dilengkapi dengan sensor CMOS APS-C 24,1 megapiksel, prosesor DIGIC 8 dan segudang fitur yang akan memudahkanmu untuk memotret kehidupan yang kamu temui setiap hari.</p>
            </div>
            <div className="box p-2 bg-white shadow">
              <img src={camera5} alt="gambar" />
              <h3 className="text-xl font-bold mt-6 mb-2">PowerShot SX740 HS</h3>
              <p className="text-base/loose">Kamera ini ramping, bodinya ringkas yang mengemas zoom 40x, juga fitur prosesor gambar DIGIC 8 untuk menghasilkan kualitas gambar yang disempurnakan. Dengan waktu startup yang singkat dan interval pemotretan, pengguna bisa selalu siap untuk menangkap peluang mengambil foto yang tidak terduga. Selain itu, juga dilengkapi beragam fungsi perekaman film, seperti 4K movies, 4K time lapse movies, dan fungsi Video Snapshot baru. Koneksi Wi-Fi yang cepat dan nyaman serta pairing smartphone memungkinkan berbagi gambar dan film di media sosial dengan mudah.</p>
            </div>
            <div className="box p-2 bg-white shadow">
              <img src={camera6} alt="gambar" />
              <h3 className="text-xl font-bold mt-6 mb-2">PowerShot V10</h3>
              <p className="text-base/loose">Sebuah kamera yang sangat kecil dan ringan sehingga Anda mungkin tidak menyadari bahwa kamera itu ada di dalam tas Anda. Membuat video 4K berkualitas profesional secara mudah, menggunakan PowerShot V10 dengan sensor CMOS 1,0 inci dan DIGIC X yang dimilikinya. Tingkatkan konten Anda menggunakan dudukan dan mikrofon internal. Dengan stabilisasi gambar, rekam vlog Anda secara mantap, dan fitur warna kulit halus akan membuat Anda tampil mengagumkan dalam video Anda.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage