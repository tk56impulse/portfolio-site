function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <p className="hero-label">Portfolio</p>

        <h2>課題を見つけ、仕組みで解決する</h2>

        <p className="hero-text">
          現場での業務改善経験をもとに、
          課題の特定から設計・改善までを意識した
          Webアプリ開発に取り組んでいます。
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn">
            制作物を見る
          </a>
        </div>

        <p className="hero-sub">
          React / Firebase / JavaScript を中心に学習・開発中
        </p>
      </div>
    </section>
  );
}

export default Hero;