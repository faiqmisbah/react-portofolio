import { useState } from "react";
import DataImage from "./data";
import {listTools, listProyek} from "./data";

function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitMessage("Pesan berhasil dikirim! Terima kasih 🎉");
        form.reset();
      } else {
        setSubmitMessage("Terjadi kesalahan. Silakan coba lagi.");
      }
    } catch (error) {
      setSubmitMessage("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(""), 5000);
    }
  };

  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-1s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md " loading="lazy"/>
            <q>Kode yang indah, lahir dari ketekunan.😁</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Faiq Misbah Yazdi 🙌</h1>
          <p className="text-base/loose mb-6 opacity-50"> 
            Saya mempunyai ketertarikan dalam bidang Programming dan Designer, 
            terutama pada pembuatan Website dan Desain seperti Poster, Pamflet serta Banner, 
            ketertarikan pada bidang ini sudah berlangsung lebih dari 2 Tahun untuk semua Bidang.

          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="https://drive.google.com/file/d/1XZ4-BGeVeqwMMITFZHixKCaHEwaJWlhs/view?usp=sharing" 
            target="_blank" rel="noopener noreferrer" 
            className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600 transition-all-300 hover:shadow-lg hover:shadow-violet-500/50 hover:-translate-y-1">
              Download CV <i className="ri-download-line"></i>
              </a>
            <a href="#proyek" 
            className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600 transition-all-300 hover:shadow-lg hover:-translate-y-1">
              Lihat Proyek <i className="ri-arrow-down-line"></i>
              </a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-1s" loading="lazy"/>
      </div>

        {/* tentang */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg transition-all-300 hover:shadow-xl hover:shadow-violet-500/10" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="300">
          <img src={DataImage.HeroImage} alt="Hero Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy"/>
          <p className="text-base/loose mb-10">
          Hai, perkenalkan saya Faiq Misbah Yazdi, seorang UI/UX Designer dan Data Analyst. 
          Saya percaya bahwa desain yang intuitif dan pengalaman pengguna yang menyenangkan 
          harus didukung dengan data yang akurat dan analisis yang mendalam. Dengan menggabungkan 
          keahlian dalam desain antarmuka yang user-friendly dan analisis data yang efektif, 
          saya berfokus untuk mengembangkan solusi yang tidak hanya menarik secara visual, 
          tetapi juga memberikan pengalaman pengguna yang optimal berdasarkan wawasan yang diperoleh dari data.
          </p>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" loading="lazy"/>
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  7<span className="text-violet-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  3<span className="text-violet-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000">
          Tools yang dipakai</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose 
          opacity-50" data-aos="fade-up" data-aos-duration="3000">
            Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan Website ataupun Desain</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listTools.map((tool) => (
              <div className="flex items-center gap-2 p-3 border border-zinc-600 
              rounded-md hover:bg-zinc-800 group transition-all-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-violet-500/20 hover:border-violet-500/50" 
              key={tool.id} data-aos="fade-up" data-aos-duration="3000" data-aos-delay={tool.dad}>
                <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900 transition-all-300 group-hover:scale-110" />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> 
      {/*tentang  */}

      {/* Proyek */}
      <div className="proyek mt-32 py-10" id="proyek">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" >Proyek</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="200">
        Berikut ini beberapa Proyek yang telah saya buat.</p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listProyek.map((proyek)=>(
              <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md transition-all-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-violet-500/20 group flex flex-col h-full" 
              data-aos="fade-up" data-aos-duration="3000" data-aos-delay={proyek.dad}>
                <div className="overflow-hidden rounded-md mb-4">
                  <img src={proyek.gambar} alt="Proyek Image" loading="lazy" 
                  className="transition-transform duration-500 group-hover:scale-110"/>
                </div>
                <div className="flex flex-col flex-grow">
                  <h1 className="text-2xl font-bold my-4 group-hover:text-violet-400 transition-colors">{proyek.nama}</h1>
                  <p className="text-base/loose mb-4 flex-grow">{proyek.desk}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proyek.tools.map((tool, index) => (
                      <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold text-sm" 
                      key={index}>{tool}</p>
                    ))}
                  </div>
                  <div className="text-center mt-auto">
                    <a href="#kontak" className="bg-violet-700 p-3 rounded-lg block border
                     border-zinc-600 hover:bg-violet-600 transition-all-300 hover:shadow-lg hover:shadow-violet-500/50">Hubungi Saya</a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* Proyek */}

      {/* Kontak */}
      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1 className="text-4xl mb-2 font-bold text-center" 
        data-aos="fade-up" data-aos-duration="1000">
          Kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" 
        data-aos="fade-up" data-aos-duration="3000" data-aos-delay="200">
        Mari terhubung dengan saya.</p>
        <form action="https://formsubmit.co/faiqmisbah019@gmail.com" method="POST"
         className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" 
         data-aos="fade-up" data-aos-duration="3000" data-aos-delay="500"
         onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input type="text" name="nama" placeholder="Masukkan Nama..." 
              className="border border-zinc-500 p-2 rounded-md bg-zinc-900 focus:border-violet-500 focus:outline-none transition-colors" 
              required disabled={isSubmitting} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Masukkan Email..." 
              className="border border-zinc-500 p-2 rounded-md bg-zinc-900 focus:border-violet-500 focus:outline-none transition-colors" 
              required disabled={isSubmitting} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">Pesan</label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan..." 
              className="border border-zinc-500 p-2 rounded-md bg-zinc-900 focus:border-violet-500 focus:outline-none transition-colors" 
              required disabled={isSubmitting}></textarea>
            </div>
            {submitMessage && (
              <div className={`text-center p-3 rounded-md ${submitMessage.includes('berhasil') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                {submitMessage}
              </div>
            )}
            <div className="text-center">
              <button type="submit" 
              className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600 transition-all-300 hover:shadow-lg hover:shadow-violet-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Mengirim...
                  </>
                ) : (
                  'Kirim Pesan'
                )}
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Kontak */}
    </>
  )
}

export default App
