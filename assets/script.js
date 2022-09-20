let vm = new Vue({
  el: "#app",
  data: {
    title: "民視新聞Podcast",
    subtitle: "政論型節目",
    siteName: "民視新聞網",

    img: {
      banner: "./assets/img/banner.jpg",
      logo: "./assets/img/logo_ftv.png",
      coming: "./assets/img/comingsoon.jpg",
    },

    program: [
      {
        cover: "./assets/img/台灣最前線.jpg",
        title: "台灣最前線",
        descript: "",
        src: "https://open.spotify.com/embed/show/1XxD1YOHvzWHLmHkbc333W?utm_source=generator&theme=0",
        homelink: "https://iculy2016.firstory.io/episodes",
        link: "https://open.firstory.me/user/iculy2016/platforms",
      },
      {
        cover: "./assets/img/台灣向前行.jpg",
        title: "台灣向前行",
        descript: "",
        src: "https://open.spotify.com/embed/show/2uEApFpiwHfHqyseisbAyk?utm_source=generator&theme=0",
        homelink: "https://ftvnews1400.firstory.io/episodes",
        link: "https://open.firstory.me/user/ftvnews1400/platforms",
      },
      {
        cover: "./assets/img/辣新聞152.jpg",
        title: "辣新聞152",
        descript: "",
        src: "https://open.spotify.com/embed/show/4yLH0clotgKn2GK5CWLWCv?utm_source=generator&theme=0",
        homelink: "https://hotnews152.firstory.io/episodes",
        link: "https://open.firstory.me/user/hotnews152/platforms",
      },
      {
        cover: "./assets/img/決策者.jpg",
        title: "決策者",
        descript: "",
        src: "https://open.spotify.com/embed/show/3ilTTwOFYpshSuo17EJ38n?utm_source=generator&theme=0",
        homelink: "https://decision-maker.firstory.io/episodes",
        link: "https://open.firstory.me/user/decision-maker/platforms",
      },
      {
        cover: "./assets/img/英語新聞.jpg",
        title: "民視英語新聞",
        descript: "",
        src: "https://open.spotify.com/embed/show/2uEApFpiwHfHqyseisbAyk?utm_source=generator",
        homelink: "https://iculy2016.firstory.io/episodes",
        link: "https://d3mww1g1pfq2pt.cloudfront.net/Record/ckk64smel2xg70889ffpppwtz/cl81nl2cq00kb01wf3na96c4m.mp3?v=1663162223587",
      },
    ],
  },
});
