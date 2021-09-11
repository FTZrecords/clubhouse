import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head></Head>
      <h1>
        <Image
          src="/head.png"
          alt="ヘッダー画像"
          height="160"
          width="300"
          objectFit={"cover"}
          decoding="async"
          loading="lazy"
        />
      </h1>
      <header className="flex">
        <div>
          <h3>制作に困ってる学生を募集しています</h3>
          <p>
            コロナウイルスの影響で、オンライン中心という誰も経験したことのない学生生活をおくっている学生の想いから始まったプロジェクト。
          </p>
          <p>
            オンラインだからこそ繋がれる人と、ネットを活用するZ世代だからこそできることを行っていきます。
          </p>
          <p>ご応募お待ちしております。</p>
          <p>対象：応募時点で学生の方</p>
        </div>
        <iframe
          src="https://open.spotify.com/embed/playlist/62pnS2szMPE2Sv4C3e8lS9?theme=0"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </header>
      <section className="flexCenter">
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSdbwBYtz295ns4hITx5ECNAzPBnreto6Zz5aFVgo5bz-che_w/viewform"
          target="_blank"
        >
          <a className="button">応募する</a>
        </Link>
      </section>
      <main>
        <h2>楽曲配信までの3ステップ</h2>
        <ol>
          <li>
            <h3>アーティスト・クリエイターマッチング</h3>
            <p>
              「楽曲を作ってみたい」「歌ってみたい」そんな思いを持った人が誰でも気軽に参加できます。
            </p>
            <p>
              公式サイトのフォームよりご応募頂き、それらの情報をもとに楽曲や作りたい作品の合う人たちをつなげていきます。オンラインミーティングの場を設けて作品作りのきっかけを提供していきます。
            </p>
          </li>
          <li>
            <h3>マルチディレクション</h3>
            <p>
              学生メンバーで構成され、アーティストサポートを行っている「FTZサポーター」を中心とし、楽曲のリリースや公開に向けた制作活動を行っていきます。
            </p>
            <p>
              同世代だの強みを活かし、互いに意見を出しやすい制作の場を作っていきます。
            </p>
          </li>
          <li>
            <h3>ワークスプロモーション</h3>
            <p>
              楽曲が完成した後は、配信のサポートに合わせてプロモーション活動も行っていきます。
            </p>
            <p>
              制作側・サポーター側共同で行い、MV制作やSNS運営などを通してより多くの人に作品を届けられるよう活動を行います。
            </p>
          </li>
        </ol>
      </main>
      <section className="flexCenter">
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSdbwBYtz295ns4hITx5ECNAzPBnreto6Zz5aFVgo5bz-che_w/viewform"
          target="_blank"
        >
          <a className="button">応募する</a>
        </Link>
      </section>
      <footer>
        <p>
          ©︎FTZrecords
          <br />
          <small>
            お問い合わせは
            <Link href="https://www.ftzrecords.com/#comp-jxanll648">
              <a>FTZrecoreds</a>
            </Link>
            まで。
          </small>
        </p>
      </footer>
    </>
  );
}
