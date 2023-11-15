import React from 'react';
import './App.css'

const VideoGallery = () => {
  const videoData = [
    {
      id: 1,
      title: 'JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour ',
      channelName: 'Programming by Mosh',
      channelLogo: 'https://yt3.googleusercontent.com/ebu9ZksIXw0tUWBZd6rtk-It8VGSk8AdfSI_eGR-fl6WGet9LnVPngNQCmjdLJeGXpuylwYInQ=s176-c-k-c0x00ffffff-no-rj',
      thumbnail: 'https://i.ytimg.com/vi/W6NZfCO5SIk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLApPe2n8hQW3A_PMdxtj7DXTHsh2w',
      likes: 109000,
      views: 11545444,
    },
    {
      id: 2,
      title: 'GTA 5 - Full Game Walkthrough in 4K',
      channelName: 'GTA Series Videos',
      channelLogo: 'https://yt3.googleusercontent.com/YovN8ziaMz2dv6Hixl3-O5ya3tqLWXJcY0wsojLJYWIoDUhgZSS5nHP8ARWJQS7lJkfP5wyxfT0=s176-c-k-c0x00ffffff-no-rj',
      thumbnail: 'https://i.ytimg.com/vi/7ssp44DydyA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLASOj1BeWLEIIywCtEehsffVn8VHw',
      likes: 890327,
      views: 3002738,
    },
    {
      id: 3,
      title: ' Origins of the Universe 101 | National Geographic ',
      channelName: 'National Geographic',
      channelLogo: 'https://yt3.googleusercontent.com/13FpK4FfJb_I-aTMNRQTmaxLO2vjEi_NzWm1KxOzr-vjYLX7QmfHwn6XC3PfEf4Oay5WjP0CXw=s176-c-k-c0x00ffffff-no-rj',
      thumbnail: 'https://i.ytimg.com/vi/HdPzOWlLrbE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDsXEAmKntZ3nmuSmPnr9qsCzZ_Tg',
      likes: 10055583,
      views: 36347396,
    },
    {
      id: 4,
      title: ' Coldplay X BTS - My Universe ',
      channelName: ' LatinHype',
      channelLogo: 'https://yt3.googleusercontent.com/KOsVjTFsv_bFG80A3VcG0jdiddLJgS3CLfvv7uvTtTYQ63jgGQspO3KRlhGy7Bvw-fZ_kyiA=s176-c-k-c0x00ffffff-no-rj',
      thumbnail: 'https://i.ytimg.com/vi/gE3ZjNfYJDs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBtgQoo3wG4Jxx_9T9vARgvt9F3Qg',
      likes: 40000,
      views: 4298798,
    },
    {
      id: 5,
      title: ' Crispy Chowli Chaat | क्रिस्पी चवली चाट | Chaat Re',
      channelName: ' Sanjeev Kapoor Khazana',
      channelLogo: 'https://yt3.googleusercontent.com/GVTtEiBD6Mt1FR_Y5FKgYa8mHXcJiNfzDTa991tu1LZ3OrOANZC4J1-kSMmuaEys86yY336pcg=s80-c-k-c0x00ffffff-no-rj',
      thumbnail: 'https://img.youtube.com/vi/E6nx5LkzULM/sddefault.jpg',
      likes: 30098,
      views: 43273,
    },
    {
      id: 6,
      title: 'Simple night skin care routine for repairs and renew skin/Reduce acne & scars ',
      channelName: 'INDIANGIRL TRISHA',
      channelLogo: 'https://yt3.googleusercontent.com/uVhmjRkq99emN6R799qhbh7g65YOurvwA5CG68wP3B5SGXHNFNFiSH6RF0BD95QzLiJgOCVdb8A=s80-c-k-c0x00ffffff-no-rj',
      thumbnail: 'https://i.ytimg.com/vi/gLMQjlhcjIU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-X1n16AH7dDcZ6GWl9EoC1H7kOQ',
      likes: 3744,
      views: 143481,
    },


    {
      id: 7,
      title: 'mushroom veg blas ka nasthaa aur ?',
      channelName: 'NishaMadhulika',
      channelLogo: 'https://yt3.googleusercontent.com/CEZg0lcDv4L0q3zwjU-ITbXqWoSFDWUA8wHZOXAwWaXg9jBGmAsOsHkdl1Y46gVoaPxNUnH5=s80-c-k-c0x00ffffff-no-rj',
      thumbnail: 'https://i.ytimg.com/vi/kwYTZmrADDQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA_75iwDNunPJpQCa1N8X4zQMHTZg',
      likes: 2215,
      views: 126247,
    },
    {
      id: 8,
      title: '  Sharee Style Tips ',
      channelName: ' Perkymegs Hindi',
      channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKbm0AdgJfSx4sziNgWetZ7bQWaJbz4Faq9ldkP3=s80-c-k-c0x00ffffff-no-rj',
      thumbnail: 'https://i.ytimg.com/vi/xheImhQ5cvk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDqoYAnFUUnIErEZpPckrH6AbRkAg',
      likes: 66092,
      views: 5016518,
    },

    {
      id: 9,
      title: ' Ages 1 - 100 Fight For $500,000 ',
      channelName: 'MrBeast ',
      channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKbAfC_5NBQ3CM6Lyd2zXUFbC4mym1GCRhmpIwcMXg=s176-c-k-c0x00ffffff-no-rj',
      thumbnail: 'https://i.ytimg.com/vi/FM7Z-Xq8Drc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCKaYXsc2DNKXWkVKQUT9l07JjvlA',
      likes: 145884,
      views: 5698010,
    },
    {
      id: 10,
      title: ' Is Taj Mahal a Temple? | The Mystery Explained by Dhruv Rathee ',
      channelName: ' Dhruv Rathee',
      channelLogo: 'https://yt3.googleusercontent.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s80-c-k-c0x00ffffff-no-rj',
      thumbnail: 'https://i.ytimg.com/vi/49HTIoCccDY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB69CCCh0ogDVkeMrbeTV1whz0wPw',
      likes: 565631,
      views: 13168818,
    },

    {
      id: 11,
      title: ' Craziest Mobile Phone Ever🔥🔥🔥',
      channelName: 'Technical Guruji',
      channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKZJdGQNLYbmqI68IQOrz_4iHbWbt5dSYNUoNv6IWf8=s80-c-k-c0x00ffffff-no-rj',
      thumbnail: 'https://img.youtube.com/vi/UljtSgJAIZI/sddefault.jpg',
      likes: 10455,
      views: 180478,
    },
    {
      id: 12,
      title: ' Full Day Of Eating To Get Shredded | Road To Sheru Classic | Ep. 15 ',
      channelName: ' Rohit Khatri Fitness',
      channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKYdcARmalTXLheCvkJTNQI_RkIwSsjDtUn2RKrJ=s80-c-k-c0x00ffffff-no-rj',
      thumbnail: 'https://i.ytimg.com/vi/tt58-eCXcCk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDmbMp0GwNusfxituDZeqvc19Dq0Q',
      likes: 10244,
      views: 153845,
    },
    {
      id: 13,
      title: ' 4% Body Fat at Age 40 (NATURAL) - Guru Mann',
      channelName: 'Guru Mann Fitness ',
      channelLogo: 'https://yt3.googleusercontent.com/bJqTYerwxsBAme_ll_Hdxk-f-xO4F5Dm54AfTd0CYZQp4lTODtfOlVBN4GSWYB4xlYJ2SCZw=s80-c-k-c0x00ffffff-no-rj',
      thumbnail: 'https://i.ytimg.com/vi/Ivy-zM3XFvY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC1ZS60pTaRB06HBBqhaYKee6VVOA',
      likes: 7436,
      views: 134622,
    },

    {
      id: 14,
      title: ' MY MAKEUP COLLECTION & STORAGE 2019 | Rinkal Soni ',
      channelName: 'Rinkal Parekh',
      channelLogo: 'https://yt3.googleusercontent.com/Az_BybO4Iwi5LMF66DsI1c4FNwT1F32R-TVJ4IPjDUNocVhK3GS8KcszE2dRjv7LU1YMEBWLlw=s80-c-k-c0x00ffffff-no-rj',
      thumbnail: 'https://i.ytimg.com/vi/nf8ySuesAPg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBhMQYw3MJeOQIh6ri7YIg5Lx_O-w',
      likes: 61546,
      views: 2216291,
    },
    {
      id: 15,
      title: ' Ep 1| Travelling through North East India | Off To Arunachal | The Journey Begin',
      channelName: ' Tanya Khanijow',
      channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKZ7XWBpopRdU9v-pXmxHCrjpTeSPFOmZj4xA3gH6BY=s80-c-k-c0x00ffffff-no-rj',
      thumbnail: 'https://img.youtube.com/vi/ehmsJLZlCZ0/sddefault.jpg',
      likes: 76970,
      views: 3150335,
    },

    {
      id: 16,
      title: 'we are plyaing with cute dog ',
      channelName: 'Sambhavna Seth',
      channelLogo: 'https://yt3.googleusercontent.com/rvC4qHbICXIJuj5l0ehQCEGiFWLfrTaHdpQHXXgb_IwbobBf77-zPNYm6FOmpENhFT3s9mXVJA=s80-c-k-c0x00ffffff-no-rj',
      thumbnail: 'https://i.ytimg.com/vi/pxn0wL_uSm4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA5-R0ttQXH147mk3eZZWR0eHpcpQ',
      likes: 201572,
      views: 3918519,
    },

    {
      id: 17,
      title: ' Messi, Ronaldo, Neymar & Mbappe Showing Their Class in 2023',
      channelName: 'Alsido Football',
      channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKYxna2TzjxvJ-HCI9KYhMWseAkfZtU5DKC4Gzkamg=s176-c-k-c0x00ffffff-no-rj',
      thumbnail: 'https://i.ytimg.com/vi/0fcwmBQloas/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjwjlfdmC2T0ICXiBHJVZBkLryoQ',
      likes: 208160,
      views: 3820972,
    },


    {
      id: 18,
      title: ' 5 Fashion Hacks Every Indian Man Should Know | Clothing Fit Guide | Be Ghent ',
      channelName: ' Be Ghent',
      channelLogo: 'https://yt3.googleusercontent.com/fTES9XCoe4CoHoqHcaQz6C1deFRX_yyLIOmmDyZ0WgpORreP5G3IX_ZGU86Omz_VzpmqwS36=s80-c-k-c0x00ffffff-no-rj',
      thumbnail: 'https://i.ytimg.com/vi/8GF1nBXWAxI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAEvt8efDQZpvu39vfal1XZqdd4fg',
      likes: 109000,
      views: 4610805,
    },
    {
      id: 19,
      title: 'How to make mango-pickle',
      channelName: 'Kabitas Kitchen',
      channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKY4xB_Zce9J16j680Pv4ndErdcqRVtnB740TFwpcQ=s80-c-k-c0x00ffffff-no-rj',
      thumbnail: 'https://i.ytimg.com/vi/WdOHvba-th4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCankk8KkDzx_ehxFK_vUBlElRPSQ',
      likes: 174430,
      views: 18588126,
    },


    {
      id: 20,
      title: 'Fake Cam Hacker Screen 4K',
      channelName: ' VISUAL NINE',
      channelLogo: 'https://yt3.googleusercontent.com/MNSz-TGmSsoOBkZnbp0T4eXGcyECZuhHm1lVyC66hDbiXDMCP5Q4kOn4rXyhRqLHhVoFLK0r-w=s176-c-k-c0x00ffffff-no-rj',
      thumbnail: 'https://i.ytimg.com/vi/8VsvdCaSyaQ/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARgwIGUoMDAP&rs=AOn4CLCdWKn0rCl23s8c6Rj4G6I9fZ1qLw',
      likes: 2819518,
      views: 16778567,
    },

  ];



  return (
    <div className="video-gallery-container">
      <h1 className='youtube-gallery'>YouTube Gallery</h1>
      <div className="video-gallery">
        {videoData.map((video) => (
          <div key={video.id} className="video">
            <div className="video-info">
              <div className="channel-info">
                <img className="channel-logo" src={video.channelLogo} alt={video.channelName} />
                <h3 className="channel-name">{video.channelName}</h3>
              </div>
              <h5 className="video-title">{video.title}</h5>
              <div className="video-thumbnail">
                <img src={video.thumbnail} alt={video.title} />
              </div>
              <div className="video-stats">
                <h4 className="likes">{video.likes} likes</h4>
                <h4 className="views">{video.views} views</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;