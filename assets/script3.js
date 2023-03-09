let vm = new Vue({
  el: "#app",
  data: {
    title: "民視新聞Podcast",
    subtitle: "政論型節目",
    siteName: "民視新聞網",

    img: {
      banner: "./assets/img/banner2.png",
      logo: "./assets/img/logo_ftv.png",
      coming: "./assets/img/comingsoon.jpg",
    },

    program: [
      {
        cover: "./assets/img/即時.jpg",
        title: "民視即時新聞",
        descript: "",
        src: "https://player.soundon.fm/p/FTVnews53",
        homelink: "https://player.soundon.fm/p/FTVnews53",
        link: "https://player.soundon.fm/p/FTVnews53",
      },
      {
        cover: "./assets/img/全球.jpg",
        title: "全球看民視",
        descript: "",
        src: "https://player.soundon.fm/p/f076d7c5-0886-4424-8645-c007ff3bab68",
        homelink:
          "https://player.soundon.fm/p/f076d7c5-0886-4424-8645-c007ff3bab68",
        link: "https://player.soundon.fm/p/f076d7c5-0886-4424-8645-c007ff3bab68",
      },
      {
        cover: "./assets/img/台語.jpg",
        title: "民視台語新聞",
        descript: "",
        src: "https://player.soundon.fm/p/ee649547-cc34-4b20-aadf-71c13fcaa62b",
        homelink:
          "https://player.soundon.fm/p/ee649547-cc34-4b20-aadf-71c13fcaa62b",
        link: "https://player.soundon.fm/p/ee649547-cc34-4b20-aadf-71c13fcaa62b",
      },
      // 以上待改
      {
        cover: "./assets/img/英語新聞.jpg",
        title: "民視英語新聞",
        descript: "",
        src: "https://open.spotify.com/embed/show/2uEApFpiwHfHqyseisbAyk?utm_source=generator",
        homelink: "https://open.firstory.me/user/formosanews",
        link: "https://open.firstory.me/user/formosanews/platforms",
      },
    ],
    program2: [
      {
        cover: "./assets/img/全國第一勇.jpg",
        title: "全國第一勇",
        descript: "",
        src: "https://open.spotify.com/embed/show/4yLH0clotgKn2GK5CWLWCv?utm_source=generator&theme=0",
        homelink: "https://sndn.link/bravest53",
        link: "https://sndn.link/bravest53",
      },
      {
        cover: "./assets/img/台灣最前線.jpg",
        title: "台灣最前線",
        descript: "",
        src: "https://open.spotify.com/embed/show/1XxD1YOHvzWHLmHkbc333W?utm_source=generator&theme=0",
        homelink: "https://open.firstory.me/user/iculy2016",
        link: "https://open.firstory.me/user/iculy2016/platforms",
      },
      {
        cover: "./assets/img/台灣向前行.jpg",
        title: "台灣向前行",
        descript: "",
        src: "https://open.spotify.com/embed/show/2uEApFpiwHfHqyseisbAyk?utm_source=generator&theme=0",
        homelink: "https://open.firstory.me/user/ftvnews1400",
        link: "https://open.firstory.me/user/ftvnews1400/platforms",
      },

      {
        cover: "./assets/img/決策者1.jpg",
        title: "決策者",
        descript: "",
        src: "https://open.spotify.com/embed/show/3ilTTwOFYpshSuo17EJ38n?utm_source=generator&theme=0",
        homelink: "https://open.firstory.me/user/decision-maker",
        link: "https://open.firstory.me/user/decision-maker/platforms",
      },
    ],
  },
  methods: {
    getData_ftvNews1() {
      document.querySelectorAll(".news").forEach((e) => e.remove());
      // eslint-disable-next-line no-undef
      this.axios
        .get(
          "https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=政治&Page=1&sp=6"
        )
        .then((response) => {
          // console.log(response)
          let data = response.data.ITEM;
          data.forEach((item) => {
            this.newsInfo.push(item);
          });
          // console.log(this.newsInfo)
        })
        .catch((error) => {
          console.log("error" + error);
        });
    },
  },
});
