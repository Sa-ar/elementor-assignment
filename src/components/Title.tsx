import { Progress } from "./ui/Progress";

function Title() {
  return (
    <header className="relative px-2 py-3 bg-primary-200">
      <h3 className="inline text-lg font-semibold">Title</h3>Title
      <Progress value={50} className="absolute bottom-0 left-0 right-0" />
    </header>
  );
}

export default Title;
