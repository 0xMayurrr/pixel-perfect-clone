import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "../components/ContactPage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Start a Project — Buildicy" },
      {
        name: "description",
        content:
          "Start your project with Buildicy. Send us a quick note or download our studio capability decks.",
      },
    ],
  }),
  component: ContactPage,
});
