<template>
  <div id="about">
    <div id="about-content" class="about-content">
      <h2>About me</h2>
      <p>
        中国の大連外国語大学を卒業後、社会心理学研究科に進学。<br />
        来日7年目、千葉県市川市在住歴6年。
      </p>
      <p>
        趣味は、映画、旅行、自転車、ONE PIECE... <br />
        バイト経歴は、焼き鳥屋、吉野家、天下一品。
      </p>
      <p>
        現在、西新宿の制作会社でサイトのマークアップをやっています。<br />
        Vue、モダンな開発環境、アプリケーションなどを軸に、転職活動をしています。
      </p>
    </div>

    <!-- timeline -->

    <div class="container timeline">
      <!-- 現在 -->
      <vue-timeline-update
        :date="new Date('today')"
        title="フロントエンジニアチームに所属"
        description="社内案件の実装を一人で担当できるようになりました。現在、中大規模な案件と外部お客様のコーポレートサイトの構築がメイン業務です。その他、WordPressプラグインElementorの導入、業務効率化などの仕事にも携わっています。"
        animation
        thumbnail="static/me_work.jpg"
        category="現在"
        theme="light"
        icon="code"
        color="turquoise"
        class="timeline-section"
        is-last
      />

      <!-- 2年目 -->
      <vue-timeline-update
        :date="new Date('2019-4')"
        title="同社サイト制作の部署に異動"
        description="自社制作をしているWordPressテーマのテンプレートデザインとコーディングを担当しています。CMSテンプレート開発のプロジェクトに参加し、PhotoshopとIllustratorを操作しながら、コーディングのスキルも身に付けました。CMSテンプレート開発数No.1でセクション別MVPを受賞しました。社会人2年目の仕事ぶり及び考え方について、ぜひこちらのブログで見てください。"
        category="2年目"
        animation
        theme="light"
        icon="code"
        color="turquoise"
        class="timeline-section"
      />
      <div class="blog-link">
        <b-link
          href="https://www.zenken.co.jp/blog/engineer/40266"
          target="_blank"
          >一人前のフロントエンジニアを目指せ！これからが勝負～新卒2年目の日常～</b-link
        >
      </div>

      <!-- 新卒入社 -->
      <vue-timeline-update
        :date="new Date('2018-4')"
        title="新宿の会社に新卒入社"
        description="マーケティング事業部に配属。自社英会話教室と日本語学校の運用をしました。WordPressでブログ更新担当になったことをきっかけに、サイト制作のことを研鑽しました。新卒1年目の日常について、ぜひこちらのブログを見てくさい。"
        animation
        category="新卒入社"
        theme="light"
        icon="code"
        color="turquoise"
        class="timeline-section"
      />
      <div class="blog-link">
        <b-link
          href="https://www.zenken.co.jp/blog/engineer/37044"
          target="_blank"
          >経験0…だけど「できる」は必ず増やせる！失敗から学んだ3つのこと～新卒1年目の日常2018～</b-link
        >
      </div>

      <!-- SNSマーケティング -->
      <vue-timeline-update
        :date="new Date('2017')"
        title="SNSマーケティングのセミナーに参加"
        description="マイナビ開催の中国SNSマーケティングのセミナーに参加しました。マーケティング関連の会社を絞って、就職活動を継続しました。"
        category="就活継続"
        animation
        theme="light"
        icon="school"
        color="green"
        class="timeline-section"
      />

      <!-- 大学院生 -->
      <vue-timeline-update
        :date="new Date('2016')"
        title="東洋大学大学院に進学"
        description="白山キャンパスの社会心理学専攻修正前期課程に在籍。山田研究室でマーケティングリサッチと消費心理学について研究しました。中国人の日本人イメージ及びその規定要因というテーマで修士論文を発表しました。"
        category="大学院"
        thumbnail="static/me.jpg"
        animation
        theme="light"
        icon="school"
        color="green"
        class="timeline-section"
      />

      <!-- 日本語学校 -->
      <vue-timeline-update
        :date="new Date('2014')"
        title="メロス日本語学校に入学"
        description="池袋にある日本語学校で、大学院の入試準備をしました。"
        category="日本語学校"
        animation
        theme="light"
        icon="school"
        class="timeline-section"
        color="green"
      />
    </div>
  </div>
</template>


<style scoped>
.about-content {
  padding: 8vh 2vw;
  background: linear-gradient(
    -90deg,
    rgb(0 171 179 / 20%),
    rgb(0 150 136 / 20%)
  );
}
.about-content h2 {
  font-size: 6vh;
  margin-bottom: 4vh;
}
.about-content p {
  line-height: 2;
  padding: 0 2vw;
  font-size: 2.2vh;
}
.timeline {
  padding: 8vh 4vw;
}
.timeline-section {
  padding: 2vh 2vh 5vh;
  margin: 2vh auto;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 20px -4px rgb(0 0 0 / 15%);
}
.blog-link {
  margin: 1vh 0 4vh auto;
  text-align: right;
}
</style>
