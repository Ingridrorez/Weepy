import styled from "styled-components"
import homeImage from '../../src/images/Gambar.png'

const Home = () => {
  return (
    <main>
      <div className="pg-header">
        <div className="container">
          <h1>Welcome to Weepy</h1>
        </div>
      </div>
      <div className="container content">
        <div className="page-left">
          <h4>Apa itu Weepy?</h4>
          <p>
            Weepy menyediakan bahan belajar yang dapat membantu setiap siswa dalam mempersiapkan 
            mengikuti ujian masuk perguruan tinggi negeri. Weepy hadir sebagai bentuk inovasi pembelajaran 
            di era industri 4.0 yang dapat diakses dimana dan kapan saja. Seluruh konten
            yang ada di Weepy dapat diakses dan dimanfaatkan secara gratis. Pembelajaran siswa melalui
            berbagai modul soal ujian dari tahun ke tahun dan juga adanya pembahasan dari setiap modul soal 
            sehingga pembelajaran menjadi lebih efektif. Siswa juga dapat mengakses materi lebih detail untuk
            lebih memahami teori dan mampu menyelesaikan setiap soal dengan tepat. Bahan Belajar yang 
            disediakan diperbarui untuk setiap jangka waktu tertentu. Dengan Weepy setiap siswa dapat 
            mengoptimalkan waktu mereka untuk belajar tanpa harus binggung mencari sumber belajar yang tepat.
          </p>
          <h5>֍ Mari belajar dan bergabung dengan pengguna lainnya di Weepy ֍</h5>
        </div>
      <div className="page-right">
        <div className="page-image">
          <img src={homeImage} alt="pg-header image"/>
        </div>
      </div>
      </div> 
    </main>
  )
}

export default Home