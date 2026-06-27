import { createFileRoute } from "@tanstack/react-router";
import { ProjectPage } from "../pages";

export const Route = createFileRoute("/work")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ProjectPage />;
}
