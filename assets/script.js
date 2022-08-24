let vm = new Vue({
    el: '#app',
    data: {
        title: '民視新聞Podcast',
        subtitle: '政論型節目',
        siteName: '民視新聞網',

        img: {
            banner: './assets/img/banner.jpg',
            logo: './assets/img/logo_ftv.png',
            coming: './assets/img/comingsoon.jpg',
        },

        program: [
            { cover: './assets/img/台灣最前線.jpg', title: '台灣最前線', descript: '', link: 'https://open.firstory.me/user/iculy2016/platforms' },
            { cover: './assets/img/台灣向前行.jpg', title: '台灣向前行', descript: '', link: 'https://open.firstory.me/user/ftvnews1400/platforms' },
            { cover: './assets/img/辣新聞152.jpg', title: '辣新聞152', descript: '', link: 'https://open.firstory.me/user/hotnews152/platforms' },
            { cover: './assets/img/決策者.jpg', title: '決策者', descript: '', link: 'https://open.firstory.me/user/decision-maker/platforms' },
            { cover: './assets/img/英語新聞.jpg', title: '民視英語新聞', descript: '', link: '' },
        ]
    },
})
