<template>
  <div id="top">
    <!-- MV -->

    <div id="mv_top" class="mv_top">
      <h2 class="tit-h2">欢迎 / Wecome</h2>
      <div class="tit-catch anim-typewriter">
        ようこそ 私のポートフォリオサイト
      </div>
      <p>
        こちらは、Bootstrap-vueで作成したポートフォリオサイトです。<br />
        vue.jsの学習が終わったタイミングで、
        Bootstrapを導入する案件を担当することになりました。<br />
        そこで今回、Bootstrap-vueで
        ポートフォリオを構築することに決めました。<br />
        短い期間で急いで作成したため、
        足りないところがあれば、ご指導いただければ幸いです。
      </p>
    </div>

    <!-- About -->
    <div class="container content-inner">
      <h3 class="tit-h3 display-4">ABOUT ME</h3>
      <h4 class="tit-h4 lead">基本情報</h4>
      <div class="about-card">
        <div class="mt-4">
          <b-card overlay no-body class="border-0">
            <b-row no-gutters>
              <b-col class="mv_img" md="4">
                <img
                  src="../assets/me_03.jpg"
                  class="card-img-top"
                  alt="Fluid image"
                />
              </b-col>
              <b-col class="mv_txt" md="8">
                <b-card-body class="card-body">
                  <b-card-text>
                    <dl>
                      <dt>名前</dt>
                      <dd>
                        <ruby
                          >曾<rp>(</rp><rt>ゼン</rt><rp>)</rp>浩<rp>(</rp
                          ><rt>&nbsp;ハオ</rt><rp>)</rp></ruby
                        >
                        （ ZENG HAO ）
                      </dd>
                    </dl>
                    <dl>
                      <dt>生年月日</dt>
                      <dd>1990年3月7日</dd>
                    </dl>
                    <dl>
                      <dt>出身</dt>
                      <dd>中国</dd>
                    </dl>
                    <dl>
                      <dt>学歴</dt>
                      <dd>東洋大学大学院 社会心理学専攻</dd>
                    </dl>
                    <dl>
                      <dt>職歴</dt>
                      <dd>全研本社（株） フロントエンジニア</dd>
                    </dl>
                    <dl>
                      <dt>居住地</dt>
                      <dd>千葉県市川市</dd>
                    </dl>
                    <dl>
                      <dt>E-mail</dt>
                      <dd>zenghao3890@gmail.com</dd>
                    </dl>
                  </b-card-text>
                  <div>
                    <a
                      class="sns_links mt-4 p-4"
                      href="https://github.com/hao2013"
                    >
                      <img
                        src="static/github.svg"
                        class="sns_icon"
                        alt="GitHub"
                    /></a>
                    <a
                      class="sns_links mt-4 p-4"
                      href="https://qiita.com/HAO_2013"
                    >
                      <img src="static/qitta.png" class="sns_icon" alt="qitta"
                    /></a>
                  </div>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>
    </div>

    <!-- 事績 -->
    <div class="container content-inner">
      <h3 class="tit-h3 display-4 mb-10">PORTFOLIO</h3>
      <h4 class="tit-h4 lead mb-5">制作実績</h4>
      <div class="works-imgs">
        <b-carousel
          id="carousel-fade"
          controls
          indicators
          no-hover-pause
          :interval="3500"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
          style="filter: drop-shadow(0 3px 5px rgba(0, 0, 0, 0.4))"
          img-width="1024"
          img-height="480"
        >
          <b-carousel-slide img-src="static/jsp.png"> </b-carousel-slide>
          <b-carousel-slide img-src="static/theplus.png"> </b-carousel-slide>
          <b-carousel-slide img-src="static/okinawa.png"></b-carousel-slide>
          <b-carousel-slide img-src="static/2222.png"></b-carousel-slide>
          <b-carousel-slide img-src="static/biyou.png"></b-carousel-slide>
          <b-carousel-slide img-src="static/quiz.png"></b-carousel-slide>
        </b-carousel>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>



<style scoped>
.tit-h2 {
  font-size: 7vw;
  font-weight: bold;
}
.tit-catch {
  font-size: 20px;
  font-weight: bold;
}
.tit-h3 {
  font-size: 35px;
  font-weight: bold;
}
p {
  font-size: 2.2vh;
}
.tit-h4 {
  font-size: 25px;
}
.mv_img {
  width: 380px;
  max-width: 100%;
  margin: auto;
}
.mv_img img {
  object-fit: cover;
  transition: all 0.2s ease-out;
  box-shadow: 0 2px 43px -4px rgb(0 0 0 / 30%);
  border-radius: 0.25rem;
  margin-bottom: 1.5rem;
  transition: 0.4s ease;
  filter: brightness(100%) blur(1x);
}
.mv_img img:hover {
  box-shadow: 0 2px 5px rgb(0 0 0 / 10%), 0 1px 2px rgb(0 0 0 / 5%);
  transform: translateY(2px);
  filter: none;
}
.card-body {
  padding: 0;
}
.content-inner {
  padding: 8vh 0;
}

.mv_top {
  background: #eee;
  padding: 16vh 0;
}
.mv_top p {
  margin: 4vh 0 0;
  padding: 0 4vw;
  line-height: 2.3;
}
.about-card {
  margin-top: 4rem;
}
.card-text {
  margin-bottom: 4vh;
}
.mv_txt {
  padding: 0 2vw;
}

dl {
  display: table;
  width: 100%;
}
dt,
dd {
  display: table-cell;
  padding: 5px 10px;
}
dt {
  width: 24%;
  font-size: 18px;
  text-align: right;
  padding-right: 2vw;
}
dd {
  width: 76%;
  text-align: left;
  border-bottom: 1px dotted #ccc;
}
.sns_icon {
  width: 40px;
}
.works-imgs {
  margin-bottom: 2rem;
}
</style>
