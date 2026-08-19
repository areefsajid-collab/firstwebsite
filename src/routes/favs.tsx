import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/favs")({
  head: () => ({
    meta: [
      { title: "Areef's Favourite Characters" },
      {
        name: "description",
        content:
          "My all-time favourite characters: Ellie Williams, Cristiano Ronaldo, Ben 10, Saul Goodman, Rick Grimes and Leon Kennedy.",
      },
      { property: "og:title", content: "Areef's Favourite Characters" },
      {
        property: "og:description",
        content: "The characters and personalities I love the most.",
      },
    ],
  }),
  component: Favs,
});

const favourites = [
  {
    img: "/pictures/ellie.jpg",
    name: "Ellie Williams",
    text: "My favourite video game charachter of all time, from my favourite game of all time(The Last Of Us). I admire how she endures tragedy. A absolutely complex charachter with various themes and an absolute treat to play as in both games. Very few charachters and stories hit me as hard as hers did when i was a little boy back in 2015 and 2020.",
  },
  {
    img: "/pictures/cr7.jpg",
    name: "Cristiano Ronaldo",
    text: "I have been a diehard ronaldo fan since ive been watching football. My footballing idol and someone who made my childhood great. I still remember seeing him score screamers and dominate europe while winning a 3 peat, ballondors and numerous awards. A true inspiration for me :)",
  },
  {
    img: "/pictures/ben10.jpg",
    name: "Ben 10",
    text: "My favourite cartoon charachter of all time. Ben 10 has been at the heart of my childhood and is one of the very few shows i still watch from time to time right now.I admired him for his goofy attitude and loved how selfless and heroic he is and i still do.",
  },
  {
    img: "/pictures/saul.jpg",
    name: "Saul Goodman",
    text: 'One of the best charachters in fiction. I loved how "colorful" he was. I adored him for his dynamic with his brother and how he broke norms as a lawyer and excelled as a lawyer who played out of the box and his own way; A true rebel.',
  },
  {
    img: "/pictures/rickgrimes.jpg",
    name: "Rick Grimes",
    text: "My favourite TV show charachter. No one comes close for me when it comes to Rick. Seeing his journey in an apocalyptic world leading a group of people going from Officer Friendly to a hardened survivor was a piece of cinema no one can replicate for me.",
  },
  {
    img: "/pictures/leon.jpg",
    name: "Leon Kennedy",
    text: "Cool, Calm, Collected and a total badass. Fell in love with his charachter when i first played Resident Evil 2 back in 2nd grade on a bust up PC. Loved him in RE4. For me he is special solely because of how deeply he feels things without showing that he does.Tragic but nonetheless an absolute gem for gamers",
  },
];

function Favs() {
  return (
    <SiteLayout>
      <div className="content">
        <p className="toptext">
          You are probably wondering what charachters and personalities I like. Well here you go
          then.
        </p>
        <div className="photogrid">
          <div className="charachters">
            {favourites.map((fav) => (
              <div key={fav.name}>
                <img src={fav.img} alt={fav.name} />
                <p>
                  Name: {fav.name}
                  <p>{fav.text}</p>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="end">
          <p>Well there are more, but these are my all time favourites.</p>
        </div>
      </div>
    </SiteLayout>
  );
}
