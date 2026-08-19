import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [
      { title: "Contact Areef Sajid" },
      {
        name: "description",
        content: "Get in touch with Areef Sajid by phone or email.",
      },
      { property: "og:title", content: "Contact Areef Sajid" },
      { property: "og:description", content: "Phone and email details to reach me." },
    ],
  }),
  component: Contacts,
});

function Contacts() {
  return (
    <SiteLayout>
      <div className="contents">
        <p className="wannahmu">WANT TO CONTACT ME?</p>
        <div className="deets">
          <p>MY PHONE NUMBER: 03308489969</p>
          <p>My EMAIL ADDRESS: areefsajid485@gmail.com</p>
          <p>I will reach out as soon as possible, so dont worry about being left on read.</p>
        </div>
      </div>
    </SiteLayout>
  );
}
