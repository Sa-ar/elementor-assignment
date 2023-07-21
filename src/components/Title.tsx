import { Progress } from "./ui/Progress";

interface TitleProps {
  total: number;
  completed: number;
}

function Title({ total, completed }: TitleProps) {
  return (
    <header className="relative px-3 py-4 bg-primary-200">
      <h3 className="inline text-lg font-semibold">Let's set up your site</h3>
      <span className="inline ml-2 text-xs italic font-light">
        {completed} of {total} complete
      </span>
      <Progress
        value={(completed / total) * 100}
        className="absolute bottom-0 left-0 right-0"
      />
    </header>
  );
}

export default Title;
