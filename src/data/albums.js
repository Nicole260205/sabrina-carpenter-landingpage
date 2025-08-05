const albums = [
  {
    id: "cant_blame_a_girl_for_trying",
    title: "Can't Blame a Girl for Trying",
    year: "2014",
    description:
      "Sabrina's debut EP, featuring the title track and other early pop songs that introduced her as a rising star.",
    cover: "/src/assets/albuns_cover/cant_blame_a_girl_for_trying.png",
    detailImage: "/src/assets/albuns_vinyls/cant_blame_a_girl_for_trying.png",
    spotify:
      "https://open.spotify.com/intl-pt/track/5K7fGxZQB0K5sPKhLe9e07?si=a9f9f2a18b244386",
  },
  {
    id: "eyes-wide-open",
    title: "Eyes Wide Open",
    year: "2015",
    description:
      "Eyes Wide Open is the debut album of American singer Sabrina Carpenter, featuring teen pop and acoustic sounds.",
    cover: "/src/assets/albuns_cover/eyes_wide_open.png",
    detailImage: "/src/assets/albuns_vinyls/eyes_wide_open.png",
    spotify:
      "https://open.spotify.com/album/55huyEjfSVsk9nnmmKp5df?si=BDUtNv4XQkiT7d2vloyB3A",
  },
  {
    id: "evolution",
    title: "Evolution",
    year: "2016",
    description:
      "Sabrina's second studio album showing her evolution as an artist with more R&B influences.",
    cover: "/src/assets/albuns_cover/evolution.png",
    detailImage: "/src/assets/albuns_vinyls/evolution.png",
    spotify:
      "https://open.spotify.com/album/7iOAJaGBmk67o337zaqt0R?si=_abs-id1TnaIVnYoW0JyCA",
  },
  {
    id: "singular-act-i",
    title: "Singular: Act I",
    year: "2018",
    description:
      "The first part of her Singular era, marking a transition to a more mature pop sound.",
    cover: "/src/assets/albuns_cover/singular_act_i.png",
    detailImage: "/src/assets/albuns_vinyls/singular_act_i.png",
    spotify:
      "https://open.spotify.com/album/29mlGxS6kxq1EHxlX1EAZK?si=ChVkW8F3SBqqdJOKKt6wdg",
  },
  {
    id: "singular-act-ii",
    title: "Singular: Act II",
    year: "2019",
    description:
      "The second part of her Singular project, featuring more experimental pop sounds and collaborations.",
    cover: "/src/assets/albuns_cover/singular_act_ii.png",
    detailImage: "/src/assets/albuns_vinyls/singular_act_ii.png",
    spotify:
      "https://open.spotify.com/album/19KilSbbeHRFFZM7ChwTdP?si=rzAJzD6CTceC6PVa0FYMAg",
  },
  {
    id: "emails-i-cant-send",
    title: "Emails I Can't Send",
    year: "2022",
    description:
      "Emails I Can't Send is Sabrina's fifth studio album, featuring deeply personal lyrics and a mature pop sound.",
    cover: "/src/assets/albuns_cover/emails_i_cant_send.png",
    detailImage: "/src/assets/albuns_vinyls/emails_i_cant_send.png",
    spotify:
      "https://open.spotify.com/album/5kDmlA2g9Y1YCbNo2Ufxlz?si=eEpwjVRhSsWfKWIXuupiSA",
  },
  {
    id: "emails-i-cant-send-fwd",
    title: "Emails I Can't Send FWD",
    year: "2023",
    description:
      "An extended version of 'Emails I Can't Send' featuring new tracks like 'Feather' and 'Nonsense (Remix)'.",
    cover: "/src/assets/albuns_cover/emails_i_cant_send_fwd.png",
    detailImage: "/src/assets/albuns_vinyls/emails_i_cant_send_fwd.png",
    spotify:
      "https://open.spotify.com/album/2g4aJTa5ejGpp0O0GKzWAQ?si=vL2Xgu0RRdOrXUPUdrhePA",
  },
  {
    id: "fruitcake",
    title: "Fruitcake",
    year: "2023",
    description:
      "Christmas single by Sabrina Carpenter, released in December 2023 with an acoustic vibe and fun lyrics about the holidays.",
    cover: "/src/assets/albuns_cover/fruit_cake.png",
    detailImage: "/src/assets/albuns_vinyls/fruit_cake.png",
    spotify: "https://open.spotify.com/track/5LQvAT4TWAdV6GqoykN4qj",
  },
  {
    id: "short-n-sweet",
    title: "Short ‘n Sweet",
    year: "2024",
    description:
      "Short ‘n Sweet is Sabrina Carpenter’s sixth album, featuring a mix of pop and dance tracks that showcase her artistic growth.",
    cover: "/src/assets/albuns_cover/short_&_sweet.png",
    detailImage: "/src/assets/albuns_vinyls/short_&_sweet.png",
    spotify:
      "https://open.spotify.com/album/3iPSVi54hsacKKl1xIR2eH?si=RCRFLCejT0-rMbcVDRbqAQ",
  },
  {
    id: "short-n-sweet-deluxe",
    title: "Short ‘n Sweet (Deluxe)",
    year: "2024",
    description:
      "The deluxe version of 'Short ‘n Sweet' includes bonus tracks and extended versions of the original songs.",
    cover: "/src/assets/albuns_cover/short_&_sweet_deluxe.png",
    detailImage: "/src/assets/albuns_vinyls/short_&_sweet_deluxe.png",
    spotify:
      "https://open.spotify.com/album/3iPSVi54hsacKKl1xIR2eH?si=RCRFLCejT0-rMbcVDRbqAQ",
  },
  {
    id: "manchild",
    title: "Manchild",
    year: "2025",
    description:
      "A standout single from the 'Man's Best Friend' era, showcasing Sabrina's introspective songwriting.",
    cover: "/src/assets/albuns_cover/manchild.png",
    detailImage: "/src/assets/albuns_vinyls/manchild.png",
    spotify:
      "https://open.spotify.com/intl-pt/album/3wRHV5fOeUcM5hvYzWZsic?si=REE--OuNRB6obQw34KzX3g",
  },
  {
    id: "mans-best-friend",
    title: "Man's Best Friend",
    year: "2025",
    description:
      "O sétimo álbum de Sabrina Carpenter, previsto para lançamento em 29 de agosto de 2024. Inclui os singles já lançados e novas faixas prometendo uma evolução no seu pop moderno.",
    cover: "/src/assets/albuns_cover/mans_best_friend.png",
    detailImage: "/src/assets/albuns_vinyls/mans_best_friend.png",
    spotify:
      "https://open.spotify.com/prerelease/5LQvAT4TWAdV6GqoykN4qj?si=c170b4c4b0174b93",
  },
];
export default albums;
