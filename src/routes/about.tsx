import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Areef Sajid" },
      {
        name: "description",
        content:
          "About Areef Sajid: first-year computer science student at IBA, based in Karachi.",
      },
      { property: "og:title", content: "About Areef Sajid" },
      {
        property: "og:description",
        content: "Who I am, where I studied, and what I love doing.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <div className="content">
        <p className="name2">AS YOU ALREADY KNOW, MY NAME IS AREEF SAJID.</p>
        <p className="info">
          I am a first year computer science student at IBA.I am part of the batch of
          2030(hopefully). I was born in 2007 on the 12th of December, so im 18 years old. I did my
          O-levels and A-levels from The City School, where in my O-levels i had 8A*s and in
          A-levels i had 3As. I love playing video games, watching movies and tv shows. I also from
          time to time enjoy reading a book while i sip on some delicious coffee. I live in Karachi,
          and i absolutely love it.
        </p>
        <p className="ender">
          I consider myself to be a ambitious individual and I see myself doing great things. I love
          thinking deeply and having conversations on the most trivial of things. I have spent hours
          wondering about why things are the way they are and it is probably why I am doing CS. I
          love problem solving and then creating solutions to a problem no matter how trouble some
          it may be!
        </p>
      </div>
    </SiteLayout>
  );
}
