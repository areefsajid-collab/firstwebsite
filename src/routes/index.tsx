import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Areef Sajid — Personal Site" },
      {
        name: "description",
        content:
          "The personal website of Areef Sajid, a first-year computer science student in Karachi.",
      },
      { property: "og:title", content: "Areef Sajid — Personal Site" },
      {
        property: "og:description",
        content: "First project, first steps: Areef Sajid's personal site.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <div className="content">
        <p className="purpose">
          You must be wondering, why this page exists. And honestly, if I was in the same boat as
          you i'd do the same thing.
        </p>
        <p className="loud">WELL THEN, LISTEN UP!</p>
        <p className="yap">
          This is my first ever project. It's not revoloutionary, and it is by no means extremely
          unique. But it holds a very special place in my heart. In a couple of years when i have a
          handful of skills and tools up my sleeves, i'll look back at where i started and feel a
          sense of accomplishment. I have always wanted to learn all these cool CS tools and
          gimmicks, and to finally be able to do so is healing. So in short, this is my first ever
          project. Areef OUT!
        </p>
        <p className="lookround">FEEL FREE TO LOOK AROUND!</p>
      </div>
    </SiteLayout>
  );
}
