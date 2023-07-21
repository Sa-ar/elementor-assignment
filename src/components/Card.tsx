import CheckList from "./CheckList";
import Title from "./Title";

import useGetItems from "../hooks/useGetItems";

import Button from "./ui/Button";
import Spinner from "./ui/Spinner";

interface CardProps {
  maxItems: number;
}

function Card({ maxItems }: CardProps) {
  const {
    data,
    isLoading,
    isError,
    resetPageStates,
    nextPage,
    prevPage,
    checkItem,
    isFirstPage,
    isLastPage,
  } = useGetItems(maxItems);

  if (isError) {
    return (
      <div className="p-4 text-red-700 bg-red-100 border border-red-500 rounded">
        Something went wrong
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl border rounded md:w-2/3 border-primary-400">
      <Title
        total={data?.length ?? 0}
        completed={data.filter((item) => item.isDone).length ?? 0}
      />

      <div className="border-b border-b-primary-200">
        {isLoading && <Spinner />}
        {!isLoading && <CheckList items={data} checkItem={checkItem} />}
      </div>

      <footer className="flex justify-between px-3 py-4">
        <Button onClick={resetPageStates} disabled={isLoading}>
          Reset
        </Button>
        <div className="flex gap-2">
          <Button onClick={prevPage} disabled={isLoading || isFirstPage}>
            Previous
          </Button>
          <Button onClick={nextPage} disabled={isLoading || isLastPage}>
            Next
          </Button>
        </div>
      </footer>
    </div>
  );
}

export default Card;
