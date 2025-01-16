import Button from "./Button";
import ErrorIcon from "./Icons/ErrorIcon";

const ErrorView = (props) => {
  const { message = "Something went wrong", onRetry } = props;
  return (
    <div className="h-full flex flex-col gap-4 items-center justify-center">
      <ErrorIcon className="h-[100px] w-[100px] stroke-red-500" />

      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-xl">{message}</h2>
        {onRetry && (
          <Button className="w-max" onClick={onRetry}>
            Retry
          </Button>
        )}
      </div>
    </div>
  );
};
export default ErrorView;
